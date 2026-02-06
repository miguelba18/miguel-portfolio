"use client";

import { useState } from "react";
import { useLanguage } from "../../context/LanguageContext";
import { certifications, workCertifications, certificationTypes, certificationStats } from "../../data/certifications";

export default function Certifications() {
  const { lang } = useLanguage();
  const [activeTab, setActiveTab] = useState("all");
  const types = certificationTypes[lang];
  const stats = certificationStats[lang];

  const allCertifications = [...certifications, ...workCertifications];
  const filteredCerts = activeTab === "all"
    ? allCertifications
    : allCertifications.filter(c => c.type === activeTab);

  return (
    <section id="certifications" className="relative max-w-7xl mx-auto px-4 py-24">
      {/* Efecto flotante inferior central */}
  <div className="absolute top-24 left-1/2 -translate-x-1/2 w-full h-48 bg-(--secondary) opacity-8 blur-3xl pointer-events-none animate-bounce" style={{ animationDuration: "5s" }} />
      
      {/* Header */}
      <div className="max-w-2xl">
        <h2 className="text-3xl md:text-4xl font-bold">
          {lang === "es" ? "Certificaciones" : "Certifications"}
        </h2>
        <p className="mt-4 text-sm md:text-base opacity-80">
          {lang === "es"
            ? "Formación académica, reconocimientos y certificaciones profesionales que respaldan mi experiencia."
            : "Academic training, recognitions, and professional certifications that support my experience."}
        </p>
      </div>

      {/* Stats Grid */}
      <div className="mt-12 grid sm:grid-cols-3 gap-4">
        {Object.values(stats).map((stat, index) => (
          <div
            key={index}
            className="rounded-xl border border-(--border) bg-(--card) p-6 text-center hover:scale-105 transition-transform"
          >
            <p className="text-3xl font-bold text-(--primary)">
              {stat.value}
            </p>
            <p className="mt-2 text-xs opacity-70">
              {stat.label}
            </p>
          </div>
        ))}
      </div>

      {/* Filter Tabs */}
      <div className="mt-12 flex flex-wrap gap-2">
        {Object.entries(types).map(([key, label]) => (
          <button
            key={key}
            onClick={() => setActiveTab(key)}
            className={`px-4 py-2 text-sm font-medium rounded-lg transition-all ${
              activeTab === key
                ? "bg-(--primary) text-white"
                : "border border-(--border) hover:bg-(--card)"
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      {/* Certifications Grid */}
      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        {filteredCerts.map((cert, index) => (
          <div
            key={index}
            className="rounded-2xl border border-(--border) bg-(--card) p-6 hover:scale-[1.02 transition-transform"
          >
            {/* Icon */}
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-(--primary)/10">
                {cert.icon === "graduation" && (
                  <svg className="w-6 h-6 text-(--primary)" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                  </svg>
                )}
                {cert.icon === "award" && (
                  <svg className="w-6 h-6 text-(--primary)" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                )}
                {cert.icon === "trophy" && (
                  <svg className="w-6 h-6 text-(--primary)" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                )}
                {cert.icon === "briefcase" && (
                  <svg className="w-6 h-6 text-(--primary)" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                )}
              </div>
              {cert.date && (
                <span className="text-xs px-3 py-1 rounded-full border border-(--border) bg-(--background) opacity-70">
                  {cert.date}
                </span>
              )}
              {cert.period && (
                <span className="text-xs px-3 py-1 rounded-full border border-(--border) bg-(--background) opacity-70">
                  {cert.period}
                </span>
              )}
            </div>

            {/* Title */}
            <h3 className="text-lg font-semibold">
              {typeof cert.title === "object" ? cert.title[lang] : cert.title}
            </h3>

            {/* Institution/Company */}
            <p className="mt-2 text-sm font-medium opacity-80">
              {cert.institution || cert.company}
            </p>

            {/* Position (for work certs) */}
            {cert.position && (
              <p className="mt-1 text-sm opacity-70">
                {typeof cert.position === "object" ? cert.position[lang] : cert.position}
              </p>
            )}

            {/* Credential */}
            {cert.credential && (
              <p className="mt-2 text-xs opacity-60 font-mono">
                {cert.credential}
              </p>
            )}

            {/* Description */}
            <p className="mt-4 text-sm opacity-70 leading-relaxed">
              {typeof cert.description === "object" ? cert.description[lang] : cert.description}
            </p>

            {/* Responsibilities (for work certs) */}
            {cert.responsibilities && (
              <div className="mt-4 space-y-1.5">
                <p className="text-xs font-semibold opacity-70">
                  {lang === "es" ? "Responsabilidades:" : "Responsibilities:"}
                </p>
                <ul className="space-y-1">
                  {cert.responsibilities[lang].slice(0, 3).map((resp, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs opacity-60">
                      <svg className="w-3 h-3 text-(--primary) shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{resp}</span>
                    </li>
                  ))}
                  {cert.responsibilities[lang].length > 3 && (
                    <li className="text-xs opacity-50 pl-5">
                      +{cert.responsibilities[lang].length - 3} {lang === "es" ? "más" : "more"}
                    </li>
                  )}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Download CV CTA */}
      <div className="mt-16 rounded-3xl border border-(--border) bg-(--card) p-8 md:p-10 text-center">
        <svg className="w-12 h-12 mx-auto opacity-80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
        <h3 className="mt-4 text-xl font-bold">
          {lang === "es" ? "Certificados disponibles" : "Certificates available"}
        </h3>
        <p className="mt-2 text-sm opacity-70 max-w-md mx-auto">
          {lang === "es"
            ? "Todos los certificados y soportes están disponibles en mi CV completo para descarga."
            : "All certificates and supporting documents are available in my full CV for download."}
        </p>
        <a
          href={lang === "es" ? "/cv/CV_Miguel_Bahamon_ES.pdf" : "/cv/CV_Miguel_Bahamon_EN.pdf"}
          download
          className="mt-6 inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-(--primary) text-white text-sm font-medium hover:opacity-90 transition"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          {lang === "es" ? "Descargar CV completo" : "Download full CV"}
        </a>
      </div>
    </section>
  );
}   