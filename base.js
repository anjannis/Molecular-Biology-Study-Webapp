/**
 * MOLBIO content namespace.
 *
 * Each domain data file (01-dna.js, 02-rna.js, ...) pushes plain-object
 * records into these arrays. This file MUST be loaded first.
 *
 * Schema (matches the design spec's "Content and data design" section):
 *
 * Lecture:   { id, title, source, order, topicIds: [] }
 * Topic:     { id, lectureId, title, explanation, keyTerms: [{term, def}],
 *              traps: [string], visual: {type, ...}, relatedTopicIds: [] }
 * Flashcard: { id, topicId, front, back, tags: [] }
 * Question:  { id, topicIds: [], stem,
 *              options: [{text, correct: bool, rationale: string}] (4 options,
 *                exactly one correct: true; rationale explains why THAT
 *                option is right, or why it is a plausible-but-wrong trap),
 *              difficulty: 'easy'|'medium'|'hard', topicCheck: bool,
 *              enrichment: bool }
 */
window.MOLBIO = window.MOLBIO || {};
MOLBIO.lectures = [];
MOLBIO.topics = [];
MOLBIO.flashcards = [];
MOLBIO.questions = [];

/** Convenience: register a full lecture bundle at once. */
MOLBIO.registerLecture = function (lecture, topics, flashcards, questions) {
  MOLBIO.lectures.push(lecture);
  topics.forEach(function (t) { MOLBIO.topics.push(t); });
  flashcards.forEach(function (f) { MOLBIO.flashcards.push(f); });
  questions.forEach(function (q) { MOLBIO.questions.push(q); });
};
