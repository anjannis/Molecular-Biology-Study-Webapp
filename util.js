/* Small shared utilities. No dependencies. */
window.Util = (function () {
  function qs(sel, root) { return (root || document).querySelector(sel); }
  function qsa(sel, root) { return Array.prototype.slice.call((root || document).querySelectorAll(sel)); }

  function el(tag, attrs, children) {
    var node = document.createElement(tag);
    attrs = attrs || {};
    Object.keys(attrs).forEach(function (k) {
      if (k === 'class') node.className = attrs[k];
      else if (k === 'html') node.innerHTML = attrs[k];
      else if (k.indexOf('data-') === 0) node.setAttribute(k, attrs[k]);
      else if (k === 'text') node.textContent = attrs[k];
      else node.setAttribute(k, attrs[k]);
    });
    (children || []).forEach(function (c) {
      if (c == null) return;
      node.appendChild(typeof c === 'string' ? document.createTextNode(c) : c);
    });
    return node;
  }

  function escapeHtml(s) {
    if (s == null) return '';
    return String(s).replace(/[&<>"']/g, function (c) {
      return {'&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'}[c];
    });
  }

  function shuffle(arr) {
    var a = arr.slice();
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var tmp = a[i]; a[i] = a[j]; a[j] = tmp;
    }
    return a;
  }

  function sample(arr, n) { return shuffle(arr).slice(0, n); }

  function weightedSample(items, weightFn, n) {
    var pool = items.slice();
    var out = [];
    while (pool.length && out.length < n) {
      var weights = pool.map(weightFn);
      var total = weights.reduce(function (a, b) { return a + b; }, 0);
      var r = Math.random() * total;
      var acc = 0, pickIdx = 0;
      for (var i = 0; i < weights.length; i++) {
        acc += weights[i];
        if (r <= acc) { pickIdx = i; break; }
      }
      out.push(pool[pickIdx]);
      pool.splice(pickIdx, 1);
    }
    return out;
  }

  function clamp(v, lo, hi) { return Math.max(lo, Math.min(hi, v)); }

  function timeAgo(ts) {
    if (!ts) return 'never';
    var s = Math.floor((Date.now() - ts) / 1000);
    if (s < 60) return 'just now';
    var m = Math.floor(s / 60); if (m < 60) return m + (m === 1 ? ' minute ago' : ' minutes ago');
    var h = Math.floor(m / 60); if (h < 24) return h + (h === 1 ? ' hour ago' : ' hours ago');
    var d = Math.floor(h / 24); if (d < 30) return d + (d === 1 ? ' day ago' : ' days ago');
    var mo = Math.floor(d / 30); return mo + (mo === 1 ? ' month ago' : ' months ago');
  }

  function formatDuration(ms) {
    var s = Math.floor(ms / 1000);
    var m = Math.floor(s / 60); s = s % 60;
    return m + ':' + (s < 10 ? '0' : '') + s;
  }

  function toast(msg, timeout) {
    var t = qs('#toast');
    if (!t) return;
    t.textContent = msg;
    t.classList.add('show');
    clearTimeout(toast._t);
    toast._t = setTimeout(function () { t.classList.remove('show'); }, timeout || 2600);
  }

  function confirmModal(title, body, onConfirm) {
    var modal = qs('#confirm-modal');
    qs('#confirm-title', modal).textContent = title;
    qs('#confirm-body', modal).textContent = body;
    modal.style.display = 'flex';
    function cleanup() {
      modal.style.display = 'none';
      okBtn.removeEventListener('click', onOk);
      cancelBtn.removeEventListener('click', onCancel);
    }
    function onOk() { cleanup(); onConfirm(); }
    function onCancel() { cleanup(); }
    var okBtn = qs('#confirm-ok');
    var cancelBtn = qs('#confirm-cancel');
    okBtn.addEventListener('click', onOk);
    cancelBtn.addEventListener('click', onCancel);
  }

  return {
    qs: qs, qsa: qsa, el: el, escapeHtml: escapeHtml, shuffle: shuffle, sample: sample,
    weightedSample: weightedSample, clamp: clamp, timeAgo: timeAgo, formatDuration: formatDuration,
    toast: toast, confirmModal: confirmModal
  };
})();
