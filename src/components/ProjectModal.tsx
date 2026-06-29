import { useState } from "react";
import { X, ExternalLink, Cpu, Lock, ChevronLeft, ChevronRight } from "lucide-react";
import { Projeto } from "@/types/portfolio";
import { TRANSLATIONS } from "@/data/translations";

interface ProjectModalProps {
  projeto: Projeto | null;
  onClose: () => void;
  lang: "pt" | "en";
}

const renderDescricaoComLinks = (texto: string, lang: "pt" | "en") => {
  const urlRegex = /(https?:\/\/[^\s\)]+)/g;
  const partes = texto.split(urlRegex);
  return partes.map((parte, i) => {
    if (urlRegex.test(parte)) {
      // Remover pontuação comum no final da URL
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
          className="text-emerald-650 dark:text-emerald-400 hover:text-emerald-500 dark:hover:text-emerald-300 underline break-all transition-colors"
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

  if (!projeto) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 backdrop-blur-sm bg-zinc-950/40 dark:bg-zinc-950/80 animate-fade-in">
      {/* Caixa do Modal */}
      <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 w-full max-w-2xl rounded-2xl shadow-2xl flex flex-col max-h-[85vh] overflow-hidden transition-all duration-300">
        
        {/* Header do Modal */}
        <div className="px-6 py-4 border-b border-zinc-200 dark:border-zinc-800 flex items-center justify-between bg-zinc-50/50 dark:bg-zinc-900/50 transition-colors">
          <div className="space-y-1">
            <span className="text-[10px] font-mono uppercase tracking-widest text-emerald-600 dark:text-emerald-400 transition-colors">
              {"// " + TRANSLATIONS[lang].systemSpec}
            </span>
            <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 transition-colors">{projeto.titulo}</h3>
          </div>
          <button onClick={onClose} className="p-1.5 text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-lg transition-all cursor-pointer">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Conteúdo com Scroll */}
        <div className="p-6 overflow-y-auto space-y-6 font-sans">
          
          {/* Carrossel de Imagens */}
          {projeto.imagens && projeto.imagens.length > 0 && (
            <div className="relative w-full aspect-video rounded-xl overflow-hidden border border-zinc-200 dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-950 group/carousel transition-colors">
              {/* Imagem de Fundo Borrada (Ambient Effect) */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img 
                src={projeto.imagens[imagemAtiva]} 
                alt=""
                className="absolute inset-0 w-full h-full object-cover blur-2xl opacity-40 select-none scale-105 pointer-events-none"
              />
              {/* Imagem Principal */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img 
                src={projeto.imagens[imagemAtiva]} 
                alt={`${projeto.titulo} - Imagem ${imagemAtiva + 1}`}
                className="relative z-10 w-full h-full object-contain select-none"
              />
              
              {/* Botões de Navegação */}
              {projeto.imagens.length > 1 && (
                <>
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      setImagemAtiva((prev) => (prev === 0 ? projeto.imagens!.length - 1 : prev - 1));
                    }}
                    className="absolute z-20 left-3 top-1/2 -translate-y-1/2 p-1.5 rounded-full bg-white/90 dark:bg-zinc-950/80 border border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-all opacity-0 group-hover/carousel:opacity-100 cursor-pointer"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      setImagemAtiva((prev) => (prev === projeto.imagens!.length - 1 ? 0 : prev + 1));
                    }}
                    className="absolute z-20 right-3 top-1/2 -translate-y-1/2 p-1.5 rounded-full bg-white/90 dark:bg-zinc-950/80 border border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-all opacity-0 group-hover/carousel:opacity-100 cursor-pointer"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </>
              )}

              {/* Indicadores (Dots) */}
              {projeto.imagens.length > 1 && (
                <div className="absolute z-20 bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5 bg-white/80 dark:bg-zinc-950/60 px-2.5 py-1 rounded-full border border-zinc-200 dark:border-zinc-800/40 transition-colors">
                  {projeto.imagens.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={(e) => {
                        e.stopPropagation();
                        setImagemAtiva(idx);
                      }}
                      className={`w-1.5 h-1.5 rounded-full transition-all cursor-pointer ${
                        idx === imagemAtiva ? "bg-emerald-600 dark:bg-emerald-400 w-3.5" : "bg-zinc-300 dark:bg-zinc-600 hover:bg-zinc-500 dark:hover:bg-zinc-400"
                      }`}
                    />
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Descrição */}
          <div className="space-y-2">
            <h4 className="text-xs font-mono font-bold text-zinc-400 dark:text-zinc-500 uppercase transition-colors">
              {TRANSLATIONS[lang].description}
            </h4>
            <p className="text-sm sm:text-base text-zinc-700 dark:text-zinc-300 leading-relaxed transition-colors">
              {renderDescricaoComLinks(projeto.descricao, lang)}
            </p>
          </div>

          {/* Seção Dinâmica de Features e Princípios */}
          {projeto.features && (
            <div className="space-y-3">
              <h4 className="text-xs font-mono font-bold text-zinc-400 dark:text-zinc-500 uppercase flex items-center gap-1.5 transition-colors">
                <Cpu className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" /> {TRANSLATIONS[lang].keyFeatures}
              </h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {projeto.features.map((feat: string, idx: number) => (
                  <li key={idx} className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 flex items-center gap-2 bg-zinc-50 dark:bg-zinc-950/40 border border-zinc-200 dark:border-zinc-800/80 p-2.5 rounded-lg transition-colors">
                    <span className="w-1 h-1 rounded-full bg-emerald-500" />
                    {feat}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Stack Tecnológica */}
          <div className="space-y-2">
            <h4 className="text-xs font-mono font-bold text-zinc-400 dark:text-zinc-500 uppercase transition-colors">
              {TRANSLATIONS[lang].techStack}
            </h4>
            <div className="flex flex-wrap gap-2">
              {projeto.tags.map((tag: string, idx: number) => (
                <span key={idx} className="text-xs font-mono px-3 py-1 bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-md text-emerald-600 dark:text-emerald-400 transition-colors">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Footer do Modal com Links */}
        <div className="px-6 py-4 border-t border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-950/40 flex items-center justify-between transition-colors">
          <span className="text-xs font-mono text-zinc-500">
            {TRANSLATIONS[lang].status}: {projeto.status}
          </span>
          
          {projeto.github !== "Privado" ? (
            <a 
              href={projeto.github} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="px-4 py-2 bg-emerald-600 dark:bg-emerald-500 text-white dark:text-zinc-950 font-mono text-xs font-bold rounded-lg hover:bg-emerald-500 dark:hover:bg-emerald-400 transition-all flex items-center gap-1.5 cursor-pointer shadow-sm"
            >
              {TRANSLATIONS[lang].inspectSource} <ExternalLink className="w-3.5 h-3.5" />
            </a>
          ) : (
            <span className="text-xs font-mono text-zinc-500 bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 px-3 py-1.5 rounded-lg flex items-center gap-1.5 transition-colors">
              <Lock className="w-3.5 h-3.5 text-zinc-400 dark:text-zinc-500" /> {TRANSLATIONS[lang].closedSource}
            </span>
          )}
        </div>

      </div>
    </div>
  );
}