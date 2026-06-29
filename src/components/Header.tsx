import { useState } from "react";
import { Terminal, Sun, Moon, Menu, X } from "lucide-react";
import { TRANSLATIONS } from "@/data/translations";

interface HeaderProps {
  theme: "light" | "dark";
  toggleTheme: () => void;
  lang: "pt" | "en";
  toggleLang: () => void;
}

export function Header({ theme, toggleTheme, lang, toggleLang }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-white/70 dark:bg-zinc-950/70 border-b border-zinc-200 dark:border-zinc-800 transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Brand */}
        <div className="flex items-center gap-2 font-mono font-bold text-emerald-600 dark:text-emerald-400 transition-colors">
          <Terminal className="w-5 h-5" />
          <span>~/portfolio</span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-4 text-sm">
          <div className="flex items-center gap-4 text-zinc-600 dark:text-zinc-400 mr-2">
            <a href="#sobre" className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors capitalize">
              {TRANSLATIONS[lang].about}
            </a>
            <a href="#skills" className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors capitalize">
              {TRANSLATIONS[lang].skills}
            </a>
            <a href="#projetos" className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors capitalize">
              {TRANSLATIONS[lang].projects}
            </a>
          </div>
          
          <div className="flex items-center gap-2 border-l border-zinc-200 dark:border-zinc-800 pl-3 transition-colors">
            <button 
              onClick={toggleLang}
              className="px-2.5 py-1 bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-900 dark:hover:bg-zinc-800 border border-zinc-200 dark:border-zinc-800 rounded-xl text-xs font-mono font-bold text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-all duration-300 cursor-pointer"
              aria-label="Mudar idioma"
            >
              {lang === "pt" ? "EN" : "PT"}
            </button>

            <button 
              onClick={toggleTheme}
              className="p-2 bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-900 dark:hover:bg-zinc-800 border border-zinc-200 dark:border-zinc-800 rounded-xl text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-all duration-300 cursor-pointer"
              aria-label="Alternar tema"
            >
              {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
          </div>
        </div>

        {/* Mobile Toggle Button (Only Hamburguer) */}
        <div className="flex md:hidden items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-1.5 bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-900 dark:hover:bg-zinc-800 border border-zinc-200 dark:border-zinc-800 rounded-lg text-zinc-650 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-all duration-300 cursor-pointer"
            aria-label="Abrir menu"
          >
            {isOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Panel */}
      {isOpen && (
        <div className="md:hidden border-t border-zinc-200 dark:border-zinc-800 bg-white/95 dark:bg-zinc-950/95 backdrop-blur-md absolute w-full left-0 z-40 shadow-lg transition-all duration-300">
          <div className="flex flex-col px-6 py-4 space-y-4 text-sm font-medium">
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
              className="py-2 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors capitalize"
            >
              {TRANSLATIONS[lang].projects}
            </a>

            {/* Language & Theme Controls inside Menu */}
            <div className="flex items-center justify-end gap-2 pt-2 border-t border-zinc-200 dark:border-zinc-800/80">
              <button 
                onClick={toggleLang}
                className="px-2.5 py-1.5 bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-900 dark:hover:bg-zinc-800 border border-zinc-200 dark:border-zinc-800 rounded-xl text-xs font-mono font-bold text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-all duration-300 cursor-pointer"
                aria-label="Mudar idioma"
              >
                {lang === "pt" ? "ENGLISH" : "PORTUGUÊS"}
              </button>

              <button 
                onClick={toggleTheme}
                className="p-2 bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-900 dark:hover:bg-zinc-800 border border-zinc-200 dark:border-zinc-800 rounded-xl text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-all duration-300 cursor-pointer"
                aria-label="Alternar tema"
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