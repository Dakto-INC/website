// Click-to-copy buttons.
//
// Adds a "Copy" button after every <code class="copyable">. The text copied is
// the code's own text, or its data-copy attribute if you want it to differ.
// Without JavaScript nothing is added and the IPs are still plain text.

(function () {
  var RESET_MS = 1800;

  function copyText(text) {
    // Modern API (needs HTTPS, which the site has).
    if (navigator.clipboard && window.isSecureContext) {
      return navigator.clipboard.writeText(text);
    }

    // Fallback for old browsers: copy from a temporary textarea.
    return new Promise(function (resolve, reject) {
      var previouslyFocused = document.activeElement;
      var area = document.createElement('textarea');
      area.value = text;
      area.setAttribute('readonly', '');
      area.style.position = 'fixed';
      area.style.top = '-1000px';
      document.body.appendChild(area);
      area.select();

      var ok = false;
      try { ok = document.execCommand('copy'); } catch (e) {}

      document.body.removeChild(area);
      if (previouslyFocused && previouslyFocused.focus) previouslyFocused.focus();

      if (ok) resolve(); else reject(new Error('copy failed'));
    });
  }

  // If copying is blocked, select the text so the visitor can press Ctrl+C.
  function selectContents(el) {
    var selection = window.getSelection && window.getSelection();
    if (!selection) return;
    var range = document.createRange();
    range.selectNodeContents(el);
    selection.removeAllRanges();
    selection.addRange(range);
  }

  function setup() {
    var codes = document.querySelectorAll('code.copyable');
    if (!codes.length) return;

    // One shared live region so screen readers hear the result.
    var status = document.createElement('span');
    status.className = 'visually-hidden';
    status.setAttribute('role', 'status');
    status.setAttribute('aria-live', 'polite');
    document.body.appendChild(status);

    codes.forEach(function (code) {
      var text = (code.getAttribute('data-copy') || code.textContent).trim();
      var timer = null;

      var button = document.createElement('button');
      button.type = 'button';
      button.className = 'copy-btn';
      button.textContent = 'Copy';
      button.setAttribute('aria-label', 'Copy ' + text);

      function reset() {
        button.classList.remove('is-copied');
        button.textContent = 'Copy';
      }

      button.addEventListener('click', function () {
        clearTimeout(timer);

        copyText(text).then(function () {
          button.classList.add('is-copied');
          button.textContent = 'Copied!';
          status.textContent = '';                 // re-announce on repeat clicks
          setTimeout(function () { status.textContent = 'Copied ' + text; }, 50);
        }, function () {
          selectContents(code);
          button.classList.remove('is-copied');
          button.textContent = 'Press Ctrl+C';
          status.textContent = 'Could not copy automatically. The text is selected, press Control C.';
        });

        timer = setTimeout(reset, RESET_MS);
      });

      code.insertAdjacentElement('afterend', button);
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', setup);
  } else {
    setup();
  }
})();
