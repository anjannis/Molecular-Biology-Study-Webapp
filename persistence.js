/**
 * Persistence layer. Reads/writes learner progress to localStorage.
 *
 * Design goal (per spec): "The app degrades gracefully if saved progress is
 * invalid by restoring default progress rather than losing course content."
 * Course content (MOLBIO.*) is always bundled fresh from the data/*.js files
 * and never touched by this module — only the *progress* record lives here,
 * so a corrupt save can never take course content down with it.
 */
window.Persistence = (function () {
  var STORAGE_KEY = 'molbio_progress_v1';
  var SCHEMA_VERSION = 1;
  var saveTimer = null;

  function defaultProgress() {
    return {
      schemaVersion: SCHEMA_VERSION,
      topicMastery: {},      // topicId -> {score, timesSeen, lastSeen}
      flashcardState: {},    // cardId -> {ease, intervalDays, dueAt, reps, lastRating}
      questionHistory: [],   // {questionId, topicIds, correct, timestamp, source}
      examHistory: [],       // {timestamp, score, total, minutes, length}
      recentActivity: [],    // {type, label, topicId, lectureId, timestamp}
      preferences: {flashcardLectureFilter: []}
    };
  }

  function isPlainObject(v) { return v !== null && typeof v === 'object' && !Array.isArray(v); }

  /** Structural validation. Returns true only if the shape is trustworthy enough to use as-is. */
  function isValid(obj) {
    if (!isPlainObject(obj)) return false;
    if (typeof obj.schemaVersion !== 'number') return false;
    if (!isPlainObject(obj.topicMastery)) return false;
    if (!isPlainObject(obj.flashcardState)) return false;
    if (!Array.isArray(obj.questionHistory)) return false;
    if (!Array.isArray(obj.examHistory)) return false;
    if (!Array.isArray(obj.recentActivity)) return false;
    if (!isPlainObject(obj.preferences)) return false;
    return true;
  }

  function load() {
    var raw;
    try {
      raw = localStorage.getItem(STORAGE_KEY);
    } catch (e) {
      // localStorage unavailable (privacy mode, quota, etc.) — run in-memory with defaults.
      Util.toast('Local storage unavailable — progress will not be saved this session.');
      return defaultProgress();
    }
    if (!raw) return defaultProgress();

    var parsed;
    try {
      parsed = JSON.parse(raw);
    } catch (e) {
      Util.toast('Saved progress was corrupted — restored a fresh start.');
      return defaultProgress();
    }

    if (!isValid(parsed)) {
      Util.toast('Saved progress was in an unexpected format — restored a fresh start.');
      return defaultProgress();
    }

    if (parsed.schemaVersion !== SCHEMA_VERSION) {
      // Forward-compatible merge point for future schema migrations.
      parsed.schemaVersion = SCHEMA_VERSION;
    }

    // Merge onto defaults so missing keys (e.g. from an older partial save) don't crash the app.
    var merged = defaultProgress();
    Object.keys(merged).forEach(function (k) {
      if (parsed[k] !== undefined) merged[k] = parsed[k];
    });
    return merged;
  }

  function saveNow(progress) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
    } catch (e) {
      Util.toast('Could not save progress locally (storage may be full).');
    }
  }

  function save(progress) {
    clearTimeout(saveTimer);
    saveTimer = setTimeout(function () { saveNow(progress); }, 250);
  }

  function reset() {
    var fresh = defaultProgress();
    saveNow(fresh);
    return fresh;
  }

  return {defaultProgress: defaultProgress, load: load, save: save, saveNow: saveNow, reset: reset};
})();
