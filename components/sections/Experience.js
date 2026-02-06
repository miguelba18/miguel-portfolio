"use client";

import { useLanguage } from "../../context/LanguageContext";
import { experience } from "../../data/experience";

export default function Experience() {
  const { lang } = useLanguage();

  return (
    <section id="experience" className="relative max-w-7xl mx-auto px-4 py-24">
      {/* Efecto horizontal superior */}
  <div className="absolute top-20 left-1/2 -translate-x-1/2 w-full h-40 bg-(--primary) opacity-8 blur-3xl pointer-events-none animate-pulse" />
      
      {/* Header */}
      <div className="max-w-2xl">
        <h2 className="text-3xl md:text-4xl font-bold">
          {lang === "es" ? "Experiencia" : "Experience"}
        </h2>
        <p className="mt-4 text-sm md:text-base opacity-80">
          {lang === "es"
            ? "Trayectoria profesional y colaboraciones en proyectos reales del sector público y privado."
            : "Professional trajectory and collaborations on real projects in the public and private sectors."}
        </p>
      </div>

      {/* Timeline */}
      <div className="mt-16 relative">
        {/* Timeline Line */}
        <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-[var(--border)" />

        <div className="space-y-12">
          {experience.map((item, index) => (
            <div key={index} className="relative pl-8 md:pl-20">
              
              {/* Timeline Dot */}
              <div className="absolute left-0 md:left-8 top-2 -translate-x-1/2 flex items-center justify-center">
                <div className="w-4 h-4 rounded-full bg-[var(--primary) border-4 border-[var(--background) shadow-lg" />
              </div>

              {/* Content Card */}
              <div className="rounded-2xl border border-[var(--border) bg-[var(--card) p-6 md:p-8 hover:scale-[1.02 transition-transform">
                
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                  <div>
                    <h3 className="text-xl font-bold">
                      {item.role[lang]}
                    </h3>
                    <p className="mt-1 text-sm font-medium opacity-80">
                      {item.company}
                    </p>
                  </div>
                  <span className="inline-flex items-center gap-2 text-xs px-3 py-1.5 rounded-full border border-(--border) bg-(--background) whitespace-nowrap">
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    {item.period}
                  </span>
                </div>

                {/* Description */}
                <p className="text-sm opacity-80 leading-relaxed">
                  {item.description[lang]}
                </p>

                {/* Achievements */}
                {item.achievements && (
                  <div className="mt-6">
                    <p className="text-xs font-semibold opacity-70 mb-3">
                      {lang === "es" ? "Logros destacados:" : "Key achievements:"}
                    </p>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-2">
                      {item.achievements[lang].map((achievement, idx) => (
                        <div
                          key={idx}
                          className="flex items-start gap-2 text-xs opacity-70 bg-(--background) rounded-lg p-2.5"
                        >
                          <svg className="w-4 h-4 text-(--primary) shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Tags/Skills used */}
                <div className="mt-6 flex flex-wrap gap-2">
                  {index === 0 && (
                    <>
                      <span className="text-xs px-2.5 py-1 rounded-lg border border-(--border) bg-(--background) opacity-70">React</span>
                      <span className="text-xs px-2.5 py-1 rounded-lg border border-(--border) bg-(--background) opacity-70">Node.js</span>
                      <span className="text-xs px-2.5 py-1 rounded-lg border border-(--border) bg-(--background) opacity-70">PostgreSQL</span>
                      <span className="text-xs px-2.5 py-1 rounded-lg border border-(--border) bg-(--background) opacity-70">Project Management</span>
                    </>
                  )}
                  {index === 1 && (
                    <>
                      <span className="text-xs px-2.5 py-1 rounded-lg border border-(--border) bg-(--background) opacity-70">React</span>
                      <span className="text-xs px-2.5 py-1 rounded-lg border border-(--border) bg-(--background) opacity-70">JavaScript</span>
                      <span className="text-xs px-2.5 py-1 rounded-lg border border-(--border) bg-(--background) opacity-70">REST APIs</span>
                    </>
                  )}
                  {index === 2 && (
                    <>
                      <span className="text-xs px-2.5 py-1 rounded-lg border border-(--border) bg-(--background) opacity-70">Full Stack</span>
                      <span className="text-xs px-2.5 py-1 rounded-lg border border-(--border) bg-(--background) opacity-70">Scrum</span>
                      <span className="text-xs px-2.5 py-1 rounded-lg border border-(--border) bg-(--background) opacity-70">Unity</span>
                    </>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Additional Info */}
      <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="rounded-xl border border-(--border) bg-(--card) p-6 text-center hover:scale-105 transition-transform">
          <p className="text-3xl font-bold text-(--primary)">3+</p>
          <p className="mt-2 text-xs opacity-70">
            {lang === "es" ? "Años de experiencia" : "Years of experience"}
          </p>
        </div>
        
        <div className="rounded-xl border border-(--border) bg-(--card) p-6 text-center hover:scale-105 transition-transform">
          <p className="text-3xl font-bold text-(--primary)">15+</p>
          <p className="mt-2 text-xs opacity-70">
            {lang === "es" ? "Proyectos completados" : "Projects completed"}
          </p>
        </div>
        
         <div className="rounded-xl border border-(--border) bg-(--card) p-6 text-center hover:scale-105 transition-transform">
          <p className="text-3xl font-bold text-(--primary)">3</p>
          <p className="mt-2 text-xs opacity-70">
            {lang === "es" ? "Roles desempeñados" : "Roles performed"}
          </p>
        </div>
        
        <div className="rounded-xl border border-(--border) bg-(--card) p-6 text-center hover:scale-105 transition-transform">
          <p className="text-3xl font-bold text-(--primary)">4</p>
          <p className="mt-2 text-xs opacity-70">
            {lang === "es" ? "Sectores trabajados" : "Sectors worked"}
          </p>
        </div>
       
      </div>
    </section>
  );
}