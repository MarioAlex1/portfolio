import { X, ExternalLink, ShieldCheck, Cpu } from "lucide-react";
import { Projeto } from "@/types/portfolio";

interface ProjectModalProps {
  projeto: Projeto | null;
  onClose: () => void;
}

export function ProjectModal({ projeto, onClose }: ProjectModalProps) {
  if (!projeto) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 backdrop-blur-sm bg-zinc-950/80 animate-fade-in">
      {/* Caixa do Modal */}
      <div className="bg-zinc-900 border border-zinc-800 w-full max-w-2xl rounded-2xl shadow-2xl flex flex-col max-h-[85vh] overflow-hidden">
        
        {/* Header do Modal */}
        <div className="px-6 py-4 border-b border-zinc-800 flex items-center justify-between bg-zinc-900/50">
          <div className="space-y-1">
            <span className="text-[10px] font-mono uppercase tracking-widest text-emerald-400">// System Specification</span>
            <h3 className="text-xl font-bold text-zinc-100">{projeto.titulo}</h3>
          </div>
          <button onClick={onClose} className="p-1.5 text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800 rounded-lg transition-all">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Conteúdo com Scroll */}
        <div className="p-6 overflow-y-auto space-y-6 font-sans">
          
          {/* Descrição */}
          <div className="space-y-2">
            <h4 className="text-xs font-mono font-bold text-zinc-500 uppercase">Description</h4>
            <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">{projeto.descricao}</p>
          </div>

          {/* Seção Dinâmica de Features e Princípios (Injetadas do seu arquivo Markdown se necessário) */}
          {projeto.features && (
            <div className="space-y-3">
              <h4 className="text-xs font-mono font-bold text-zinc-500 uppercase flex items-center gap-1.5">
                <Cpu className="w-3.5 h-3.5 text-emerald-400" /> Key Features & Architecture
              </h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {projeto.features.map((feat: string, idx: number) => (
                  <li key={idx} className="text-xs sm:text-sm text-zinc-400 flex items-center gap-2 bg-zinc-950/40 border border-zinc-850 p-2.5 rounded-lg">
                    <span className="w-1 h-1 rounded-full bg-emerald-500" />
                    {feat}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Stack Tecnológica */}
          <div className="space-y-2">
            <h4 className="text-xs font-mono font-bold text-zinc-500 uppercase">Deployment & Technology Stack</h4>
            <div className="flex flex-wrap gap-2">
              {projeto.tags.map((tag: string, idx: number) => (
                <span key={idx} className="text-xs font-mono px-3 py-1 bg-zinc-950 border border-zinc-800 rounded-md text-emerald-400">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Footer do Modal com Links */}
        <div className="px-6 py-4 border-t border-zinc-800 bg-zinc-950/40 flex items-center justify-between">
          <span className="text-xs font-mono text-zinc-500">Status: {projeto.status}</span>
          
          {projeto.github !== "Privado" ? (
            <a 
              href={projeto.github} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="px-4 py-2 bg-emerald-500 text-zinc-950 font-mono text-xs font-bold rounded-lg hover:bg-emerald-400 transition-all flex items-center gap-1.5"
            >
              Inspect Source <ExternalLink className="w-3.5 h-3.5" />
            </a>
          ) : (
            <span className="text-xs font-mono text-zinc-500 bg-zinc-900 border border-zinc-800 px-3 py-1.5 rounded-lg">
              🔒 Closed Source / Enterprise
            </span>
          )}
        </div>

      </div>
    </div>
  );
}