/* Node-only content validation script (not shipped as part of the browser app runtime concerns —
 * loaded manually via `node validate-content.js` during development / QA). */
global.window = global;
var fs = require('fs');
var path = require('path');
var dataDir = path.join(__dirname, 'js', 'data');
var files = ['base.js', '01-dna.js', '02-rna.js', '03-proteins.js', '04-lipids.js',
             '05-sugars.js', '06-cell-organelles.js', '07-genomics.js',
             '08-transcriptomics.js'];
files.forEach(function (f) {
  var code = fs.readFileSync(path.join(dataDir, f), 'utf8');
  vmRun(code, f);
});

function vmRun(code, filename) {
  var vm = require('vm');
  vm.runInThisContext(code, {filename: filename});
}

var MOLBIO = global.MOLBIO;
var errors = [];
var warnings = [];

// --- Expect exactly 8 lectures ---
if (MOLBIO.lectures.length !== 8) errors.push('Expected 8 lectures, found ' + MOLBIO.lectures.length);

var topicById = {};
MOLBIO.topics.forEach(function (t) { topicById[t.id] = t; });

var lectureIds = {};
MOLBIO.lectures.forEach(function (l) {
  if (lectureIds[l.id]) errors.push('Duplicate lecture id: ' + l.id);
  lectureIds[l.id] = true;
  if (!l.topicIds || !l.topicIds.length) errors.push('Lecture ' + l.id + ' has no topicIds');
  (l.topicIds || []).forEach(function (tid) {
    if (!topicById[tid]) errors.push('Lecture ' + l.id + ' references missing topic ' + tid);
  });
});

// every topic belongs to a lecture that lists it
var topicIds = {};
MOLBIO.topics.forEach(function (t) {
  if (topicIds[t.id]) errors.push('Duplicate topic id: ' + t.id);
  topicIds[t.id] = true;
  var lec = MOLBIO.lectures.find(function (l) { return l.id === t.lectureId; });
  if (!lec) errors.push('Topic ' + t.id + ' has unknown lectureId ' + t.lectureId);
  else if (lec.topicIds.indexOf(t.id) === -1) errors.push('Topic ' + t.id + ' not listed in its lecture’s topicIds');
  if (!t.explanation || t.explanation.length < 40) errors.push('Topic ' + t.id + ' explanation missing/too short');
  if (!t.keyTerms || t.keyTerms.length < 2) warnings.push('Topic ' + t.id + ' has fewer than 2 key terms');
  if (!t.traps || t.traps.length < 1) warnings.push('Topic ' + t.id + ' has no MCQ traps listed');
  if (!t.visual) warnings.push('Topic ' + t.id + ' has no visual payload');
  (t.relatedTopicIds || []).forEach(function (rid) {
    if (!topicIds[rid] && MOLBIO.topics.every(function(x){return x.id !== rid;})) {
      // deferred check after full load, see below
    }
  });
});

// related topic ids must exist somewhere in the full topic set (check after all loaded)
MOLBIO.topics.forEach(function (t) {
  (t.relatedTopicIds || []).forEach(function (rid) {
    if (!topicIds[rid]) errors.push('Topic ' + t.id + ' has relatedTopicId pointing to nonexistent topic: ' + rid);
  });
});

// every topic has >=1 flashcard and >=1 question
var fcByTopic = {};
MOLBIO.flashcards.forEach(function (f) {
  if (!topicIds[f.topicId]) errors.push('Flashcard ' + f.id + ' references missing topic ' + f.topicId);
  fcByTopic[f.topicId] = (fcByTopic[f.topicId] || 0) + 1;
});
var qByTopic = {};
MOLBIO.questions.forEach(function (q) {
  (q.topicIds || []).forEach(function (tid) {
    if (!topicIds[tid]) errors.push('Question ' + q.id + ' references missing topic ' + tid);
    qByTopic[tid] = (qByTopic[tid] || 0) + 1;
  });
  // exactly one correct option
  var opts = q.options || [];
  if (opts.length !== 4) errors.push('Question ' + q.id + ' does not have exactly 4 options (' + opts.length + ')');
  var correctCount = opts.filter(function (o) { return o.correct === true; }).length;
  if (correctCount !== 1) errors.push('Question ' + q.id + ' has ' + correctCount + ' correct options (expected 1)');
  opts.forEach(function (o, i) {
    if (!o.rationale || o.rationale.length < 5) errors.push('Question ' + q.id + ' option ' + i + ' missing rationale');
  });
  if (!q.stem || q.stem.length < 8) errors.push('Question ' + q.id + ' missing/short stem');
});

Object.keys(topicIds).forEach(function (tid) {
  if (!fcByTopic[tid]) errors.push('Topic ' + tid + ' has ZERO flashcards');
  if (!qByTopic[tid]) errors.push('Topic ' + tid + ' has ZERO questions');
});

// duplicate ID checks across flashcards/questions
var fcIds = {}; MOLBIO.flashcards.forEach(function(f){ if (fcIds[f.id]) errors.push('Duplicate flashcard id '+f.id); fcIds[f.id]=true; });
var qIds = {}; MOLBIO.questions.forEach(function(q){ if (qIds[q.id]) errors.push('Duplicate question id '+q.id); qIds[q.id]=true; });

console.log('Lectures:', MOLBIO.lectures.length);
console.log('Topics:', MOLBIO.topics.length);
console.log('Flashcards:', MOLBIO.flashcards.length);
console.log('Questions:', MOLBIO.questions.length);
console.log('');
console.log('ERRORS:', errors.length);
errors.forEach(function (e) { console.log(' - ' + e); });
console.log('');
console.log('WARNINGS:', warnings.length);
warnings.forEach(function (w) { console.log(' - ' + w); });

process.exit(errors.length ? 1 : 0);
