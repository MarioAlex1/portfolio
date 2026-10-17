"use client";

import { useState } from "react";
import { Terminal, Sun, Moon, Menu, X, Zap } from "lucide-react";
import { TRANSLATIONS } from "@/data/translations";

interface HeaderProps {
  theme: "light" | "dark";
  toggleTheme: () => void;
  lang: "pt" | "en";
  toggleLang: () => void;
  onOpenRecruiterDossier: () => void;
}

export function Header({ theme, toggleTheme, lang, toggleLang, onOpenRecruiterDossier }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-white/80 dark:bg-zinc-950/80 border-b border-zinc-200 dark:border-zinc-800 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 h-[4.5rem] flex items-center justify-between">
        {/* Brand */}
        <a href="#sobre" className="flex items-center gap-2 font-mono font-bold text-emerald-600 dark:text-emerald-400 hover:opacity-80 transition-all cursor-pointer">
          <Terminal className="w-5 h-5" />
          <span>mario.sys</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-4 text-sm">
          <nav className="flex items-center gap-4 text-zinc-600 dark:text-zinc-400 mr-2">
            <a href="#sobre" className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors capitalize">
              {TRANSLATIONS[lang].about}
            </a>
            <a href="#skills" className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors capitalize">
              {TRANSLATIONS[lang].skills}
            </a>
            <a href="#projetos" className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors capitalize">
              {TRANSLATIONS[lang].projects}
            </a>
            <a href="#terminal" className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors capitalize">
              {TRANSLATIONS[lang].terminal}
            </a>
          </nav>
          
          <div className="flex items-center gap-2 border-l border-zinc-200 dark:border-zinc-800 pl-3">
            {/* Recruiter Mode Button */}
            <button
              onClick={onOpenRecruiterDossier}
              className="px-3 py-1.5 bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-700 dark:text-emerald-400 border border-emerald-500/30 rounded-xl text-xs font-mono font-bold flex items-center gap-1.5 transition-all cursor-pointer shadow-xs"
              title={TRANSLATIONS[lang].recruiterSummary}
            >
              <Zap className="w-3.5 h-3.5 fill-current" />
              <span>{TRANSLATIONS[lang].recruiterModeShort}</span>
            </button>

            {/* Language Toggle */}
            <button 
              onClick={toggleLang}
              className="px-2.5 py-1.5 bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-900 dark:hover:bg-zinc-800 border border-zinc-200 dark:border-zinc-800 rounded-xl text-xs font-mono font-bold text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-all cursor-pointer"
              aria-label="Mudar idioma"
            >
              {lang === "pt" ? "EN" : "PT"}
            </button>

            {/* Theme Toggle */}
            <button 
              onClick={toggleTheme}
              className="p-2 bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-900 dark:hover:bg-zinc-800 border border-zinc-200 dark:border-zinc-800 rounded-xl text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-all cursor-pointer"
              aria-label="Alternar tema"
            >
              {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
          </div>
        </div>

        {/* Mobile Header Controls */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={onOpenRecruiterDossier}
            className="px-2.5 py-1 bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-500/30 rounded-lg text-xs font-mono font-bold flex items-center gap-1 transition-all cursor-pointer"
          >
            <Zap className="w-3 h-3 fill-current" />
            <span>Recruiter</span>
          </button>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-1.5 bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-900 dark:hover:bg-zinc-800 border border-zinc-200 dark:border-zinc-800 rounded-lg text-zinc-650 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-all cursor-pointer"
            aria-label="Abrir menu"
          >
            {isOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Panel */}
      {isOpen && (
        <div className="md:hidden border-t border-zinc-200 dark:border-zinc-800 bg-white/95 dark:bg-zinc-950/95 backdrop-blur-md absolute w-full left-0 z-40 shadow-xl transition-all">
          <div className="flex flex-col px-6 py-4 space-y-3 text-sm font-medium">
            <a 
              href="#sobre" 
              onClick={() => setIsOpen(false)}
              className="py-2 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors border-b border-zinc-100 dark:border-zinc-900 capitalize"
            >
              {TRANSLATIONS[lang].about}
            </a>
            <a 
              href="#skills" 
              onClick={() => setIsOpen(false)}
              className="py-2 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors border-b border-zinc-100 dark:border-zinc-900 capitalize"
            >
              {TRANSLATIONS[lang].skills}
            </a>
            <a 
              href="#projetos" 
              onClick={() => setIsOpen(false)}
              className="py-2 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors border-b border-zinc-100 dark:border-zinc-900 capitalize"
            >
              {TRANSLATIONS[lang].projects}
            </a>
            <a 
              href="#terminal" 
              onClick={() => setIsOpen(false)}
              className="py-2 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors capitalize"
            >
              {TRANSLATIONS[lang].terminal}
            </a>

            {/* Mobile Controls */}
            <div className="flex items-center justify-between pt-3 border-t border-zinc-200 dark:border-zinc-800">
              <button 
                onClick={toggleLang}
                className="px-3 py-1.5 bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl text-xs font-mono font-bold text-zinc-700 dark:text-zinc-300 transition-all cursor-pointer"
              >
                {lang === "pt" ? "ENGLISH" : "PORTUGUÊS"}
              </button>

              <button 
                onClick={toggleTheme}
                className="p-2 bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl text-zinc-700 dark:text-zinc-300 transition-all cursor-pointer"
              >
                {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
