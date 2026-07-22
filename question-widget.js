/**
 * Shared MCQ rendering used by Study (topic-check questions), Topic quizzes,
 * Adaptive quizzes, and Exam simulations — so feedback behavior stays
 * consistent everywhere per the spec ("Feedback appears after answering,
 * explains the correct choice, and states why distractors fail. Exam
 * simulations postpone feedback until submission.").
 */
window.QuestionWidget = (function () {

  /** Immediate-feedback rendering (study / topic quiz / adaptive quiz). */
  function renderImmediate(container, question, onAnswered) {
    var startedAt = Date.now();
    container.innerHTML = '';
    var stem = Util.el('div', {class: 'question-stem', html: Util.escapeHtml(question.stem)});
    var optWrap = Util.el('div', {class: 'question-options'});
    container.appendChild(stem);
    container.appendChild(optWrap);

    var answered = false;
    question.options.forEach(function (opt, idx) {
      var btn = Util.el('button', {class: 'option-btn', 'data-idx': String(idx)}, [
        Util.el('span', {class: 'option-key', text: String.fromCharCode(65 + idx)}),
        Util.el('span', {class: 'option-text', text: opt.text}),
        Util.el('div', {class: 'option-rationale', text: opt.rationale})
      ]);
      btn.addEventListener('click', function () {
        if (answered) return;
        answered = true;
        var elapsedMs = Date.now() - startedAt;
        Util.qsa('.option-btn', optWrap).forEach(function (b, i) {
          b.classList.add('revealed');
          b.disabled = true;
          if (question.options[i].correct) b.classList.add('correct');
          else if (i === idx) b.classList.add('incorrect');
        });
        onAnswered({
          correct: !!opt.correct, elapsedMs: elapsedMs, selectedIndex: idx,
          difficulty: question.difficulty, topicIds: question.topicIds
        });
      });
      optWrap.appendChild(btn);
    });

    // Keyboard: 1-4 / A-D selects an option.
    function keyHandler(e) {
      if (answered) return;
      var idx = keyToIndex(e.key);
      if (idx == null) return;
      var btn = Util.qsa('.option-btn', optWrap)[idx];
      if (btn) btn.click();
    }
    document.addEventListener('keydown', keyHandler);
    container._cleanupKeys = function () { document.removeEventListener('keydown', keyHandler); };
  }

  /** Deferred (exam) rendering: selectable, no feedback, returns current selection via callback. */
  function renderDeferred(container, question, selectedIndex, onSelect) {
    container.innerHTML = '';
    var stem = Util.el('div', {class: 'question-stem', html: Util.escapeHtml(question.stem)});
    var optWrap = Util.el('div', {class: 'question-options'});
    container.appendChild(stem);
    container.appendChild(optWrap);

    question.options.forEach(function (opt, idx) {
      var btn = Util.el('button', {class: 'option-btn' + (selectedIndex === idx ? ' selected' : ''), 'data-idx': String(idx)}, [
        Util.el('span', {class: 'option-key', text: String.fromCharCode(65 + idx)}),
        Util.el('span', {class: 'option-text', text: opt.text})
      ]);
      btn.addEventListener('click', function () {
        Util.qsa('.option-btn', optWrap).forEach(function (b) { b.classList.remove('selected'); });
        btn.classList.add('selected');
        onSelect(idx);
      });
      optWrap.appendChild(btn);
    });

    function keyHandler(e) {
      var idx = keyToIndex(e.key);
      if (idx == null) return;
      var btn = Util.qsa('.option-btn', optWrap)[idx];
      if (btn) btn.click();
    }
    document.addEventListener('keydown', keyHandler);
    container._cleanupKeys = function () { document.removeEventListener('keydown', keyHandler); };
  }

  /** Read-only review rendering after exam submission. */
  function renderReview(container, question, selectedIndex) {
    var correctIdx = question.options.findIndex(function (o) { return o.correct; });
    var wasCorrect = selectedIndex === correctIdx;
    var block = Util.el('div', {class: 'review-block ' + (wasCorrect ? 'review-correct' : 'review-incorrect')});
    block.appendChild(Util.el('div', {class: 'question-stem', html: Util.escapeHtml(question.stem)}));
    question.options.forEach(function (opt, idx) {
      var cls = 'option-btn revealed';
      if (opt.correct) cls += ' correct';
      else if (idx === selectedIndex) cls += ' incorrect';
      block.appendChild(Util.el('div', {class: cls}, [
        Util.el('span', {class: 'option-key', text: String.fromCharCode(65 + idx)}),
        Util.el('span', {class: 'option-text', text: opt.text + (idx === selectedIndex ? '  (your answer)' : '')}),
        Util.el('div', {class: 'option-rationale', text: opt.rationale})
      ]));
    });
    if (selectedIndex == null) {
      block.appendChild(Util.el('div', {class: 'muted', text: 'Not answered.'}));
    }
    container.appendChild(block);
  }

  function keyToIndex(key) {
    if (['1', '2', '3', '4'].indexOf(key) !== -1) return Number(key) - 1;
    var upper = key.toUpperCase ? key.toUpperCase() : key;
    if (['A', 'B', 'C', 'D'].indexOf(upper) !== -1) return upper.charCodeAt(0) - 65;
    return null;
  }

  function cleanup(container) {
    if (container && container._cleanupKeys) { container._cleanupKeys(); container._cleanupKeys = null; }
  }

  return {renderImmediate: renderImmediate, renderDeferred: renderDeferred, renderReview: renderReview, cleanup: cleanup};
})();
