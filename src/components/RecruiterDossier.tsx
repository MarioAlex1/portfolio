"use client";

import { useState } from "react";
import { 
  X, 
  Check, 
  Copy, 
  Mail, 
  ExternalLink, 
  Briefcase, 
  ShieldCheck, 
  Server, 
  Zap, 
  MapPin, 
  GraduationCap 
} from "lucide-react";
import { Perfil } from "@/types/portfolio";
import { TRANSLATIONS } from "@/data/translations";

interface RecruiterDossierProps {
  perfil: Perfil;
  isOpen: boolean;
  onClose: () => void;
  lang: "pt" | "en";
}

export function RecruiterDossier({ perfil, isOpen, onClose, lang }: RecruiterDossierProps) {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(perfil.links.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 backdrop-blur-md bg-zinc-950/80 animate-fade-in overflow-y-auto">
      <div 
        className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 w-full max-w-3xl rounded-3xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col transition-all text-zinc-900 dark:text-zinc-100 my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="px-4 sm:px-6 py-4 sm:py-5 border-b border-zinc-200 dark:border-zinc-800 bg-zinc-50/70 dark:bg-zinc-950/60 flex items-center justify-between gap-3">
          <div className="flex items-center gap-2.5 min-w-0">
            <span className="w-8 h-8 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0">
              <Zap className="w-4 h-4" />
            </span>
            <div className="min-w-0">
              <span className="text-[10px] font-mono uppercase tracking-widest text-emerald-600 dark:text-emerald-400 font-bold block truncate">
                {"// " + TRANSLATIONS[lang].recruiterMode}
              </span>
              <h3 className="text-sm sm:text-lg font-bold tracking-tight text-zinc-900 dark:text-zinc-100 truncate">
                {perfil.nome} — {lang === "pt" ? "Dossiê Profissional Júnior" : "Junior Developer Snapshot"}
              </h3>
            </div>
          </div>
          <button 
            onClick={onClose} 
            className="p-2 text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-xl transition-all cursor-pointer shrink-0"
            aria-label={TRANSLATIONS[lang].closeModal}
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-4 sm:p-6 overflow-y-auto space-y-6 text-sm font-sans">
          {/* Top Profile Summary Card */}
          <div className="p-4 sm:p-5 rounded-2xl bg-zinc-100/60 dark:bg-zinc-950/40 border border-zinc-200/80 dark:border-zinc-800/80 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="space-y-1.5 min-w-0 flex-1">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse shrink-0" />
                <span className="text-xs font-mono font-semibold text-emerald-600 dark:text-emerald-400 leading-snug">
                  {perfil.disponibilidade}
                </span>
              </div>
              <p className="text-xs text-zinc-500 dark:text-zinc-400 font-mono flex flex-wrap items-center gap-x-3 gap-y-1 pt-0.5">
                <span className="flex items-center gap-1 shrink-0"><MapPin className="w-3.5 h-3.5" /> {perfil.localizacao}</span>
                <span className="flex items-center gap-1 shrink-0"><GraduationCap className="w-3.5 h-3.5" /> IFCE (ADS)</span>
              </p>
            </div>

            {/* Quick Actions (Copy Email & LinkedIn) */}
            <div className="flex items-center gap-2 w-full md:w-auto shrink-0">
              <button
                onClick={handleCopyEmail}
                className="flex-1 md:flex-none px-3.5 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white font-mono text-xs font-bold rounded-xl flex items-center justify-center gap-2 transition-all cursor-pointer shadow-sm whitespace-nowrap min-w-[135px]"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-white shrink-0" /> : <Copy className="w-3.5 h-3.5 shrink-0" />}
                <span>{copied ? (lang === "pt" ? "E-mail Copiado!" : "Copied!") : TRANSLATIONS[lang].copyEmail}</span>
              </button>
              <a
                href={perfil.links.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex-1 md:flex-none px-3.5 py-2.5 bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 text-zinc-800 dark:text-zinc-200 font-mono text-xs font-bold rounded-xl flex items-center justify-center gap-1.5 transition-all cursor-pointer border border-zinc-200 dark:border-zinc-700 whitespace-nowrap shrink-0"
              >
                <span>LinkedIn</span> <ExternalLink className="w-3 h-3 shrink-0" />
              </a>
            </div>
          </div>

          {/* Target Roles & Top Stack Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Target Roles */}
            <div className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-950/30 border border-zinc-200 dark:border-zinc-800/80 space-y-2">
              <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-zinc-500 dark:text-zinc-400 flex items-center gap-1.5">
                <Briefcase className="w-3.5 h-3.5 text-purple-500" /> {TRANSLATIONS[lang].targetRoles}
              </h4>
              <ul className="space-y-1.5 text-xs text-zinc-700 dark:text-zinc-300 font-mono">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                  <span>{TRANSLATIONS[lang].targetRoleOne}</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                  <span>{TRANSLATIONS[lang].targetRoleTwo}</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                  <span>{TRANSLATIONS[lang].targetRoleThree}</span>
                </li>
              </ul>
            </div>

            {/* Core Stack */}
            <div className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-950/30 border border-zinc-200 dark:border-zinc-800/80 space-y-2">
              <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-zinc-500 dark:text-zinc-400 flex items-center gap-1.5">
                <Server className="w-3.5 h-3.5 text-emerald-500" /> {TRANSLATIONS[lang].principalStack}
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {["Python", "Django", "Django REST", "TypeScript", "Node.js", "PostgreSQL", "Multi-Tenant (DB-per-Tenant)", "Docker", "Pytest", "Git"].map((st) => (
                  <span key={st} className="text-[11px] font-mono px-2 py-0.5 rounded bg-zinc-100 dark:bg-zinc-800/70 border border-zinc-200 dark:border-zinc-700/60 text-zinc-700 dark:text-zinc-300 font-semibold">
                    {st}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Differentiators (Why Hire Mário?) */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-zinc-500 dark:text-zinc-400 flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" /> {TRANSLATIONS[lang].coreStrengths}
            </h4>
            <div className="grid grid-cols-1 gap-2.5 text-xs text-zinc-650 dark:text-zinc-300">
              <div className="p-3 rounded-xl bg-zinc-50 dark:bg-zinc-950/40 border border-zinc-200 dark:border-zinc-800/80 space-y-1">
                <div className="font-bold font-mono text-zinc-900 dark:text-zinc-100 flex items-center gap-1.5">
                  <span className="text-emerald-500 font-mono">01.</span> {TRANSLATIONS[lang].dossierStrength1Title}
                </div>
                <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  {TRANSLATIONS[lang].dossierStrength1Text}
                </p>
              </div>

              <div className="p-3 rounded-xl bg-zinc-50 dark:bg-zinc-950/40 border border-zinc-200 dark:border-zinc-800/80 space-y-1">
                <div className="font-bold font-mono text-zinc-900 dark:text-zinc-100 flex items-center gap-1.5">
                  <span className="text-emerald-500 font-mono">02.</span> {TRANSLATIONS[lang].dossierStrength2Title}
                </div>
                <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  {TRANSLATIONS[lang].dossierStrength2Text}
                </p>
              </div>

              <div className="p-3 rounded-xl bg-zinc-50 dark:bg-zinc-950/40 border border-zinc-200 dark:border-zinc-800/80 space-y-1">
                <div className="font-bold font-mono text-zinc-900 dark:text-zinc-100 flex items-center gap-1.5">
                  <span className="text-emerald-500 font-mono">03.</span> {TRANSLATIONS[lang].dossierStrength3Title}
                </div>
                <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  {TRANSLATIONS[lang].dossierStrength3Text}
                </p>
              </div>

              <div className="p-3 rounded-xl bg-zinc-50 dark:bg-zinc-950/40 border border-zinc-200 dark:border-zinc-800/80 space-y-1">
                <div className="font-bold font-mono text-zinc-900 dark:text-zinc-100 flex items-center gap-1.5">
                  <span className="text-emerald-500 font-mono">04.</span> {TRANSLATIONS[lang].dossierStrength4Title}
                </div>
                <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  {TRANSLATIONS[lang].dossierStrength4Text}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="px-4 sm:px-6 py-3.5 sm:py-4 border-t border-zinc-200 dark:border-zinc-800 bg-zinc-50/70 dark:bg-zinc-950/60 flex flex-wrap items-center justify-between gap-3">
          <div className="text-xs font-mono text-zinc-500 truncate max-w-[220px] sm:max-w-none">
            {perfil.links.email}
          </div>
          <div className="flex items-center gap-2">
            <a
              href={`mailto:${perfil.links.email}`}
              className="px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white font-mono text-xs font-bold rounded-xl flex items-center gap-1.5 transition-all shadow-sm shrink-0"
            >
              <Mail className="w-3.5 h-3.5" /> {TRANSLATIONS[lang].sendMessage}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
