export const siteConfig = {
  name: "Miguel Ángel Bahamón Rocha",
  shortName: "Miguel.Dev",
  description: {
    es: "Ingeniero de Software Full Stack con experiencia en desarrollo web, liderazgo técnico y gestión de proyectos. Especializado en React, Node.js y arquitecturas escalables.",
    en: "Full Stack Software Engineer with experience in web development, technical leadership, and project management. Specialized in React, Node.js, and scalable architectures.",
  },
  url: "https://migueldev.com", // Actualizar con tu dominio real
  author: {
    name: "Miguel Ángel Bahamón Rocha",
    email: "miguel061010@hotmail.com",
    role: {
      es: "Ingeniero de Software",
      en: "Software Engineer",
    },
  },
  social: {
    github: "https://github.com/miguelba18",
    linkedin: "https://www.linkedin.com/in/miguel-angel-bahamon-rocha",
    email: "mailto:miguel061010@hotmail.com",
    phone: "tel:+573132140833",
  },
  cv: {
    es: "/cv/CV_Miguel_Bahamon_ES.pdf",
    en: "/cv/CV_Miguel_Bahamon_EN.pdf",
  },
};

export const socialLinks = [
  {
    name: "GitHub",
    url: "https://github.com/miguelba18",
    icon: "github",
    color: "#181717",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/miguel-angel-bahamon-rocha-01444031a/",
    icon: "linkedin",
    color: "#0A66C2",
  },
  {
    name: "Email",
    url: "mailto:miguel061010@hotmail.com",
    icon: "mail",
    color: "#EA4335",
  },
  {
    name: {
      es: "Teléfono",
      en: "Phone",
    },
    url: "tel:+573132140833",
    icon: "phone",
    color: "#25D366",
  },
];

export const navigation = {
  es: [
    { name: "Inicio", href: "#hero" },
    { name: "Sobre mí", href: "#about" },
    { name: "Experiencia", href: "#experience" },
    { name: "Proyectos", href: "#projects" },
    { name: "Habilidades", href: "#skills" },
    { name: "Certificaciones", href: "#certifications" },
    { name: "Educación", href: "#education" },
    { name: "Contacto", href: "#contact" },
  ],
  en: [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Certifications", href: "#certifications" },
    { name: "Education", href: "#education" },
    { name: "Contact", href: "#contact" },
  ],
};

export const sectors = {
  es: [
    { name: "Salud", icon: "heart", color: "#EF4444" },
    { name: "Gobierno", icon: "building", color: "#3B82F6" },
    { name: "Educación", icon: "book", color: "#10B981" },
    { name: "Empresarial", icon: "briefcase", color: "#F59E0B" },
  ],
  en: [
    { name: "Healthcare", icon: "heart", color: "#EF4444" },
    { name: "Government", icon: "building", color: "#3B82F6" },
    { name: "Education", icon: "book", color: "#10B981" },
    { name: "Business", icon: "briefcase", color: "#F59E0B" },
  ],
};

export const methodologies = {
  es: [
    { name: "Scrum", icon: "refresh" },
    { name: "Kanban", icon: "columns" },
    { name: "Agile", icon: "zap" },
  ],
  en: [
    { name: "Scrum", icon: "refresh" },
    { name: "Kanban", icon: "columns" },
    { name: "Agile", icon: "zap" },
  ],
};

export const highlights = {
  es: [
    {
      label: "Roles",
      value: "Full Stack · Project Manager · QA",
      icon: "user",
    },
    {
      label: "Sectores",
      value: "Gobierno · Salud · Freelance",
      icon: "briefcase",
    },
    {
      label: "Metodologías",
      value: "Scrum · Kanban · Agile",
      icon: "settings",
    },
    {
      label: "Enfoque",
      value: "Clean Code · Escalabilidad · UX",
      icon: "target",
    },
  ],
  en: [
    {
      label: "Roles",
      value: "Full Stack · Project Manager · QA",
      icon: "user",
    },
    {
      label: "Industries",
      value: "Government · Healthcare · Freelance",
      icon: "briefcase",
    },
    {
      label: "Methodologies",
      value: "Scrum · Kanban · Agile",
      icon: "settings",
    },
    {
      label: "Focus",
      value: "Clean Code · Scalability · UX",
      icon: "target",
    },
  ],
};

export const aboutContent = {
  es: {
    title: "Sobre mí",
    subtitle: "Ingeniero de Software en formación con experiencia real en desarrollo web, liderazgo técnico y gestión de proyectos.",
    paragraphs: [
      "He trabajado desarrollando aplicaciones web modernas para entidades gubernamentales como la DIAN, empresas del sector salud y clientes freelance, participando activamente en todo el ciclo de vida del software.",
      "Mi experiencia como Full Stack Developer, Project Manager y QA me permite tener una visión integral de los proyectos, tomar mejores decisiones técnicas y entregar productos más sólidos.",
      "Me enfoco en escribir código limpio, construir arquitecturas mantenibles y crear soluciones que realmente aporten valor al negocio y al usuario final.",
    ],
  },
  en: {
    title: "About me",
    subtitle: "Software Engineering student with real-world experience in web development, technical leadership, and project management.",
    paragraphs: [
      "I have worked building modern web applications for government entities such as DIAN, healthcare companies, and freelance clients, actively participating throughout the entire software lifecycle.",
      "My experience as a Full Stack Developer, Project Manager, and QA allows me to have a comprehensive view of projects, make better technical decisions, and deliver more robust products.",
      "I focus on writing clean code, building maintainable architectures, and creating solutions that truly add value to both the business and the end user.",
    ],
  },
};

export const contactContent = {
  es: {
    title: "Contacto",
    subtitle: "¿Tienes un proyecto, una oportunidad laboral o simplemente quieres hablar de tecnología? Estoy abierto a nuevas oportunidades.",
    cta: {
      primary: "Escríbeme",
      github: "GitHub",
      linkedin: "LinkedIn",
      cv: "Descargar CV",
    },
  },
  en: {
    title: "Contact",
    subtitle: "Do you have a project, a job opportunity, or just want to talk about technology? I'm open to new opportunities.",
    cta: {
      primary: "Email me",
      github: "GitHub",
      linkedin: "LinkedIn",
      cv: "Download CV",
    },
  },
};