"use client";

import { useLanguage } from "../../context/LanguageContext";
import { aboutContent, highlights } from "../../data/siteConfig";
import { metrics } from "../../data/skills";

export default function About() {
  const { lang } = useLanguage();
  const content = aboutContent[lang];
  const highlightItems = highlights[lang];
  const stats = metrics[lang];

  return (
    <section id="about" className="relative max-w-7xl mx-auto px-4 py-24">
      <div className="absolute top-0 right-0 w-80 h-80 bg-(--primary) opacity-15 blur-3xl rounded-full pointer-events-none animate-pulse" />
  <div className="absolute bottom-0 left-0 w-64 h-64 bg-(--secondary) opacity-10 blur-3xl rounded-full pointer-events-none animate-pulse" style={{ animationDelay: "0.5s" }} />
      
      
      {/* Header */}
      <div className="max-w-2xl">
        <h2 className="text-3xl md:text-4xl font-bold">
          {content.title}
        </h2>
        <p className="mt-4 text-sm md:text-base opacity-80">
          {content.subtitle}
        </p>
      </div>

      {/* Content Grid */}
      <div className="mt-16 grid gap-12 lg:grid-cols-2 items-start">
        
        {/* Left - Story */}
        <div className="space-y-6">
          {content.paragraphs.map((paragraph, index) => (
            <p key={index} className="text-sm md:text-base opacity-80 leading-relaxed">
              {paragraph}
            </p>
          ))}

          {/* Metrics */}
          <div className="pt-6 grid grid-cols-2 gap-4">
            {Object.values(stats).map((stat, index) => (
              <div
                key={index}
                className="rounded-xl border border-(--border) bg-(--card) p-4 hover:scale-105 transition-transform"
              >
                <p className="text-2xl md:text-3xl font-bold text-(--primary)">
                  {stat.value}
                </p>
                <p className="mt-1 text-xs opacity-70">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Right - Highlights */}
        <div className="grid gap-6 sm:grid-cols-2">
          {highlightItems.map((item, index) => (
            <div
              key={index}
              className="rounded-2xl border border-(--border) bg-(--card) p-6 hover:scale-105 transition-transform"
            >
              <div className="flex items-center gap-3 mb-3">
                {/* Icon */}
                {item.icon === "user" && (
                  <svg className="w-5 h-5 text-(--primary)" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                )}
                {item.icon === "briefcase" && (
                  <svg className="w-5 h-5 text-(--primary)" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                )}
                {item.icon === "settings" && (
                  <svg className="w-5 h-5 text-(--primary)" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                )}
                {item.icon === "target" && (
                  <svg className="w-5 h-5 text-(--primary)" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                )}
                <p className="text-sm font-medium">{item.label}</p>
              </div>
              <p className="text-sm opacity-80 leading-relaxed">
                {item.value}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Additional Info Section */}
      <div className="mt-16 rounded-3xl border border-(--border) bg-(--card) p-8 md:p-10">
        <div className="grid md:grid-cols-3 gap-8">
          
          {/* Professional Approach */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <svg className="w-5 h-5 text-(--primary)" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h3 className="text-sm font-semibold">
                {lang === "es" ? "Enfoque Profesional" : "Professional Approach"}
              </h3>
            </div>
            <p className="text-sm opacity-70 leading-relaxed">
              {lang === "es"
                ? "Código limpio, arquitecturas escalables y soluciones centradas en el usuario"
                : "Clean code, scalable architectures, and user-centered solutions"}
            </p>
          </div>

          {/* Collaboration */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <svg className="w-5 h-5 text-(--primary)" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              <h3 className="text-sm font-semibold">
                {lang === "es" ? "Trabajo en Equipo" : "Teamwork"}
              </h3>
            </div>
            <p className="text-sm opacity-70 leading-relaxed">
              {lang === "es"
                ? "Experiencia coordinando equipos multidisciplinarios bajo metodologías ágiles"
                : "Experience coordinating multidisciplinary teams under agile methodologies"}
            </p>
          </div>

          {/* Continuous Learning */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <svg className="w-5 h-5 text-(--primary)" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <h3 className="text-sm font-semibold">
                {lang === "es" ? "Aprendizaje Continuo" : "Continuous Learning"}
              </h3>
            </div>
            <p className="text-sm opacity-70 leading-relaxed">
              {lang === "es"
                ? "Siempre actualizándome con las últimas tecnologías y mejores prácticas"
                : "Always updating with the latest technologies and best practices"}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}