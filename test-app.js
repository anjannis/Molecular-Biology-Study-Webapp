/* Dev-only smoke test using jsdom. Not shipped with the app. Run: node test-app.js
 *
 * jsdom treats file:// documents as an opaque origin, where real localStorage
 * throws a SecurityError (this is a jsdom quirk, not something end users hit in
 * real browsers opening a local file). We install a tiny in-memory localStorage
 * polyfill via `beforeParse` so the app's actual persistence code path — which
 * itself doesn't know or care whether localStorage is "real" — can be exercised
 * faithfully, including a genuine cross-window "reload" simulation.
 */
const { JSDOM } = require('/tmp/jsdomtest/node_modules/jsdom');
const path = require('path');

const appPath = path.join(__dirname, 'index.html');

function makeLocalStorage(initial) {
  const store = Object.assign({}, initial || {});
  return {
    getItem: (k) => (Object.prototype.hasOwnProperty.call(store, k) ? store[k] : null),
    setItem: (k, v) => { store[k] = String(v); },
    removeItem: (k) => { delete store[k]; },
    clear: () => { Object.keys(store).forEach(k => delete store[k]); },
    key: (i) => Object.keys(store)[i] || null,
    get length() { return Object.keys(store).length; },
    _dump: () => Object.assign({}, store)
  };
}

async function load(initialStorage) {
  const dom = await JSDOM.fromFile(appPath, {
    runScripts: 'dangerously',
    resources: 'usable',
    pretendToBeVisual: true,
    url: 'file://' + __dirname + '/',
    beforeParse(window) {
      Object.defineProperty(window, 'localStorage', {
        value: makeLocalStorage(initialStorage),
        configurable: true
      });
    }
  });
  dom.window.addEventListener('error', (e) => {
    console.error('WINDOW ERROR:', (e.error && e.error.stack) || e.message);
  });
  return dom;
}

function wait(ms) { return new Promise(r => setTimeout(r, ms)); }

(async () => {
  const dom = await load();
  const win = dom.window;
  await wait(800); // allow DOMContentLoaded + any (best-effort) stylesheet fetch to settle

  const results = [];
  function check(label, cond) { results.push({label, ok: !!cond}); }

  check('App defined', win.App && win.App.state && win.App.state.mastery);
  check('MOLBIO loaded (8 lectures)', win.MOLBIO.lectures.length === 8);
  check('Dashboard is active view by default', win.document.querySelector('#view-dashboard').classList.contains('active'));

  check('Unit grid has 8 cards', win.document.querySelectorAll('.unit-card').length === 8);
  check('Readiness number rendered', /%/.test(win.document.querySelector('#readiness-number').textContent));

  win.Router.go('study', {topicId: 'dna-structure'});
  await wait(50);
  check('Study topic title rendered', win.document.querySelector('.topic-title').textContent.indexOf('Structure') !== -1);
  const qCard = win.document.querySelector('#study-content .question-card');
  check('Topic-check question rendered', qCard && qCard.querySelectorAll('.option-btn').length === 4);
  const firstOpt = qCard.querySelector('.option-btn');
  firstOpt.dispatchEvent(new win.Event('click', {bubbles: true}));
  await wait(20);
  check('Answering reveals feedback', qCard.querySelectorAll('.option-btn.revealed').length === 4);
  check('Topic mastery record created after answering',
    win.App.state.mastery.getTopicRecord('dna-structure').timesSeen >= 2);

  win.Router.go('flashcards');
  await wait(20);
  win.document.querySelectorAll('input[name="fc-filter"]').forEach(r => { r.checked = (r.value === 'all'); });
  win.document.querySelector('#btn-start-flashcards').click();
  await wait(20);
  check('Flashcard session started', win.document.querySelector('#flashcards-session').style.display !== 'none');
  const flashcardEl = win.document.querySelector('#flashcard');
  flashcardEl.dispatchEvent(new win.Event('click', {bubbles: true}));
  await wait(20);
  check('Flashcard flips to back', win.document.querySelector('#flashcard-back').style.display !== 'none');
  win.document.querySelector('.rate-btn[data-rate="3"]').click();
  await wait(20);
  check('Flashcard counter advanced after rating', win.document.querySelector('#fc-counter').textContent.indexOf('2 /') === 0);

  win.Router.go('practice', {mode: 'adaptive', autostart: true});
  await wait(50);
  let guard = 0;
  while (win.document.querySelector('#quiz-session').style.display !== 'none' && guard < 40) {
    const card = win.document.querySelector('#quiz-session .question-card');
    const opt = card.querySelector('.option-btn');
    if (opt && !opt.disabled) {
      opt.dispatchEvent(new win.Event('click', {bubbles: true}));
      await wait(10);
      const nextBtn = win.document.querySelector('#btn-quiz-next');
      if (nextBtn.style.display !== 'none') { nextBtn.click(); await wait(10); }
    }
    guard++;
  }
  check('Adaptive quiz reached results screen', win.document.querySelector('#quiz-results').style.display !== 'none');

  win.Router.go('practice', {mode: 'exam'});
  await wait(20);
  win.document.querySelector('#exam-length').value = '10';
  win.document.querySelector('#exam-minutes').value = '10';
  win.document.querySelector('#btn-start-practice').click();
  await wait(20);
  check('Exam session started with timer visible', win.document.querySelector('#quiz-timer').style.display !== 'none');
  const examCard = win.document.querySelector('#quiz-session .question-card');
  examCard.querySelector('.option-btn').click();
  await wait(10);
  win.document.querySelector('#btn-quiz-submit-exam').click();
  await wait(10);
  win.document.querySelector('#confirm-ok').click();
  await wait(20);
  check('Exam results screen shown after submit', win.document.querySelector('#quiz-results').style.display !== 'none');
  check('Exam review rendered per-question rationale', win.document.querySelectorAll('#results-review .review-block').length === 10);

  win.Router.go('weakspots');
  await wait(20);
  check('Weak spots list has 48 rows (all topics ranked)', win.document.querySelectorAll('.weakspot-row').length === 48);

  // --- Persistence round-trip across a simulated reload (fresh window, same storage contents) ---
  win.Persistence.saveNow(win.App.state.progress);
  const savedRaw = win.localStorage.getItem('molbio_progress_v1');
  check('Progress persisted to localStorage', !!savedRaw && savedRaw.length > 10);
  const readinessBeforeReload = win.App.state.mastery.overallReadiness();

  const dom2 = await load({molbio_progress_v1: savedRaw});
  await wait(600);
  const reloadedReadiness = dom2.window.App.state.mastery.overallReadiness();
  check('Progress survives reload (matches pre-reload readiness, both > 0)',
    readinessBeforeReload > 0 && reloadedReadiness === readinessBeforeReload);
  check('Flashcard scheduling state survives reload',
    Object.keys(dom2.window.App.state.progress.flashcardState).length > 0);

  // --- Graceful degradation: corrupt localStorage content ---
  const dom3 = await load({molbio_progress_v1: '{not valid json'});
  await wait(600);
  check('Corrupt localStorage falls back to default progress, no crash',
    dom3.window.App.state.mastery.overallReadiness() === 0);
  check('Course content still fully intact after corrupt progress (8 lectures, 48 topics)',
    dom3.window.MOLBIO.lectures.length === 8 && dom3.window.MOLBIO.topics.length === 48);

  // --- Reset progress button + confirm modal wiring (on original window) ---
  win.document.querySelector('#btn-reset-progress').click();
  await wait(10);
  win.document.querySelector('#confirm-ok').click();
  await wait(10);
  check('Reset progress zeroes readiness', win.App.state.mastery.overallReadiness() === 0);

  console.log('\n=== SMOKE TEST RESULTS ===');
  let failCount = 0;
  results.forEach(r => {
    console.log((r.ok ? 'PASS' : 'FAIL') + '  ' + r.label);
    if (!r.ok) failCount++;
  });
  console.log('\n' + (results.length - failCount) + '/' + results.length + ' passed');
  process.exit(failCount ? 1 : 0);
})().catch(e => { console.error('TEST CRASHED:', e.stack || e); process.exit(1); });
