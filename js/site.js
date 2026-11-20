// Mantiene los enlaces a la ubicación anterior de la biografía.
if (document.body.classList.contains('page-skills') && location.hash === '#about') {
  location.replace('index.html#about');
}

// Anima cada elemento al entrar por primera vez. El contenido siempre es visible.
const motion = matchMedia('(prefers-reduced-motion: no-preference)');
if (motion.matches && 'IntersectionObserver' in window && 'animate' in Element.prototype) {
  const reveals = new IntersectionObserver((entries, observer) => {
    for (const entry of entries) {
      if (!entry.isIntersecting) continue;
      observer.unobserve(entry.target);
      if (!motion.matches) continue;
      entry.target.animate(
        [{ opacity: .55, transform: 'translateY(14px)' }, { opacity: 1, transform: 'none' }],
        { duration: 420, easing: 'ease-out' },
      );
    }
  }, { threshold: .15 });

  document.querySelectorAll('.project-list > li, .timeline > li, .about > div')
    .forEach((element) => reveals.observe(element));
}
