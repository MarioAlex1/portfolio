"use client";

import { useState, useEffect } from "react";
import { MEU_PERFIL_PT, MEU_PERFIL_EN } from "@/data/perfil";
import { TRANSLATIONS } from "@/data/translations";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Skills } from "@/components/Skills";
import { ProjectCard } from "@/components/ProjectCard";
import { ProjectModal } from "@/components/ProjectModal";
import { TerminalConsole } from "@/components/TerminalConsole";
import { RecruiterDossier } from "@/components/RecruiterDossier";
import { 
  GitBranch, 
  Target, 
  CheckCircle2, 
  Wrench, 
  Search 
} from "lucide-react";
import { Projeto, CategoriaProjeto } from "@/types/portfolio";

export default function Home() {
  const [projetoSelecionado, setProjetoSelecionado] = useState<Projeto | null>(null);
  const [recruiterDossierOpen, setRecruiterDossierOpen] = useState(false);
  const [categoriaFiltro, setCategoriaFiltro] = useState<CategoriaProjeto>("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [theme, setTheme] = useState<"light" | "dark">("dark");
  const [lang, setLang] = useState<"pt" | "en">("pt");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null;
    const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const initialTheme = savedTheme || (systemPrefersDark ? "dark" : "light");

    const savedLang = localStorage.getItem("lang") as "pt" | "en" | null;
    const userLang = navigator.language.toLowerCase().startsWith("pt") ? "pt" : "en";
    const initialLang = savedLang || userLang;

    requestAnimationFrame(() => {
      setTheme(initialTheme);
      setLang(initialLang);
      document.documentElement.lang = initialLang === "pt" ? "pt-BR" : "en";
      setMounted(true);
    });
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
    document.documentElement.lang = lang === "pt" ? "pt-BR" : "en";
    localStorage.setItem("lang", lang);
  }, [lang, mounted]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  const toggleLang = () => {
    setLang((prev) => (prev === "pt" ? "en" : "pt"));
  };

  const perfil = lang === "pt" ? MEU_PERFIL_PT : MEU_PERFIL_EN;

  // Filtered projects by category and search term
  const filteredProjects = perfil.projetos.filter((proj) => {
    const matchesCategory = categoriaFiltro === "all" || proj.categoria === categoriaFiltro;
    const searchClean = searchTerm.trim().toLowerCase();
    const matchesSearch = searchClean === "" ||
      proj.titulo.toLowerCase().includes(searchClean) ||
      proj.descricao.toLowerCase().includes(searchClean) ||
      proj.tags.some(tag => tag.toLowerCase().includes(searchClean));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900 dark:bg-zinc-950 dark:text-zinc-50 font-sans antialiased selection:bg-emerald-500 selection:text-zinc-950 transition-colors duration-300">
      <Header 
        theme={theme} 
        toggleTheme={toggleTheme} 
        lang={lang} 
        toggleLang={toggleLang} 
        onOpenRecruiterDossier={() => setRecruiterDossierOpen(true)}
      />

      <main className="max-w-6xl mx-auto px-5 sm:px-8 py-10 sm:py-16 space-y-28">
        {/* HERO SECTION */}
        <Hero 
          perfil={perfil} 
          lang={lang} 
          onOpenRecruiterDossier={() => setRecruiterDossierOpen(true)}
        />
        
        {/* SKILLS SECTION */}
        <Skills perfil={perfil} lang={lang} />

        {/* ENGINEERING PRINCIPLES & GOALS */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-zinc-200 dark:border-zinc-800 pt-12">
          {/* Princípios de Engenharia */}
          <div className="space-y-4">
            <h4 className="text-xs font-mono font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider flex items-center gap-2">
              <GitBranch className="w-4 h-4" /> {TRANSLATIONS[lang].engineeringPrinciples}
            </h4>
            <div className="grid grid-cols-1 gap-2.5">
              {perfil.principiosEngenharia.map((principio, idx) => (
                <div 
                  key={idx} 
                  className="p-3.5 rounded-xl bg-white dark:bg-zinc-900/30 border border-zinc-200 dark:border-zinc-800/80 space-y-1 hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-mono font-bold text-zinc-900 dark:text-zinc-100 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                      {principio.titulo}
                    </span>
                    <span className="text-xs font-mono px-2 py-0.5 rounded bg-zinc-100 dark:bg-zinc-800 text-zinc-500">
                      {principio.tag}
                    </span>
                  </div>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed font-sans pl-3.5">
                    {principio.descricao}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Objetivos da Organização */}
          <div className="space-y-4">
            <h4 className="text-xs font-mono font-bold text-purple-600 dark:text-purple-400 uppercase tracking-wider flex items-center gap-2">
              <Target className="w-4 h-4" /> {TRANSLATIONS[lang].organizationGoals}
            </h4>
            <div className="space-y-3">
              {perfil.objetivosOrg.map((objetivo, idx) => (
                <div key={idx} className="flex items-start gap-3 text-sm sm:text-base text-zinc-650 dark:text-zinc-400 bg-white dark:bg-zinc-900/20 border border-zinc-200 dark:border-zinc-800/70 p-4 rounded-xl">
                  <CheckCircle2 className="w-4 h-4 text-purple-500 shrink-0 mt-0.5" />
                  <p className="leading-relaxed">{objetivo}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PROJECTS SECTION */}
        <section id="projetos" className="space-y-6 scroll-mt-20">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-zinc-200 dark:border-zinc-800 pb-3">
            <div className="space-y-1">
              <h3 className="text-xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 flex items-center gap-2">
                <span className="text-emerald-600 dark:text-emerald-400 font-mono">02.</span> {TRANSLATIONS[lang].projectsTitle}
              </h3>
            </div>
            <span className="text-[11px] font-mono text-zinc-500 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-amber-500/80 animate-pulse" />
              <Wrench className="w-3.5 h-3.5 text-amber-500" />
              {TRANSLATIONS[lang].activeDevelopment}
            </span>
          </div>

          {/* Category Filter Tabs & Search Bar */}
          <div className="space-y-3">
            <div className="flex flex-wrap items-center gap-2">
              <button
                onClick={() => setCategoriaFiltro("all")}
                className={`px-3 py-1.5 rounded-xl font-mono text-xs font-semibold transition-all cursor-pointer ${
                  categoriaFiltro === "all"
                    ? "bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-950 shadow-sm"
                    : "bg-zinc-100 dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 border border-zinc-200 dark:border-zinc-800 hover:text-zinc-900 dark:hover:text-zinc-100"
                }`}
              >
                {TRANSLATIONS[lang].filterAll} ({perfil.projetos.length})
              </button>
              <button
                onClick={() => setCategoriaFiltro("mariosystems")}
                className={`px-3 py-1.5 rounded-xl font-mono text-xs font-semibold transition-all cursor-pointer ${
                  categoriaFiltro === "mariosystems"
                    ? "bg-emerald-600 text-white shadow-sm"
                    : "bg-zinc-100 dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 border border-zinc-200 dark:border-zinc-800 hover:text-zinc-900 dark:hover:text-zinc-100"
                }`}
              >
                MarioSystems Lab
              </button>
              <button
                onClick={() => setCategoriaFiltro("production")}
                className={`px-3 py-1.5 rounded-xl font-mono text-xs font-semibold transition-all cursor-pointer ${
                  categoriaFiltro === "production"
                    ? "bg-purple-600 text-white shadow-sm"
                    : "bg-zinc-100 dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 border border-zinc-200 dark:border-zinc-800 hover:text-zinc-900 dark:hover:text-zinc-100"
                }`}
              >
                {TRANSLATIONS[lang].filterProduction}
              </button>
              <button
                onClick={() => setCategoriaFiltro("mobile")}
                className={`px-3 py-1.5 rounded-xl font-mono text-xs font-semibold transition-all cursor-pointer ${
                  categoriaFiltro === "mobile"
                    ? "bg-blue-600 text-white shadow-sm"
                    : "bg-zinc-100 dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 border border-zinc-200 dark:border-zinc-800 hover:text-zinc-900 dark:hover:text-zinc-100"
                }`}
              >
                {TRANSLATIONS[lang].filterMobile}
              </button>
            </div>

            {/* Search Input */}
            <div className="relative w-full">
              <Search className="w-4 h-4 text-zinc-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder={TRANSLATIONS[lang].searchPlaceholder}
                className="w-full pl-10 pr-4 py-2 bg-white dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800 rounded-xl text-xs font-mono placeholder:text-zinc-400 focus:outline-none focus:border-emerald-500 transition-colors"
              />
            </div>
          </div>

          {/* Projects Grid */}
          {filteredProjects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredProjects.map((projeto) => (
                <ProjectCard 
                  key={projeto.id} 
                  projeto={projeto} 
                  onOpenModal={() => setProjetoSelecionado(projeto)} 
                  lang={lang}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-12 border border-dashed border-zinc-200 dark:border-zinc-800 rounded-2xl text-xs font-mono text-zinc-500">
              {TRANSLATIONS[lang].noProjectsFound}
            </div>
          )}
        </section>

        {/* INTERACTIVE TERMINAL CONSOLE */}
        <TerminalConsole 
          perfil={perfil} 
          lang={lang} 
          onSelectProject={(projId) => {
            const found = perfil.projetos.find(p => p.id === projId);
            if (found) setProjetoSelecionado(found);
          }}
        />
      </main>

      {/* FOOTER */}
      <footer className="border-t border-zinc-200 dark:border-zinc-800/80 bg-zinc-100/50 dark:bg-zinc-950/40 py-10 text-center space-y-3">
        <div className="text-[11px] font-mono text-zinc-500 dark:text-zinc-400 max-w-2xl mx-auto px-4 select-none">
          <span className="text-emerald-600 dark:text-emerald-400 font-semibold">[MarioSystems-DEV]</span> : {TRANSLATIONS[lang].footerStatus}
        </div>
        <div className="text-xs text-zinc-500 font-mono">
          © {new Date().getFullYear()} {perfil.nome} — {TRANSLATIONS[lang].builtWith}
        </div>
      </footer>

      {/* PROJECT CASE STUDY MODAL */}
      <ProjectModal 
        key={projetoSelecionado?.id || "modal"}
        projeto={projetoSelecionado} 
        onClose={() => setProjetoSelecionado(null)} 
        lang={lang}
      />

      {/* RECRUITER FAST-TRACK DOSSIER MODAL */}
      <RecruiterDossier
        perfil={perfil}
        isOpen={recruiterDossierOpen}
        onClose={() => setRecruiterDossierOpen(false)}
        lang={lang}
      />
    </div>
  );
}
