const scenes = document.querySelectorAll('.scene');
const experience = document.getElementById('experience');
const flowerWrap = document.getElementById('flowerWrap');
const pollen = document.querySelector('.pollen');

function showScene(name) {
  scenes.forEach(scene => scene.classList.toggle('active', scene.dataset.scene === name));
  if (name === 'flower') requestAnimationFrame(() => experience.classList.add('bloomed'));
}

function wakeFlower() {
  flowerWrap.classList.remove('awake');
  pollen.classList.remove('release');
  pollen.replaceChildren();

  for (let index = 0; index < 14; index += 1) {
    const speck = document.createElement('i');
    speck.style.setProperty('--x', `${Math.round((Math.random() - .5) * 180)}px`);
    speck.style.setProperty('--y', `${-45 - Math.round(Math.random() * 125)}px`);
    speck.style.animationDelay = `${index * 22}ms`;
    pollen.appendChild(speck);
  }

  requestAnimationFrame(() => {
    flowerWrap.classList.add('awake');
    pollen.classList.add('release');
  });
}

document.getElementById('openGift').addEventListener('click', () => showScene('flower'));
document.getElementById('continueToNote').addEventListener('click', () => showScene('letter'));
document.getElementById('returnToFlower').addEventListener('click', () => showScene('final'));
document.getElementById('replay').addEventListener('click', () => showScene('flower'));
flowerWrap.addEventListener('click', wakeFlower);
