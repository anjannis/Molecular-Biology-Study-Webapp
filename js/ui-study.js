window.StudyUI = (function () {
  var currentTopicId = null;

  function render(params) {
    renderTree();
    var topicId = (params && params.topicId) || currentTopicId;
    if (!topicId && params && params.lectureId) {
      var lec = MOLBIO.lectures.find(function (l) { return l.id === params.lectureId; });
      if (lec) topicId = lec.topicIds[0];
    }
    if (topicId) openTopic(topicId);
  }

  function renderTree() {
    var tree = Util.qs('#study-tree');
    tree.innerHTML = '';
    var lectures = MOLBIO.lectures.slice().sort(function (a, b) { return a.order - b.order; });
    lectures.forEach(function (lec) {
      var unitPct = App.state.mastery.unitMastery(lec.id);
      var lecNode = Util.el('div', {class: 'tree-lecture'});
      var head = Util.el('div', {class: 'tree-lecture-head'}, [
        Util.el('span', {class: 'tree-lecture-title', text: lec.order + '. ' + lec.title}),
        Util.el('span', {class: 'tree-lecture-pct', text: unitPct + '%'})
      ]);
      lecNode.appendChild(head);
      var topicList = Util.el('div', {class: 'tree-topics'});
      lec.topicIds.forEach(function (tid) {
        var topic = MOLBIO.topics.find(function (t) { return t.id === tid; });
        var rec = App.state.mastery.getTopicRecord(tid);
        var item = Util.el('button', {class: 'tree-topic-btn' + (tid === currentTopicId ? ' active' : ''), 'data-topic': tid}, [
          Util.el('span', {class: 'tree-topic-dot dot-' + masteryBand(rec.score, rec.timesSeen)}),
          Util.el('span', {class: 'tree-topic-title', text: topic.title})
        ]);
        item.addEventListener('click', function () { openTopic(tid); });
        topicList.appendChild(item);
      });
      lecNode.appendChild(topicList);
      tree.appendChild(lecNode);
    });
  }

  function masteryBand(score, timesSeen) {
    if (!timesSeen) return 'unseen';
    if (score < 40) return 'weak';
    if (score < 75) return 'mid';
    return 'strong';
  }

  function openTopic(topicId) {
    currentTopicId = topicId;
    var topic = MOLBIO.topics.find(function (t) { return t.id === topicId; });
    if (!topic) return;
    var lecture = MOLBIO.lectures.find(function (l) { return l.id === topic.lectureId; });

    App.state.mastery.touchTopic(topicId);
    App.state.mastery.pushActivity({type: 'study', label: 'Studied "' + topic.title + '"', topicId: topicId, lectureId: lecture.id});
    App.persist();

    Util.qsa('.tree-topic-btn').forEach(function (b) {
      b.classList.toggle('active', b.getAttribute('data-topic') === topicId);
    });

    var content = Util.qs('#study-content');
    content.innerHTML = '';

    content.appendChild(Util.el('div', {class: 'topic-breadcrumb', text: lecture.title + ' — Unit ' + lecture.order}));
    content.appendChild(Util.el('h1', {class: 'topic-title', text: topic.title}));
    content.appendChild(Util.el('p', {class: 'topic-explanation', text: topic.explanation}));

    if (topic.visual) content.appendChild(renderVisual(topic.visual));

    if (topic.keyTerms && topic.keyTerms.length) {
      content.appendChild(Util.el('h3', {class: 'subsection-title', text: 'Key terms'}));
      var kt = Util.el('dl', {class: 'key-terms'});
      topic.keyTerms.forEach(function (k) {
        kt.appendChild(Util.el('dt', {text: k.term}));
        kt.appendChild(Util.el('dd', {text: k.def}));
      });
      content.appendChild(kt);
    }

    if (topic.traps && topic.traps.length) {
      content.appendChild(Util.el('h3', {class: 'subsection-title', text: 'MCQ traps to watch for'}));
      var trapList = Util.el('ul', {class: 'trap-list'});
      topic.traps.forEach(function (t) { trapList.appendChild(Util.el('li', {text: t})); });
      content.appendChild(trapList);
    }

    if (topic.relatedTopicIds && topic.relatedTopicIds.length) {
      content.appendChild(Util.el('h3', {class: 'subsection-title', text: 'Related topics'}));
      var chips = Util.el('div', {class: 'chip-row'});
      topic.relatedTopicIds.forEach(function (rid) {
        var rt = MOLBIO.topics.find(function (t) { return t.id === rid; });
        if (!rt) return;
        var chip = Util.el('button', {class: 'chip', text: rt.title});
        chip.addEventListener('click', function () { openTopic(rid); });
        chips.appendChild(chip);
      });
      content.appendChild(chips);
    }

    var checkQ = MOLBIO.questions.find(function (q) { return q.topicIds.indexOf(topicId) !== -1 && q.topicCheck; })
      || MOLBIO.questions.find(function (q) { return q.topicIds.indexOf(topicId) !== -1; });
    if (checkQ) {
      content.appendChild(Util.el('h3', {class: 'subsection-title', text: 'Topic check'}));
      var qCard = Util.el('div', {class: 'question-card'});
      content.appendChild(qCard);
      QuestionWidget.renderImmediate(qCard, checkQ, function (outcome) {
        App.state.mastery.recordOutcome(outcome.topicIds, {
          correct: outcome.correct, elapsedMs: outcome.elapsedMs, source: 'study', difficulty: outcome.difficulty
        });
        App.persist();
        renderTree();
      });
    }
  }

  function renderVisual(visual) {
    if (visual.type === 'steps') {
      var wrap = Util.el('div', {class: 'visual visual-steps'});
      visual.steps.forEach(function (s, i) {
        wrap.appendChild(Util.el('div', {class: 'step-item'}, [
          Util.el('div', {class: 'step-num', text: String(i + 1)}),
          Util.el('div', {class: 'step-body'}, [
            Util.el('div', {class: 'step-title', text: s.title}),
            Util.el('div', {class: 'step-detail', text: s.detail})
          ])
        ]));
      });
      return wrap;
    }
    if (visual.type === 'compare') {
      var table = Util.el('table', {class: 'visual visual-compare'});
      var thead = Util.el('thead');
      var trHead = Util.el('tr');
      visual.columns.forEach(function (c) { trHead.appendChild(Util.el('th', {text: c})); });
      thead.appendChild(trHead);
      table.appendChild(thead);
      var tbody = Util.el('tbody');
      visual.rows.forEach(function (row) {
        var tr = Util.el('tr');
        row.forEach(function (cell) { tr.appendChild(Util.el('td', {text: cell})); });
        tbody.appendChild(tr);
      });
      table.appendChild(tbody);
      return table;
    }
    // 'facts'
    var factWrap = Util.el('div', {class: 'visual visual-facts'});
    (visual.items || []).forEach(function (it) {
      factWrap.appendChild(Util.el('div', {class: 'fact-chip'}, [
        Util.el('div', {class: 'fact-label', text: it.label}),
        Util.el('div', {class: 'fact-detail', text: it.detail})
      ]));
    });
    return factWrap;
  }

  return {render: render, openTopic: openTopic};
})();
