window.DashboardUI = (function () {
  var RING_CIRCUMFERENCE = 2 * Math.PI * 52;

  function render() {
    var mastery = App.state.mastery;
    var readiness = mastery.overallReadiness();

    var ring = Util.qs('#readiness-ring-progress');
    ring.style.strokeDasharray = RING_CIRCUMFERENCE.toFixed(1);
    ring.style.strokeDashoffset = (RING_CIRCUMFERENCE * (1 - readiness / 100)).toFixed(1);
    Util.qs('#readiness-number').textContent = readiness + '%';
    Util.qs('#readiness-sub').textContent = readiness === 0
      ? 'Start studying to build a baseline.'
      : readiness < 40 ? 'Early days — keep going.'
      : readiness < 75 ? 'Solid progress across the course.'
      : 'Exam-ready territory.';

    renderNextActivity();
    renderQueueStats();
    renderUnitGrid();
    renderRecent();
  }

  function renderNextActivity() {
    var next = App.state.mastery.nextBestActivity();
    Util.qs('#next-activity-body').textContent = next.label;
    var btn = Util.qs('#btn-start-next');
    btn.onclick = function () { startActivity(next); };
  }

  function startActivity(next) {
    if (next.type === 'study') {
      Router.go('study', {topicId: next.topicId});
    } else if (next.type === 'flashcards') {
      Router.go('flashcards', {autostart: 'due'});
    } else if (next.type === 'quiz-topic') {
      Router.go('practice', {mode: 'topic', topicId: next.topicId, autostart: true});
    } else {
      Router.go('practice', {mode: 'adaptive', autostart: true});
    }
  }

  function renderQueueStats() {
    var mastery = App.state.mastery;
    var due = mastery.dueCount();
    var weak = mastery.weakTopics().filter(function (w) { return w.timesSeen > 0 && w.score < 50; }).length;
    var unstudied = mastery.weakTopics().filter(function (w) { return w.timesSeen === 0; }).length;
    var wrap = Util.qs('#queue-stats');
    wrap.innerHTML = '';
    [
      [due, 'flashcards due'],
      [weak, 'weak topics'],
      [unstudied, 'topics not yet studied']
    ].forEach(function (pair) {
      wrap.appendChild(Util.el('div', {class: 'queue-stat'}, [
        Util.el('div', {class: 'queue-stat-num', text: String(pair[0])}),
        Util.el('div', {class: 'queue-stat-label', text: pair[1]})
      ]));
    });
  }

  function renderUnitGrid() {
    var grid = Util.qs('#unit-grid');
    grid.innerHTML = '';
    var lectures = MOLBIO.lectures.slice().sort(function (a, b) { return a.order - b.order; });
    lectures.forEach(function (lec) {
      var pct = App.state.mastery.unitMastery(lec.id);
      var card = Util.el('div', {class: 'card unit-card', tabindex: '0'}, [
        Util.el('div', {class: 'unit-card-top'}, [
          Util.el('span', {class: 'unit-num', text: String(lec.order)}),
          Util.el('span', {class: 'unit-title', text: lec.title})
        ]),
        Util.el('div', {class: 'unit-bar'}, [
          Util.el('div', {class: 'unit-bar-fill', style: 'width:' + pct + '%'})
        ]),
        Util.el('div', {class: 'unit-pct-row'}, [
          Util.el('span', {class: 'unit-pct', text: pct + '% mastery'}),
          pct < 40 ? Util.el('span', {class: 'badge badge-weak', text: 'Weak spot'}) : null
        ])
      ]);
      card.addEventListener('click', function () {
        Router.go('study', {lectureId: lec.id});
      });
      grid.appendChild(card);
    });
  }

  function renderRecent() {
    var list = Util.qs('#recent-list');
    list.innerHTML = '';
    var recent = App.state.mastery.recentlyStudied(8);
    if (!recent.length) {
      list.appendChild(Util.el('div', {class: 'empty-state', text: 'Nothing studied yet — pick a unit above to begin.'}));
      return;
    }
    recent.forEach(function (item) {
      list.appendChild(Util.el('div', {class: 'recent-item'}, [
        Util.el('span', {class: 'recent-type', text: item.type}),
        Util.el('span', {class: 'recent-label', text: item.label}),
        Util.el('span', {class: 'recent-time', text: Util.timeAgo(item.timestamp)})
      ]));
    });
  }

  return {render: render};
})();
