"use client";

import { Layers, ArrowUpRight, Cpu } from "lucide-react";
import { Projeto } from "@/types/portfolio";
import { TRANSLATIONS } from "@/data/translations";

interface ProjectCardProps {
  projeto: Projeto;
  onOpenModal: () => void;
  lang: "pt" | "en";
}

export function ProjectCard({ projeto, onOpenModal, lang }: ProjectCardProps) {
  return (
    <div 
      onClick={onOpenModal}
      className="group relative flex flex-col justify-between p-6 bg-white dark:bg-zinc-900/40 border border-zinc-200 dark:border-zinc-800/80 rounded-2xl hover:border-emerald-500/50 dark:hover:border-emerald-500/40 transition-all duration-300 cursor-pointer hover:bg-zinc-50/80 dark:hover:bg-zinc-900/70 shadow-xs dark:shadow-none hover:shadow-lg hover:-translate-y-1"
    >
      <div className="space-y-4">
        {/* Category & Status Bar */}
        <div className="flex items-center justify-between gap-2">
          <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 border border-zinc-200 dark:border-zinc-700/60 font-semibold">
            {projeto.categoriaNome}
          </span>
          <span className={`text-[10px] font-mono font-semibold px-2 py-0.5 rounded-full ${
            projeto.status === "Concluído" || projeto.status === "Completed"
              ? "bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-500/20" 
              : "bg-amber-500/10 text-amber-700 dark:text-amber-400 border border-amber-500/20"
          }`}>
            {projeto.status}
          </span>
        </div>

        {/* Title & Arrow */}
        <div className="space-y-1">
          <div className="flex items-center justify-between">
            <h4 className="text-lg font-bold text-zinc-900 dark:text-zinc-100 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors flex items-center gap-1.5">
              {projeto.titulo}
            </h4>
            <ArrowUpRight className="w-4 h-4 text-zinc-400 group-hover:text-emerald-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
          </div>
          <p className="text-xs sm:text-sm text-zinc-650 dark:text-zinc-400 leading-relaxed line-clamp-2">
            {projeto.descricao}
          </p>
        </div>

        {/* Engineering Highlights / Architecture Teaser */}
        {projeto.fluxoArquitetural && (
          <div className="flex items-center gap-1.5 text-[11px] font-mono text-emerald-700 dark:text-emerald-400/90 bg-emerald-500/5 dark:bg-emerald-500/10 border border-emerald-500/15 px-2.5 py-1 rounded-lg w-max">
            <Layers className="w-3.5 h-3.5" />
            <span>{projeto.fluxoArquitetural.length} {lang === "pt" ? "Etapas de Execução" : "Pipeline Stages"}</span>
          </div>
        )}
      </div>
      
      {/* Footer Tags & Details Action */}
      <div className="pt-6 space-y-3">
        <div className="flex flex-wrap gap-1.5">
          {projeto.tags.slice(0, 4).map((tag, index) => (
            <span key={index} className="text-[10px] font-mono px-2 py-0.5 bg-zinc-100 dark:bg-zinc-800/60 border border-zinc-200 dark:border-zinc-700/50 rounded-md text-zinc-650 dark:text-zinc-300">
              {tag}
            </span>
          ))}
          {projeto.tags.length > 4 && (
            <span className="text-[10px] font-mono px-1.5 py-0.5 text-zinc-400 dark:text-zinc-500">
              +{projeto.tags.length - 4}
            </span>
          )}
        </div>

        <div className="flex items-center justify-between text-xs font-mono text-zinc-400 dark:text-zinc-500 pt-2 border-t border-zinc-100 dark:border-zinc-800/60">
          <span className="group-hover:text-emerald-600 dark:group-hover:text-emerald-400 font-semibold transition-colors flex items-center gap-1">
            <Cpu className="w-3 h-3" /> {TRANSLATIONS[lang].details}
          </span>
          <span className="text-[10px] text-zinc-400">
            {projeto.github === "Privado" ? (lang === "pt" ? "Privado" : "Private") : "Open Source"}
          </span>
        </div>
      </div>
    </div>
  );
}