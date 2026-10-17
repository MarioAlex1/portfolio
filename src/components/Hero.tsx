"use client";

import { useState } from "react";
import { 
  Mail, 
  MapPin, 
  GraduationCap, 
  ShieldAlert, 
  Copy, 
  Check, 
  Zap, 
  ExternalLink 
} from "lucide-react";
import { Perfil } from "@/types/portfolio";
import { TRANSLATIONS } from "@/data/translations";
import { TelemetryBar } from "@/components/TelemetryBar";

interface HeroProps {
  perfil: Perfil;
  lang: "pt" | "en";
  onOpenRecruiterDossier: () => void;
}

export function Hero({ perfil, lang, onOpenRecruiterDossier }: HeroProps) {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(perfil.links.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="sobre" className="space-y-10 pt-4">
      {/* Availability Status Badge */}
      <div className="flex flex-wrap items-center gap-3">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-700 dark:text-emerald-400 font-mono text-xs font-semibold shadow-xs">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span>{perfil.disponibilidade}</span>
        </div>

        <button
          onClick={onOpenRecruiterDossier}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-purple-500/10 hover:bg-purple-500/20 border border-purple-500/25 text-purple-700 dark:text-purple-300 font-mono text-xs font-semibold transition-all cursor-pointer shadow-xs"
        >
          <Zap className="w-3.5 h-3.5 fill-current" />
          <span>{lang === "pt" ? "⚡ Dossiê de Contratação (30s)" : "⚡ 30s Recruiter Snapshot"}</span>
        </button>
      </div>

      {/* Main Profile Header */}
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <p className="text-emerald-600 dark:text-emerald-400 font-mono text-xs tracking-widest font-bold">
            {perfil.hexNome}
          </p>
          <span className="text-zinc-400 text-xs font-mono">• Backend & Systems Architecture</span>
        </div>

        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-50">
          {perfil.nome}
        </h1>

        <h2 className="text-xl sm:text-2xl font-bold text-zinc-700 dark:text-zinc-300">
          {perfil.cargo}
        </h2>

        <p className="text-zinc-650 dark:text-zinc-400 max-w-2xl leading-relaxed text-base sm:text-lg">
          {perfil.sobre}
        </p>
        
        {/* Metadata info */}
        <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-zinc-500 dark:text-zinc-400 pt-2">
          <span className="flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-zinc-400 dark:text-zinc-500" /> {perfil.localizacao}
          </span>
          <span className="flex items-center gap-1.5">
            <GraduationCap className="w-3.5 h-3.5 text-zinc-400 dark:text-zinc-500" /> {perfil.educacao}
          </span>
        </div>
      </div>

      {/* Action Buttons & Social Channels */}
      <div className="flex flex-wrap items-center gap-3">
        {/* Copy Email Button */}
        <button
          onClick={handleCopyEmail}
          className="px-4 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white font-mono text-xs font-bold rounded-xl flex items-center gap-2 transition-all cursor-pointer shadow-sm"
        >
          {copied ? <Check className="w-4 h-4 text-white" /> : <Copy className="w-4 h-4" />}
          {copied ? TRANSLATIONS[lang].emailCopied : TRANSLATIONS[lang].copyEmail}
        </button>

        {/* GitHub */}
        <a 
          href={perfil.links.github} 
          target="_blank" 
          rel="noopener noreferrer" 
          title="GitHub Pessoal" 
          className="p-2.5 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl hover:border-emerald-500 hover:text-emerald-500 text-zinc-700 dark:text-zinc-300 transition-all flex items-center justify-center cursor-pointer shadow-xs"
        >
          <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" /></svg>
        </a>

        {/* LinkedIn */}
        <a 
          href={perfil.links.linkedin} 
          target="_blank" 
          rel="noopener noreferrer" 
          title="LinkedIn" 
          className="p-2.5 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl hover:border-emerald-500 hover:text-emerald-500 text-zinc-700 dark:text-zinc-300 transition-all flex items-center justify-center cursor-pointer shadow-xs"
        >
          <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" /></svg>
        </a>

        {/* Email Direct */}
        <a 
          href={`mailto:${perfil.links.email}`} 
          title="Enviar E-mail" 
          className="p-2.5 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl hover:border-emerald-500 hover:text-emerald-500 text-zinc-700 dark:text-zinc-300 transition-all flex items-center justify-center cursor-pointer shadow-xs"
        >
          <Mail className="w-5 h-5" />
        </a>
      </div>

      {/* Live Telemetry Bar */}
      <TelemetryBar lang={lang} />

      {/* CORE LAB PANEL (Destaque para o MarioSystems) */}
      <div className="w-full bg-zinc-100/60 dark:bg-zinc-900/40 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-6 relative overflow-hidden group transition-colors duration-300">
        <div className="absolute top-0 right-0 p-8 opacity-[0.03] dark:opacity-[0.02] text-zinc-900 dark:text-white pointer-events-none group-hover:scale-110 transition-transform duration-700">
          <ShieldAlert className="w-36 h-36" />
        </div>
        
        <div className="space-y-3 max-w-2xl relative z-10">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
            <span className="text-[10px] tracking-widest font-mono font-bold text-emerald-600 dark:text-emerald-400 uppercase">
              {TRANSLATIONS[lang].activeLab}
            </span>
          </div>
          <h3 className="text-xl font-bold font-mono text-zinc-900 dark:text-zinc-100 flex items-center gap-2">
            <a 
              href={perfil.links.organization} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-emerald-600 dark:hover:text-emerald-400 hover:underline transition-all flex items-center gap-1.5"
            >
              Building MarioSystems <ExternalLink className="w-4 h-4" />
            </a>
          </h3>
          <p className="text-xs sm:text-sm text-zinc-650 dark:text-zinc-400 leading-relaxed">
            {perfil.orgSobre}
          </p>
        </div>
      </div>
    </section>
  );
}