"use client";

import { useState } from "react";
import { 
  X, 
  ExternalLink, 
  Cpu, 
  Lock, 
  ChevronLeft, 
  ChevronRight, 
  AlertCircle, 
  CheckCircle2, 
  Layers, 
  Globe 
} from "lucide-react";
import { Projeto } from "@/types/portfolio";
import { TRANSLATIONS } from "@/data/translations";
import { ArchitectureFlow } from "@/components/ArchitectureFlow";

interface ProjectModalProps {
  projeto: Projeto | null;
  onClose: () => void;
  lang: "pt" | "en";
}

const renderDescricaoComLinks = (texto: string) => {
  const urlRegex = /(https?:\/\/[^\s\)]+)/g;
  const partes = texto.split(urlRegex);
  return partes.map((parte, i) => {
    if (urlRegex.test(parte)) {
      let urlClean = parte;
      if (parte.endsWith(".") || parte.endsWith(",")) {
        urlClean = parte.slice(0, -1);
      }
      return (
        <a 
          key={i} 
          href={urlClean} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-emerald-600 dark:text-emerald-400 hover:text-emerald-500 underline break-all transition-colors"
        >
          {urlClean}
        </a>
      );
    }
    return parte;
  });
};

export function ProjectModal({ projeto, onClose, lang }: ProjectModalProps) {
  const [imagemAtiva, setImagemAtiva] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const minSwipeDistance = 50;

  if (!projeto) return null;

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    
    if (isLeftSwipe && projeto.imagens) {
      setImagemAtiva((prev) => (prev === projeto.imagens!.length - 1 ? 0 : prev + 1));
    }
    if (isRightSwipe && projeto.imagens) {
      setImagemAtiva((prev) => (prev === 0 ? projeto.imagens!.length - 1 : prev - 1));
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 backdrop-blur-md bg-zinc-950/80 animate-fade-in">
      {/* Modal Box */}
      <div 
        className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 w-full max-w-3xl rounded-3xl shadow-2xl flex flex-col max-h-[90vh] overflow-hidden transition-all duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="px-4 sm:px-6 py-4 sm:py-4.5 border-b border-zinc-200 dark:border-zinc-800 flex items-center justify-between gap-3 bg-zinc-50/80 dark:bg-zinc-950/70 transition-colors">
          <div className="space-y-1 min-w-0">
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-mono uppercase tracking-widest text-emerald-600 dark:text-emerald-400 font-bold">
                {"// " + TRANSLATIONS[lang].systemSpec}
              </span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 border border-zinc-200 dark:border-zinc-700">
                {projeto.categoriaNome}
              </span>
            </div>
            <h3 className="text-lg sm:text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 break-words">
              {projeto.titulo}
            </h3>
          </div>
          <button 
            onClick={onClose} 
            className="p-2 text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-xl transition-all cursor-pointer"
            aria-label={TRANSLATIONS[lang].closeModal}
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="p-4 sm:p-6 overflow-y-auto space-y-6 font-sans">
          
          {/* Engineering Metrics Bar */}
          {projeto.metricas && projeto.metricas.length > 0 && (
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
              {projeto.metricas.map((m, idx) => (
                <div key={idx} className="p-3 rounded-xl bg-zinc-50 dark:bg-zinc-950/50 border border-zinc-200 dark:border-zinc-800/80">
                  <div className="text-[10px] font-mono uppercase text-zinc-500">{m.label}</div>
                  <div className="text-xs sm:text-sm font-mono font-bold text-emerald-600 dark:text-emerald-400">{m.valor}</div>
                </div>
              ))}
            </div>
          )}

          {/* Architecture Pipeline Flow */}
          {projeto.fluxoArquitetural && (
            <div className="p-4 rounded-2xl bg-zinc-100/50 dark:bg-zinc-950/40 border border-zinc-200 dark:border-zinc-800/80">
              <ArchitectureFlow etapas={projeto.fluxoArquitetural} lang={lang} />
            </div>
          )}

          {/* The Engineering Challenge */}
          {projeto.desafio && (
            <div className="p-4 rounded-xl bg-amber-500/5 dark:bg-amber-500/10 border border-amber-500/20 space-y-1.5">
              <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-amber-700 dark:text-amber-400 flex items-center gap-1.5">
                <AlertCircle className="w-4 h-4 text-amber-500 shrink-0" />
                {TRANSLATIONS[lang].challengeTitle}
              </h4>
              <p className="text-xs sm:text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed">
                {projeto.desafio}
              </p>
            </div>
          )}

          {/* Architectural Solution */}
          {projeto.solucaoArquitetural && (
            <div className="p-4 rounded-xl bg-emerald-500/5 dark:bg-emerald-500/10 border border-emerald-500/20 space-y-1.5">
              <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                {TRANSLATIONS[lang].architecturalSolutionTitle}
              </h4>
              <p className="text-xs sm:text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed">
                {projeto.solucaoArquitetural}
              </p>
            </div>
          )}

          {/* Key Technical Decisions */}
          {projeto.destaquesTecnicos && projeto.destaquesTecnicos.length > 0 && (
            <div className="space-y-2.5">
              <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-zinc-500 dark:text-zinc-400 flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5 text-emerald-500" />
                {TRANSLATIONS[lang].techHighlightsTitle}
              </h4>
              <ul className="grid grid-cols-1 gap-2">
                {projeto.destaquesTecnicos.map((dest, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-700 dark:text-zinc-300 bg-zinc-50 dark:bg-zinc-950/40 border border-zinc-200 dark:border-zinc-800/80 p-3 rounded-xl">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0 mt-1.5" />
                    <span>{dest}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Image Carousel (if any) */}
          {projeto.imagens && projeto.imagens.length > 0 && (
            <div 
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
              className="relative w-full aspect-video rounded-xl overflow-hidden border border-zinc-200 dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-950 group/carousel transition-colors select-none touch-pan-y"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img 
                src={projeto.imagens[imagemAtiva]} 
                alt=""
                className="absolute inset-0 w-full h-full object-cover blur-2xl opacity-40 select-none scale-105 pointer-events-none"
              />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img 
                src={projeto.imagens[imagemAtiva]} 
                alt={`${projeto.titulo} - Imagem ${imagemAtiva + 1}`}
                className="relative z-10 w-full h-full object-contain select-none"
              />
              
              {projeto.imagens.length > 1 && (
                <>
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      setImagemAtiva((prev) => (prev === 0 ? projeto.imagens!.length - 1 : prev - 1));
                    }}
                    className="absolute z-20 left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/90 dark:bg-zinc-950/80 border border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-all cursor-pointer shadow-md"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      setImagemAtiva((prev) => (prev === projeto.imagens!.length - 1 ? 0 : prev + 1));
                    }}
                    className="absolute z-20 right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/90 dark:bg-zinc-950/80 border border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-all cursor-pointer shadow-md"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </>
              )}

              {projeto.imagens.length > 1 && (
                <div className="absolute z-20 bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5 bg-white/80 dark:bg-zinc-950/60 px-2.5 py-1 rounded-full border border-zinc-200 dark:border-zinc-800/40">
                  {projeto.imagens.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={(e) => {
                        e.stopPropagation();
                        setImagemAtiva(idx);
                      }}
                      className={`w-1.5 h-1.5 rounded-full transition-all cursor-pointer ${
                        idx === imagemAtiva ? "bg-emerald-600 dark:bg-emerald-400 w-3.5" : "bg-zinc-300 dark:bg-zinc-600"
                      }`}
                    />
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Overview Description */}
          <div className="space-y-2">
            <h4 className="text-xs font-mono font-bold text-zinc-500 uppercase">
              {TRANSLATIONS[lang].description}
            </h4>
            <p className="text-xs sm:text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed">
              {renderDescricaoComLinks(projeto.descricao)}
            </p>
          </div>

          {/* Key Features */}
          {projeto.features && projeto.features.length > 0 && (
            <div className="space-y-2.5">
              <h4 className="text-xs font-mono font-bold text-zinc-500 uppercase flex items-center gap-1.5">
                <Cpu className="w-3.5 h-3.5 text-emerald-500" /> {TRANSLATIONS[lang].keyFeatures}
              </h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {projeto.features.map((feat: string, idx: number) => (
                  <li key={idx} className="text-xs text-zinc-600 dark:text-zinc-400 flex items-start gap-2 bg-zinc-50 dark:bg-zinc-950/40 border border-zinc-200 dark:border-zinc-800/80 p-2.5 rounded-lg">
                    <span className="w-1 h-1 rounded-full bg-emerald-500 shrink-0 mt-1.5" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Tech Stack */}
          <div className="space-y-2">
            <h4 className="text-xs font-mono font-bold text-zinc-500 uppercase">
              {TRANSLATIONS[lang].techStack}
            </h4>
            <div className="flex flex-wrap gap-2">
              {projeto.tags.map((tag: string, idx: number) => (
                <span key={idx} className="text-xs font-mono px-3 py-1 bg-zinc-100 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-md text-emerald-600 dark:text-emerald-400 font-semibold">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer with Actions */}
        <div className="px-4 sm:px-6 py-4 border-t border-zinc-200 dark:border-zinc-800 bg-zinc-50/70 dark:bg-zinc-950/60 flex flex-wrap items-center justify-between gap-3">
          <span className="text-xs font-mono text-zinc-500">
            {TRANSLATIONS[lang].status}: <span className="text-zinc-700 dark:text-zinc-300 font-semibold">{projeto.status}</span>
          </span>
          
          <div className="flex items-center gap-2">
            {projeto.demoUrl && (
              <a 
                href={projeto.demoUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="px-3.5 py-2 bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 text-zinc-800 dark:text-zinc-200 font-mono text-xs font-bold rounded-xl transition-all flex items-center gap-1.5 cursor-pointer border border-zinc-200 dark:border-zinc-700"
              >
                <Globe className="w-3.5 h-3.5" /> Landing Page ↗
              </a>
            )}

            {projeto.github !== "Privado" ? (
              <a 
                href={projeto.github} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white font-mono text-xs font-bold rounded-xl transition-all flex items-center gap-1.5 cursor-pointer shadow-sm"
              >
                {TRANSLATIONS[lang].inspectSource} <ExternalLink className="w-3.5 h-3.5" />
              </a>
            ) : (
              <span className="text-xs font-mono text-zinc-500 bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 px-3 py-2 rounded-xl flex items-center gap-1.5">
                <Lock className="w-3.5 h-3.5 text-zinc-400" /> {TRANSLATIONS[lang].closedSource}
              </span>
            )}
          </div>
        </div>

      </div>
    </div>
  );
}
