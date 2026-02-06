"use client";

import { useState } from "react";
import { useLanguage } from "../../context/LanguageContext";
import { projects, projectCategories } from "../../data/projects";

export default function Projects() {
  const { lang } = useLanguage();
  const [activeCategory, setActiveCategory] = useState("all");
  const categories = projectCategories[lang];

  const filteredProjects = activeCategory === "all"
    ? projects
    : projects.filter(p => p.category === activeCategory);

  return (
    <section id="projects" className="relative max-w-7xl mx-auto px-4 py-24">
      <div className="absolute top-1/4  left-0 w-56 h-56 bg-(--primary) opacity-10 blur-3xl rounded-full pointer-events-none animate-pulse" />
      <div className="absolute bottom-1/4 right-30 w-44 h-44 bg-(--secondary) opacity-10 blur-3xl rounded-full pointer-events-none animate-pulse" style={{ animationDelay: "0.5s" }} />
      
      {/* Header */}
      <div className="max-w-2xl">
        <h2 className="text-3xl md:text-4xl font-bold">
          {lang === "es" ? "Proyectos" : "Projects"}
        </h2>
        <p className="mt-4 text-sm md:text-base opacity-80">
          {lang === "es"
            ? "Proyectos profesionales y personales en los que he trabajado, desde soluciones empresariales hasta desarrollos de código abierto."
            : "Professional and personal projects I've worked on, from enterprise solutions to open-source developments."}
        </p>
      </div>

      {/* Category Filters */}
      <div className="mt-12 flex flex-wrap gap-2">
        {Object.entries(categories).map(([key, label]) => (
          <button
            key={key}
            onClick={() => setActiveCategory(key)}
            className={`px-4 py-2 text-sm font-medium rounded-lg transition-all ${
              activeCategory === key
                ? "bg-(--primary) text-white"
                : "border border-(--border) hover:bg-(--card)"
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      {/* Projects Count */}
      <p className="mt-6 text-sm opacity-70">
        {lang === "es" ? "Mostrando" : "Showing"} {filteredProjects.length} {lang === "es" ? "proyectos" : "projects"}
      </p>

      {/* Projects Grid */}
      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filteredProjects.map((project, index) => (
          <article
            key={index}
            className="group rounded-3xl border border-(--border) bg-(--card) p-6 flex flex-col justify-between transition-all hover:-translate-y-2 hover:shadow-xl"
          >
            {/* Top */}
            <div>
              {/* Type Badge */}
              <div className="flex items-center justify-between mb-4">
                <span className="inline-block text-xs px-3 py-1 rounded-full border border-(--border) bg-(--background) opacity-80">
                  {project.type}
                </span>
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="opacity-50 hover:opacity-100 transition"
                    aria-label="View on GitHub"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                    </svg>
                  </a>
                )}
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold group-hover:text-(--primary) transition">
                {typeof project.title === "object" ? project.title[lang] : project.title}
              </h3>

              {/* Description */}
              <p className="mt-3 text-sm opacity-80 leading-relaxed line-clamp-3">
                {project.description[lang]}
              </p>

              {/* Highlights */}
              {project.highlights && (
                <div className="mt-4 space-y-1.5">
                  {project.highlights[lang].slice(0, 2).map((highlight, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs opacity-70">
                      <svg className="w-4 h-4 text-(--primary) shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Bottom */}
            <div className="mt-6">
              {/* Stack */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.stack.slice(0, 4).map((tech) => (
                  <span
                    key={tech}
                    className="text-xs px-2.5 py-1 rounded-lg border border-(--border) bg-(--background) opacity-80"
                  >
                    {tech}
                  </span>
                ))}
                {project.stack.length > 4 && (
                  <span className="text-xs px-2.5 py-1 rounded-lg border border-(--border) bg-(--background) opacity-80">
                    +{project.stack.length - 4}
                  </span>
                )}
              </div>

              {/* Actions */}
              <div className="flex items-center gap-3">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm font-medium underline underline-offset-4 opacity-80 hover:opacity-100 transition"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                    </svg>
                    GitHub
                  </a>
                )}

                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm font-medium underline underline-offset-4 opacity-80 hover:opacity-100 transition"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    Demo
                  </a>
                )}

                {!project.github && !project.demo && (
                  <span className="text-xs opacity-50">
                    {lang === "es" ? "Proyecto privado" : "Private project"}
                  </span>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* GitHub CTA */}
      <div className="mt-16 rounded-3xl border border-(--border) bg-(--card) p-8 md:p-10 text-center">
        <svg className="w-12 h-12 mx-auto opacity-80" fill="currentColor" viewBox="0 0 24 24">
          <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
        </svg>
        <h3 className="mt-4 text-xl font-bold">
          {lang === "es" ? "Más proyectos en GitHub" : "More projects on GitHub"}
        </h3>
        <p className="mt-2 text-sm opacity-70 max-w-md mx-auto">
          {lang === "es"
            ? "Explora todos mis repositorios públicos, contribuciones y experimentos de código."
            : "Explore all my public repositories, contributions, and code experiments."}
        </p>
        <a
          href="https://github.com/miguelba18"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-(--primary) text-white text-sm font-medium hover:opacity-90 transition"
        >
          {lang === "es" ? "Ver GitHub" : "View GitHub"}
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </a>
      </div>
    </section>
  );
}