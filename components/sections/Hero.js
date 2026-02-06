"use client";

import { useLanguage } from "../../context/LanguageContext";
import { profileText, personalInfo, focus, stack } from "../../data/profile";
import { siteConfig } from "../../data/siteConfig";

export default function Hero() {
  const { lang } = useLanguage();
  const text = profileText[lang];
  const focusItems = focus[lang];

  return (
    <section id="hero" className="relative max-w-7xl mx-auto px-4 md:pb-60 pt-10 min-h-screen flex items-center">
      
      {/* Background Elements */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-(--primary) opacity-20 blur-3xl rounded-full pointer-events-none animate-pulse" />
      <div className="absolute top-1/2 xl:-right-24 right-4 w-72 h-72 bg-(--secondary) opacity-10 blur-3xl rounded-full pointer-events-none animate-pulse" style={{ animationDelay: "1s" }} />

      <div className="grid gap-6 lg:grid-cols-3 relative w-full">
        
        {/* Main Hero Card */}
        <div className="lg:col-span-2 rounded-3xl border border-(--border) bg-(--card) p-8 md:p-12 flex flex-col justify-between backdrop-blur-sm">
          
          <div>
            {/* Availability Badge */}
            <span className="inline-flex items-center gap-2 text-xs px-3 py-1.5 rounded-full border border-(--border) bg-(--background) mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-(--secondary) opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-(--secondary)"></span>
              </span>
              {text.availability}
            </span>

            {/* Name */}
            <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold leading-tight mb-2">
              {personalInfo.name.split(" ").slice(0, 2).join(" ")} <br />
              <span className="text-(--primary)">
                {personalInfo.name.split(" ").slice(2).join(" ")}
              </span>
            </h1>

            {/* Role */}
            <p className="mt-6 text-lg md:text-xl font-medium opacity-90">
              {text.role}
            </p>
            
            <p className="mt-2 text-base md:text-lg opacity-70">
              {text.subtitle}
            </p>

            {/* Description */}
            <p className="mt-6 max-w-2xl text-sm md:text-base opacity-80 leading-relaxed">
              {text.description}
            </p>

            {/* Quick Stats */}
            <div className="mt-8 flex flex-wrap gap-6">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-(--primary)" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-sm opacity-70">{personalInfo.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-(--primary)" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="text-sm opacity-70">{text.experience} {text.experienceLabel} </span>
           
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="px-6 py-3 rounded-xl bg-(--primary) text-white text-sm font-medium hover:opacity-90 transition-all hover:scale-105"
            >
              {lang === "es" ? "Ver proyectos" : "View projects"}
            </a>

            <a
              href="#contact"
              className="px-6 py-3 rounded-xl border border-(--border) text-sm font-medium hover:bg-(--background) transition-all hover:scale-105"
            >
              {lang === "es" ? "Contacto" : "Contact"}
            </a>

            <a
              href={siteConfig.cv[lang]}
              download
              className="px-6 py-3 rounded-xl border border-(--border) text-sm font-medium hover:bg-(--background) transition-all hover:scale-105 flex items-center gap-2"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              CV
            </a>
          </div>
        </div>

        {/* Right Bento Column */}
        <div className="grid gap-6">
          
          {/* Experience Card */}
          <div className="rounded-3xl border border-(--border) bg-(--card) p-6 backdrop-blur-sm hover:scale-105 transition-transform">
            <p className="text-sm font-medium opacity-80">
              {lang === "es" ? "Experiencia" : "Experience"}
            </p>
            <p className="mt-3 text-5xl font-bold bg-linear-to-r from-(--primary) to-(--secondary) bg-clip-text text-transparent">
               {text.experienceDetail}
            </p>
            
          </div>

          {/* Focus Card */}
          <div className="rounded-3xl border border-(--border) bg-(--card) p-6 backdrop-blur-sm hover:scale-105 transition-transform">
            <p className="text-sm font-medium opacity-80 mb-4">
              {lang === "es" ? "Especialidad" : "Focus"}
            </p>
            <ul className="space-y-2.5 text-sm">
              {focusItems.map((item, index) => (
                <li key={index} className="flex items-start gap-2 opacity-80">
                  <svg className="w-5 h-5 text-(--primary) shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Stack Card */}
          <div className="rounded-3xl border border-(--border) bg-(--card) p-6 backdrop-blur-sm hover:scale-105 transition-transform">
            <p className="text-sm font-medium opacity-80 mb-3">
              Stack
            </p>
            <p className="text-xs leading-relaxed opacity-70">
              {stack}
            </p>
          </div>

        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-40 left-1/2 -translate-x-1/2 hidden md:block">
        <a href="#about" className="flex flex-col items-center gap-2 opacity-50 hover:opacity-100 transition">
          <span className="text-xs">{lang === "es" ? "Desplázate" : "Scroll"}</span>
          <svg className="w-5 h-5 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </a>
      </div>
    </section>
  );
}