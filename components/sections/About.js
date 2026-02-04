"use client";

import { useLanguage } from "../../context/LanguageContext";

export default function About() {
  const { lang } = useLanguage();

  return (
    <section
      id="about"
      className="max-w-7xl mx-auto px-4 py-24"
    >
      {/* Title */}
      <div className="max-w-2xl">
        <h2 className="text-3xl md:text-4xl font-bold">
          {lang === "es" ? "Sobre mí" : "About me"}
        </h2>

        <p className="mt-4 text-sm md:text-base opacity-80">
          {lang === "es"
            ? "Ingeniero de Software en formación con experiencia real en desarrollo web, liderazgo técnico y gestión de proyectos."
            : "Software Engineering student with real-world experience in web development, technical leadership, and project management."}
        </p>
      </div>

      {/* Content */}
      <div className="mt-16 grid gap-12 lg:grid-cols-2 items-start">
        
        {/* Left – Story */}
        <div className="space-y-5 text-sm md:text-base opacity-80 leading-relaxed">
          <p>
            {lang === "es"
              ? "He trabajado desarrollando aplicaciones web modernas para entidades gubernamentales como la DIAN, empresas del sector salud y clientes freelance, participando activamente en todo el ciclo de vida del software."
              : "I have worked building modern web applications for government entities such as DIAN, healthcare companies, and freelance clients, actively participating throughout the entire software lifecycle."}
          </p>

          <p>
            {lang === "es"
              ? "Mi experiencia como Full Stack Developer, Project Manager y QA me permite tener una visión integral de los proyectos, tomar mejores decisiones técnicas y entregar productos más sólidos."
              : "My experience as a Full Stack Developer, Project Manager, and QA allows me to have a comprehensive view of projects, make better technical decisions, and deliver more robust products."}
          </p>

          <p>
            {lang === "es"
              ? "Me enfoco en escribir código limpio, construir arquitecturas mantenibles y crear soluciones que realmente aporten valor al negocio y al usuario final."
              : "I focus on writing clean code, building maintainable architectures, and creating solutions that truly add value to both the business and the end user."}
          </p>
        </div>

        {/* Right – Highlights */}
        <div className="grid gap-6 sm:grid-cols-2">
          
          <div className="rounded-2xl border border-(--border) bg-(--card) p-6">
            <p className="text-sm font-medium">
              {lang === "es" ? "Roles" : "Roles"}
            </p>
            <p className="mt-2 text-sm opacity-80">
              Full Stack · Project Manager · QA
            </p>
          </div>

          <div className="rounded-2xl border border-(--border) bg-(--card) p-6">
            <p className="text-sm font-medium">
              {lang === "es" ? "Sectores" : "Industries"}
            </p>
            <p className="mt-2 text-sm opacity-80">
              Gobierno · Salud · Freelance
            </p>
          </div>

          <div className="rounded-2xl border border-(--border) bg-(--card) p-6">
            <p className="text-sm font-medium">
              {lang === "es" ? "Metodologías" : "Methodologies"}
            </p>
            <p className="mt-2 text-sm opacity-80">
              Scrum · Kanban · Agile
            </p>
          </div>

          <div className="rounded-2xl border border-(--border) bg-(--card) p-6">
            <p className="text-sm font-medium">
              {lang === "es" ? "Enfoque" : "Focus"}
            </p>
            <p className="mt-2 text-sm opacity-80">
              Clean Code · Escalabilidad · UX
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
