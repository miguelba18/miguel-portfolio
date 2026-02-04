"use client";

import { useLanguage } from "../../context/LanguageContext";
import { profileText } from "../../data/profile";

export default function Hero() {
  const { lang } = useLanguage();
  const text = profileText[lang];

  return (
    <section className="relative max-w-7xl mx-auto px-4 pt-28 pb-24">
      
      {/* Background glow */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-(--primary) opacity-20 blur-3xl rounded-full pointer-events-none" />

      <div className="grid gap-6 lg:grid-cols-3 relative">
        
        {/* Main Hero Card */}
        <div className="lg:col-span-2 rounded-3xl border border-(--border) bg-(--card) p-8 md:p-10 flex flex-col justify-between">
          
          <div>
            {/* Badge */}
            <span className="inline-flex items-center gap-2 text-xs px-3 py-1 rounded-full border border-(--border) mb-4">
              <span className="w-2 h-2 rounded-full bg-(--secondary)" />
              {lang === "es"
                ? "Disponible para proyectos"
                : "Open to opportunities"}
            </span>

            <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold leading-tight">
              Miguel Ángel <br />
              Bahamón Rocha
            </h1>

            <p className="mt-4 text-lg md:text-xl text-(--primary) font-medium">
              {lang === "es"
                ? "Ingeniero de Software · Full Stack · Project Manager"
                : "Software Engineer · Full Stack · Project Manager"}
            </p>

            <p className="mt-5 max-w-2xl text-sm md:text-base opacity-80">
              {lang === "es"
                ? "Desarrollo aplicaciones web modernas y escalables, combinando arquitectura limpia, buenas prácticas y liderazgo técnico. Experiencia en proyectos gubernamentales, sector salud y soluciones empresariales."
                : "I build modern and scalable web applications, combining clean architecture, best practices, and technical leadership. Experience in government projects, healthcare, and enterprise solutions."}
            </p>
          </div>

          {/* CTA */}
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="px-6 py-3 rounded-xl bg-(--primary) text-white text-sm font-medium hover:opacity-90 transition"
            >
              {lang === "es" ? "Ver proyectos" : "View projects"}
            </a>

            <a
              href="#experience"
              className="px-6 py-3 rounded-xl border border-(--border) text-sm hover:bg-(--background) transition"
            >
              {lang === "es" ? "Experiencia" : "Experience"}
            </a>
          </div>
        </div>

        {/* Right Bento Column */}
        <div className="grid gap-6">
          
          {/* Experience */}
          <div className="rounded-3xl border border-(--border) bg-(--card) p-6">
            <p className="text-sm font-medium opacity-80">
              {lang === "es" ? "Experiencia" : "Experience"}
            </p>
            <p className="mt-2 text-4xl font-bold">
              3+
            </p>
            <p className="text-xs opacity-70">
              {lang === "es" ? "años desarrollando" : "years building"}
            </p>
          </div>

          {/* Focus */}
          <div className="rounded-3xl border border-(--border) bg-(--card) p-6">
            <p className="text-sm font-medium opacity-80">
              {lang === "es" ? "Especialidad" : "Focus"}
            </p>
            <ul className="mt-3 space-y-1 text-sm opacity-80">
              <li>• Frontend moderno (React / Next)</li>
              <li>• Backend & APIs REST</li>
              <li>• Liderazgo técnico & PM</li>
            </ul>
          </div>

          {/* Stack */}
          <div className="rounded-3xl border border-(--border) bg-(--card) p-6">
            <p className="text-sm font-medium opacity-80">
              Stack
            </p>
            <p className="mt-3 text-xs leading-relaxed opacity-80">
              React · Next.js · Node · NestJS · Laravel · PostgreSQL · MongoDB ·
              Tailwind · Docker · Git
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
