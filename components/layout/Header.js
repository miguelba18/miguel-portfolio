"use client";

import { useTheme } from "../../context/ThemeContext";
import { useLanguage } from "../../context/LanguageContext";

export default function Header() {
  const { theme, toggleTheme } = useTheme();
  const { lang, toggleLanguage } = useLanguage();

  return (
    <header className="fixed top-0 w-full z-50 backdrop-blur border-b border-(--border) bg-(--background)/80">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        
        {/* Logo */}
        <span className="font-bold tracking-tight">
          Miguel.dev
        </span>

        {/* Actions */}
        <div className="flex items-center gap-3">
          {/* Language */}
          <button
            onClick={toggleLanguage}
            className="text-sm px-3 py-1 rounded-lg border border-(--border) hover:bg-(--card) transition"
          >
            {lang === "es" ? "EN" : "ES"}
          </button>

          {/* Theme */}
          <button
            onClick={toggleTheme}
            className="w-9 h-9 flex items-center justify-center rounded-lg border border-(--border) hover:bg-(--card) transition"
          >
            {theme === "dark" ? "☀️" : "🌙"}
          </button>
        </div>
      </div>
    </header>
  );
}
