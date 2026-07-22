window.WeakSpotsUI = (function () {
  function render() {
    var list = Util.qs('#weakspots-list');
    list.innerHTML = '';
    var ranked = App.state.mastery.weakTopics();
    ranked.forEach(function (item) {
      var lecture = MOLBIO.lectures.find(function (l) { return l.id === item.topic.lectureId; });
      var row = Util.el('div', {class: 'weakspot-row'}, [
        Util.el('div', {class: 'weakspot-info'}, [
          Util.el('div', {class: 'weakspot-title', text: item.topic.title}),
          Util.el('div', {class: 'weakspot-lecture', text: lecture.title})
        ]),
        Util.el('div', {class: 'weakspot-bar-wrap'}, [
          Util.el('div', {class: 'unit-bar'}, [
            Util.el('div', {class: 'unit-bar-fill', style: 'width:' + item.score + '%'})
          ]),
          Util.el('div', {class: 'weakspot-pct', text: item.timesSeen === 0 ? 'Not studied yet' : item.score + '% mastery'})
        ]),
        Util.el('div', {class: 'weakspot-actions'}, [
          actionBtn('Study', function () { Router.go('study', {topicId: item.topicId}); }),
          actionBtn('Flashcards', function () { Router.go('flashcards'); }),
          actionBtn('Quiz', function () { Router.go('practice', {mode: 'topic', topicId: item.topicId, autostart: true}); })
        ])
      ]);
      list.appendChild(row);
    });
  }

  function actionBtn(label, onClick) {
    var b = Util.el('button', {class: 'btn-ghost btn-small', text: label});
    b.addEventListener('click', onClick);
    return b;
  }

  return {render: render};
})();
