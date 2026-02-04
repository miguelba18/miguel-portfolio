"use client";

import { useLanguage } from "../../context/LanguageContext";

export default function Contact() {
  const { lang } = useLanguage();

  return (
    <section
      id="contact"
      className="max-w-7xl mx-auto px-4 py-24"
    >
      <div className="rounded-3xl border border-(--border)] bg-(--card)] p-10 md:p-14">
        
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold">
            {lang === "es" ? "Contacto" : "Contact"}
          </h2>

          <p className="mt-4 text-sm md:text-base opacity-80">
            {lang === "es"
              ? "¿Tienes un proyecto, una oportunidad laboral o simplemente quieres hablar de tecnología? Estoy abierto a nuevas oportunidades."
              : "Do you have a project, a job opportunity, or just want to talk about technology? I’m open to new opportunities."}
          </p>
        </div>

        {/* Actions */}
        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="mailto:miguel@example.com"
            className="px-6 py-3 rounded-xl bg-(--primary)] text-white text-sm font-medium hover:opacity-90 transition"
          >
            {lang === "es" ? "Escríbeme" : "Email me"}
          </a>

          <a
            href="https://github.com/miguelba18"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-xl border border-(--border)] text-sm hover:bg-(--background)] transition"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-xl border border-(--border)] text-sm hover:bg-(--background)] transition"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
