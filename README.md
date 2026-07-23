# Molecular Biology Exam Prep

A private, offline-friendly study web app for the **Introduction to Molecular Biology** course. It turns eight lectures of course material into an active-recall study tool: structured notes, spaced-repetition flashcards, adaptive quizzes, timed exam simulations, and a readiness dashboard — all running entirely in your browser with no account, no backend, and no data leaving your device.

> **Live app:** https://anjannis.github.io/Molecular-Biology-Study-Webapp/
> Open it on your phone and add it to your home screen for quick access.

---

## Why this exists

Passively re-reading slides is a weak way to prepare for an exam. This app restructures the lecture content into the things that actually build recall and catch misconceptions:

- **Explanations** written to be understood, not just skimmed.
- **Key terms** and **common exam traps** for every topic.
- **Questions with a rationale on every option** — so a wrong answer teaches you *why* it was wrong, not just that it was.
- A **mastery model** that tracks what you know and steers you toward your weak spots.

Everything is stored locally in your browser (`localStorage`). It is completely private, works offline once loaded, and your progress is saved automatically.

---

## Features

### 📊 Dashboard
- **Overall readiness ring** aggregating mastery across all topics.
- **Next best step** recommendation based on your current progress.
- **Review queue** showing what's due, plus per-unit progress cards and a recently-studied list.

### 📖 Study
- Browse the full lecture → topic hierarchy.
- Each topic has an explanation, key terms, listed exam traps, a visual (comparison tables, step sequences, or fact lists), and an inline **topic-check question**.

### 🃏 Flashcards
- Spaced-repetition scheduling with a 4-point self-rating (**Again / Hard / Good / Easy**) that adapts each card's next review.
- Filter by **Due now**, **Unseen**, **Weak concepts**, or **All**, and narrow to specific lectures.

### 📝 Practice
- **Topic quiz** — focus on one topic with immediate feedback.
- **Adaptive mixed quiz** — questions drawn across all units, weighted toward your weak spots.
- **Timed exam simulation** — fixed length and time limit, with feedback withheld until you submit, then a full per-question review.

### 🎯 Weak Spots
- Every topic ranked by mastery (weakest first), aggregated across study, flashcards, and quizzes.

### 🔒 Privacy & control
- 100% local. No sign-in, no analytics, no network calls.
- **Reset Progress** clears your mastery, scheduling, and quiz history — course content is never affected.

---

## Content coverage

Eight units, **48 topics**, **96 flashcards**, and **146 practice questions** derived directly from the lecture slides.

| # | Unit | Topics | Questions |
|---|------|:------:|:---------:|
| 1 | DNA | 7 | 22 |
| 2 | RNA | 7 | 22 |
| 3 | Proteins | 6 | 20 |
| 4 | Lipids | 6 | 18 |
| 5 | Sugars | 5 | 13 |
| 6 | The Cell & its Organelles | 6 | 18 |
| 7 | Genomics | 6 | 18 |
| 8 | Transcriptomics | 5 | 15 |

---

## Running it locally

No build step and no dependencies — it's plain HTML, CSS, and JavaScript.

**Option A — open the file directly**

```bash
open index.html
```

**Option B — serve it (recommended; avoids any `file://` quirks)**

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```

---

## Project structure

```
.
├── index.html              # App shell: all views + script includes
├── css/
│   └── styles.css          # All styling (light/dark friendly, responsive)
├── js/
│   ├── data/               # Course content (one file per unit)
│   │   ├── base.js         # MOLBIO namespace + registerLecture()  (loads first)
│   │   ├── 01-dna.js
│   │   ├── 02-rna.js
│   │   ├── … 08-transcriptomics.js
│   ├── main.js             # App bootstrap
│   ├── router.js           # Hash-based view routing
│   ├── persistence.js      # localStorage load/save
│   ├── mastery.js          # Mastery scoring + spaced-repetition scheduling
│   ├── question-widget.js  # Reusable MCQ renderer
│   ├── ui-dashboard.js     # Dashboard view
│   ├── ui-study.js         # Study view
│   ├── ui-flashcards.js    # Flashcards view
│   ├── ui-quiz.js          # Practice / exam view
│   ├── ui-weakspots.js     # Weak Spots view
│   └── util.js             # DOM helpers, toast, confirm modal
├── validate-content.js     # Node QA: content-integrity checks
└── test-app.js             # Node QA: jsdom smoke test of the whole app
```

### Data model

Content is plain data. Each unit file registers a lecture bundle via `MOLBIO.registerLecture(lecture, topics, flashcards, questions)`:

- **Lecture** — `{ id, title, order, source, topicIds[] }`
- **Topic** — `{ id, lectureId, title, explanation, keyTerms[], traps[], visual, relatedTopicIds[] }`
- **Flashcard** — `{ id, topicId, front, back, tags[] }`
- **Question** — `{ id, topicIds[], stem, options[], difficulty, topicCheck }`
  - `options` has exactly **4** entries, exactly **one** with `correct: true`, and **every** option carries a `rationale` explaining why it is right or why it is a plausible-but-wrong trap.

Adding or editing content means editing these data files — no app code changes required.

---

## Development & QA

Two Node scripts guard content quality. They are dev-only and not shipped with the app.

**Content integrity** (no dependencies):

```bash
node validate-content.js
```

Checks lecture/topic/flashcard/question wiring: unique IDs, valid cross-references, exactly one correct option per question, a rationale on every option, and at least one flashcard and one question per topic.

**App smoke test** (requires `jsdom`):

```bash
# one-time: install jsdom where the test expects it
mkdir -p /tmp/jsdomtest && (cd /tmp/jsdomtest && npm init -y && npm install jsdom)

node test-app.js
```

Loads the real `index.html` in a headless DOM and exercises every view — dashboard rendering, answering a topic-check question, a flashcard session, an adaptive quiz, a timed exam with review, the weak-spots ranking, and progress persistence across a simulated reload.

---

## Deploying

The app is hosted on **GitHub Pages** from the `main` branch. Pushing to `main` publishes the update:

```bash
git add -A
git commit -m "Update content"
git push
```

GitHub Pages redeploys within a minute or so; reload the app on your phone to get the latest version.

---

## A note on the content

The study material is condensed from the *Introduction to Molecular Biology* lecture series (PD Dr. Dr. Katja Kobow) for **personal exam preparation**. Credit for the underlying scientific content belongs to the course and its cited sources. This repository is a personal learning tool and is not an official course resource.
