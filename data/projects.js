export const projects = [
  // Proyectos Profesionales
  {
    title: {
      es: "Sistema de Gestión en Salud",
      en: "Healthcare Management System",
    },
    description: {
      es: "Plataforma empresarial integral para clínicas de oftalmología y optometría. Sistema completo con gestión de usuarios, roles, módulos administrativos, historias clínicas y flujos críticos del sector salud.",
      en: "Comprehensive enterprise platform for ophthalmology and optometry clinics. Complete system with user management, roles, administrative modules, clinical records, and critical healthcare workflows.",
    },
    stack: ["React", "Node.js", "NestJS", "PostgreSQL", "Tailwind CSS", "Docker"],
    type: "Profesional",
    category: "healthcare",
    github: null, // Privado
    demo: null,
    highlights: {
      es: ["Arquitectura escalable", "Multi-rol y permisos", "Integración de APIs", "Gestión documental"],
      en: ["Scalable architecture", "Multi-role and permissions", "API integration", "Document management"],
    },
  },
  {
    title: {
      es: "Plataforma DIAN - Gestión Tributaria",
      en: "DIAN Platform - Tax Management",
    },
    description: {
      es: "Sistema frontend para entidad gubernamental colombiana. Plataforma de gestión de impuestos con interfaces accesibles, validaciones robustas y optimización de UX para usuarios finales.",
      en: "Frontend system for Colombian government entity. Tax management platform with accessible interfaces, robust validations, and UX optimization for end users.",
    },
    stack: ["React", "JavaScript", "CSS3", "HTML5", "REST APIs"],
    type: "Gobierno",
    category: "government",
    github: null, // Privado
    demo: null,
    highlights: {
      es: ["Estándares de accesibilidad", "Integración APIs REST", "Validaciones complejas"],
      en: ["Accessibility standards", "REST API integration", "Complex validations"],
    },
  },
  
  // Proyectos Educativos
  {
    title: {
      es: "Sistema Escolar con Gestión Documental",
      en: "School System with Document Management",
    },
    description: {
      es: "Software completo para gestión educativa con publicación de notas, gestión documental, control de asistencia y módulo de comunicación entre padres y docentes.",
      en: "Complete software for educational management with grade publication, document management, attendance control, and communication module between parents and teachers.",
    },
    stack: ["React", "Node.js", "MongoDB", "Express"],
    type: "Educativo",
    category: "education",
    github: null,
    demo: null,
    highlights: {
      es: ["Gestión de calificaciones", "Control de asistencia", "Reportes automatizados"],
      en: ["Grade management", "Attendance control", "Automated reports"],
    },
  },
  {
    title: {
      es: "Videojuego Educativo - Autismo",
      en: "Educational Video Game - Autism",
    },
    description: {
      es: "Videojuego educativo diseñado específicamente para niños con autismo. Incluye mecánicas adaptativas, ejercicios cognitivos y retroalimentación visual intuitiva.",
      en: "Educational video game specifically designed for children with autism. Includes adaptive mechanics, cognitive exercises, and intuitive visual feedback.",
    },
    stack: ["Unity", "C#", "Game Design"],
    type: "Educativo",
    category: "education",
    github: null,
    demo: null,
    highlights: {
      es: ["Diseño inclusivo", "Mecánicas adaptativas", "Retroalimentación visual"],
      en: ["Inclusive design", "Adaptive mechanics", "Visual feedback"],
    },
  },

  // Proyectos Empresariales
  {
    title: {
      es: "Sistema de Seguros",
      en: "Insurance System",
    },
    description: {
      es: "Plataforma web para empresa de seguros con cotizador en línea, gestión de pólizas, panel de clientes y administración de solicitudes.",
      en: "Web platform for insurance company with online quote calculator, policy management, client panel, and request administration.",
    },
    stack: ["Vue.js", "Laravel", "MySQL", "PHP"],
    type: "Empresarial",
    category: "business",
    github: null,
    demo: null,
    highlights: {
      es: ["Cotizador automático", "Gestión de pólizas", "Panel de clientes"],
      en: ["Automatic quote calculator", "Policy management", "Client panel"],
    },
  },
  {
    title: {
      es: "Plataforma de Paneles Solares",
      en: "Solar Panels Platform",
    },
    description: {
      es: "Sistema web para empresa de energía solar con cotizaciones, cálculo de ahorro energético, gestión de proyectos e instalaciones.",
      en: "Web system for solar energy company with quotes, energy savings calculator, project management, and installations.",
    },
    stack: ["React", "Node.js", "PostgreSQL", "Tailwind CSS"],
    type: "Empresarial",
    category: "business",
    github: null,
    demo: null,
    highlights: {
      es: ["Calculadora de ahorro", "Gestión de instalaciones", "Cotizaciones en línea"],
      en: ["Savings calculator", "Installation management", "Online quotes"],
    },
  },
  {
    title: {
      es: "Sistema Club de Fútbol",
      en: "Football Club System",
    },
    description: {
      es: "Plataforma para club deportivo con gestión de socios, reservas de canchas, torneos, estadísticas de jugadores y sistema de pagos.",
      en: "Platform for sports club with member management, field reservations, tournaments, player statistics, and payment system.",
    },
    stack: ["React", "Node.js", "MongoDB", "Express"],
    type: "Deportivo",
    category: "sports",
    github: null,
    demo: null,
    highlights: {
      es: ["Gestión de socios", "Reservas online", "Estadísticas de jugadores"],
      en: ["Member management", "Online reservations", "Player statistics"],
    },
  },

  // Proyectos GitHub Públicos
  {
    title: {
      es: "Portafolio Personal",
      en: "Personal Portfolio",
    },
    description: {
      es: "Portafolio profesional desarrollado con Next.js y Tailwind CSS. Incluye modo oscuro, soporte multilenguaje (ES/EN), diseño responsive y secciones interactivas.",
      en: "Professional portfolio built with Next.js and Tailwind CSS. Features dark mode, multilingual support (ES/EN), responsive design, and interactive sections.",
    },
    stack: ["Next.js", "React", "Tailwind CSS", "JavaScript"],
    type: "Personal",
    category: "portfolio",
    github: "https://github.com/miguelba18/miguel-portfolio",
    demo: null,
    highlights: {
      es: ["Modo oscuro/claro", "Multi-idioma", "Diseño responsive"],
      en: ["Dark/light mode", "Multi-language", "Responsive design"],
    },
  },
  {
    title: {
      es: "Prueba Técnica Full Stack",
      en: "Full Stack Technical Test",
    },
    description: {
      es: "Aplicación full stack desarrollada como prueba técnica. Implementa CRUD completo, autenticación, gestión de usuarios y panel administrativo.",
      en: "Full stack application developed as technical test. Implements complete CRUD, authentication, user management, and admin panel.",
    },
    stack: ["Vue.js", "Node.js", "MongoDB"],
    type: "Técnico",
    category: "technical",
    github: "https://github.com/miguelba18/prueba-tecnica-igmcolombia-fullstack-junior",
    demo: null,
    highlights: {
      es: ["CRUD completo", "Autenticación", "Panel admin"],
      en: ["Complete CRUD", "Authentication", "Admin panel"],
    },
  },
  {
    title: {
      es: "Pages React - Proyecto Web",
      en: "React Pages - Web Project",
    },
    description: {
      es: "Colección de páginas y componentes React reutilizables. Incluye diferentes layouts, componentes UI y patrones de diseño modernos.",
      en: "Collection of reusable React pages and components. Includes different layouts, UI components, and modern design patterns.",
    },
    stack: ["React", "JavaScript", "CSS"],
    type: "Personal",
    category: "components",
    github: "https://github.com/miguelba18/pages-react",
    demo: null,
    highlights: {
      es: ["Componentes reutilizables", "Patrones modernos", "Layouts variados"],
      en: ["Reusable components", "Modern patterns", "Various layouts"],
    },
  },
  {
    title: {
      es: "Prueba Técnica JavaScript",
      en: "JavaScript Technical Test",
    },
    description: {
      es: "Proyecto de prueba técnica enfocado en JavaScript vanilla. Implementa algoritmos, manipulación del DOM y resolución de problemas de lógica.",
      en: "Technical test project focused on vanilla JavaScript. Implements algorithms, DOM manipulation, and logic problem solving.",
    },
    stack: ["JavaScript", "HTML5", "CSS3"],
    type: "Técnico",
    category: "technical",
    github: "https://github.com/miguelba18/Prueba-Tecnica",
    demo: null,
    highlights: {
      es: ["Algoritmos", "Manipulación DOM", "JavaScript puro"],
      en: ["Algorithms", "DOM manipulation", "Pure JavaScript"],
    },
  },
  {
    title: {
      es: "Ejercicios en C",
      en: "C Language Exercises",
    },
    description: {
      es: "Repositorio de ejercicios y prácticas en lenguaje C. Incluye estructuras de datos, algoritmos y ejercicios de programación fundamental.",
      en: "Repository of exercises and practices in C language. Includes data structures, algorithms, and fundamental programming exercises.",
    },
    stack: ["C"],
    type: "Académico",
    category: "academic",
    github: "https://github.com/miguelba18/Ejercicio-c",
    demo: null,
    highlights: {
      es: ["Estructuras de datos", "Algoritmos básicos", "Fundamentos C"],
      en: ["Data structures", "Basic algorithms", "C fundamentals"],
    },
  },
  {
    title: {
      es: "Proyecto HTML/CSS",
      en: "HTML/CSS Project",
    },
    description: {
      es: "Proyecto web estático con HTML5 y CSS3. Implementa diseño responsive, animaciones CSS y estructura semántica moderna.",
      en: "Static web project with HTML5 and CSS3. Implements responsive design, CSS animations, and modern semantic structure.",
    },
    stack: ["HTML5", "CSS3"],
    type: "Personal",
    category: "frontend",
    github: "https://github.com/miguelba18/proyecto_2",
    demo: null,
    highlights: {
      es: ["Diseño responsive", "Animaciones CSS", "HTML semántico"],
      en: ["Responsive design", "CSS animations", "Semantic HTML"],
    },
  },
];

// Categorías para filtrado
export const projectCategories = {
  es: {
    all: "Todos",
    healthcare: "Salud",
    government: "Gobierno",
    education: "Educación",
    business: "Empresarial",
    sports: "Deportivo",
    portfolio: "Portafolio",
    technical: "Técnico",
    academic: "Académico",
    components: "Componentes",
    frontend: "Frontend",
  },
  en: {
    all: "All",
    healthcare: "Healthcare",
    government: "Government",
    education: "Education",
    business: "Business",
    sports: "Sports",
    portfolio: "Portfolio",
    technical: "Technical",
    academic: "Academic",
    components: "Components",
    frontend: "Frontend",
  },
};