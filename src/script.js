// Variables globales para el efecto de máquina de escribir
let index = 0;
let charIndex = 0;
let currentText = '';
let isDeleting = false;

// Función para el efecto de máquina de escribir
function type() {
    const typewriterElement = document.getElementById("typewriter");

    // Textos a mostrar en el efecto de máquina de escribir
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

    // Velocidad de escritura y borrado
    let typingSpeed = isDeleting ? 50 : 100; 

    // Pausa al finalizar una palabra antes de borrar
    if (!isDeleting && charIndex === currentText.length) {
        typingSpeed = 5000;
        isDeleting = true;
    } 
    // Cambiar al siguiente texto al terminar de borrar
    else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        index = (index + 1) % texts.length; // Ciclar entre los textos
        typingSpeed = 500;
    }

    // Ejecutar la función de nuevo después de un tiempo
    setTimeout(type, typingSpeed);
}

// Ejecutar el efecto de máquina de escribir cuando se cargue la página
window.onload = function() {
    setTimeout(type, 500); 
};



// --- Cursor personalizado ---

const TAIL_LENGTH = 60; // Longitud de la cola del cursor
const cursor = document.getElementById('cursor');

let mouseX = 0;
let mouseY = 0;

let cursorCircles;
let cursorHistory = Array(TAIL_LENGTH).fill({ x: 0, y: 0 });

// Obtener la posición del ratón cuando se mueva
function onMouseMove(event) {
    mouseX = event.clientX + window.scrollX;
    mouseY = event.clientY + window.scrollY;
}

// Inicializar el cursor con varios círculos para crear el efecto de cola
function initCursor() {
    for (let i = 0; i < TAIL_LENGTH; i++) {
        let div = document.createElement('div');
        div.classList.add('cursor-circle');
        cursor.append(div);
    }
    cursorCircles = Array.from(document.querySelectorAll('.cursor-circle'));
}

// Obtener el tamaño del cursor
function getCursorSize() {
    const computedStyle = getComputedStyle(document.documentElement);
    return parseFloat(computedStyle.getPropertyValue('--cursor-size'));
}

// Actualizar la posición del cursor y su efecto de cola
function updateCursor() {
    cursorHistory.shift();
    cursorHistory.push({ x: mouseX, y: mouseY });

    const cursorSize = getCursorSize(); // Obtener el tamaño del cursor

    // Mover cada círculo para crear el efecto de cola
    for (let i = 0; i < TAIL_LENGTH; i++) {
        let current = cursorHistory[i];
        let next = cursorHistory[i + 1] || cursorHistory[TAIL_LENGTH - 1];

        let xDiff = next.x - current.x;
        let yDiff = next.y - current.y;

        current.x += xDiff * 0.35;
        current.y += yDiff * 0.35;

        // Mover el círculo actual con su escala
        cursorCircles[i].style.transform = `translate(${current.x - (cursorSize / 2)}px, ${current.y - (cursorSize / 2)}px) scale(${i / TAIL_LENGTH})`;  
    }
    requestAnimationFrame(updateCursor); // Animar constantemente
}

// Iniciar la detección del movimiento del ratón
document.addEventListener('mousemove', onMouseMove, false);

// Inicializar y actualizar el cursor
initCursor();
updateCursor();

// --- Cambio de idioma ---

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
    udemy: "Udemy React Native Course",
    volver: "Return;",
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
    description: "Estudiante de ingeniería de software y desarrollador Full Stack en Colombia. Tengo 17 y especializo en crear aplicaciones funcionales sin comprometer la experiencia del usuario. Sin experiencia laboral pero con un fuerte deseo de seguir aprendiendo.",
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
    udemy: "Udemy Curso de React Native",
    volver: "Volver",

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
    udemy: "Udemy Курс React Native",
    volver: "Вернуться",
  }
};

// Detectar el idioma del usuario al cargar la página
document.addEventListener('DOMContentLoaded', () => {
  const userLanguage = detectUserLanguage();
  updatePageLanguage(userLanguage);

  // Marcar el botón de radio del idioma seleccionado
  document.querySelector(`input[value="${userLanguage}"]`).checked = true;
});

// Cambiar el idioma cuando el usuario selecciona otro en el radio button
document.querySelectorAll('input[name="value-radio"]').forEach((radio) => {
  radio.addEventListener('change', (event) => {
    const selectedLanguage = event.target.value;
    updatePageLanguage(selectedLanguage);
  });
});

// Detectar el idioma del navegador
function detectUserLanguage() {
  const userLang = navigator.language || navigator.userLanguage;
  
  if (userLang.startsWith('en')) {
    return 'english'; // Inglés
  } else if (userLang.startsWith('ru')) {
    return 'russian'; // Ruso
  } else {
    return 'spanish'; // Español por defecto
  }
}

// Actualizar el contenido de la página al cambiar de idioma

function updatePageLanguage(language) {
  document.querySelectorAll('[data-i18n]').forEach((element) => {
    const translationKey = element.getAttribute('data-i18n');
    element.innerHTML = translations[language][translationKey];
  });
}

// --- Animación de redirección ---
document.getElementById('verMasBtn').addEventListener('click', function () {
  gsap.to('#content', {
    opacity: 0,
    duration: 0.5,
    onComplete: function () {
      document.getElementById('content').classList.add('hidden');
    },
  });

  const proyectos = document.getElementById('section_proyects');
  proyectos.classList.remove('hidden');
  
  gsap.fromTo(
    proyectos,
    { opacity: 0, y: 50 }, 
    { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' } 
  );
});

document.getElementById('volverBtn').addEventListener('click', function () {
  gsap.to('#section_proyects', {
    opacity: 0,
    duration: 0.5,
    onComplete: function () {
      document.getElementById('section_proyects').classList.add('hidden');
      
      // Mostrar #content después de que #section_proyects esté oculto
      const content = document.getElementById('content');
      content.classList.remove('hidden');
      gsap.fromTo(
        content,
        { opacity: 0, y: 50 }, 
        { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' } 
      );
    },
  });
});


// Selecciona el contenedor donde se agregarán los elementos
const container = document.getElementById('section_proyects');

// SVG icon
const iconRedirect = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <path d="M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6"></path>
  <path d="M11 13l9 -9"></path>
  <path d="M15 4h5v5"></path>
</svg>`;

// Lee el archivo JSON
fetch('../proyects.json')
  .then((response) => response.json())
  .then((data) => {
    data.forEach((project) => {
      const card = document.createElement('div');
      card.className = 'flex w-80 flex-col rounded-xl bg-purpleLight2 transform transition duration-300 hover:scale-105';


      const imageContainer = document.createElement('div');
      imageContainer.className = 'relative mx-4 -mt-6 h-40 img-zoom';

      const image = document.createElement('img');
      image.src = project.image;
      image.alt = project.title;
      image.className = 'absolute inset-0 w-full h-full object-cover imagen rounded-xl img-zoom';
      imageContainer.appendChild(image);

      const textContainer = document.createElement('div');

      const content = document.createElement('div');
      content.className = 'p-6';

      const title = document.createElement('h5');
      title.className = 'mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-purpele antialiased';
      title.textContent = project.title;

      const link = document.createElement('a');
      link.className = 'icon_hover2 ';
      link.href = project.link;
      link.innerHTML =  iconRedirect;

      const description = document.createElement('p');
      description.className = 'block text-base font-light leading-relaxed';
      description.textContent = project.description;

      textContainer.appendChild(title);
      textContainer.appendChild(link);

      content.appendChild(textContainer);
      content.appendChild(description);

      const techContainer = document.createElement('div');
      techContainer.className = 'p-6 pt-0 flex flex-wrap gap-x-5 justify-end items-end';

      project.technologies.forEach((tech) => {
        const techSection = document.createElement('section');
        techSection.className = 'icon_hover2';

        const techIcon = document.createElement('img');
        techIcon.src = tech.icon;
        techIcon.alt = tech.name;

        techSection.appendChild(techIcon);
        techContainer.appendChild(techSection);
      });

      card.appendChild(imageContainer);
      card.appendChild(content);
      card.appendChild(techContainer);

      container.appendChild(card);
    });
  })
  .catch((error) => console.error('Error al cargar el archivo JSON:', error));

// --- Modal de imágenes ---

// Obtener el modal y los elementos para mostrar la imagen ampliada
var modal = document.getElementById("myModal");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");

// Inicialmente el modal está oculto
modal.style.display = "none";

// Obtener todas las imágenes con la clase "img-zoom" para abrir el modal
var images = document.getElementsByClassName("img-zoom");

// Añadir evento onclick para mostrar el modal con la imagen seleccionada
for (var i = 0; i < images.length; i++) {
    images[i].onclick = function() {
        modal.style.display = "block"; // Mostrar modal
        modalImg.src = this.src; // Asignar la imagen seleccionada
        captionText.innerHTML = this.alt; // Asignar el texto alternativo
    };
}

// Cerrar el modal cuando se haga clic en la 'X'
var span = document.getElementsByClassName("close")[0];
span.onclick = function() {
    modal.style.display = "none"; // Ocultar modal
};

// Cerrar el modal al hacer clic fuera de la imagen
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none"; // Ocultar modal
    }
};