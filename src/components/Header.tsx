import { Terminal, Sun, Moon } from "lucide-react";
import { TRANSLATIONS } from "@/data/translations";

interface HeaderProps {
  theme: "light" | "dark";
  toggleTheme: () => void;
  lang: "pt" | "en";
  toggleLang: () => void;
}

export function Header({ theme, toggleTheme, lang, toggleLang }: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-white/70 dark:bg-zinc-950/70 border-b border-zinc-200 dark:border-zinc-800 transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2 font-mono font-bold text-emerald-600 dark:text-emerald-400 transition-colors">
          <Terminal className="w-5 h-5" />
          <span>~/portfolio</span>
        </div>
        <div className="flex items-center gap-4 text-sm">
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
      </div>
    </header>
  );
}