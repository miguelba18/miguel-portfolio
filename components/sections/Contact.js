"use client";

import { useLanguage } from "../../context/LanguageContext";
import { contactContent, siteConfig, socialLinks } from "../../data/siteConfig";

export default function Contact() {
  const { lang } = useLanguage();
  const content = contactContent[lang];

  return (
    <section id="contact" className="relative max-w-7xl mx-auto px-4 py-24">
      
  {/* Efecto diagonal superior izquierda */}
  <div className="absolute top-0 left-0 w-40 h-40 bg-(--secondary) opacity-12 blur-3xl rounded-full pointer-events-none animate-ping" style={{ animationDuration: "3s" }} />
  
  {/* Efecto de pulso central derecha */}
  <div className="absolute top-1/2 right-0   w-96 h-96 bg-(--primary) opacity-15 blur-3xl rounded-full pointer-events-none animate-pulse" style={{ animationDelay: "1s" }} />
  
  
  
  
      
      <div className="rounded-3xl border border-(--border) bg-(--card) p-8 md:p-12 backdrop-blur-sm">
        
        <div className="grid lg:grid-cols-2 gap-12">
          
          {/* Left - Info */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold">
              {content.title}
            </h2>

            <p className="mt-6 text-sm md:text-base opacity-80 leading-relaxed">
              {content.subtitle}
            </p>

            {/* Contact Info */}
            <div className="mt-8 space-y-4">
              
              {/* Email */}
              <a
                href={siteConfig.social.email}
                className="flex items-center gap-4 p-4 rounded-xl border border-(--border) hover:bg-(--background) transition group"
              >
                <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-(--primary)/10 group-hover:bg-(--primary)/20 transition">
                  <svg className="w-5 h-5 text-(--primary)" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs opacity-60">Email</p>
                  <p className="text-sm font-medium">{siteConfig.author.email}</p>
                </div>
              </a>

              {/* Phone */}
              <a
                href={siteConfig.social.phone}
                className="flex items-center gap-4 p-4 rounded-xl border border-(--border) hover:bg-(--background) transition group"
              >
                <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-(--primary)/10 group-hover:bg-(--primary)/20 transition">
                  <svg className="w-5 h-5 text-(--primary)" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs opacity-60">{lang === "es" ? "Teléfono" : "Phone"}</p>
                  <p className="text-sm font-medium">+57 313 214 0833</p>
                </div>
              </a>

              {/* Location */}
              <div className="flex items-center gap-4 p-4 rounded-xl border border-(--border)">
                <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-(--primary)/10">
                  <svg className="w-5 h-5 text-(--primary)" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs opacity-60">{lang === "es" ? "Ubicación" : "Location"}</p>
                  <p className="text-sm font-medium">Neiva, Huila, Colombia</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-8">
              <p className="text-sm font-medium opacity-70 mb-4">
                {lang === "es" ? "Sígueme en:" : "Follow me:"}
              </p>
              <div className="flex flex-wrap gap-3">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    target={link.url.startsWith("http") ? "_blank" : undefined}
                    rel={link.url.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="flex items-center justify-center w-12 h-12 rounded-lg border border-(--border) hover:bg-(--background) hover:scale-110 transition"
                    aria-label={link.name}
                  >
                    {link.icon === "github" && (
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                      </svg>
                    )}
                    {link.icon === "linkedin" && (
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    )}
                    {link.icon === "mail" && (
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    )}
                    {link.icon === "phone" && (
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    )}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right - CTA Card */}
          <div className="flex flex-col justify-center">
            <div className="rounded-2xl border border-(--border) bg-(--background) p-8">
              <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-(--primary)/10 mx-auto mb-6">
                <svg className="w-8 h-8 text-(--primary)" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>

              <h3 className="text-xl font-bold text-center mb-4">
                {lang === "es" ? "¿Listo para trabajar juntos?" : "Ready to work together?"}
              </h3>

              <p className="text-sm opacity-70 text-center mb-8">
                {lang === "es"
                  ? "Ya sea un proyecto, una colaboración o simplemente quieres conectar, estaré encantado de conversar."
                  : "Whether it's a project, collaboration, or just to connect, I'd be happy to chat."}
              </p>

              {/* Action Buttons */}
              <div className="space-y-3">
                <a
                  href={siteConfig.social.email}
                  className="flex items-center justify-center gap-2 w-full px-6 py-3 rounded-xl bg-(--primary) text-white text-sm font-medium hover:opacity-90 transition"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  {content.cta.primary}
                </a>

                <a
                  href={siteConfig.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full px-6 py-3 rounded-xl border border-(--border) text-sm font-medium hover:bg-(--background) transition"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                  {content.cta.github}
                </a>

                <a
                  href={siteConfig.cv[lang]}
                  download
                  className="flex items-center justify-center gap-2 w-full px-6 py-3 rounded-xl border border-(--border) text-sm font-medium hover:bg-(--background) transition"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  {content.cta.cv}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}