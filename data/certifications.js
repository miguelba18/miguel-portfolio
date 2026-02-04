export const certifications = [
  {
    title: {
      es: "Tecnólogo en Desarrollo de Sistemas de Información y Redes",
      en: "Technologist in Information Systems and Networks Development",
    },
    institution: "Fundación Escuela Tecnológica de Neiva - Jesús Oviedo Pérez",
    date: "Septiembre 2024",
    type: "academic",
    credential: "SNIES 103581-239",
    description: {
      es: "Título oficial de Tecnólogo en Desarrollo de Sistemas de Información y Redes, cumpliendo el plan de estudio y requisitos académicos exigidos.",
      en: "Official degree in Information Systems and Networks Development, fulfilling the study plan and required academic requirements.",
    },
    icon: "graduation",
  },
  {
    title: {
      es: "Técnico Profesional en Soporte de Sistemas Informáticos y Redes",
      en: "Professional Technician in Computer Systems and Networks Support",
    },
    institution: "Fundación Escuela Tecnológica de Neiva - Jesús Oviedo Pérez",
    date: "Agosto 2023",
    type: "academic",
    credential: "SNIES 103580-275",
    description: {
      es: "Título técnico profesional en soporte de sistemas informáticos y redes, cumpliendo el plan de estudio y requisitos académicos.",
      en: "Professional technical degree in computer systems and networks support, fulfilling study plan and academic requirements.",
    },
    icon: "graduation",
  },
  {
    title: {
      es: "Premio a la Innovación y Desarrollo Tecnológico",
      en: "Innovation and Technological Development Award",
    },
    institution: "Fundación Escuela Tecnológica de Neiva",
    date: "Noviembre 2023",
    type: "award",
    description: {
      es: "Reconocimiento por haber realizado uno de los proyectos ganadores en la modalidad Desarrollo Tecnológico e Innovación, durante la XIII Feria de Investigación, Innovación y Emprendimiento (INNOEM).",
      en: "Recognition for having completed one of the winning projects in the Technological Development and Innovation category, during the XIII Research, Innovation and Entrepreneurship Fair (INNOEM).",
    },
    icon: "award",
  },
  {
    title: {
      es: "Primer Puesto Hackathon - Solución Problemática Social",
      en: "First Place Hackathon - Social Problem Solution",
    },
    institution: "Fundación Escuela Tecnológica de Neiva",
    date: "Noviembre 2024",
    type: "award",
    description: {
      es: "Reconocimiento por ocupar el primer puesto en el II Hackathon con una solución innovadora enfocada en problemática social. Encuentro de habilidades del programa de Ingeniería de Software.",
      en: "Recognition for taking first place in the II Hackathon with an innovative solution focused on social issues. Software Engineering program skills meeting.",
    },
    icon: "trophy",
  },
];

export const workCertifications = [
  {
    title: {
      es: "Certificación Laboral - Full Stack Developer & Project Manager",
      en: "Work Certification - Full Stack Developer & Project Manager",
    },
    company: "INNOVACIONES Y PROYECTOS CR SAS",
    position: {
      es: "Desarrollador Full Stack / Líder de Proyecto / QA",
      en: "Full Stack Developer / Project Leader / QA",
    },
    period: "Febrero 2025 - Junio 2025",
    type: "employment",
    responsibilities: {
      es: [
        "Desarrollo de funcionalidades frontend y backend",
        "Integración de APIs y manejo de bases de datos",
        "Coordinación del equipo y asignación de tareas",
        "Gestión de requerimientos y comunicación con stakeholders",
        "Monitoreo y corrección de fallas",
        "Gestión del hosting y despliegues en producción",
        "Control de calidad y pruebas manuales",
      ],
      en: [
        "Frontend and backend feature development",
        "API integration and database management",
        "Team coordination and task assignment",
        "Requirements management and stakeholder communication",
        "Monitoring and bug fixing",
        "Hosting management and production deployments",
        "Quality control and manual testing",
      ],
    },
    icon: "briefcase",
  },
  {
    title: {
      es: "Certificación de Servicios Profesionales - Full Stack Developer",
      en: "Professional Services Certification - Full Stack Developer",
    },
    company: "INNOVACIONES Y PROYECTOS CR SAS (Contrato de Servicios)",
    position: {
      es: "Desarrollador Full Stack / Líder de Proyecto / QA",
      en: "Full Stack Developer / Project Leader / QA",
    },
    period: "Junio 2025 - Noviembre 2025",
    type: "contractor",
    responsibilities: {
      es: [
        "Desarrollo de funcionalidades frontend y backend",
        "Coordinación del equipo de desarrollo",
        "Gestión de requerimientos y entregables",
        "Administración del alojamiento y entornos",
        "Control de calidad y pruebas funcionales",
        "Mantenimiento preventivo y correctivo",
      ],
      en: [
        "Frontend and backend feature development",
        "Development team coordination",
        "Requirements and deliverables management",
        "Hosting and environments administration",
        "Quality control and functional testing",
        "Preventive and corrective maintenance",
      ],
    },
    icon: "briefcase",
  },
];

// Tipos de certificaciones para filtrado
export const certificationTypes = {
  es: {
    all: "Todas",
    academic: "Académicas",
    award: "Premios",
    employment: "Laborales",
    contractor: "Servicios",
  },
  en: {
    all: "All",
    academic: "Academic",
    award: "Awards",
    employment: "Employment",
    contractor: "Services",
  },
};

// Estadísticas de certificaciones
export const certificationStats = {
  es: {
    academic: {
      value: "2",
      label: "Títulos académicos",
    },
    awards: {
      value: "2",
      label: "Premios y reconocimientos",
    },
    professional: {
      value: "2",
      label: "Certificaciones laborales",
    },
  },
  en: {
    academic: {
      value: "2",
      label: "Academic degrees",
    },
    awards: {
      value: "2",
      label: "Awards and recognitions",
    },
    professional: {
      value: "2",
      label: "Work certifications",
    },
  },
};