const TAIL_LENGTH = 100; 
const cursorElement = document.getElementById('cursor');

let mouseX = 0;
let mouseY = 0;

let cursorCircles;
let cursorHistory = Array(TAIL_LENGTH).fill({ x: 0, y: 0 });

document.addEventListener('DOMContentLoaded', () => {
    iniciarApp();
});

function iniciarApp() {
    startCursorEffect(); 
}

function onMouseMove(event) {
    mouseX = event.clientX + window.scrollX;
    mouseY = event.clientY + window.scrollY;
}

function initCursor() {
    for (let i = 0; i < TAIL_LENGTH; i++) {
        let div = document.createElement('div');
        div.classList.add('cursor-circle');
        cursorElement.append(div);
    }
    cursorCircles = Array.from(document.querySelectorAll('.cursor-circle'));
}

function getCursorSize() {
    const computedStyle = getComputedStyle(document.documentElement);
    return parseFloat(computedStyle.getPropertyValue('--cursor-size'));
}

function updateCursor() {
    cursorHistory.shift();
    cursorHistory.push({ x: mouseX, y: mouseY });

    const cursorSize = getCursorSize();

    for (let i = 0; i < TAIL_LENGTH; i++) {
        let current = cursorHistory[i];
        let next = cursorHistory[i + 1] || cursorHistory[TAIL_LENGTH - 1];

        let xDiff = next.x - current.x;
        let yDiff = next.y - current.y;

        current.x += xDiff * 0.35;
        current.y += yDiff * 0.35;

        cursorCircles[i].style.transform = `translate(${current.x - (cursorSize / 2)}px, ${current.y - (cursorSize / 2)}px) scale(${i / TAIL_LENGTH})`;
    }
    requestAnimationFrame(updateCursor);
}

function startCursorEffect() { 
    document.addEventListener('mousemove', onMouseMove, false);
    initCursor();
    updateCursor();
}

/* Cambio de idiomas */
let currentLanguage = 'es'; 

function loadTranslations(lang) {
  fetch('./proyects.json')
    .then(response => response.json())
    .then(data => {
      const translations = data[lang];
      if (translations) {
        // Asignar el texto e imagen a los elementos HTML
        document.getElementById('titulo').textContent = translations.title;
        document.getElementById('contenido').textContent = translations.content;
        document.getElementById('imagen').src = translations.imageUrl;
      } else {
        console.error(`No se encontró el idioma: ${lang}`);
      }
    })
    .catch(error => console.error('Error cargando JSON:', error));
}
function changeLanguage(lang) {
  currentLanguage = lang;
  loadTranslations(currentLanguage);
}
loadTranslations(currentLanguage);
