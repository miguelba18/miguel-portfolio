"use client";

import { useLanguage } from "../../context/LanguageContext";
import { skills, expertise } from "../../data/skills";

export default function Skills() {
  const { lang } = useLanguage();
  const expertiseItems = expertise[lang];

  return (
    <section id="skills" className="max-w-7xl mx-auto px-4 py-24">
      
      {/* Header */}
      <div className="max-w-2xl">
        <h2 className="text-3xl md:text-4xl font-bold">
          {lang === "es" ? "Habilidades" : "Skills"}
        </h2>
        <p className="mt-4 text-sm md:text-base opacity-80">
          {lang === "es"
            ? "Stack tecnológico y áreas de expertise desarrolladas a través de proyectos reales y formación continua."
            : "Technology stack and areas of expertise developed through real projects and continuous training."}
        </p>
      </div>

      {/* Expertise Cards */}
      <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {expertiseItems.map((item, index) => (
          <div
            key={index}
            className="rounded-2xl border border-(--border) bg-(--card) p-6 hover:scale-105 transition-transform"
          >
            <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-(--primary)/10 mb-4">
              {item.icon === "code" && (
                <svg className="w-6 h-6 text-(--primary)" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              )}
              {item.icon === "users" && (
                <svg className="w-6 h-6 text-(--primary)" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              )}
              {item.icon === "check" && (
                <svg className="w-6 h-6 text-(--primary)" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              )}
              {item.icon === "layers" && (
                <svg className="w-6 h-6 text-(--primary)" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              )}
            </div>
            <h3 className="text-base font-semibold mb-2">
              {item.title}
            </h3>
            <p className="text-sm opacity-70 leading-relaxed">
              {item.description}
            </p>
          </div>
        ))}
      </div>

      {/* Technical Skills Grid */}
      <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {Object.entries(skills).map(([category, data]) => (
          <div
            key={category}
            className="rounded-2xl border border-(--border) bg-(--card) p-6 hover:scale-105 transition-transform"
          >
            <div className="flex items-center gap-2 mb-4">
              {/* Category Icons */}
              {category === "frontend" && (
                <svg className="w-5 h-5 text-(--primary)" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              )}
              {category === "backend" && (
                <svg className="w-5 h-5 text-(--primary)" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                </svg>
              )}
              {category === "database" && (
                <svg className="w-5 h-5 text-(--primary)" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                </svg>
              )}
              {category === "devops" && (
                <svg className="w-5 h-5 text-(--primary)" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                </svg>
              )}
              {category === "tools" && (
                <svg className="w-5 h-5 text-(--primary)" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              )}
              {category === "other" && (
                <svg className="w-5 h-5 text-(--primary)" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              )}
              <h3 className="text-sm font-semibold">
                {data.title[lang]}
              </h3>
            </div>
            
            <ul className="space-y-2 text-sm">
              {data.items.map((skill, index) => (
                <li key={index} className="flex items-center gap-2 opacity-80">
                  <span className="w-1.5 h-1.5 rounded-full bg-(--primary)" />
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Additional Info */}
      <div className="mt-16 rounded-3xl border border-(--border) bg-(--card) p-8 md:p-10">
        <h3 className="text-lg font-bold mb-6">
          {lang === "es" ? "Competencias Adicionales" : "Additional Competencies"}
        </h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div>
            <h4 className="text-sm font-semibold mb-2 flex items-center gap-2">
              <svg className="w-4 h-4 text-(--primary)" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {lang === "es" ? "Buenas Prácticas" : "Best Practices"}
            </h4>
            <p className="text-sm opacity-70">Clean Code · SOLID · DRY · Code Review</p>
          </div>
          <div>
            <h4 className="text-sm font-semibold mb-2 flex items-center gap-2">
              <svg className="w-4 h-4 text-(--primary)" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
              </svg>
              {lang === "es" ? "Metodologías Ágiles" : "Agile Methodologies"}
            </h4>
            <p className="text-sm opacity-70">Scrum · Kanban · Sprint Planning</p>
          </div>
          <div>
            <h4 className="text-sm font-semibold mb-2 flex items-center gap-2">
              <svg className="w-4 h-4 text-(--primary)" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              {lang === "es" ? "Soft Skills" : "Soft Skills"}
            </h4>
            <p className="text-sm opacity-70">
              {lang === "es" ? "Liderazgo · Comunicación · Trabajo en equipo" : "Leadership · Communication · Teamwork"}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}