"use client";

import { ArquiteturaEtapa } from "@/types/portfolio";
import { ArrowRight, Cpu, Layers } from "lucide-react";

interface ArchitectureFlowProps {
  etapas: ArquiteturaEtapa[];
  titulo?: string;
  lang: "pt" | "en";
}

export function ArchitectureFlow({ etapas, lang }: ArchitectureFlowProps) {
  if (!etapas || etapas.length === 0) return null;

  return (
    <div className="space-y-3">
      <div className="flex items-center gap-2 text-xs font-mono font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">
        <Layers className="w-4 h-4 text-emerald-500" />
        <span>{lang === "pt" ? "Pipeline & Fluxo Arquitetural" : "Pipeline & Architectural Flow"}</span>
      </div>

      <div className="relative">
        {/* Mobile & Desktop Flow Container */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
          {etapas.map((etapa, idx) => {
            const isLast = idx === etapas.length - 1;
            return (
              <div 
                key={idx}
                className="relative flex flex-col justify-between p-3.5 rounded-xl bg-zinc-50 dark:bg-zinc-950/70 border border-zinc-200 dark:border-zinc-800/80 hover:border-emerald-500/50 dark:hover:border-emerald-500/40 transition-all group"
              >
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono font-semibold text-emerald-600 dark:text-emerald-400">
                      {etapa.fase}
                    </span>
                    <Cpu className="w-3.5 h-3.5 text-zinc-400 group-hover:text-emerald-500 transition-colors" />
                  </div>
                  <h5 className="text-xs font-bold font-mono text-zinc-900 dark:text-zinc-100 leading-snug">
                    {etapa.componente}
                  </h5>
                  <p className="text-[11px] text-zinc-600 dark:text-zinc-400 leading-relaxed font-sans">
                    {etapa.descricao}
                  </p>
                </div>

                {!isLast && (
                  <div className="hidden md:flex absolute -right-3 top-1/2 -translate-y-1/2 z-10 w-6 h-6 rounded-full bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 items-center justify-center text-zinc-400 shadow-xs">
                    <ArrowRight className="w-3 h-3 text-emerald-600 dark:text-emerald-400" />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
