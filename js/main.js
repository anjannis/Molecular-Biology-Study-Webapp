window.App = (function () {
  var state = {progress: null, mastery: null};

  function persist() {
    Persistence.save(state.progress);
  }

  function init() {
    state.progress = Persistence.load();
    state.mastery = Mastery.create(state.progress);

    Router.on('dashboard', function () { DashboardUI.render(); });
    Router.on('study', function (params) { StudyUI.render(params); });
    Router.on('flashcards', function (params) { FlashcardsUI.render(params); });
    Router.on('practice', function (params) { QuizUI.render(params); });
    Router.on('weakspots', function () { WeakSpotsUI.render(); });

    Router.init();

    Util.qs('#btn-reset-progress').addEventListener('click', function () {
      Util.confirmModal(
        'Reset local progress?',
        'This clears mastery scores, flashcard scheduling, and quiz/exam history stored in this browser. Course content itself is never affected and cannot be lost.',
        function () {
          state.progress = Persistence.reset();
          state.mastery = Mastery.create(state.progress);
          Util.toast('Progress reset.');
          Router.go('dashboard');
        }
      );
    });

    window.addEventListener('beforeunload', function () {
      Persistence.saveNow(state.progress);
    });
  }

  return {state: state, persist: persist, init: init};
})();

document.addEventListener('DOMContentLoaded', function () {
  App.init();
});
