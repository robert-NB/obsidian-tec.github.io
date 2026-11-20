// Mantiene los enlaces a secciones que existían en el portfolio de una sola página.
const oldSections = {
  projects: 'proyectos.html',
  skills: 'trayectoria.html',
  stack: 'stack.html',
  contact: 'contacto.html',
};
const destination = oldSections[location.hash.slice(1)];
if (typeof destination === 'string') location.replace(destination);

const scene = document.querySelector('[data-portrait]');
const paletteButton = document.querySelector('.palette-toggle');
const paletteStatus = document.querySelector('[data-palette-status]');
const palettes = [
  { key: 'lime', name: 'Lima' },
  { key: 'pink', name: 'Rosa' },
  { key: 'aqua', name: 'Turquesa' },
];

let paletteIndex = 0;
paletteButton.hidden = false;
paletteButton.addEventListener('click', () => {
  paletteIndex = (paletteIndex + 1) % palettes.length;
  const palette = palettes[paletteIndex];
  scene.dataset.palette = palette.key;
  paletteStatus.textContent = 'Color del retrato: ' + palette.name;
});

// El desplazamiento solo se aplica con puntero preciso y movimiento permitido.
const canTilt = matchMedia('(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)');

function resetTilt() {
  scene.style.removeProperty('--tilt-x');
  scene.style.removeProperty('--tilt-y');
}

scene.addEventListener('pointermove', (event) => {
  if (!canTilt.matches || event.pointerType === 'touch') return;
  const bounds = scene.getBoundingClientRect();
  scene.style.setProperty('--tilt-x', ((event.clientX - bounds.left) / bounds.width - .5) * 14 + 'deg');
  scene.style.setProperty('--tilt-y', ((event.clientY - bounds.top) / bounds.height - .5) * -14 + 'deg');
});
scene.addEventListener('pointerleave', resetTilt);
canTilt.addEventListener('change', resetTilt);
