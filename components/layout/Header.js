"use client";

import { useState, useEffect } from "react";
import { useTheme } from "../../context/ThemeContext";
import { useLanguage } from "../../context/LanguageContext";
import { navigation, siteConfig } from "../../data/siteConfig";
import Image from "next/image";

export default function Header() {
  const { theme, toggleTheme } = useTheme();
  const { lang, toggleLanguage } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = navigation[lang];

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "backdrop-blur-md bg-(--background)/90 border-b border-(--border) shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="xl:max-w-7xl mx-auto px-4 h-26 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Image src="/favicon.ico" alt="" width={40} height={40} />
          <a
            href="#hero"
            className="font-bold text-lg tracking-tight hover:opacity-80 transition"
          >
            {siteConfig.shortName}
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1">
          {navItems.slice(0, 6).map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="px-3 py-2 text-sm rounded-lg hover:bg-(--card) transition"
            >
              {item.name}
            </a>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-2">
          {/* Download CV Button */}
          <a
            href={siteConfig.cv[lang]}
            download
            className="hidden sm:flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg bg-(--primary) text-white hover:opacity-90 transition"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
            <span>CV</span>
          </a>

          {/* Language Toggle */}
          <button
            onClick={toggleLanguage}
            className="px-3 py-2 text-sm font-medium rounded-lg border border-(--border) hover:cursor-pointer  hover:bg-(--card) transition"
            aria-label={
              lang === "es" ? "Switch to English" : "Cambiar a Español"
            }
          >
            {lang === "es" ? "EN🇺🇸" : "ES🇪🇸"}
          </button>

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="w-9 h-9 flex items-center justify-center rounded-lg border border-(--border) hover:bg-(--card) transition-all duration-300 group"
            aria-label={
              theme === "dark" ? "Switch to light mode" : "Switch to dark mode"
            }
          >
            {theme === "dark" ? (
              // Sol
              <svg
                className="w-5 h-5 transition-all duration-300 group-hover:text-yellow-400 group-hover:rotate-90 group-hover:scale-110"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                  clipRule="evenodd"
                />
              </svg>
            ) : (
              // Luna
              <svg
                className="w-5 h-5 transition-all duration-300 group-hover:text-blue-400 group-hover:-rotate-12 group-hover:scale-110"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
              </svg>
            )}
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden w-9 h-9 flex items-center justify-center rounded-lg border border-(--border) hover:bg-(--card) transition"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden border-t border-(--border) bg-(--background)">
          <nav className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-2">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="px-4 py-2 text-sm rounded-lg hover:bg-(--card) transition"
              >
                {item.name}
              </a>
            ))}
            <a
              href={siteConfig.cv[lang]}
              download
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium rounded-lg bg-(--primary) text-white hover:opacity-90 transition mt-2"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
              {lang === "es" ? "Descargar CV" : "Download CV"}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
