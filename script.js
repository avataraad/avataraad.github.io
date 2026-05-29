// ──────────────────────────────────────────────────────────────
// Raad Beirouti — personal site
// Theme toggle. Pre-paint init is inline in <head>; this handles
// interaction + responding to OS preference changes.
// ──────────────────────────────────────────────────────────────

(function () {
  'use strict';

  const STORAGE_KEY = 'rb-theme';
  const root = document.documentElement;
  const toggle = document.querySelector('.theme-toggle');

  function setTheme(next, persist) {
    root.setAttribute('data-theme', next);
    if (persist) {
      try { localStorage.setItem(STORAGE_KEY, next); } catch (_) { /* no-op */ }
    }
  }

  if (toggle) {
    toggle.addEventListener('click', () => {
      const current = root.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
      setTheme(current === 'light' ? 'dark' : 'light', true);
    });
  }

  // Track OS preference, but only apply it when the user hasn't explicitly chosen.
  const mql = window.matchMedia('(prefers-color-scheme: dark)');
  const onMediaChange = (e) => {
    let stored = null;
    try { stored = localStorage.getItem(STORAGE_KEY); } catch (_) { /* no-op */ }
    if (stored !== 'light' && stored !== 'dark') {
      setTheme(e.matches ? 'dark' : 'light', false);
    }
  };
  if (typeof mql.addEventListener === 'function') {
    mql.addEventListener('change', onMediaChange);
  } else if (typeof mql.addListener === 'function') {
    mql.addListener(onMediaChange);
  }
})();
