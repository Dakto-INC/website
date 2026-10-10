function setupNav() {
  var nav = document.querySelector('.dki-nav');
  if (!nav) return;

  var menuButton = nav.querySelector('.dki-nav-toggle');
  var dropdowns = nav.querySelectorAll('.has-dropdown');

  function closeDropdowns(except) {
    dropdowns.forEach(function (li) {
      if (li === except) return;
      li.classList.remove('open');
      var btn = li.querySelector('.dki-nav-clickbox');
      if (btn) btn.setAttribute('aria-expanded', 'false');
    });
  }

  function setMenuOpen(open) {
    nav.classList.toggle('nav-open', open);
    if (menuButton) {
      menuButton.setAttribute('aria-expanded', open ? 'true' : 'false');
      menuButton.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    }
    if (!open) closeDropdowns();
  }

  // Dropdown buttons
  nav.querySelectorAll('.dki-nav-clickbox').forEach(function (btn) {
    btn.addEventListener('click', function (e) {
      e.preventDefault();
      var li = btn.parentElement;
      var willOpen = !li.classList.contains('open');
      closeDropdowns(li);
      li.classList.toggle('open', willOpen);
      btn.setAttribute('aria-expanded', willOpen ? 'true' : 'false');
    });
  });

  // Hamburger button (phones / tablets)
  if (menuButton) {
    menuButton.addEventListener('click', function () {
      setMenuOpen(!nav.classList.contains('nav-open'));
    });
  }

  // Click outside the nav closes everything
  document.addEventListener('click', function (e) {
    if (!nav.contains(e.target)) {
      closeDropdowns();
      setMenuOpen(false);
    }
  });

  // Escape key closes everything
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      closeDropdowns();
      setMenuOpen(false);
    }
  });

  // Going from phone size to desktop size: reset the mobile menu
  var desktop = window.matchMedia('(min-width: 64.01em)');
  var onChange = function (mq) { if (mq.matches) setMenuOpen(false); };
  if (desktop.addEventListener) desktop.addEventListener('change', onChange);
  else if (desktop.addListener) desktop.addListener(onChange);
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', setupNav);
} else {
  setupNav();
}
