/**
 * Mastery engine: the single shared source of truth for concept-level mastery,
 * flashcard scheduling, and recent-activity/weak-spot aggregation.
 *
 * Every learner interaction — study topic-check questions, flashcard ratings,
 * topic quizzes, adaptive quizzes, and exam simulations — funnels through
 * `App.State.mastery.recordOutcome(...)` or `.rateFlashcard(...)` so that the
 * weak-spots view always reflects study + flashcards + quizzes consistently
 * (per the "shared adaptive progress" section of the spec).
 */
window.Mastery = (function () {
  var RECENT_LIMIT = 40;
  var HISTORY_LIMIT = 500;
  var SLOW_MS = 18000; // answers slower than this count as "uncertain/slow"

  function create(progress) {
    var P = progress;

    function getTopicRecord(topicId) {
      if (!P.topicMastery[topicId]) {
        P.topicMastery[topicId] = {score: 0, timesSeen: 0, lastSeen: null};
      }
      return P.topicMastery[topicId];
    }

    function allTopicIds() {
      return MOLBIO.topics.map(function (t) { return t.id; });
    }

    function touchTopic(topicId) {
      var rec = getTopicRecord(topicId);
      rec.timesSeen += 1;
      rec.lastSeen = Date.now();
    }

    /**
     * Apply a single answered-question (or topic-check) outcome to every
     * topic the question is tagged with.
     * outcome: {correct: bool, elapsedMs: number, source: 'study'|'quiz'|'adaptive'|'exam', difficulty}
     */
    function recordOutcome(topicIds, outcome) {
      var slow = outcome.elapsedMs != null && outcome.elapsedMs > SLOW_MS;
      var base = outcome.difficulty === 'hard' ? 11 : outcome.difficulty === 'easy' ? 7 : 9;
      var delta;
      if (outcome.correct) {
        delta = slow ? Math.round(base * 0.4) : base; // slow-but-correct = "uncertain", smaller reward
      } else {
        delta = -(base + 4); // incorrect always costs more than a correct answer earns
      }
      topicIds.forEach(function (tid) {
        var rec = getTopicRecord(tid);
        rec.score = Util.clamp(rec.score + delta, 0, 100);
        rec.timesSeen += 1;
        rec.lastSeen = Date.now();
      });

      P.questionHistory.push({
        topicIds: topicIds, correct: outcome.correct, elapsedMs: outcome.elapsedMs || null,
        source: outcome.source, timestamp: Date.now()
      });
      if (P.questionHistory.length > HISTORY_LIMIT) P.questionHistory.shift();
    }

    function pushActivity(entry) {
      entry.timestamp = Date.now();
      P.recentActivity.unshift(entry);
      if (P.recentActivity.length > RECENT_LIMIT) P.recentActivity.pop();
    }

    // ---- Flashcards: lightweight local SM-2-style scheduler ----
    function getCardState(cardId) {
      if (!P.flashcardState[cardId]) {
        P.flashcardState[cardId] = {ease: 2.5, intervalDays: 0, dueAt: 0, reps: 0, lastRating: null, seen: false};
      }
      return P.flashcardState[cardId];
    }

    function rateFlashcard(card, rating) {
      var st = getCardState(card.id);
      st.seen = true;
      st.lastRating = rating;
      st.reps = st.reps || 0;

      if (rating === 1) {
        st.reps = 0;
        st.ease = Math.max(1.3, st.ease - 0.2);
        st.intervalDays = 0; // due again immediately (same or next session)
      } else if (rating === 2) {
        st.ease = Math.max(1.3, st.ease - 0.15);
        st.intervalDays = st.reps === 0 ? 1 : Math.max(1, Math.round(st.intervalDays * 1.2));
        st.reps += 1;
      } else if (rating === 3) {
        st.intervalDays = st.reps === 0 ? 1 : Math.round(st.intervalDays * st.ease);
        st.reps += 1;
      } else { // 4 = easy
        st.ease = st.ease + 0.15;
        st.intervalDays = st.reps === 0 ? 3 : Math.round(st.intervalDays * st.ease * 1.3);
        st.reps += 1;
      }
      st.dueAt = Date.now() + st.intervalDays * 24 * 3600 * 1000;

      // Ratings feed the same shared mastery model as quiz answers.
      var correct = rating >= 3;
      recordOutcome([card.topicId], {
        correct: correct, elapsedMs: null, source: 'flashcard',
        difficulty: rating === 1 ? 'hard' : rating === 4 ? 'easy' : 'medium'
      });
    }

    function isDue(cardId) {
      var st = P.flashcardState[cardId];
      return !st || !st.seen || st.dueAt <= Date.now();
    }

    function isUnseen(cardId) {
      var st = P.flashcardState[cardId];
      return !st || !st.seen;
    }

    function dueCount() {
      return MOLBIO.flashcards.filter(function (c) { return isDue(c.id); }).length;
    }

    // ---- Aggregation for dashboard / weak spots ----
    function overallReadiness() {
      var ids = allTopicIds();
      if (!ids.length) return 0;
        var sum = ids.reduce(function (acc, tid) {
        return acc + (P.topicMastery[tid] ? P.topicMastery[tid].score : 0);
      }, 0);
      return Math.round(sum / (ids.length * 100) * 100);
    }

    function unitMastery(lectureId) {
      var lec = MOLBIO.lectures.find(function (l) { return l.id === lectureId; });
      if (!lec) return 0;
      var ids = lec.topicIds;
      var sum = ids.reduce(function (acc, tid) {
        return acc + (P.topicMastery[tid] ? P.topicMastery[tid].score : 0);
      }, 0);
      return Math.round(sum / (ids.length * 100) * 100);
    }

    function weakTopics(limit) {
      var ranked = allTopicIds().map(function (tid) {
        var rec = P.topicMastery[tid] || {score: 0, timesSeen: 0, lastSeen: null};
        var topic = MOLBIO.topics.find(function (t) { return t.id === tid; });
        return {topicId: tid, topic: topic, score: rec.score, timesSeen: rec.timesSeen, lastSeen: rec.lastSeen};
      });
      ranked.sort(function (a, b) {
        // Studied-but-weak concepts surface before never-studied ones.
        var aStudied = a.timesSeen > 0 ? 0 : 1;
        var bStudied = b.timesSeen > 0 ? 0 : 1;
        if (aStudied !== bStudied) return aStudied - bStudied;
        return a.score - b.score;
      });
      return limit ? ranked.slice(0, limit) : ranked;
    }

    function nextBestActivity() {
      // 1) An unstudied topic in curriculum order.
      var lectures = MOLBIO.lectures.slice().sort(function (a, b) { return a.order - b.order; });
      for (var i = 0; i < lectures.length; i++) {
        var lec = lectures[i];
        for (var j = 0; j < lec.topicIds.length; j++) {
          var tid = lec.topicIds[j];
          var rec = P.topicMastery[tid];
          if (!rec || rec.timesSeen === 0) {
            var topic = MOLBIO.topics.find(function (t) { return t.id === tid; });
            return {type: 'study', topicId: tid, lectureId: lec.id,
              label: 'Start "' + topic.title + '" (' + lec.title + ')'};
          }
        }
      }
      // 2) Due flashcards.
      if (dueCount() > 0) {
        return {type: 'flashcards', label: dueCount() + ' flashcard' + (dueCount() === 1 ? '' : 's') + ' due for review'};
      }
      // 3) Weakest studied topic.
      var weak = weakTopics(1)[0];
      if (weak && weak.timesSeen > 0 && weak.score < 70) {
        return {type: 'quiz-topic', topicId: weak.topicId,
          label: 'Reinforce "' + weak.topic.title + '" (mastery ' + weak.score + '%)'};
      }
      // 4) Fall back to an adaptive mixed quiz.
      return {type: 'adaptive', label: 'Take an adaptive mixed quiz across all units'};
    }

    function recentlyStudied(limit) {
      return P.recentActivity.slice(0, limit || 8);
    }

    return {
      progress: P,
      getTopicRecord: getTopicRecord,
      touchTopic: touchTopic,
      recordOutcome: recordOutcome,
      pushActivity: pushActivity,
      getCardState: getCardState,
      rateFlashcard: rateFlashcard,
      isDue: isDue,
      isUnseen: isUnseen,
      dueCount: dueCount,
      overallReadiness: overallReadiness,
      unitMastery: unitMastery,
      weakTopics: weakTopics,
      nextBestActivity: nextBestActivity,
      recentlyStudied: recentlyStudied
    };
  }

  return {create: create};
})();
