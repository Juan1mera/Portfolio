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
  // Obtén la posición actual del mouse en el documento, incluyendo el scroll
  mouseX = event.clientX + window.scrollX;
  mouseY = event.clientY + window.scrollY;
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


//  Cambio de idioma

const translations = {
  english: {
    aboutme: "About Me",
    estudios: "Studies",
    proyectos: "Projects",
    contacto: "Contact",
    name: "Juan Jose Mera",
    profession: "Software Engineer Student",
    telefono: "Phone",
    email: "Email",
    ubi: "Location",
    hello: "Hi! I'm Juan",
    frasePro: "If you can imagine it, I can program it",
    disponible: "#Available",
    description: "Student of oftware Engineering and Full Stack Developer in Colombia. I am 17 and I specialize in creating functional applications without compromising user experience. No work experience but with a strong desire to keep learning.",
    tecnologias: "Technologies",
    herramientas: "Tools",
    aprendiendo: "Learning",
    uni: "Belgorod State University(BelGu)",
    carrera: "- Software Engineering and Information Technologies",
    semestre: "- Third Semester",
    title_inventario: "Inventory and Profit Management",
    description_inventario: "A web application designed to allow the company to efficiently manage its inventory, as well as to record sales, purchases, and expenses, among other things.",
    title_podekex: "Pokedex App",
    description_podedex: "An application created with the purpose of education using the PokeApi to display all the Pokemons, Statistics, movements etc",
    title_animalia: "Animalia",
    description_animalia: "Application in development. A platform designed for winners, veterinarians and adoption centers, which will allow the registration of the data of the animals, and publish them for adoption or sale.",
    verMas: "View More Projects",
  },
  spanish: {
    aboutme: "Sobre Mi",
    estudios: "Estudios",
    proyectos: "Proyectos",
    contacto: "Contacto",
    name: "Juan Jose Mera",
    profession: "Futuro Ingeniero de Software",
    telefono: "Teléfono",
    email: "Gmail",
    ubi: "Ubicación",
    hello: "¡Hola! Soy Juan",
    frasePro: "Si puedes imaginarlo, Puedo Programarlo",
    disponible: "#Disponible",
    description: "Estudiante de ingeniería de software y desarrollador Full Stack en Colombia. Soy 17 y especializo en crear aplicaciones funcionales sin comprometer la experiencia del usuario. Sin experiencia laboral pero con un fuerte deseo de seguir aprendiendo.",
    tecnologias: "Tecnologías",
    herramientas: "Herramientas",
    aprendiendo: "Aprendiendo",
    uni: "Universidad Estatal de Belgorod Rusia(BelGu)",
    carrera: "- Ingeniería en Software y Tecnologías de la Información",
    semestre: "- Tercer Semestre",
    title_inventario: "Gestión de Inventario y Ganancias",
    description_inventario: "Una aplicación web diseñada para permitir a la empresa gestionar de manera eficiente su inventario, así como realizar registros de ventas, compras y gastos, entre otros.",
    title_podekex: "Pokedex App",
    description_podedex: "Una aplicación creada con fin educativo usando la PokeApi para mostrar todos los pokemons, Estadisticas, movimientos etc",
    title_animalia: "Animalia",
    description_animalia: "Aplicación en desarrollo. Una plataforma diseñada para ganaderos, veterinarias y centros de adopción, que les permitirá gestionar el registro de los datos de los animales, y publicarlos para su adopción o venta.",
    verMas: "Ver más proyectos",
  },
  russian: {
    aboutme: "О меня",
    estudios: "Исследования",
    proyectos: "Проекты",
    contacto: "Контакты",
    name: "Хуан Хосе Мера",
    profession: "Студент факультета программной инженерии",
    telefono: "Телефон",
    email: "Почта",
    ubi: "Местонахождение",
    hello: "Привет! Я Хуан",
    frasePro: "Если вы можете себе это представить, я могу это запрограммировать",
    disponible: "#Доступно",
    description: "Студент факультета программной инженерии и разработчик Full Stack в Колумбии. Мне 17 лет, и я специализируюсь на создании функциональных приложений без ущерба для пользовательского опыта. Без опыта работы, но с большим желанием продолжать учиться.",
    tecnologias: "Технологии",
    herramientas: "Инструменты",  
    aprendiendo: "Обучение ",
    uni: "Белгородский государственный университет(БелГУ)",
    carrera: "- Инженерия программного обеспечения и информационных технологий",
    semestre: "- Третий семестр",
    title_inventario: "Управление инвентарем и прибылями",
    description_inventario: "Веб-приложение, разработанное для позволения компании эффективно управлять своим инвентарем, а также записывать продажи, покупки и расходы, в т.ч. другие вещи.",
    title_podekex: "Pokedex App",
    description_podedex: "Приложение, созданное с целью обучения, используя PokeApi, чтобы отобразить все Pokemons, статистику, движения и т.д.",
    title_animalia: "Анималия",
    description_animalia: "Приложение в разработке. Платформа, разработанная для победителей, ветеринаров и центров прибыли, которые позволят зарегистрировать данные животных и публиковать их для прибыли или продажи.",
    verMas: "Посмотреть больше проектов",
  }
};

document.addEventListener('DOMContentLoaded', () => {
  const userLanguage = detectUserLanguage();
  updatePageLanguage(userLanguage);
  
  // Selecciona el botón de radio correspondiente
  document.querySelector(`input[value="${userLanguage}"]`).checked = true;
});

document.querySelectorAll('input[name="value-radio"]').forEach((radio) => {
  radio.addEventListener('change', (event) => {
    const selectedLanguage = event.target.value;
    updatePageLanguage(selectedLanguage);
  });
});

function detectUserLanguage() {
  const userLang = navigator.language || navigator.userLanguage;
  
  if (userLang.startsWith('en')) {
    return 'english'; // Inglés
  } else if (userLang.startsWith('ru')) {
    return 'russian'; // Ruso
  } else {
    return 'spanish'; // Por defecto español
  }
}

function updatePageLanguage(language) {
  // Obtén todas las etiquetas que tengan el atributo data-i18n
  document.querySelectorAll('[data-i18n]').forEach((element) => {
    const translationKey = element.getAttribute('data-i18n');
    element.innerHTML = translations[language][translationKey]; // Usa innerHTML para el contenido con HTML
  });
}



// document.querySelectorAll('input[name="value-radio"]').forEach((radio) => {
//   radio.addEventListener('change', (event) => {
//     const selectedLanguage = event.target.value;
//     updatePageLanguage(selectedLanguage);
//   });
// });

// async function updatePageLanguage(language) {
//   const elements = document.querySelectorAll('[data-i18n]');
//   const desescribirPromises = [];

//   // Paso 1: Desescribir todos los textos simultáneamente
//   elements.forEach((element) => {
//     desescribirPromises.push(desescribir(element));
//   });

//   // Espera a que todos los textos se desescriban
//   await Promise.all(desescribirPromises);

//   // Paso 2: Escribir todos los textos simultáneamente
//   elements.forEach((element) => {
//     const translationKey = element.getAttribute('data-i18n');
//     const newText = translations[language][translationKey];
//     escribir(element, newText);
//   });
// }

// function desescribir(element) {
//   return new Promise((resolve) => {
//     const currentText = element.textContent;
//     let length = currentText.length;

//     const interval = setInterval(() => {
//       if (length > 0) {
//         element.textContent = currentText.slice(0, length - 1); // Elimina un carácter a la vez
//         length--;
//       } else {
//         clearInterval(interval);
//         resolve();
//       }
//     }, 50); // Velocidad de desescribir (50ms por carácter)
//   });
// }

// function escribir(element, newText) {
//   return new Promise((resolve) => {
//     let index = 0;

//     const interval = setInterval(() => {
//       if (index < newText.length) {
//         element.textContent += newText.charAt(index); // Añade un carácter a la vez
//         index++;
//       } else {
//         clearInterval(interval);
//         resolve();
//       }
//     }, 100); // Velocidad de escribir (100ms por carácter)
//   });
// }


document.getElementById('verMasBtn').addEventListener('click', function(e) {
  e.preventDefault(); // Evitar la redirección inmediata

  // Aplicar la clase que activa la animación
  document.body.classList.add('slide-out');

  // Esperar a que la animación termine (1 segundo) antes de redirigir
  setTimeout(() => {
      window.location.href = this.href; // Redirigir a projects.html
  }, 1000); // El tiempo coincide con la duración de la animación (1s)
});
