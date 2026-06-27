import { ExternalLink, Layers } from "lucide-react";
import { Projeto } from "@/types/portfolio";

interface ProjectCardProps {
  projeto: Projeto;
  onOpenModal: () => void;
}

export function ProjectCard({ projeto, onOpenModal }: ProjectCardProps) {
  return (
    <div 
      onClick={onOpenModal}
      className="group relative flex flex-col justify-between p-6 bg-zinc-900/40 border border-zinc-800 rounded-2xl hover:border-zinc-700 transition-all cursor-pointer hover:bg-zinc-900/60"
    >
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-1">
            <h4 className="text-lg font-bold text-zinc-100 group-hover:text-emerald-400 transition-colors">
              {projeto.titulo}
            </h4>
            <span className={`text-[10px] font-mono font-semibold px-2 py-0.5 rounded-full w-max ${
              projeto.status === "Concluído" ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20" : "bg-amber-500/10 text-amber-400 border border-amber-500/20"
            }`}>
              {projeto.status}
            </span>
          </div>
          
          <button className="text-zinc-500 hover:text-zinc-300 p-1 rounded font-mono text-xs flex items-center gap-1">
            <Layers className="w-3.5 h-3.5" /> detalhes
          </button>
        </div>
        <p className="text-sm text-zinc-400 leading-relaxed line-clamp-2">
          {projeto.descricao}
        </p>
      </div>
      
      <div className="flex flex-wrap gap-2 pt-6">
        {projeto.tags.slice(0, 3).map((tag, index) => (
          <span key={index} className="text-[11px] font-mono px-2 py-0.5 bg-zinc-800/60 border border-zinc-700/50 rounded text-zinc-300">
            {tag}
          </span>
        ))}
        {projeto.tags.length > 3 && (
          <span className="text-[11px] font-mono px-2 py-0.5 text-zinc-500">+{projeto.tags.length - 3}</span>
        )}
      </div>
    </div>
  );
}