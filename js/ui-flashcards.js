window.FlashcardsUI = (function () {
  var session = null; // {queue, index, flipped, counts}
  var keyHandler = null;

  function render(params) {
    Util.qs('#flashcards-setup').style.display = '';
    Util.qs('#flashcards-session').style.display = 'none';
    Util.qs('#flashcards-done').style.display = 'none';
    renderLectureFilter();
    wireSetup();
    if (params && params.autostart) {
      Util.qsa('input[name="fc-filter"]').forEach(function (r) { r.checked = (r.value === params.autostart); });
      startSession();
    }
  }

  function renderLectureFilter() {
    var wrap = Util.qs('#fc-lecture-filter');
    wrap.innerHTML = '';
    var lectures = MOLBIO.lectures.slice().sort(function (a, b) { return a.order - b.order; });
    lectures.forEach(function (lec) {
      var id = 'fc-lec-' + lec.id;
      var label = Util.el('label', {}, [
        Util.el('input', {type: 'checkbox', value: lec.id, id: id, checked: 'checked'}),
        ' ' + lec.title
      ]);
      wrap.appendChild(label);
    });
  }

  function wireSetup() {
    Util.qs('#btn-start-flashcards').onclick = startSession;
  }

  function selectedLectureIds() {
    var boxes = Util.qsa('#fc-lecture-filter input[type=checkbox]');
    var checked = boxes.filter(function (b) { return b.checked; }).map(function (b) { return b.value; });
    return checked.length ? checked : boxes.map(function (b) { return b.value; });
  }

  function filteredCards() {
    var filter = (Util.qsa('input[name="fc-filter"]').find(function (r) { return r.checked; }) || {}).value || 'due';
    var lectureIds = selectedLectureIds();
    var topicToLecture = {};
    MOLBIO.lectures.forEach(function (l) { l.topicIds.forEach(function (tid) { topicToLecture[tid] = l.id; }); });

    return MOLBIO.flashcards.filter(function (card) {
      if (lectureIds.indexOf(topicToLecture[card.topicId]) === -1) return false;
      if (filter === 'due') return App.state.mastery.isDue(card.id);
      if (filter === 'unseen') return App.state.mastery.isUnseen(card.id);
      if (filter === 'weak') {
        var rec = App.state.mastery.getTopicRecord(card.topicId);
        return rec.timesSeen > 0 && rec.score < 50;
      }
      return true; // all
    });
  }

  function startSession() {
    var cards = filteredCards();
    if (!cards.length) {
      Util.qs('#fc-empty-msg').style.display = '';
      return;
    }
    Util.qs('#fc-empty-msg').style.display = 'none';

    cards.sort(function (a, b) {
      var stA = App.state.mastery.getCardState(a.id), stB = App.state.mastery.getCardState(b.id);
      return (stA.dueAt || 0) - (stB.dueAt || 0);
    });
    cards = Util.shuffle(cards.slice(0, Math.min(cards.length, 60)));

    session = {queue: cards, index: 0, flipped: false, counts: {1: 0, 2: 0, 3: 0, 4: 0}};

    Util.qs('#flashcards-setup').style.display = 'none';
    Util.qs('#flashcards-done').style.display = 'none';
    Util.qs('#flashcards-session').style.display = '';
    attachKeys();
    renderCard();
  }

  function renderCard() {
    var card = session.queue[session.index];
    session.flipped = false;
    Util.qs('#fc-counter').textContent = (session.index + 1) + ' / ' + session.queue.length;
    Util.qs('#fc-progress-bar').style.width = Math.round((session.index / session.queue.length) * 100) + '%';
    Util.qs('#flashcard-front').textContent = card.front;
    Util.qs('#flashcard-back').textContent = card.back;
    Util.qs('#flashcard-front').style.display = '';
    Util.qs('#flashcard-back').style.display = 'none';
    Util.qs('#fc-rate-row').style.visibility = 'hidden';
    Util.qs('#flashcard').onclick = flip;
  }

  function flip() {
    if (session.flipped) return;
    session.flipped = true;
    Util.qs('#flashcard-front').style.display = 'none';
    Util.qs('#flashcard-back').style.display = '';
    Util.qs('#fc-rate-row').style.visibility = 'visible';
  }

  function rate(r) {
    if (!session.flipped) return;
    var card = session.queue[session.index];
    App.state.mastery.rateFlashcard(card, r);
    session.counts[r] += 1;
    App.persist();
    session.index += 1;
    if (session.index >= session.queue.length) {
      finishSession();
    } else {
      renderCard();
    }
  }

  function finishSession() {
    detachKeys();
    Util.qs('#flashcards-session').style.display = 'none';
    Util.qs('#flashcards-done').style.display = '';
    var c = session.counts;
    var total = c[1] + c[2] + c[3] + c[4];
    App.state.mastery.pushActivity({type: 'flashcards', label: 'Reviewed ' + total + ' flashcard' + (total === 1 ? '' : 's')});
    App.persist();
    Util.qs('#fc-summary').innerHTML = '';
    Util.qs('#fc-summary').appendChild(Util.el('div', {class: 'fc-summary-grid'}, [
      summaryStat('Again', c[1]), summaryStat('Hard', c[2]), summaryStat('Good', c[3]), summaryStat('Easy', c[4])
    ]));
    session = null;
  }

  function summaryStat(label, n) {
    return Util.el('div', {class: 'fc-summary-stat'}, [
      Util.el('div', {class: 'fc-summary-num', text: String(n)}),
      Util.el('div', {class: 'fc-summary-label', text: label})
    ]);
  }

  Util.qsa('.rate-btn').forEach(function (btn) {
    btn.addEventListener('click', function () { rate(Number(btn.getAttribute('data-rate'))); });
  });

  function attachKeys() {
    keyHandler = function (e) {
      if (!session) return;
      if (e.code === 'Space') { e.preventDefault(); flip(); return; }
      if (['1', '2', '3', '4'].indexOf(e.key) !== -1) rate(Number(e.key));
    };
    document.addEventListener('keydown', keyHandler);
  }

  function detachKeys() {
    if (keyHandler) document.removeEventListener('keydown', keyHandler);
    keyHandler = null;
  }

  return {render: render};
})();
