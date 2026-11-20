// El HTML muestra todas las tecnologías si JavaScript está desactivado.
const filters = document.querySelector('.filters');
const technologies = [...document.querySelectorAll('.technology-list [data-categories]')];
const status = document.querySelector('#filter-status');
const allowAnimation = matchMedia('(prefers-reduced-motion: no-preference)');
const filterAnimations = new Map();

filters.addEventListener('click', (event) => {
  const selected = event.target.closest('button[data-filter]');
  if (!selected || selected.getAttribute('aria-pressed') === 'true') return;

  const category = selected.dataset.filter;

  for (const button of filters.querySelectorAll('button')) {
    button.setAttribute('aria-pressed', String(button === selected));
  }

  let visibleCount = 0;
  for (const technology of technologies) {
    // Una tecnología puede pertenecer a varias categorías (por ejemplo, Python).
    const categories = technology.dataset.categories.split(' ');
    const visible = category === 'all' || categories.includes(category);
    technology.hidden = !visible;
    filterAnimations.get(technology)?.cancel();
    filterAnimations.delete(technology);
    if (!visible) continue;

    if (allowAnimation.matches && typeof technology.animate === 'function') {
      const animation = technology.animate(
        [{ opacity: .45, translate: '0 8px' }, { opacity: 1, translate: 'none' }],
        { duration: 280, delay: Math.min(visibleCount, 8) * 22, easing: 'ease-out', fill: 'backwards' },
      );
      filterAnimations.set(technology, animation);
    }
    visibleCount += 1;
  }

  status.textContent = visibleCount === 1
    ? '1 tecnología visible'
    : `${visibleCount} tecnologías visibles`;
});

filters.hidden = false;

// Cancela las entradas pendientes si la preferencia cambia durante el filtrado.
allowAnimation.addEventListener('change', () => {
  for (const animation of filterAnimations.values()) animation.cancel();
  filterAnimations.clear();
});
