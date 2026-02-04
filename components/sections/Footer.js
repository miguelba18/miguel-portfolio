"use client";

import { useLanguage } from "../../context/LanguageContext";

export default function Footer() {
  const { lang } = useLanguage();

  return (
    <footer className="border-t border-(--border)]">
      <div className="max-w-7xl mx-auto px-4 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        
        <p className="text-sm opacity-70">
          © {new Date().getFullYear()} Miguel Ángel Bahamón Rocha
        </p>

        <p className="text-sm opacity-70">
          {lang === "es"
            ? "Desarrollado con Next.js y Tailwind"
            : "Built with Next.js and Tailwind"}
        </p>
      </div>
    </footer>
  );
}
