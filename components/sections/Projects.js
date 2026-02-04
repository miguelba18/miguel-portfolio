"use client";

import { useLanguage } from "../../context/LanguageContext";
import { projects } from "../../data/projects";

export default function Projects() {
  const { lang } = useLanguage();

  return (
    <section
      id="projects"
      className="max-w-7xl mx-auto px-4 py-24"
    >
      {/* Header */}
      <div className="max-w-2xl">
        <h2 className="text-3xl md:text-4xl font-bold">
          {lang === "es" ? "Proyectos" : "Projects"}
        </h2>
        <p className="mt-4 text-sm md:text-base opacity-80">
          {lang === "es"
            ? "Proyectos reales en los que he trabajado, incluyendo soluciones empresariales, gubernamentales y desarrollos personales."
            : "Real projects I have worked on, including enterprise, government, and personal solutions."}
        </p>
      </div>

      {/* Grid */}
      <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <article
            key={index}
            className="group rounded-3xl border border-(--border) bg-(--card) p-6 flex flex-col justify-between transition hover:-translate-y-1"
          >
            {/* Top */}
            <div>
              <span className="inline-block text-xs px-3 py-1 rounded-full border border-(--border) mb-4 opacity-80">
                {project.type}
              </span>

              <h3 className="text-xl font-semibold">
                {project.title}
              </h3>

              <p className="mt-3 text-sm opacity-80 leading-relaxed">
                {project.description[lang]}
              </p>
            </div>

            {/* Stack */}
            <div className="mt-6 flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="text-xs px-2.5 py-1 rounded-lg border border-(--border) bg-(--background) opacity-80"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Actions */}
            <div className="mt-6 flex items-center gap-4">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium underline underline-offset-4 opacity-80 hover:opacity-100"
                >
                  GitHub
                </a>
              )}

              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium underline underline-offset-4 opacity-80 hover:opacity-100"
                >
                  Demo
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
