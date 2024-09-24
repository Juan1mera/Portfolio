let index = 0;
let charIndex = 0;
let currentText = '';
let isDeleting = false;

function type() {
    const typewriterElement = document.getElementById("typewriter");

    const texts = [
        " Software Engineer Student",
        " Full Stack Developer",
        " :3"
    ];

    currentText = texts[index];
    
    if (isDeleting) {
        charIndex--;
        typewriterElement.innerHTML = currentText.substring(0, charIndex);
    } else {
        charIndex++;
        typewriterElement.innerHTML = currentText.substring(0, charIndex);
    }

    let typingSpeed = isDeleting ? 50 : 100; 

    if (!isDeleting && charIndex === currentText.length) {
        typingSpeed = 5000;
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        index = (index + 1) % texts.length;
        typingSpeed = 500;
    }

    setTimeout(type, typingSpeed);
}

window.onload = function() {
    setTimeout(type, 500); 
};

// Abrir modal
// Obtener los elementos del modal
var modal = document.getElementById("myModal");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");

// Asegúrate de que el modal esté oculto inicialmente
modal.style.display = "none";

// Obtener todas las imágenes con la clase "img-zoom"
var images = document.getElementsByClassName("img-zoom");

// Iterar sobre las imágenes y añadir el evento onclick a cada una
for (var i = 0; i < images.length; i++) {
    images[i].onclick = function() {
        modal.style.display = "block"; // Mostrar el modal
        modalImg.src = this.src; // Asignar la imagen al modal
        captionText.innerHTML = this.alt; // Asignar el texto alternativo
    }
}

// Cuando se hace clic en el botón de cerrar, se oculta el modal
var span = document.getElementsByClassName("close")[0];
span.onclick = function() {
    modal.style.display = "none"; // Ocultar el modal
}

// También cerrar el modal al hacer clic fuera de la imagen
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none"; // Ocultar el modal
    }
}



// Cursor

const TAIL_LENGTH = 20;
const cursor = document.getElementById('cursor');

let mouseX = 0;
let mouseY = 0;

let cursorCircles;
let cursorHistory = Array(TAIL_LENGTH).fill({ x: 0, y: 0 });

function onMouseMove(event) {
  mouseX = event.clientX;
  mouseY = event.clientY;
}

function initCursor() {
  for (let i = 0; i < TAIL_LENGTH; i++) {
    let div = document.createElement('div');
    div.classList.add('cursor-circle');
    cursor.append(div);
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
  
    const cursorSize = getCursorSize(); // Obtener el tamaño del cursor
  
    for (let i = 0; i < TAIL_LENGTH; i++) {
      let current = cursorHistory[i];
      let next = cursorHistory[i + 1] || cursorHistory[TAIL_LENGTH - 1];
  
      let xDiff = next.x - current.x;
      let yDiff = next.y - current.y;
  
      current.x += xDiff * 0.35;
      current.y += yDiff * 0.35;
  
      // Resta la mitad del tamaño del cursor para centrarlo
      cursorCircles[i].style.transform = `translate(${current.x - (cursorSize / 2)}px, ${current.y - (cursorSize / 2)}px) scale(${i / TAIL_LENGTH})`;  
    }
    requestAnimationFrame(updateCursor);
  }
  

document.addEventListener('mousemove', onMouseMove, false);

initCursor();
updateCursor();


