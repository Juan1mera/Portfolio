// src/constants/translations.ts

export type Language = 'en' | 'es' | 'ru';

export interface FAQItemTranslation {
  question: string;
  answer: string;
}

export interface TermsSectionTranslation {
  title: string;
  content: string;
}

export interface ProjectText {
  title: string;
  role: string;
  description: string;
}

export interface StudiesItem {
  institution: string;
  period: string;
  degree: string;
  details: string;
}

export interface TranslationsSchema {
  nav: {
    home: string;
    about: string;
    studies: string;
    works: string;
    contact: string;
    buyMeCoffee: string;
    support: string;
    terms: string;
    letsTalk: string;
    appearance: string;
    menu: string;
    close: string;
  };
  hero: {
    imA: string;
    fullStack: string;
    developer: string;
    withExperience: string;
    in: string;
    categories: string;
  };
  about: {
    titleTop: string[];
    titleBottom: string[];
    titlePurple: string;
    p1: string;
    p2: string;
    p3: string;
    letsTalk: string;
  };
  studies: {
    titleTop: string[];
    titleBottom: string[];
    titlePurple: string;
    items: StudiesItem[];
  };
  skills: {
    technologies: string;
    frameworks: string;
    tools: string;
  };
  work: {
    titleTop: string[];
    titleBottom: string[];
    titlePurple: string;
    webs: string;
    apps: string;
    games: string;
    projects: {
      // Web Projects
      amigovetWeb: ProjectText;
      knowYou: ProjectText;
      zentryClon: ProjectText;
      dataManagement: ProjectText;
      // App Projects
      amigovetApp: ProjectText;
      goCab: ProjectText;
      chainly: ProjectText;
      // Game Projects
      marioClone: ProjectText;
      spaceShooter: ProjectText;
    };
  };
  contact: {
    titleTop: string[];
    titleBottom: string[];
    titlePurple: string;
    clickToCopy: string;
    copiedText: string;
    downloadCv: string;
    cvDetails: string;
  };
  footer: {
    madeWith: string;
    by: string;
    rightsReserved: string;
  };
  support: {
    titleTop: string[];
    titleBottom: string[];
    titlePurple: string;
    intro: string;
    getInTouch: string;
    faqsTitle: string;
    faqsPurple: string;
    faqs: FAQItemTranslation[];
  };
  terms: {
    titleTop: string[];
    titleBottom: string[];
    titlePurple: string;
    sections: TermsSectionTranslation[];
    lastUpdated: string;
  };
}

export const translations: Record<Language, TranslationsSchema> = {
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      studies: 'Studies',
      works: 'Works',
      contact: 'Contact',
      buyMeCoffee: 'Buy me a Coffee',
      support: 'Support',
      terms: 'Terms',
      letsTalk: "Let's Talk",
      appearance: 'Appearance',
      menu: 'Menu',
      close: 'Close',
    },
    hero: {
      imA: "I'm a",
      fullStack: 'FULL-STACK',
      developer: 'DEVELOPER',
      withExperience: 'with experience',
      in: 'in',
      categories: 'WEB, APPS & GAMING',
    },
    about: {
      titleTop: ['GET', 'TO'],
      titleBottom: ['KNOW', 'ME'],
      titlePurple: 'ME',
      p1: "I'm Juan José Mera Barrera, 18 years old, and currently in my fifth semester of Applied Informatics and Information Technologies at Belgorod State National Research University (BelGU), Russia. I've been passionate about programming since I was 10, starting with robotics using Arduino and later shifting my full focus to software development.",
      p2: "I'm obsessed with crafting beautiful, intuitive, and user-friendly interfaces while optimizing performance in both web applications and servers. I have two years of hands-on programming experience, though no formal work history yet.",
      p3: "I'm eager to join a team where I can contribute my best, collaborate effectively, and help drive innovative projects forward.",
      letsTalk: "Let's Talk",
    },
    studies: {
      titleTop: ['MY', 'ACADEMIC'],
      titleBottom: ['STUDIES'],
      titlePurple: 'STUDIES',
      items: [
        {
          institution: 'Belgorod State National Research University (BelGU)',
          period: '2024 - Present',
          degree: "Bachelor's Degree in Applied Informatics and Information Technologies",
          details: 'Currently in the fifth semester. Focusing on Algorithms and Data Structures, Software Engineering, Database Systems (SQL/NoSQL), and System Architecture in Belgorod, Russia.',
        },
        {
          institution: 'Self-Taught & Advanced Online Certifications',
          period: '2020 - Present',
          degree: 'Full-Stack Web, Mobile & Game Development Specialization',
          details: 'Intense hands-on learning through development of complex platforms (Spring Boot, Flutter, NestJS, Next.js, GSAP). Focus on clean architecture, UI/UX aesthetics, animations, and system performance.',
        },
      ],
    },
    skills: {
      technologies: 'Technologies',
      frameworks: 'Frameworks',
      tools: 'Tools',
    },
    work: {
      titleTop: ['CHECK', 'OUT'],
      titleBottom: ['MY', 'WORK'],
      titlePurple: 'MY',
      webs: 'WEBS',
      apps: 'APPS',
      games: 'GAMES',
      projects: {
        amigovetWeb: {
          title: 'AmigoVet Web',
          role: 'Frontend Developer',
          description: 'Website for the presentation of the "AmigoVet" mobile application in order to showcase its functionalities, previous versions and everything related.',
        },
        knowYou: {
          title: 'KnowYou',
          role: 'Full Stack',
          description: 'Website for the presentation of the "AmigoVet" mobile application in order to showcase its functionalities, previous versions and everything related.',
        },
        zentryClon: {
          title: 'Zentry Clon',
          role: 'Frontend Developer',
          description: 'Zentry is a company that works with artificial intelligence. This 2024 clone of the Zentry website was created to practice using front-end development, animations with GSAP, and SEO.',
        },
        dataManagement: {
          title: 'Data management',
          role: 'Full-Stack Developer',
          description: 'Management system for data from multiple points of sale, where each point of sale can add only data from its own point of sale, and the administrator can view, modify, and generate monthly reports in Excel.',
        },
        amigovetApp: {
          title: 'AmigoVet',
          role: 'Full-Stack Developer',
          description: 'Mobile application for the care of your pets, where you can keep all the information about your pet as if it were its virtual ID card.',
        },
        goCab: {
          title: 'GoCab',
          role: 'Full-Stack Developer',
          description: 'A multiplatform mobile application where you can access it as both a user and a driver. You can see nearby taxis, request a ride, the driver can make you a counteroffer, you can track the trip and rate it at the end of the ride, built with Flutter and Spring Boot as the backend.',
        },
        chainly: {
          title: 'Chainly',
          role: 'Full-Stack Developer',
          description: 'A mobile application built in Flutter, designed for managing personal finances. It allows the registration of multiple wallets, whether bank accounts or cash, each with its own currency. It also enables the recording of cash outflows, inflows, and transfers between cards of different currencies using an API.',
        },
        marioClone: {
          title: 'Mario Clone',
          role: 'Game Developer',
          description: 'A platform game with multiple levels, similar to the 1985 Mario game, using sprites taken from the internet, made entirely in Python with the PyGame library.',
        },
        spaceShooter: {
          title: 'Space Shooter',
          role: 'Game Developer',
          description: 'A game with two difficulty levels, where the difficulty increases as time progresses in each level, made entirely in Python using the PyGame library.',
        },
      },
    },
    contact: {
      titleTop: ["LET'S", "BUILD"],
      titleBottom: ['SOMETHING'],
      titlePurple: 'BUILD',
      clickToCopy: 'Click to copy!',
      copiedText: '¡Copied! Paste wherever you want',
      downloadCv: 'Download CV',
      cvDetails: 'PDF • 2025',
    },
    footer: {
      madeWith: 'Made with',
      by: 'by',
      rightsReserved: 'All rights reserved.',
    },
    support: {
      titleTop: ['NEED '],
      titleBottom: ['HELP?'],
      titlePurple: 'HELP?',
      intro: "I'm here to help you with any questions or concerns you might have about my work, projects, or collaborations. Feel free to reach out and I'll get back to you as soon as possible.",
      getInTouch: 'Get in Touch',
      faqsTitle: 'Frequently Asked',
      faqsPurple: 'Questions',
      faqs: [
        {
          question: 'How can I collaborate with you?',
          answer: "I'm always open to new projects and collaborations. Send me an email with details about your project, timeline, and budget, and I'll get back to you within 48 hours.",
        },
        {
          question: "What's your typical response time?",
          answer: 'I usually respond to emails within 24-48 hours during weekdays. For urgent matters, please mention it in the subject line.',
        },
        {
          question: 'Do you work on freelance projects?',
          answer: 'Yes! I\'m available for freelance work and consulting. I specialize in full-stack web development, mobile applications, and game development.',
        },
        {
          question: 'Can I use your code or projects?',
          answer: 'Some of my projects are open source and available on GitHub. Please check the individual project licenses. For commercial use, feel free to reach out to discuss licensing options.',
        },
        {
          question: 'Do you provide mentorship or tutoring?',
          answer: "I'm passionate about helping others learn programming. Depending on my availability, I may be able to provide mentorship or tutoring. Contact me to discuss the details.",
        },
      ],
    },
    terms: {
      titleTop: ['TERMS', '&'],
      titleBottom: ['CONDITIONS'],
      titlePurple: 'CONDITIONS',
      lastUpdated: 'Last updated: December 2025',
      sections: [
        {
          title: '1. Acceptance of Terms',
          content: 'By accessing and using this portfolio website, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by these terms, please do not use this service.',
        },
        {
          title: '2. Use License',
          content: 'Permission is granted to temporarily view the materials on this website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not modify or copy the materials, use the materials for any commercial purpose, or attempt to decompile or reverse engineer any software contained on the website.',
        },
        {
          title: '3. Disclaimer',
          content: "The materials on this website are provided on an 'as is' basis. I make no warranties, expressed or implied, and hereby disclaim and negate all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.",
        },
        {
          title: '4. Limitations',
          content: 'In no event shall I or my suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on this website, even if I or my authorized representative has been notified orally or in writing of the possibility of such damage.',
        },
        {
          title: '5. Revisions and Errata',
          content: 'The materials appearing on this website could include technical, typographical, or photographic errors. I do not warrant that any of the materials on this website are accurate, complete or current. I may make changes to the materials contained on this website at any time without notice.',
        },
        {
          title: '6. Links',
          content: "I have not reviewed all of the sites linked to this website and am not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by me of the site. Use of any such linked website is at the user's own risk.",
        },
        {
          title: '7. Modifications',
          content: 'I may revise these terms of service for this website at any time without notice. By using this website you are agreeing to be bound by the then current version of these terms of service.',
        },
      ],
    },
  },
  es: {
    nav: {
      home: 'Inicio',
      about: 'Sobre Mí',
      studies: 'Estudios',
      works: 'Proyectos',
      contact: 'Contacto',
      buyMeCoffee: 'Invítame a un Café',
      support: 'Soporte',
      terms: 'Términos',
      letsTalk: 'Hablemos',
      appearance: 'Aspecto',
      menu: 'Menú',
      close: 'Cerrar',
    },
    hero: {
      imA: 'Soy un',
      fullStack: 'DESARROLLADOR',
      developer: 'FULL-STACK',
      withExperience: 'con experiencia',
      in: 'en',
      categories: 'WEB, APLICACIONES Y JUEGOS',
    },
    about: {
      titleTop: ['CONOCE', 'MÁS'],
      titleBottom: ['SOBRE', 'MÍ'],
      titlePurple: 'MÍ',
      p1: 'Soy Juan José Mera Barrera, tengo 18 años y actualmente curso el quinto semestre de Informática Aplicada y Tecnologías de la Información en la Universidad Nacional de Investigación del Estado de Belgorod (BelGU), Rusia. Me apasiona la programación desde los 10 años, comenzando con la robótica usando Arduino y más tarde enfocándome por completo en el desarrollo de software.',
      p2: 'Me obsesiona crear interfaces hermosas, intuitivas y fáciles de usar, optimizando al mismo tiempo el rendimiento tanto en aplicaciones web como en servidores. Tengo dos años de experiencia práctica en programación, aunque todavía no cuento con un historial laboral formal.',
      p3: 'Estoy ansioso por unirme a un equipo donde pueda dar lo mejor de mí, colaborar de manera efectiva y ayudar a impulsar proyectos innovadores.',
      letsTalk: 'Hablemos',
    },
    studies: {
      titleTop: ['MIS', 'ESTUDIOS'],
      titleBottom: ['ACADÉMICOS'],
      titlePurple: 'ESTUDIOS',
      items: [
        {
          institution: 'Universidad Nacional de Investigación del Estado de Belgorod (BelGU)',
          period: '2023 - 2026',
          degree: 'Ingenieria en sistemas y Tecnologías de la Información',
          details: 'Actualmente cursando el sexto semestre. Formación sólida en Algoritmos y Estructuras de Datos, Ingeniería de Software, Sistemas de Bases de Datos (SQL/NoSQL) y Arquitectura de Sistemas en Belgorod, Rusia.',
        },
        {
          institution: 'Certificado de Python Institute',
          period: '2024',
          degree: 'Curso de Python Essentials',
          details: 'Aprendizaje práctico intensivo mediante el desarrollo de plataformas complejas de escritorio con PyQT, aplicaiones web con Django, Flask y FastAPI, ademas de apps moviles con Kivi.',
        },
      ],
    },
    skills: {
      technologies: 'Tecnologías',
      frameworks: 'Frameworks',
      tools: 'Herramientas',
    },
    work: {
      titleTop: ['MIRA', 'MIS'],
      titleBottom: ['TRABAJOS'],
      titlePurple: 'TRABAJOS',
      webs: 'SITIOS WEB',
      apps: 'APLICACIONES',
      games: 'JUEGOS',
      projects: {
        amigovetWeb: {
          title: 'AmigoVet Web',
          role: 'Desarrollador Frontend',
          description: 'Sitio web para la presentación de la aplicación móvil "AmigoVet" con el fin de mostrar sus funcionalidades, versiones anteriores y todo lo relacionado.',
        },
        knowYou: {
          title: 'KnowYou',
          role: 'Full Stack',
          description: 'Sitio web para la presentación de la aplicación móvil "AmigoVet" con el fin de mostrar sus funcionalidades, versiones anteriores y todo lo relacionado.',
        },
        zentryClon: {
          title: 'Zentry Clon',
          role: 'Desarrollador Frontend',
          description: 'Zentry es una empresa que trabaja con inteligencia artificial. Este clon de 2024 del sitio web de Zentry fue creado para practicar el desarrollo front-end, las animaciones con GSAP y SEO.',
        },
        dataManagement: {
          title: 'Gestión de datos',
          role: 'Desarrollador Full-Stack',
          description: 'Sistema de gestión de datos para múltiples puntos de venta, donde cada punto de venta solo puede agregar datos de su propio punto de venta, y el administrador puede ver, modificar y generar informes mensuales en Excel.',
        },
        amigovetApp: {
          title: 'AmigoVet',
          role: 'Desarrollador Full-Stack',
          description: 'Aplicación móvil para el cuidado de tus mascotas, donde puedes guardar toda la información de tu mascota como si fuera su carnet de identidad virtual.',
        },
        goCab: {
          title: 'GoCab',
          role: 'Desarrollador Full-Stack',
          description: 'Una aplicación móvil multiplataforma a la que puedes acceder tanto como usuario como conductor. Puedes ver taxis cercanos, solicitar un viaje, el conductor puede hacerte una contraoferta, puedes rastrear el viaje y calificarlo al final, construida con Flutter y Spring Boot en el backend.',
        },
        chainly: {
          title: 'Chainly',
          role: 'Desarrollador Full-Stack',
          description: 'Una aplicación móvil construida en Flutter, diseñada para la gestión de finanzas personales. Permite el registro de múltiples billeteras, ya sean cuentas bancarias o efectivo, cada una con su propia moneda. También permite registrar egresos, ingresos y transferencias de efectivo entre tarjetas de diferentes monedas mediante una API.',
        },
        marioClone: {
          title: 'Clon de Mario',
          role: 'Desarrollador de Videojuegos',
          description: 'Un juego de plataformas con múltiples niveles, similar al juego de Mario de 1985, utilizando sprites tomados de internet, hecho completamente en Python con la librería PyGame.',
        },
        spaceShooter: {
          title: 'Space Shooter',
          role: 'Desarrollador de Videojuegos',
          description: 'Un juego con dos niveles de dificultad, donde la dificultad aumenta a medida que pasa el tiempo en cada nivel, hecho completamente en Python usando la librería PyGame.',
        },
      },
    },
    contact: {
      titleTop: ['CONSTRUYAMOS'],
      titleBottom: ['ALGO', 'JUNTOS'],
      titlePurple: 'CONSTRUYAMOS',
      clickToCopy: '¡Haz clic para copiar!',
      copiedText: '¡Copiado! Pégalo donde quieras',
      downloadCv: 'Descargar CV',
      cvDetails: 'PDF • 2025',
    },
    footer: {
      madeWith: 'Hecho con',
      by: 'por',
      rightsReserved: 'Todos los derechos reservados.',
    },
    support: {
      titleTop: ['¿NECESITAS '],
      titleBottom: ['AYUDA?'],
      titlePurple: 'AYUDA?',
      intro: 'Estoy aquí para ayudarte con cualquier pregunta o duda que puedas tener sobre mi trabajo, proyectos o colaboraciones. No dudes en ponerte en contacto y te responderé lo antes posible.',
      getInTouch: 'Ponte en Contacto',
      faqsTitle: 'Preguntas',
      faqsPurple: 'Frecuentes',
      faqs: [
        {
          question: '¿Cómo puedo colaborar contigo?',
          answer: 'Siempre estoy abierto a nuevos proyectos y colaboraciones. Envíame un correo electrónico con los detalles de tu proyecto, cronograma y presupuesto, y te responderé en un plazo de 48 horas.',
        },
        {
          question: '¿Cuál es tu tiempo de respuesta habitual?',
          answer: 'Normalmente respondo a los correos electrónicos dentro de las 24-48 horas durante los días laborables. Para asuntos urgentes, por favor menciónalo en el asunto.',
        },
        {
          question: '¿Trabajas en proyectos freelance?',
          answer: '¡Sí! Estoy disponible para trabajo freelance y consultoría. Me especializo en desarrollo web full-stack, aplicaciones móviles y desarrollo de videojuegos.',
        },
        {
          question: '¿Puedo usar tu código o proyectos?',
          answer: 'Algunos de mis proyectos son de código abierto y están disponibles en GitHub. Por favor, consulta las licencias individuales de cada proyecto. Para uso comercial, no dudes en ponerte en contacto para discutir las opciones de licencia.',
        },
        {
          question: '¿Ofreces mentoría o tutoría?',
          answer: 'Me apasiona ayudar a otros a aprender programación. Dependiendo de mi disponibilidad, puedo ofrecer mentoría o tutorías. Contáctame para discutir los detalles.',
        },
      ],
    },
    terms: {
      titleTop: ['TÉRMINOS', 'Y'],
      titleBottom: ['CONDICIONES'],
      titlePurple: 'CONDICIONES',
      lastUpdated: 'Última actualización: Diciembre 2025',
      sections: [
        {
          title: '1. Aceptación de los Términos',
          content: 'Al acceder y utilizar este sitio web de portafolio, aceptas y acuerdas estar sujeto a los términos y disposiciones de este acuerdo. Si no estás de acuerdo con estos términos, por favor no utilices este servicio.',
        },
        {
          title: '2. Licencia de Uso',
          content: 'Se otorga permiso para ver temporalmente los materiales en este sitio web únicamente para visualización transitoria, personal y no comercial. Esto es la concesión de una licencia, no una transferencia de título, y bajo esta licencia no puedes modificar o copiar los materiales, usar los materiales para cualquier propósito comercial, ni intentar decompilar o realizar ingeniería inversa en cualquier software contenido en el sitio web.',
        },
        {
          title: '3. Descargo de Responsabilidad',
          content: "Los materiales en este sitio web se proporcionan 'tal cual'. No ofrezco garantías, expresas o implícitas, y por la presente renuncio y niego todas las demás garantías, incluyendo, sin limitación, garantías implícitas o condiciones de comerciabilidad, idoneidad para un propósito particular o no infracción de propiedad intelectual u otra violación de derechos.",
        },
        {
          title: '4. Limitaciones',
          content: 'En ningún caso yo o mis proveedores seremos responsables de ningún daño (incluyendo, sin limitación, daños por pérdida de datos o ganancias, o debido a interrupción del negocio) que surja del uso o la imposibilidad de usar los materiales en este sitio web, incluso si yo o mi representante autorizado hemos sido notificados verbalmente o por escrito de la posibilidad de tales daños.',
        },
        {
          title: '5. Revisiones y Erratas',
          content: 'Los materiales que aparecen en este sitio web podrían incluir errores técnicos, tipográficos o fotográficos. No garantizo que ninguno de los materiales en este sitio web sea preciso, completo o actual. Puedo realizar cambios en los materiales contenidos en este sitio web en cualquier momento sin previo aviso.',
        },
        {
          title: '6. Enlaces',
          content: 'No he revisado todos los sitios vinculados a este sitio web y no soy responsable de los contenidos de ninguno de estos sitios vinculados. La inclusión de cualquier enlace no implica mi respaldo al sitio. El uso de cualquiera de estos sitios web vinculados es bajo el propio riesgo del usuario.',
        },
        {
          title: '7. Modificaciones',
          content: 'Puedo revisar estos términos de servicio para este sitio web en cualquier momento sin previo aviso. Al usar este sitio web, aceptas estar sujeto a la versión vigente en ese momento de estos términos de servicio.',
        },
      ],
    },
  },
  ru: {
    nav: {
      home: 'Главная',
      about: 'Обо мне',
      studies: 'Обучение',
      works: 'Работы',
      contact: 'Контакты',
      buyMeCoffee: 'Купи мне кофе',
      support: 'Поддержка',
      terms: 'Условия',
      letsTalk: 'Связаться',
      appearance: 'Оформление',
      menu: 'Меню',
      close: 'Закрыть',
    },
    hero: {
      imA: 'Я',
      fullStack: 'FULL-STACK',
      developer: 'РАЗРАБОТЧИК',
      withExperience: 'с опытом в сфере',
      in: 'в',
      categories: 'ВЕБ-САЙТОВ, ПРИЛОЖЕНИЙ И ИГР',
    },
    about: {
      titleTop: ['УЗНАЙТЕ'],
      titleBottom: ['ОБО', 'МНЕ'],
      titlePurple: 'МНЕ',
      p1: 'Я Хуан Хосе Мера Баррера, мне 18 лет, и в настоящее время я учусь на пятом семестре прикладной информатики и информационных технологий в Белгородском государственном национальном исследовательском университете (НИУ БелГУ), Россия. Я увлекаюсь программированием с 10 лет, начав с робототехники на Arduino, а затем полностью переключившись на разработку программного обеспечения.',
      p2: 'Я одержим созданием красивых, интуитивно понятных и удобных интерфейсов при оптимизации производительности как в веб-приложениях, так и на серверах. У меня есть два года практического опыта программирования, хотя официальной трудовой биографии пока нет.',
      p3: 'Я стремлюсь присоединиться к команде, где смогу проявить себя наилучшим образом, эффективно сотрудничать и помогать продвигать инновационные проекты вперед.',
      letsTalk: 'Связаться',
    },
    studies: {
      titleTop: ['МОЕ'],
      titleBottom: ['ОБРАЗОВАНИЕ'],
      titlePurple: 'ОБРАЗОВАНИЕ',
      items: [
        {
          institution: 'Белгородский государственный национальный исследовательский университет (НИУ БелГУ)',
          period: '2024 - Наст. время',
          degree: 'Бакалавриат по направлению «Прикладная информатика и информационные технологии»',
          details: 'В настоящее время обучаюсь на пятом семестре. Прочная подготовка в области алгоритмов и структур данных, программной инженерии, систем баз данных (SQL/NoSQL) и архитектуры систем в Белгороде, Россия.',
        },
        {
          institution: 'Самообучение и передовые онлайн-сертификации',
          period: '2020 - Наст. время',
          degree: 'Специализация в области Full-Stack веб, мобильной и игровой разработки',
          details: 'Интенсивное практическое обучение посредством разработки сложных платформ (Spring Boot, Flutter, NestJS, Next.js, GSAP). Внимание к чистой архитектуре, эстетике UI/UX, анимации и производительности систем.',
        },
      ],
    },
    skills: {
      technologies: 'Технологии',
      frameworks: 'Фреймворки',
      tools: 'Инструменты',
    },
    work: {
      titleTop: ['ПОСМОТРИТЕ'],
      titleBottom: ['МОИ', 'РАБОТЫ'],
      titlePurple: 'РАБОТЫ',
      webs: 'ВЕБ-САЙТЫ',
      apps: 'ПРИЛОЖЕНИЯ',
      games: 'ИГРЫ',
      projects: {
        amigovetWeb: {
          title: 'AmigoVet Web',
          role: 'Frontend-разработчик',
          description: 'Веб-сайт для презентации мобильного приложения «AmigoVet» с целью демонстрации его возможностей, предыдущих версий и сопутствующей информации.',
        },
        knowYou: {
          title: 'KnowYou',
          role: 'Full Stack разработчик',
          description: 'Веб-сайт для презентации мобильного приложения «AmigoVet» с целью демонстрации его возможностей, предыдущих версий и сопутствующей информации.',
        },
        zentryClon: {
          title: 'Zentry Clon',
          role: 'Frontend-разработчик',
          description: 'Zentry — компания, работающая с искусственным интеллектом. Этот клон веб-сайта Zentry 2024 года был создан для практики фронтенд-разработки, анимации с GSAP и SEO.',
        },
        dataManagement: {
          title: 'Управление данными',
          role: 'Full-Stack разработчик',
          description: 'Система управления данными для нескольких точек продаж, где каждая точка может добавлять данные только по своей точке, а администратор может просматривать, изменять и создавать ежемесячные отчеты в Excel.',
        },
        amigovetApp: {
          title: 'AmigoVet',
          role: 'Full-Stack разработчик',
          description: 'Мобильное приложение для ухода за вашими питомцами, в котором вы можете хранить всю информацию о своем любимце, как в виртуальном удостоверении личности.',
        },
        goCab: {
          title: 'GoCab',
          role: 'Full-Stack разработчик',
          description: 'Мультиплатформенное мобильное приложение, в котором можно зарегистрироваться как пользователь или как водитель. Вы можете видеть такси поблизости, запрашивать поездку, водитель может сделать встречное предложение, вы можете отслеживать поездку и оценивать её в конце. Разработано с использованием Flutter и Spring Boot.',
        },
        chainly: {
          title: 'Chainly',
          role: 'Full-Stack разработчик',
          description: 'Мобильное приложение на Flutter, разработанное для управления личными финансами. Оно позволяет регистрировать несколько кошельков (банковские счета или наличные), каждый в своей валюте. Также доступна запись расходов, доходов и переводов между картами в разных валютах с использованием API.',
        },
        marioClone: {
          title: 'Клон Марио',
          role: 'Разработчик игр',
          description: 'Платформер с несколькими уровнями, похожий на оригинальную игру Марио 1985 года, использующий спрайты из Интернета. Полностью разработан на Python с библиотекой PyGame.',
        },
        spaceShooter: {
          title: 'Космический шутер',
          role: 'Разработчик игр',
          description: 'Игра с двумя уровнями сложности, где сложность увеличивается по мере прохождения времени на каждом уровне. Полностью разработана на Python с использованием библиотеки PyGame.',
        },
      },
    },
    contact: {
      titleTop: ['ДАВАЙТЕ'],
      titleBottom: ['ЧТО-ТО', 'СОЗДАДИМ'],
      titlePurple: 'СОЗДАДИМ',
      clickToCopy: 'Нажмите, чтобы скопировать!',
      copiedText: 'Скопировано! Вставьте куда угодно',
      downloadCv: 'Скачать резюме',
      cvDetails: 'PDF • 2025',
    },
    footer: {
      madeWith: 'Сделано с',
      by: 'от',
      rightsReserved: 'Все права защищены.',
    },
    support: {
      titleTop: ['НУЖНА '],
      titleBottom: ['ПОМОЩЬ?'],
      titlePurple: 'ПОМОЩЬ?',
      intro: 'Я здесь, чтобы помочь вам с любыми вопросами или сомнениями, которые могут возникнуть относительно моей работы, проектов или сотрудничества. Не стесняйтесь обращаться, и я отвечу вам как можно скорее.',
      getInTouch: 'Связаться со мной',
      faqsTitle: 'Часто задаваемые',
      faqsPurple: 'Вопросы',
      faqs: [
        {
          question: 'Как я могу сотрудничать с вами?',
          answer: 'Я всегда открыт для новых проектов и сотрудничества. Отправьте мне электронное письмо с подробным описанием вашего проекта, сроков и бюджета, и я отвечу вам в течение 48 часов.',
        },
        {
          question: 'Каково ваше обычное время ответа?',
          answer: 'Обычно я отвечаю на электронные письма в течение 24–48 часов по будням. По срочным вопросам, пожалуйста, указывайте это в теме письма.',
        },
        {
          question: 'Вы работаете над фриланс-проектами?',
          answer: 'Да! Я доступен для фриланса и консалтинга. Я специализируюсь на full-stack веб-разработке, мобильных приложениях и разработке игр.',
        },
        {
          question: 'Могу ли я использовать ваш код или проекты?',
          answer: 'Некоторые из моих проектов имеют открытый исходный код и доступны на GitHub. Пожалуйста, ознакомьтесь с лицензиями конкретных проектов. Для коммерческого использования свяжитесь со мной, чтобы обсудить варианты лицензирования.',
        },
        {
          question: 'Предоставляете ли вы наставничество или репетиторство?',
          answer: 'Я увлечен тем, чтобы помогать другим изучать программирование. В зависимости от моей занятости, я могу предоставить наставничество или репетиторство. Свяжитесь со мной, чтобы обсудить детали.',
        },
      ],
    },
    terms: {
      titleTop: ['ПРАВИЛА', 'И'],
      titleBottom: ['УСЛОВИЯ'],
      titlePurple: 'УСЛОВИЯ',
      lastUpdated: 'Последнее обновление: Декабрь 2025',
      sections: [
        {
          title: '1. Согласие с условиями',
          content: 'Доступаясь и используя этот сайт-портфолио, вы принимаете и соглашаетесь соблюдать положения настоящего соглашения. Если вы не согласны с этими условиями, пожалуйста, не используйте данный сервис.',
        },
        {
          title: '2. Лицензия на использование',
          content: 'Предоставляется разрешение на временный просмотр материалов на этом веб-сайте только для личного некоммерческого временного просмотра. Это предоставление лицензии, а не передача права собственности, и по этой лицензии вы не имеете права изменять или копировать материалы, использовать их в любых коммерческих целях или пытаться декомпилировать или реверс-инжинирить любое программное обеспечение, содержащееся на веб-сайте.',
        },
        {
          title: '3. Отказ от ответственности',
          content: 'Материалы на этом веб-сайте предоставляются на условиях "как есть". Я не предоставляю никаких гарантий, выраженных или подразумеваемых, и настоящим отказываюсь и отрицаю все другие гарантии, включая, без ограничений, подразумеваемые гарантии или условия товарного состояния, пригодности для конкретной цели или ненарушения интеллектуальной собственности или иного нарушения прав.',
        },
        {
          title: '4. Ограничения',
          content: 'Ни при каких обстоятельствах я или мои поставщики не несем ответственности за любой ущерб (включая, без ограничений, ущерб от потери данных или прибыли, или из-за прерывания бизнеса), возникающий в результате использования или невозможности использования материалов на этом веб-сайте, даже если я или мой уполномоченный представитель были уведомлены устно или письменно о возможности такого ущерба.',
        },
        {
          title: '5. Исправления и опечатки',
          content: 'Материалы, размещенные на этом веб-сайте, могут содержать технические, типографские или фотографические ошибки. Я не гарантирую, что какие-либо материалы на этом веб-сайте являются точными, полными или актуальными. Я могу вносить изменения в материалы, содержащиеся на этом веб-сайте, в любое время без предварительного уведомления.',
        },
        {
          title: '6. Ссылки',
          content: 'Я не проверял все сайты, связанные с этим веб-сайтом, и не несу ответственности за содержание любого такого связанного сайта. Включение любой ссылки не означает одобрения сайта с моей стороны. Использование любого такого связанного веб-сайта осуществляется на собственный риск пользователя.',
        },
        {
          title: '7. Изменения',
          content: 'Я могу пересматривать настоящие условия обслуживания для этого веб-сайта в любое время без предварительного уведомления. Используя этот веб-сайт, вы соглашаетесь соблюдать текущую версию настоящих условий обслуживания.',
        },
      ],
    },
  },
};
