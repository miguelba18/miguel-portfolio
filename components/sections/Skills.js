"use client";

import { useLanguage } from "../../context/LanguageContext";

const skills = {
  frontend: [
    "React",
    "Next.js",
    "JavaScript",
    "HTML5",
    "CSS3",
    "Tailwind",
  ],
  backend: [
    "Node.js",
    "NestJS",
    "Laravel",
    "PHP",
    "REST APIs",
  ],
  database: [
    "PostgreSQL",
    "MySQL",
    "MongoDB",
  ],
  tools: [
    "Git",
    "GitHub",
    "Docker",
    "Vercel",
    "Railway",
  ],
};

export default function Skills() {
  const { lang } = useLanguage();

  return (
    <section
      id="skills"
      className="max-w-7xl mx-auto px-4 py-24"
    >
      <h2 className="text-3xl md:text-4xl font-bold">
        {lang === "es" ? "Habilidades" : "Skills"}
      </h2>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {Object.entries(skills).map(([category, items]) => (
          <div
            key={category}
            className="rounded-2xl border border-(--border)] bg-(--card)] p-6"
          >
            <p className="text-sm font-medium mb-4">
              {category.toUpperCase()}
            </p>

            <ul className="space-y-2 text-sm opacity-80">
              {items.map((skill) => (
                <li key={skill}>• {skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
