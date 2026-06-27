"use client";

import { useState } from "react";
import { MEU_PERFIL } from "@/data/perfil";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Skills } from "@/components/Skills";
import { ProjectCard } from "@/components/ProjectCard";
import { ProjectModal } from "@/components/ProjectModal";
import { GitBranch, Target, CheckCircle2, Wrench } from "lucide-react";
import { Projeto } from "@/types/portfolio";

export default function Home() {
  const [projetoSelecionado, setProjetoSelecionado] = useState<Projeto | null>(null);

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-50 font-sans antialiased selection:bg-emerald-500 selection:text-zinc-950">
      <Header />

      <main className="max-w-4xl mx-auto px-6 py-16 space-y-24">
        <Hero perfil={MEU_PERFIL} />
        
        <Skills perfil={MEU_PERFIL} />

        {/* NEW SECTION: ENGINEERING PRINCIPLES & GOALS */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-zinc-900 pt-12">
          {/* Princípios de Engenharia */}
          <div className="space-y-4">
            <h4 className="text-sm font-mono font-bold text-emerald-400 uppercase tracking-wider flex items-center gap-2">
              <GitBranch className="w-4 h-4" /> Engineering Principles
            </h4>
            <div className="grid grid-cols-1 gap-2">
              {MEU_PERFIL.principiosEngenharia.map((principio, idx) => (
                <div key={idx} className="flex items-center gap-2.5 text-sm text-zinc-400 bg-zinc-900/20 border border-zinc-900 p-3 rounded-xl font-mono">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500/70" />
                  {principio}
                </div>
              ))}
            </div>
          </div>

          {/* Objetivos da Organização */}
          <div className="space-y-4">
            <h4 className="text-sm font-mono font-bold text-purple-400 uppercase tracking-wider flex items-center gap-2">
              <Target className="w-4 h-4" /> Organization Goals
            </h4>
            <div className="space-y-3">
              {MEU_PERFIL.objetivosOrg.map((objetivo, idx) => (
                <div key={idx} className="flex items-start gap-3 text-sm text-zinc-400 bg-zinc-900/10 border border-zinc-900/60 p-3.5 rounded-xl">
                  <CheckCircle2 className="w-4 h-4 text-purple-500 shrink-0 mt-0.5" />
                  <p className="leading-relaxed">{objetivo}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PROJECTS SECTION */}
        <section id="projetos" className="space-y-6 scroll-mt-20">
          <div className="flex items-center justify-between border-b border-zinc-800 pb-2">
            <h3 className="text-xl font-bold tracking-tight text-zinc-100 flex items-center gap-2">
              <span className="text-emerald-400 font-mono">02.</span> Projetos & Arquiteturas
            </h3>
            <span className="text-[10px] font-mono text-zinc-500 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-amber-500/70 animate-pulse" />
              <Wrench className="w-3.5 h-3.5 text-amber-500/80" />
              Active development
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {MEU_PERFIL.projetos.map((projeto, index) => (
              <ProjectCard 
                key={index} 
                projeto={projeto} 
                onOpenModal={() => setProjetoSelecionado(projeto)} 
              />
            ))}
          </div>
        </section>
      </main>

      {/* FOOTER: COM O SEU STATUS DE LOG DA INFRAESTRUTURA */}
      <footer className="border-t border-zinc-900 bg-zinc-950/40 py-8 text-center space-y-2">
        <div className="text-[10px] font-mono text-zinc-600 max-w-2xl mx-auto px-4 select-none">
          <span className="text-emerald-500/70">[MarioSystems-INFRA]</span> : Health-check PASSED — Containers: 8/8 online — Nginx reverse proxy active.
        </div>
        <div className="text-xs text-zinc-700 font-mono">
          © {new Date().getFullYear()} — Built with Next.js & Tailwind CSS
        </div>
      </footer>

      {/* MODAL */}
      <ProjectModal 
        key={projetoSelecionado?.titulo || "modal"}
        projeto={projetoSelecionado} 
        onClose={() => setProjetoSelecionado(null)} 
      />
    </div>
  );
}