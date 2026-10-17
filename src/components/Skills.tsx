"use client";

import { Perfil } from "@/types/portfolio";
import { TRANSLATIONS } from "@/data/translations";
import { Cpu, BookOpen, Layers } from "lucide-react";

interface SkillsProps {
  perfil: Perfil;
  lang: "pt" | "en";
}

export function Skills({ perfil, lang }: SkillsProps) {
  return (
    <section id="skills" className="space-y-10 scroll-mt-20">
      
      {/* Matriz de Competências Técnicas */}
      <div className="space-y-6">
        <div className="flex items-center justify-between border-b border-zinc-200 dark:border-zinc-800 pb-2">
          <h3 className="text-xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 flex items-center gap-2">
            <span className="text-emerald-600 dark:text-emerald-400 font-mono">01.</span> {TRANSLATIONS[lang].technicalExpertise}
          </h3>
          <span className="text-xs font-mono text-zinc-500 hidden sm:flex items-center gap-1.5">
            <Cpu className="w-3.5 h-3.5 text-emerald-500" />
            Backend & Systems
          </span>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {perfil.categoriasSkills.map((cat, index: number) => (
            <div 
              key={index} 
              className="p-5 bg-white dark:bg-zinc-900/30 border border-zinc-200 dark:border-zinc-800/80 rounded-2xl space-y-4 hover:border-zinc-300 dark:hover:border-zinc-700 transition-all shadow-xs"
            >
              <div className="space-y-1">
                <h4 className="text-xs font-mono font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider flex items-center gap-1.5">
                  <Layers className="w-3.5 h-3.5" />
                  {cat.titulo}
                </h4>
                {cat.descricao && (
                  <p className="text-[11px] text-zinc-500 dark:text-zinc-400 leading-tight">
                    {cat.descricao}
                  </p>
                )}
              </div>

              <div className="flex flex-wrap gap-1.5 pt-1">
                {cat.competencias.map((comp: string, i: number) => (
                  <span 
                    key={i} 
                    className="text-xs font-mono px-2.5 py-1 bg-zinc-50 dark:bg-zinc-900 border border-zinc-200/90 dark:border-zinc-800 rounded-lg text-zinc-700 dark:text-zinc-300 hover:border-emerald-500/50 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors cursor-default"
                  >
                    {comp}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Linha de Estudos Atuais (Continuous Learning) */}
      <div className="space-y-4 p-5 rounded-2xl bg-zinc-100/50 dark:bg-zinc-900/20 border border-zinc-200 dark:border-zinc-900">
        <h4 className="text-xs font-mono font-bold text-zinc-600 dark:text-zinc-400 flex items-center gap-2 uppercase tracking-wider">
          <BookOpen className="w-3.5 h-3.5 text-purple-500" />
          <span className="w-1.5 h-1.5 rounded-full bg-purple-500 animate-pulse" />
          {TRANSLATIONS[lang].currentlyLearning}
        </h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
          {perfil.emAprendizado.map((item: string, idx: number) => (
            <div key={idx} className="flex items-center gap-2.5 text-xs font-mono text-zinc-650 dark:text-zinc-300 bg-white dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800/80 p-3 rounded-xl">
              <span className="text-purple-600 dark:text-purple-400 font-bold select-none">→</span>
              <span className="leading-tight">{item}</span>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}