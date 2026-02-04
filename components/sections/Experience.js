"use client";

import { useLanguage } from "../../context/LanguageContext";
import { experience } from "../../data/experience";

export default function Experience() {
  const { lang } = useLanguage();

  return (
    <section
      id="experience"
      className="max-w-7xl mx-auto px-4 py-24"
    >
      {/* Header */}
      <div className="max-w-2xl">
        <h2 className="text-3xl md:text-4xl font-bold">
          {lang === "es" ? "Experiencia" : "Experience"}
        </h2>
        <p className="mt-4 text-sm md:text-base opacity-80">
          {lang === "es"
            ? "Experiencia profesional y colaboraciones en proyectos reales."
            : "Professional experience and collaborations on real-world projects."}
        </p>
      </div>

      {/* Timeline */}
      <div className="mt-16 relative border-l border-(--border)] pl-6 space-y-12">
        {experience.map((item, index) => (
          <div key={index} className="relative">
            {/* Dot */}
            <span className="absolute -left-2.25 top-1 w-4 h-4 rounded-full bg-(--primary)]" />

            <div className="rounded-2xl border border-(--border)] bg-(--card)] p-6">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                <h3 className="text-lg font-semibold">
                  {item.role[lang]}
                </h3>
                <span className="text-xs opacity-70">
                  {item.period}
                </span>
              </div>

              <p className="mt-1 text-sm font-medium opacity-80">
                {item.company}
              </p>

              <p className="mt-3 text-sm opacity-80 leading-relaxed">
                {item.description[lang]}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
