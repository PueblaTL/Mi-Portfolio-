(() => {
  'use strict';
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  if (reducedMotion.matches) return;

  const name = document.querySelector('.hero-name');
  if (name) {
    const fullName = name.textContent;
    const typed = document.createElement('span');
    typed.className = 'hero-name-typed';
    typed.setAttribute('aria-hidden', 'true');
    name.append(typed);
    name.classList.add('is-typing');
    let index = 0;
    let timer;
    const finish = () => {
      window.clearTimeout(timer);
      name.classList.remove('is-typing');
      typed.remove();
      reducedMotion.removeEventListener('change', finish);
    };
    const typeNext = () => {
      typed.textContent = fullName.slice(0, ++index);
      timer = window.setTimeout(index < fullName.length ? typeNext : finish,
        index < fullName.length ? 105 : 900);
    };
    reducedMotion.addEventListener('change', finish);
    timer = window.setTimeout(typeNext, 250);
  }

  if (!('IntersectionObserver' in window)) return;
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.remove('reveal-pending');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.02 });
  document.querySelectorAll('.reveal:not(.in)').forEach(element => {
    element.classList.add('reveal-pending');
    observer.observe(element);
  });
})();
