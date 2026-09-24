(() => {
  'use strict';
  const burger = document.getElementById('burgerBtn');
  const panel = document.getElementById('mobilePanel');
  const desktop = window.matchMedia('(min-width: 67.1876em)');
  function closeMenu(returnFocus = false) {
    panel.classList.remove('open');
    burger.setAttribute('aria-expanded', 'false');
    burger.setAttribute('aria-label', 'Abrir menú');
    if (returnFocus) burger.focus();
  }
  burger.addEventListener('click', () => {
    const open = panel.classList.toggle('open');
    burger.setAttribute('aria-expanded', String(open));
    burger.setAttribute('aria-label', open ? 'Cerrar menú' : 'Abrir menú');
  });
  panel.querySelectorAll('a').forEach(link => link.addEventListener('click', () => closeMenu()));
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && panel.classList.contains('open')) closeMenu(true);
  });
  document.addEventListener('click', event => {
    if (!event.target.closest('header')) closeMenu();
  });
  document.querySelector('header').addEventListener('focusout', event => {
    if (event.relatedTarget && !event.currentTarget.contains(event.relatedTarget)) closeMenu();
  });
  desktop.addEventListener('change', () => { if (desktop.matches) closeMenu(); });
  const toggle = document.getElementById('themeToggle');
  function applyTheme(theme) {
    document.documentElement.dataset.theme = theme;
    toggle.setAttribute('aria-label', theme === 'dark' ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro');
    document.querySelector('meta[name="theme-color"]').content = theme === 'dark' ? '#0B0D10' : '#F7F8FA';
  }
  applyTheme(document.documentElement.dataset.theme || 'dark');
  toggle.addEventListener('click', () => {
    const theme = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
    applyTheme(theme);
    try { localStorage.setItem('theme', theme); } catch { /* Theme still works without storage. */ }
  });
})();
