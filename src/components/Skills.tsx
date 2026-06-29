import { Perfil } from "@/types/portfolio";
import { TRANSLATIONS } from "@/data/translations";

interface SkillsProps {
  perfil: Perfil; // Recebe o objeto completo com as categorias atualizadas
  lang: "pt" | "en";
}

export function Skills({ perfil, lang }: SkillsProps) {
  return (
    <section id="skills" className="space-y-10 scroll-mt-20">
      
      {/* Parte 1: Matriz de Competências Técnicas */}
      <div className="space-y-6">
        <h3 className="text-xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 flex items-center gap-2 border-b border-zinc-200 dark:border-zinc-800 pb-2 transition-colors">
          <span className="text-emerald-600 dark:text-emerald-400 font-mono">01.</span> {TRANSLATIONS[lang].technicalExpertise}
        </h3>
        
        <div className="grid grid-cols-1 gap-6">
          {perfil.categoriasSkills.map((cat, index: number) => (
            <div key={index} className="p-5 bg-zinc-100/50 dark:bg-zinc-900/20 border border-zinc-200 dark:border-zinc-900 rounded-xl space-y-3 transition-colors">
              <h4 className="text-xs font-mono font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-widest transition-colors">
                {"// "}{cat.titulo}
              </h4>
              <div className="flex flex-wrap gap-2">
                {cat.competencias.map((comp: string, i: number) => (
                  <span key={i} className="text-xs font-mono px-3 py-1.5 bg-white dark:bg-zinc-900/80 border border-zinc-200 dark:border-zinc-800 rounded-lg text-zinc-700 dark:text-zinc-300 shadow-xs transition-colors">
                    {comp}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Parte 2: Linha de Estudos Atuais (Continuous Learning) */}
      <div className="space-y-4 pt-2">
        <h4 className="text-sm font-mono font-semibold text-zinc-500 dark:text-zinc-400 flex items-center gap-2 transition-colors">
          <span className="w-1.5 h-1.5 rounded-full bg-purple-600 dark:bg-purple-500 animate-pulse" />
          {TRANSLATIONS[lang].currentlyLearning}
        </h4>
        <ul className="space-y-2.5 pl-4 border-l border-zinc-200 dark:border-zinc-800 transition-colors">
          {perfil.emAprendizado.map((item: string, idx: number) => (
            <li key={idx} className="text-xs sm:text-sm font-sans text-zinc-550 flex items-start gap-2">
              <span className="text-purple-600 dark:text-purple-400 font-mono select-none">→</span>
              <span className="leading-tight text-zinc-650 dark:text-zinc-400 transition-colors">{item}</span>
            </li>
          ))}
        </ul>
      </div>

    </section>
  );
}