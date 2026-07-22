window.QuizUI = (function () {
  var mode = null; // 'topic' | 'adaptive' | 'exam'
  var session = null; // {questions, index, answers, startedAt, deadline, timerHandle}
  var prevBtn = null;

  function render(params) {
    Util.qs('#practice-setup').style.display = '';
    Util.qs('#quiz-session').style.display = 'none';
    Util.qs('#quiz-results').style.display = 'none';
    wireModeCards();
    populateTopicPicker();
    if (params && params.mode) {
      selectMode(params.mode);
      if (params.topicId) Util.qs('#practice-topic-picker select').value = params.topicId;
      if (params.autostart) startPractice();
    } else {
      mode = null;
      Util.qs('#practice-topic-picker').style.display = 'none';
      Util.qs('#practice-exam-options').style.display = 'none';
      Util.qs('#btn-start-practice').style.display = 'none';
    }
  }

  function wireModeCards() {
    Util.qsa('.mode-card').forEach(function (card) {
      card.onclick = function () { selectMode(card.getAttribute('data-mode')); };
    });
    Util.qs('#btn-start-practice').onclick = startPractice;
  }

  function selectMode(m) {
    mode = m;
    Util.qsa('.mode-card').forEach(function (c) { c.classList.toggle('selected', c.getAttribute('data-mode') === m); });
    Util.qs('#practice-topic-picker').style.display = m === 'topic' ? '' : 'none';
    Util.qs('#practice-exam-options').style.display = m === 'exam' ? '' : 'none';
    Util.qs('#btn-start-practice').style.display = '';
  }

  function populateTopicPicker() {
    var wrap = Util.qs('#practice-topic-picker');
    wrap.innerHTML = '';
    var select = Util.el('select');
    MOLBIO.lectures.slice().sort(function (a, b) { return a.order - b.order; }).forEach(function (lec) {
      var group = Util.el('optgroup', {label: lec.order + '. ' + lec.title});
      lec.topicIds.forEach(function (tid) {
        var topic = MOLBIO.topics.find(function (t) { return t.id === tid; });
        var opt = Util.el('option', {value: tid, text: topic.title});
        group.appendChild(opt);
      });
      select.appendChild(group);
    });
    wrap.appendChild(Util.el('label', {}, ['Topic: ', select]));
  }

  function startPractice() {
    if (mode === 'topic') {
      var topicId = Util.qs('#practice-topic-picker select').value;
      var qs = MOLBIO.questions.filter(function (q) { return q.topicIds.indexOf(topicId) !== -1; });
      beginImmediateSession(Util.shuffle(qs), 'quiz');
    } else if (mode === 'adaptive') {
      var pool = MOLBIO.questions;
      var weightFn = function (q) {
        var scores = q.topicIds.map(function (tid) { return App.state.mastery.getTopicRecord(tid).score; });
        var minScore = Math.min.apply(null, scores);
        return 110 - minScore; // weaker topics => higher weight
      };
      var picked = Util.weightedSample(pool, weightFn, Math.min(15, pool.length));
      beginImmediateSession(picked, 'adaptive');
    } else if (mode === 'exam') {
      var length = parseInt(Util.qs('#exam-length').value, 10);
      if (!length || length < 1) length = 20;
      length = Math.min(length, MOLBIO.questions.length);
      var minutes = parseInt(Util.qs('#exam-minutes').value, 10);
      if (!minutes || minutes < 1) minutes = 20;
      var examQs = Util.shuffle(MOLBIO.questions).slice(0, length);
      beginExamSession(examQs, minutes);
    }
  }

  // ---- Immediate-feedback sessions (topic quiz / adaptive) ----
  function beginImmediateSession(questions, source) {
    session = {questions: questions, index: 0, source: source, correctCount: 0, startedAt: Date.now()};
    Util.qs('#practice-setup').style.display = 'none';
    Util.qs('#quiz-results').style.display = 'none';
    Util.qs('#quiz-session').style.display = '';
    Util.qs('#quiz-timer').style.display = 'none';
    Util.qs('#btn-quiz-submit-exam').style.display = 'none';
    removePrevButton();
    renderImmediateQuestion();
  }

  function renderImmediateQuestion() {
    var q = session.questions[session.index];
    Util.qs('#quiz-counter').textContent = 'Question ' + (session.index + 1) + ' / ' + session.questions.length;
    Util.qs('#quiz-progress-bar').style.width = Math.round((session.index / session.questions.length) * 100) + '%';
    var card = Util.qs('.question-card', Util.qs('#quiz-session'));
    QuestionWidget.cleanup(card);
    var nextBtn = Util.qs('#btn-quiz-next');
    nextBtn.style.display = 'none';
    QuestionWidget.renderImmediate(card, q, function (outcome) {
      if (outcome.correct) session.correctCount += 1;
      App.state.mastery.recordOutcome(outcome.topicIds, {
        correct: outcome.correct, elapsedMs: outcome.elapsedMs, source: session.source, difficulty: outcome.difficulty
      });
      App.persist();
      nextBtn.style.display = '';
      nextBtn.textContent = (session.index + 1 < session.questions.length) ? 'Next' : 'See results';
    });
    Util.qs('#btn-quiz-next').onclick = function () {
      session.index += 1;
      if (session.index >= session.questions.length) finishImmediateSession();
      else renderImmediateQuestion();
    };
  }

  function finishImmediateSession() {
    var label = session.source === 'adaptive' ? 'Adaptive mixed quiz' : 'Topic quiz';
    App.state.mastery.pushActivity({
      type: session.source, label: label + ': ' + session.correctCount + '/' + session.questions.length + ' correct'
    });
    App.persist();
    Util.qs('#quiz-session').style.display = 'none';
    Util.qs('#quiz-results').style.display = '';
    Util.qs('#results-summary').innerHTML = '';
    Util.qs('#results-summary').appendChild(Util.el('h2', {
      text: session.correctCount + ' / ' + session.questions.length + ' correct'
    }));
    Util.qs('#results-review').innerHTML = '';
    session = null;
  }

  // ---- Exam simulation (deferred feedback) ----
  function beginExamSession(questions, minutes) {
    session = {
      questions: questions, index: 0, answers: new Array(questions.length).fill(null),
      startedAt: Date.now(), deadline: Date.now() + minutes * 60000, minutes: minutes
    };
    Util.qs('#practice-setup').style.display = 'none';
    Util.qs('#quiz-results').style.display = 'none';
    Util.qs('#quiz-session').style.display = '';
    Util.qs('#quiz-timer').style.display = '';
    Util.qs('#btn-quiz-next').style.display = '';
    Util.qs('#btn-quiz-next').textContent = 'Next';
    Util.qs('#btn-quiz-submit-exam').style.display = '';
    addPrevButton();
    renderExamQuestion();
    tickTimer();
  }

  function addPrevButton() {
    removePrevButton();
    prevBtn = Util.el('button', {class: 'btn-ghost'}, ['Prev']);
    prevBtn.addEventListener('click', function () {
      if (session.index > 0) { session.index -= 1; renderExamQuestion(); }
    });
    Util.qs('.quiz-actions').insertBefore(prevBtn, Util.qs('#btn-quiz-next'));
  }
  function removePrevButton() {
    if (prevBtn && prevBtn.parentNode) prevBtn.parentNode.removeChild(prevBtn);
    prevBtn = null;
  }

  function renderExamQuestion() {
    var q = session.questions[session.index];
    Util.qs('#quiz-counter').textContent = 'Question ' + (session.index + 1) + ' / ' + session.questions.length
      + '  (' + session.answers.filter(function (a) { return a != null; }).length + ' answered)';
    Util.qs('#quiz-progress-bar').style.width = Math.round((session.index / session.questions.length) * 100) + '%';
    var card = Util.qs('.question-card', Util.qs('#quiz-session'));
    QuestionWidget.cleanup(card);
    QuestionWidget.renderDeferred(card, q, session.answers[session.index], function (idx) {
      session.answers[session.index] = idx;
    });
    Util.qs('#btn-quiz-next').onclick = function () {
      if (session.index + 1 < session.questions.length) { session.index += 1; renderExamQuestion(); }
    };
    Util.qs('#btn-quiz-submit-exam').onclick = function () {
      Util.confirmModal('Submit exam?',
        'You have answered ' + session.answers.filter(function (a) { return a != null; }).length + ' of ' + session.questions.length + ' questions. This cannot be undone.',
        submitExam);
    };
  }

  function tickTimer() {
    clearInterval(session.timerHandle);
    session.timerHandle = setInterval(function () {
      if (!session) { clearInterval(session && session.timerHandle); return; }
      var remaining = session.deadline - Date.now();
      if (remaining <= 0) {
        Util.qs('#quiz-timer').textContent = '0:00';
        submitExam();
        return;
      }
      Util.qs('#quiz-timer').textContent = Util.formatDuration(remaining);
    }, 1000);
  }

  function submitExam() {
    clearInterval(session.timerHandle);
    removePrevButton();
    var correctCount = 0;
    session.questions.forEach(function (q, i) {
      var selectedIdx = session.answers[i];
      var opt = selectedIdx != null ? q.options[selectedIdx] : null;
      var correct = !!(opt && opt.correct);
      if (correct) correctCount += 1;
      App.state.mastery.recordOutcome(q.topicIds, {
        correct: correct, elapsedMs: null, source: 'exam', difficulty: q.difficulty
      });
    });
    var durationMs = Date.now() - session.startedAt;
    App.state.progress.examHistory.push({
      timestamp: Date.now(), score: correctCount, total: session.questions.length,
      minutes: session.minutes, durationMs: durationMs
    });
    App.state.mastery.pushActivity({
      type: 'exam', label: 'Exam simulation: ' + correctCount + '/' + session.questions.length + ' correct'
    });
    App.persist();

    Util.qs('#quiz-session').style.display = 'none';
    Util.qs('#quiz-results').style.display = '';
    Util.qs('#results-summary').innerHTML = '';
    Util.qs('#results-summary').appendChild(Util.el('h2', {
      text: correctCount + ' / ' + session.questions.length + ' correct'
    }));
    Util.qs('#results-summary').appendChild(Util.el('p', {
      class: 'muted', text: 'Time used: ' + Util.formatDuration(durationMs) + ' of ' + session.minutes + ':00 allotted.'
    }));
    var review = Util.qs('#results-review');
    review.innerHTML = '';
    review.appendChild(Util.el('h3', {class: 'subsection-title', text: 'Review'}));
    session.questions.forEach(function (q, i) {
      QuestionWidget.renderReview(review, q, session.answers[i]);
    });
    session = null;
  }

  return {render: render};
})();
