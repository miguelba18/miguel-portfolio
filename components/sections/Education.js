"use client";

import { useLanguage } from "../../context/LanguageContext";
import { education, languages } from "../../data/education";

export default function Education() {
  const { lang } = useLanguage();
  const languagesList = languages[lang];

  return (
    <section id="education" className="relative max-w-7xl mx-auto px-4 py-24">
     
  {/* Efecto giratorio lento superior */}
  <div className="absolute -top-20 left-0 w-72 h-72 bg-(--primary) opacity-10 blur-3xl rounded-full pointer-events-none animate-spin" style={{ animationDuration: "25s" }} />
  
  {/* Efecto de ping inferior derecha */}
  <div className="absolute bottom-0 right-1/2 w-80 h-80 bg-(--secondary) opacity-12 blur-3xl rounded-full pointer-events-none animate-ping" style={{ animationDuration: "4s", animationDelay: "0.5s" }} />
  
  {/* Efecto de pulso central izquierda */}
  <div className="absolute top-1/2 left-28 w-64 h-64 bg-(--primary) opacity-15 blur-3xl rounded-full pointer-events-none animate-pulse" />
  
  
      
      {/* Header */}
      <div className="max-w-2xl">
        <h2 className="text-3xl md:text-4xl font-bold">
          {lang === "es" ? "Educación" : "Education"}
        </h2>
        <p className="mt-4 text-sm md:text-base opacity-80">
          {lang === "es"
            ? "Formación académica progresiva en desarrollo de software, sistemas de información y tecnología."
            : "Progressive academic training in software development, information systems, and technology."}
        </p>
      </div>

      {/* Education Timeline */}
      <div className="mt-16 relative">
        {/* Timeline Line */}
        <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-(--border)" />

        <div className="space-y-12">
          {education.map((item, index) => (
            <div key={index} className="relative pl-8 md:pl-20">
              
              {/* Timeline Dot */}
              <div className="absolute left-0 md:left-8 top-2 -translate-x-1/2 flex items-center justify-center">
                <div className={`w-4 h-4 rounded-full border-4 border-(--background) shadow-lg ${
                  item.status[lang].includes("curso") || item.status[lang].includes("progress")
                    ? "bg-(--secondary) animate-pulse"
                    : "bg-(--primary)"
                }`} />
              </div>

              {/* Content Card */}
              <div className="rounded-2xl border border-(--border) bg-(--card) p-6 md:p-8 hover:scale-[1.02 transition-transform">
                
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold">
                      {item.degree[lang]}
                    </h3>
                    <p className="mt-2 text-sm font-medium opacity-80">
                      {item.institution}
                    </p>
                    <p className="mt-1 text-sm opacity-60">
                      {item.location}
                    </p>
                  </div>
                  <div className="flex flex-col gap-2">
                    <span className="inline-flex items-center gap-2 text-xs px-3 py-1.5 rounded-full border border-(--border) bg-(--background) whitespace-nowrap">
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      {item.period}
                    </span>
                    <span className={`text-xs px-3 py-1.5 rounded-full text-center ${
                      item.status[lang].includes("curso") || item.status[lang].includes("progress")
                        ? "bg-(--secondary)/10 text-(--secondary) font-medium"
                        : "bg-(--primary)/10 text-(--primary) font-medium"
                    }`}>
                      {item.status[lang]}
                    </span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm opacity-80 leading-relaxed">
                  {item.description[lang]}
                </p>

                {/* Credential */}
                {item.credential && (
                  <div className="mt-4 flex items-center gap-2 text-xs opacity-60">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                    <span className="font-mono">{item.credential}</span>
                  </div>
                )}

                {/* Icon indicator */}
                <div className="mt-4 flex items-center gap-2">
                  {item.icon === "code" && (
                    <div className="flex items-center gap-2 text-xs px-3 py-1.5 rounded-lg bg-(--background) opacity-70">
                      <svg className="w-4 h-4 text-(--primary)" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                      </svg>
                      <span>{lang === "es" ? "Ingeniería" : "Engineering"}</span>
                    </div>
                  )}
                  {item.icon === "database" && (
                    <div className="flex items-center gap-2 text-xs px-3 py-1.5 rounded-lg bg-(--background) opacity-70">
                      <svg className="w-4 h-4 text-(--primary)" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                      </svg>
                      <span>{lang === "es" ? "Tecnología" : "Technology"}</span>
                    </div>
                  )}
                  {item.icon === "tool" && (
                    <div className="flex items-center gap-2 text-xs px-3 py-1.5 rounded-lg bg-(--background) opacity-70">
                      <svg className="w-4 h-4 text-(--primary)" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <span>{lang === "es" ? "Técnico" : "Technical"}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Languages Section */}
      <div className="mt-16">
        <h3 className="text-2xl font-bold mb-8">
          {lang === "es" ? "Idiomas" : "Languages"}
        </h3>
        <div className="grid sm:grid-cols-2 gap-6">
          {languagesList.map((item, index) => (
            <div
              key={index}
              className="rounded-2xl border border-(--border) bg-(--card) p-6 hover:scale-105 transition-transform"
            >
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h4 className="text-lg font-semibold">
                    {item.language}
                  </h4>
                  <p className="text-sm opacity-70 mt-1">
                    {item.level}
                  </p>
                </div>
                <div className="text-2xl font-bold text-(--primary)">
                  {item.proficiency}%
                </div>
              </div>
              {/* Progress Bar */}
              <div className="w-full bg-(--background) rounded-full h-2 overflow-hidden">
                <div
                  className="h-full bg-linear-to-r from-(--primary) to-(--secondary) rounded-full transition-all duration-1000"
                  style={{ width: `${item.proficiency}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Additional Info */}
      <div className="mt-16 rounded-3xl border border-(--border) bg-(--card) p-8 md:p-10">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
              <svg className="w-5 h-5 text-(--primary)" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
              {lang === "es" ? "Aprendizaje Continuo" : "Continuous Learning"}
            </h3>
            <p className="text-sm opacity-70 leading-relaxed">
              {lang === "es"
                ? "Actualmente cursando Ingeniería de Software mientras mantengo actualización constante en nuevas tecnologías y mejores prácticas de desarrollo."
                : "Currently pursuing Software Engineering while maintaining constant updates on new technologies and development best practices."}
            </p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
              <svg className="w-5 h-5 text-(--primary)" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
              </svg>
              {lang === "es" ? "Formación Oficial" : "Official Training"}
            </h3>
            <p className="text-sm opacity-70 leading-relaxed">
              {lang === "es"
                ? "Todos los títulos están registrados en el Ministerio de Educación Nacional de Colombia con credenciales SNIES verificables."
                : "All degrees are registered with the Colombian Ministry of National Education with verifiable SNIES credentials."}
            </p>
          </div>
         <div>
  <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
    <svg className="w-5 h-5 text-(--primary)" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
    </svg>
    {lang === "es" ? "Certificación en Proceso" : "Certification in Progress"}
  </h3>
  <p className="text-sm opacity-70 leading-relaxed">
    {lang === "es"
      ? "Actualmente preparándome para obtener la certificación de inglés nivel B2. Próximamente certificado oficial."
      : "Currently preparing to obtain B2 English level certification. Official certificate coming soon."}
  </p>
</div>
        </div>
      </div>
    </section>
  );
}