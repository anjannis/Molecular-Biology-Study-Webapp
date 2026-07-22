/** Minimal view router: toggles .view sections and nav button active state. */
window.Router = (function () {
  var views = ['dashboard', 'study', 'flashcards', 'practice', 'weakspots'];
  var current = null;
  var onEnter = {}; // view -> array of callbacks(params)

  function on(view, cb) {
    onEnter[view] = onEnter[view] || [];
    onEnter[view].push(cb);
  }

  function go(view, params) {
    if (views.indexOf(view) === -1) view = 'dashboard';
    current = view;
    views.forEach(function (v) {
      var section = Util.qs('#view-' + v);
      if (section) section.classList.toggle('active', v === view);
    });
    Util.qsa('.nav-btn').forEach(function (btn) {
      btn.classList.toggle('active', btn.getAttribute('data-nav') === view);
    });
    (onEnter[view] || []).forEach(function (cb) { cb(params || {}); });
    Util.qs('#view-root').scrollTop = 0;
    window.scrollTo(0, 0);
  }

  function init() {
    Util.qsa('[data-nav]').forEach(function (node) {
      node.addEventListener('click', function () {
        go(node.getAttribute('data-nav'));
      });
    });
    go('dashboard');
  }

  return {on: on, go: go, init: init, current: function () { return current; }};
})();
