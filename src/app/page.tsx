"use client";

import { useState, useEffect } from "react";
import { MEU_PERFIL_PT, MEU_PERFIL_EN } from "@/data/perfil";
import { TRANSLATIONS } from "@/data/translations";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Skills } from "@/components/Skills";
import { ProjectCard } from "@/components/ProjectCard";
import { ProjectModal } from "@/components/ProjectModal";
import { GitBranch, Target, CheckCircle2, Wrench } from "lucide-react";
import { Projeto } from "@/types/portfolio";

export default function Home() {
  const [projetoSelecionado, setProjetoSelecionado] = useState<Projeto | null>(null);
  const [theme, setTheme] = useState<"light" | "dark">("dark");
  const [lang, setLang] = useState<"pt" | "en">("pt");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Theme initialization
    const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null;
    const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const initialTheme = savedTheme || (systemPrefersDark ? "dark" : "light");
    setTheme(initialTheme);

    // Language initialization
    const savedLang = localStorage.getItem("lang") as "pt" | "en" | null;
    if (savedLang) {
      setLang(savedLang);
    } else {
      const userLang = navigator.language.toLowerCase();
      setLang(userLang.startsWith("pt") ? "pt" : "en");
    }

    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme, mounted]);

  useEffect(() => {
    if (!mounted) return;
    localStorage.setItem("lang", lang);
  }, [lang, mounted]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  const toggleLang = () => {
    setLang((prev) => (prev === "pt" ? "en" : "pt"));
  };

  const perfil = lang === "pt" ? MEU_PERFIL_PT : MEU_PERFIL_EN;

  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900 dark:bg-zinc-950 dark:text-zinc-50 font-sans antialiased selection:bg-emerald-500 selection:text-zinc-950 transition-colors duration-300">
      <Header theme={theme} toggleTheme={toggleTheme} lang={lang} toggleLang={toggleLang} />

      <main className="max-w-4xl mx-auto px-6 py-16 space-y-24">
        <Hero perfil={perfil} lang={lang} />
        
        <Skills perfil={perfil} lang={lang} />

        {/* NEW SECTION: ENGINEERING PRINCIPLES & GOALS */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-zinc-200 dark:border-zinc-900 pt-12 transition-colors">
          {/* Princípios de Engenharia */}
          <div className="space-y-4">
            <h4 className="text-sm font-mono font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider flex items-center gap-2 transition-colors">
              <GitBranch className="w-4 h-4" /> {TRANSLATIONS[lang].engineeringPrinciples}
            </h4>
            <div className="grid grid-cols-1 gap-2">
              {perfil.principiosEngenharia.map((principio, idx) => (
                <div key={idx} className="flex items-center gap-2.5 text-sm text-zinc-650 dark:text-zinc-400 bg-zinc-100/50 dark:bg-zinc-900/20 border border-zinc-200 dark:border-zinc-900 p-3 rounded-xl font-mono transition-colors">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500/70" />
                  {principio}
                </div>
              ))}
            </div>
          </div>

          {/* Objetivos da Organização */}
          <div className="space-y-4">
            <h4 className="text-sm font-mono font-bold text-purple-600 dark:text-purple-400 uppercase tracking-wider flex items-center gap-2 transition-colors">
              <Target className="w-4 h-4" /> {TRANSLATIONS[lang].organizationGoals}
            </h4>
            <div className="space-y-3">
              {perfil.objetivosOrg.map((objetivo, idx) => (
                <div key={idx} className="flex items-start gap-3 text-sm text-zinc-655 dark:text-zinc-400 bg-zinc-100/30 dark:bg-zinc-900/10 border border-zinc-200 dark:border-zinc-900/60 p-3.5 rounded-xl transition-colors">
                  <CheckCircle2 className="w-4 h-4 text-purple-500 shrink-0 mt-0.5" />
                  <p className="leading-relaxed">{objetivo}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PROJECTS SECTION */}
        <section id="projetos" className="space-y-6 scroll-mt-20">
          <div className="flex items-center justify-between border-b border-zinc-200 dark:border-zinc-800 pb-2 transition-colors">
            <h3 className="text-xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 flex items-center gap-2 transition-colors">
              <span className="text-emerald-600 dark:text-emerald-400 font-mono">02.</span> {TRANSLATIONS[lang].projectsTitle}
            </h3>
            <span className="text-[10px] font-mono text-zinc-500 dark:text-zinc-400 flex items-center gap-1.5 transition-colors">
              <span className="w-2 h-2 rounded-full bg-amber-500/70 animate-pulse" />
              <Wrench className="w-3.5 h-3.5 text-amber-600 dark:text-amber-500/80" />
              {TRANSLATIONS[lang].activeDevelopment}
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {perfil.projetos.map((projeto, index) => (
              <ProjectCard 
                key={index} 
                projeto={projeto} 
                onOpenModal={() => setProjetoSelecionado(projeto)} 
                lang={lang}
              />
            ))}
          </div>
        </section>
      </main>

      {/* FOOTER: COM O SEU STATUS DE LOG DA INFRAESTRUTURA */}
      <footer className="border-t border-zinc-200 dark:border-zinc-900 bg-zinc-100/50 dark:bg-zinc-950/40 py-8 text-center space-y-2 transition-colors">
        <div className="text-[10px] font-mono text-zinc-500 dark:text-zinc-600 max-w-2xl mx-auto px-4 select-none transition-colors">
          <span className="text-emerald-600/70 dark:text-emerald-500/70">[MarioSystems-INFRA]</span> : Health-check PASSED — Containers: 8/8 online — Nginx reverse proxy active.
        </div>
        <div className="text-xs text-zinc-600 dark:text-zinc-700 font-mono transition-colors">
          © {new Date().getFullYear()} — Built with Next.js & Tailwind CSS
        </div>
      </footer>

      {/* MODAL */}
      <ProjectModal 
        key={projetoSelecionado?.titulo || "modal"}
        projeto={projetoSelecionado} 
        onClose={() => setProjetoSelecionado(null)} 
        lang={lang}
      />
    </div>
  );
}