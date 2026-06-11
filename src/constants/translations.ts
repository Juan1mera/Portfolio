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
      intro: "Need help with one of my apps, like AmigoVet or Chainly? You're in the right place. Whether you found a bug, have a question about your account or your data, or want to suggest a feature, reach out and I'll get back to you as soon as possible.",
      getInTouch: 'Get in Touch',
      faqsTitle: 'Frequently Asked',
      faqsPurple: 'Questions',
      faqs: [
        {
          question: 'I found a bug or the app is not working. What should I do?',
          answer: "Send me an email describing the problem, the app you're using (e.g. AmigoVet, Chainly), your device model, and your operating system version. Screenshots or screen recordings help a lot. I usually reply within 24-48 hours on weekdays.",
        },
        {
          question: 'How can I delete my account and my data?',
          answer: 'You can request the deletion of your account and all associated data at any time. Use the delete account option inside the app if available, or send me an email from the address linked to your account and I will process the deletion within 30 days.',
        },
        {
          question: 'How is my data handled?',
          answer: 'My apps only collect the information needed for them to work, such as your account details and the content you create in the app. Your data is never sold to third parties. Some apps rely on trusted third-party services (authentication and database providers) to store your information securely.',
        },
        {
          question: 'How do refunds work?',
          answer: 'Purchases and subscriptions are processed by the App Store or Google Play, so refunds are handled directly by Apple or Google through their standard refund processes. If you have trouble with a purchase, contact me and I will do my best to help.',
        },
        {
          question: 'Can I suggest a new feature?',
          answer: "Of course! I love hearing from people who use my apps. Send me an email with your idea and the app it's for. I read every suggestion, and many of them end up shaping future updates.",
        },
        {
          question: 'Do you also take freelance or collaboration inquiries?',
          answer: "Yes. Besides my published apps, I'm open to freelance work and collaborations in web, mobile, and game development. Email me the details of your project and I'll get back to you within 48 hours.",
        },
      ],
    },
    terms: {
      titleTop: ['TERMS', '&'],
      titleBottom: ['CONDITIONS'],
      titlePurple: 'CONDITIONS',
      lastUpdated: 'Last updated: June 2026',
      sections: [
        {
          title: '1. Acceptance of Terms',
          content: 'These Terms and Conditions govern the use of the mobile and web applications developed and published by Juan Mera (such as AmigoVet and Chainly, available on the App Store and Google Play), as well as this website. By downloading, installing, or using any of these applications, you accept these terms. If you do not agree with them, please do not use the applications.',
        },
        {
          title: '2. License to Use the Apps',
          content: 'You are granted a personal, limited, non-exclusive, non-transferable, and revocable license to use the applications on devices you own or control, for personal, non-commercial purposes. You may not copy, modify, distribute, sell, or rent any part of the applications, nor decompile or reverse engineer them, except where permitted by law.',
        },
        {
          title: '3. Accounts and Registration',
          content: 'Some applications require creating an account to work. You are responsible for keeping your credentials safe and for all activity that occurs under your account. You must provide accurate information when registering. I reserve the right to suspend or delete accounts that violate these terms or make fraudulent use of the applications.',
        },
        {
          title: '4. Privacy and Your Data',
          content: 'The applications collect only the information necessary for their operation, such as your account details and the content you create within the app. Your data is never sold to third parties. Some applications use trusted third-party services for authentication, storage, and databases, which process your data according to their own privacy policies. You can request the deletion of your account and your data at any time by contacting me by email; the deletion will be processed within a maximum of 30 days.',
        },
        {
          title: '5. User Content',
          content: 'The content you create within the applications (for example, records, notes, or images you upload) belongs to you. By using the applications, you grant me only the technical license necessary to store and display that content so the application can function. You are responsible for the content you create and for it not infringing the rights of third parties.',
        },
        {
          title: '6. Purchases and Subscriptions',
          content: 'Some applications may offer purchases or subscriptions, which are processed and managed by the App Store (Apple) or Google Play (Google) under their own terms. Prices, renewals, cancellations, and refunds are governed by the policies of the corresponding store. To request a refund, contact Apple or Google directly through their official refund processes.',
        },
        {
          title: '7. Acceptable Use',
          content: 'You agree not to use the applications for illegal purposes, to harm third parties, to attempt unauthorized access to systems or other users\' data, to interfere with the operation of services, or to upload malicious content. Failure to comply with these rules may result in suspension or deletion of your account.',
        },
        {
          title: '8. Important Disclaimer',
          content: "The applications are provided 'as is' and 'as available', without warranties of any kind. The information offered by applications such as AmigoVet is for informational and management purposes only and does not constitute professional veterinary advice, diagnosis, or treatment; always consult a qualified professional. I do not guarantee that the applications will be error-free or available at all times.",
        },
        {
          title: '9. Limitation of Liability',
          content: 'To the maximum extent permitted by law, I shall not be liable for indirect, incidental, or consequential damages, loss of data or profits, arising from the use or inability to use the applications, even if the possibility of such damages has been advised. Some apps require an internet connection and depend on third-party services whose availability I do not control.',
        },
        {
          title: '10. Updates and Service Changes',
          content: 'I may update, modify, or discontinue features of the applications at any time, as well as publish updates that fix errors or improve the experience. I recommend keeping the applications updated to their latest version. Older versions may stop working if servers or third-party services change.',
        },
        {
          title: '11. Changes to These Terms',
          content: 'I may revise these terms at any time. When I do, the update date at the bottom of this page will be modified. Continued use of the applications after a change implies acceptance of the new terms. If the change is significant, I will try to notify it within the application or through the stores.',
        },
        {
          title: '12. Contact',
          content: 'If you have questions about these terms, your data, or any of my applications, you can write to me at mera.dev.co@gmail.com. You can also find more help options on the Support page of this site.',
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
      titleBottom: ['JUNTOS'],
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
      intro: '¿Necesitas ayuda con alguna de mis aplicaciones, como AmigoVet o Chainly? Estás en el lugar correcto. Ya sea que encontraste un error, tienes una pregunta sobre tu cuenta o tus datos, o quieres sugerir una función, escríbeme y te responderé lo antes posible.',
      getInTouch: 'Ponte en Contacto',
      faqsTitle: 'Preguntas',
      faqsPurple: 'Frecuentes',
      faqs: [
        {
          question: 'Encontré un error o la app no funciona. ¿Qué hago?',
          answer: 'Envíame un correo describiendo el problema, la app que estás usando (por ejemplo AmigoVet o Chainly), el modelo de tu dispositivo y la versión del sistema operativo. Las capturas de pantalla o grabaciones ayudan mucho. Normalmente respondo en 24-48 horas en días laborables.',
        },
        {
          question: '¿Cómo elimino mi cuenta y mis datos?',
          answer: 'Puedes solicitar la eliminación de tu cuenta y de todos los datos asociados en cualquier momento. Usa la opción de eliminar cuenta dentro de la app si está disponible, o envíame un correo desde la dirección vinculada a tu cuenta y procesaré la eliminación en un plazo máximo de 30 días.',
        },
        {
          question: '¿Cómo se manejan mis datos?',
          answer: 'Mis aplicaciones solo recopilan la información necesaria para funcionar, como los datos de tu cuenta y el contenido que creas dentro de la app. Tus datos nunca se venden a terceros. Algunas apps usan servicios de confianza (proveedores de autenticación y bases de datos) para almacenar tu información de forma segura.',
        },
        {
          question: '¿Cómo funcionan los reembolsos?',
          answer: 'Las compras y suscripciones se procesan a través del App Store o Google Play, por lo que los reembolsos los gestionan directamente Apple o Google mediante sus procesos estándar. Si tienes problemas con una compra, contáctame y haré lo posible por ayudarte.',
        },
        {
          question: '¿Puedo sugerir una nueva función?',
          answer: '¡Claro! Me encanta saber de las personas que usan mis apps. Envíame un correo con tu idea y la app a la que corresponde. Leo todas las sugerencias, y muchas terminan dando forma a futuras actualizaciones.',
        },
        {
          question: '¿También aceptas trabajos freelance o colaboraciones?',
          answer: 'Sí. Además de mis apps publicadas, estoy abierto a trabajo freelance y colaboraciones en desarrollo web, móvil y de videojuegos. Envíame los detalles de tu proyecto y te responderé en un plazo de 48 horas.',
        },
      ],
    },
    terms: {
      titleTop: ['TÉRMINOS', 'Y'],
      titleBottom: ['CONDICIONES'],
      titlePurple: 'CONDICIONES',
      lastUpdated: 'Última actualización: Junio 2026',
      sections: [
        {
          title: '1. Aceptación de los Términos',
          content: 'Estos Términos y Condiciones regulan el uso de las aplicaciones móviles y web desarrolladas y publicadas por Juan Mera (como AmigoVet y Chainly, disponibles en App Store y Google Play), así como de este sitio web. Al descargar, instalar o usar cualquiera de estas aplicaciones, aceptas estos términos. Si no estás de acuerdo con ellos, por favor no utilices las aplicaciones.',
        },
        {
          title: '2. Licencia de Uso de las Apps',
          content: 'Se te concede una licencia personal, limitada, no exclusiva, intransferible y revocable para usar las aplicaciones en dispositivos de tu propiedad o bajo tu control, con fines personales y no comerciales. No puedes copiar, modificar, distribuir, vender ni alquilar ninguna parte de las aplicaciones, ni decompilarlas o hacer ingeniería inversa, salvo donde la ley lo permita.',
        },
        {
          title: '3. Cuentas y Registro',
          content: 'Algunas aplicaciones requieren crear una cuenta para funcionar. Eres responsable de mantener tus credenciales seguras y de toda la actividad que ocurra bajo tu cuenta. Debes proporcionar información veraz al registrarte. Me reservo el derecho de suspender o eliminar cuentas que incumplan estos términos o hagan un uso fraudulento de las aplicaciones.',
        },
        {
          title: '4. Privacidad y Tus Datos',
          content: 'Las aplicaciones recopilan únicamente la información necesaria para su funcionamiento, como los datos de tu cuenta y el contenido que creas dentro de la app. Tus datos nunca se venden a terceros. Algunas aplicaciones usan servicios de terceros de confianza para autenticación, almacenamiento y bases de datos, que procesan tus datos según sus propias políticas de privacidad. Puedes solicitar la eliminación de tu cuenta y tus datos en cualquier momento contactándome por correo; la eliminación se procesará en un plazo máximo de 30 días.',
        },
        {
          title: '5. Contenido del Usuario',
          content: 'El contenido que creas dentro de las aplicaciones (por ejemplo, registros, notas o imágenes que subes) te pertenece. Al usar las aplicaciones, me concedes únicamente la licencia técnica necesaria para almacenar y mostrar ese contenido de modo que la aplicación pueda funcionar. Eres responsable del contenido que creas y de que no infrinja derechos de terceros.',
        },
        {
          title: '6. Compras y Suscripciones',
          content: 'Algunas aplicaciones pueden ofrecer compras o suscripciones, que son procesadas y gestionadas por App Store (Apple) o Google Play (Google) bajo sus propios términos. Los precios, renovaciones, cancelaciones y reembolsos se rigen por las políticas de la tienda correspondiente. Para solicitar un reembolso, contacta directamente con Apple o Google a través de sus procesos oficiales.',
        },
        {
          title: '7. Uso Aceptable',
          content: 'Te comprometes a no usar las aplicaciones para fines ilegales, dañar a terceros, intentar acceder sin autorización a sistemas o datos de otros usuarios, interferir con el funcionamiento de los servicios ni subir contenido malicioso. El incumplimiento de estas normas puede resultar en la suspensión o eliminación de tu cuenta.',
        },
        {
          title: '8. Descargo de Responsabilidad Importante',
          content: "Las aplicaciones se proporcionan 'tal cual' y 'según disponibilidad', sin garantías de ningún tipo. La información que ofrecen aplicaciones como AmigoVet tiene fines informativos y de gestión, y no constituye asesoramiento, diagnóstico ni tratamiento veterinario profesional; consulta siempre a un profesional cualificado. No garantizo que las aplicaciones estén libres de errores ni disponibles en todo momento.",
        },
        {
          title: '9. Limitación de Responsabilidad',
          content: 'En la máxima medida permitida por la ley, no seré responsable de daños indirectos, incidentales o consecuentes, pérdida de datos o ganancias, derivados del uso o la imposibilidad de usar las aplicaciones, incluso si se ha advertido de la posibilidad de tales daños. Algunas apps requieren conexión a internet y dependen de servicios de terceros cuya disponibilidad no controlo.',
        },
        {
          title: '10. Actualizaciones y Cambios en el Servicio',
          content: 'Puedo actualizar, modificar o descontinuar funciones de las aplicaciones en cualquier momento, así como publicar actualizaciones que corrijan errores o mejoren la experiencia. Te recomiendo mantener las aplicaciones actualizadas a su última versión. Las versiones antiguas pueden dejar de funcionar si los servidores o servicios de terceros cambian.',
        },
        {
          title: '11. Cambios en Estos Términos',
          content: 'Puedo revisar estos términos en cualquier momento. Cuando lo haga, se modificará la fecha de actualización al final de esta página. El uso continuado de las aplicaciones después de un cambio implica la aceptación de los nuevos términos. Si el cambio es significativo, intentaré notificarlo dentro de la aplicación o a través de las tiendas.',
        },
        {
          title: '12. Contacto',
          content: 'Si tienes preguntas sobre estos términos, tus datos o cualquiera de mis aplicaciones, puedes escribirme a mera.dev.co@gmail.com. También encontrarás más opciones de ayuda en la página de Soporte de este sitio.',
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
      intro: 'Нужна помощь с одним из моих приложений, например AmigoVet или Chainly? Вы по адресу. Нашли ошибку, есть вопрос об аккаунте или ваших данных, хотите предложить новую функцию — напишите мне, и я отвечу как можно скорее.',
      getInTouch: 'Связаться со мной',
      faqsTitle: 'Часто задаваемые',
      faqsPurple: 'Вопросы',
      faqs: [
        {
          question: 'Я нашёл ошибку или приложение не работает. Что делать?',
          answer: 'Отправьте мне письмо с описанием проблемы, названием приложения (например, AmigoVet или Chainly), моделью устройства и версией операционной системы. Скриншоты или записи экрана очень помогают. Обычно я отвечаю в течение 24–48 часов по будням.',
        },
        {
          question: 'Как удалить мой аккаунт и мои данные?',
          answer: 'Вы можете запросить удаление аккаунта и всех связанных данных в любое время. Используйте опцию удаления аккаунта внутри приложения, если она доступна, или отправьте мне письмо с адреса, привязанного к аккаунту, и я обработаю удаление в течение 30 дней.',
        },
        {
          question: 'Как обрабатываются мои данные?',
          answer: 'Мои приложения собирают только информацию, необходимую для их работы: данные аккаунта и контент, который вы создаёте в приложении. Ваши данные никогда не продаются третьим лицам. Некоторые приложения используют надёжные сторонние сервисы (аутентификация и базы данных) для безопасного хранения вашей информации.',
        },
        {
          question: 'Как работают возвраты средств?',
          answer: 'Покупки и подписки обрабатываются через App Store или Google Play, поэтому возвраты осуществляются напрямую Apple или Google через их стандартные процедуры. Если у вас возникли проблемы с покупкой, свяжитесь со мной, и я постараюсь помочь.',
        },
        {
          question: 'Могу ли я предложить новую функцию?',
          answer: 'Конечно! Мне нравится получать отзывы от людей, которые пользуются моими приложениями. Отправьте мне письмо с вашей идеей и названием приложения. Я читаю все предложения, и многие из них влияют на будущие обновления.',
        },
        {
          question: 'Вы также принимаете фриланс-заказы и предложения о сотрудничестве?',
          answer: 'Да. Помимо опубликованных приложений, я открыт для фриланса и сотрудничества в веб-, мобильной и игровой разработке. Напишите мне детали вашего проекта, и я отвечу в течение 48 часов.',
        },
      ],
    },
    terms: {
      titleTop: ['ПРАВИЛА', 'И'],
      titleBottom: ['УСЛОВИЯ'],
      titlePurple: 'УСЛОВИЯ',
      lastUpdated: 'Последнее обновление: Июнь 2026',
      sections: [
        {
          title: '1. Принятие условий',
          content: 'Настоящие Условия регулируют использование мобильных и веб-приложений, разработанных и опубликованных Хуаном Мера (таких как AmigoVet и Chainly, доступных в App Store и Google Play), а также этого сайта. Загружая, устанавливая или используя любое из этих приложений, вы принимаете настоящие условия. Если вы с ними не согласны, пожалуйста, не используйте приложения.',
        },
        {
          title: '2. Лицензия на использование приложений',
          content: 'Вам предоставляется личная, ограниченная, неисключительная, непередаваемая и отзывная лицензия на использование приложений на устройствах, которыми вы владеете или управляете, в личных некоммерческих целях. Вы не можете копировать, изменять, распространять, продавать или сдавать в аренду какую-либо часть приложений, а также декомпилировать их или проводить обратную разработку, за исключением случаев, разрешённых законом.',
        },
        {
          title: '3. Аккаунты и регистрация',
          content: 'Некоторые приложения требуют создания аккаунта. Вы несёте ответственность за сохранность своих учётных данных и за все действия, совершаемые под вашим аккаунтом. При регистрации необходимо указывать достоверную информацию. Я оставляю за собой право приостановить или удалить аккаунты, нарушающие настоящие условия или использующие приложения мошенническим образом.',
        },
        {
          title: '4. Конфиденциальность и ваши данные',
          content: 'Приложения собирают только информацию, необходимую для их работы: данные аккаунта и контент, который вы создаёте в приложении. Ваши данные никогда не продаются третьим лицам. Некоторые приложения используют надёжные сторонние сервисы для аутентификации, хранения и баз данных, которые обрабатывают ваши данные согласно собственным политикам конфиденциальности. Вы можете запросить удаление аккаунта и данных в любое время, написав мне по электронной почте; удаление будет выполнено в течение максимум 30 дней.',
        },
        {
          title: '5. Пользовательский контент',
          content: 'Контент, который вы создаёте в приложениях (например, записи, заметки или загружаемые изображения), принадлежит вам. Используя приложения, вы предоставляете мне только техническую лицензию, необходимую для хранения и отображения этого контента, чтобы приложение могло работать. Вы несёте ответственность за создаваемый контент и за то, чтобы он не нарушал права третьих лиц.',
        },
        {
          title: '6. Покупки и подписки',
          content: 'Некоторые приложения могут предлагать покупки или подписки, которые обрабатываются и управляются App Store (Apple) или Google Play (Google) согласно их собственным условиям. Цены, продления, отмены и возвраты регулируются политиками соответствующего магазина. Для запроса возврата средств обращайтесь напрямую к Apple или Google через их официальные процедуры.',
        },
        {
          title: '7. Допустимое использование',
          content: 'Вы обязуетесь не использовать приложения в незаконных целях, не причинять вред третьим лицам, не пытаться получить несанкционированный доступ к системам или данным других пользователей, не вмешиваться в работу сервисов и не загружать вредоносный контент. Нарушение этих правил может привести к приостановке или удалению вашего аккаунта.',
        },
        {
          title: '8. Важный отказ от ответственности',
          content: 'Приложения предоставляются «как есть» и «по мере доступности», без каких-либо гарантий. Информация, предоставляемая приложениями, такими как AmigoVet, носит информационный и организационный характер и не является профессиональной ветеринарной консультацией, диагнозом или лечением; всегда обращайтесь к квалифицированному специалисту. Я не гарантирую, что приложения будут работать без ошибок и будут доступны в любое время.',
        },
        {
          title: '9. Ограничение ответственности',
          content: 'В максимальной степени, разрешённой законом, я не несу ответственности за косвенные, случайные или последующие убытки, потерю данных или прибыли, возникшие в результате использования или невозможности использования приложений, даже если о возможности таких убытков было сообщено. Некоторые приложения требуют подключения к интернету и зависят от сторонних сервисов, доступность которых я не контролирую.',
        },
        {
          title: '10. Обновления и изменения сервиса',
          content: 'Я могу обновлять, изменять или прекращать поддержку функций приложений в любое время, а также публиковать обновления, исправляющие ошибки или улучшающие работу. Рекомендую обновлять приложения до последней версии. Старые версии могут перестать работать при изменении серверов или сторонних сервисов.',
        },
        {
          title: '11. Изменения настоящих условий',
          content: 'Я могу пересматривать настоящие условия в любое время. При этом будет изменена дата обновления внизу этой страницы. Продолжение использования приложений после изменений означает принятие новых условий. О существенных изменениях я постараюсь уведомить внутри приложения или через магазины приложений.',
        },
        {
          title: '12. Контакты',
          content: 'Если у вас есть вопросы о настоящих условиях, ваших данных или любом из моих приложений, напишите мне на mera.dev.co@gmail.com. Дополнительные варианты помощи вы найдёте на странице Поддержки этого сайта.',
        },
      ],
    },
  },
};
