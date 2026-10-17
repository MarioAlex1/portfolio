"use client";

import { useState } from "react";
import { Check, GitBranch, GraduationCap, Mail, MapPin, ArrowDownRight, Sparkles } from "lucide-react";
import { Perfil } from "@/types/portfolio";
import { TRANSLATIONS } from "@/data/translations";

interface HeroProps { perfil: Perfil; lang: "pt" | "en"; onOpenRecruiterDossier: () => void; }

export function Hero({ perfil, lang, onOpenRecruiterDossier }: HeroProps) {
  const [copied, setCopied] = useState(false);
  const [imageError, setImageError] = useState(false);
  const handleCopyEmail = () => { navigator.clipboard.writeText(perfil.links.email); setCopied(true); setTimeout(() => setCopied(false), 2000); };

  return (
    <section id="sobre" className="hero-grid relative scroll-mt-24">
      <div className="hero-copy order-2 lg:order-1">
        <div className="flex flex-wrap items-center gap-2.5 mb-7">
          <span className="eyebrow"><span className="status-dot" /> {perfil.disponibilidade}</span>
          <span className="eyebrow eyebrow-muted">{perfil.localizacao}</span>
        </div>
        <p className="hero-kicker">{perfil.hexNome} <span>·</span> Backend & systems</p>
        <h1 className="hero-title">Construo sistemas que<br /><em>fazem sentido.</em></h1>
        <p className="hero-lede">{perfil.sobre}</p>
        <div className="flex flex-wrap items-center gap-3 mt-8">
          <button onClick={onOpenRecruiterDossier} className="button-primary"><Sparkles className="w-4 h-4" /> {lang === "pt" ? "Conheça meu trabalho" : "Explore my work"}</button>
          <button onClick={handleCopyEmail} className="button-secondary">{copied ? <Check className="w-4 h-4" /> : <Mail className="w-4 h-4" />}{copied ? TRANSLATIONS[lang].emailCopied : TRANSLATIONS[lang].copyEmail}</button>
          <a href={perfil.links.github} target="_blank" rel="noopener noreferrer" className="icon-button" aria-label="GitHub"><GitBranch className="w-4 h-4" /></a>
          <a href={perfil.links.linkedin} target="_blank" rel="noopener noreferrer" className="icon-button" aria-label="LinkedIn"><span className="text-xs font-bold">in</span></a>
        </div>
        <div className="hero-meta"><span><GraduationCap className="w-4 h-4" /> {perfil.educacao}</span><span><MapPin className="w-4 h-4" /> {perfil.localizacao}</span></div>
      </div>
      <div className="hero-portrait-wrap order-1 lg:order-2">
        <div className="portrait-orbit orbit-one" /><div className="portrait-orbit orbit-two" />
        <div className="portrait-card">
          {perfil.foto && !imageError ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={perfil.foto} alt={`Foto de ${perfil.nome}`} className="portrait-image" onError={() => setImageError(true)} />
          ) : <div className="portrait-fallback"><span>MA</span><small>adicione seu retrato em public/imagens/mario.jpg</small></div>}
          <div className="portrait-caption"><span>01</span><span>{perfil.cargo}</span></div>
        </div>
        <div className="portrait-note"><ArrowDownRight className="w-4 h-4" /> <span>{lang === "pt" ? "curioso por natureza" : "curious by nature"}</span></div>
      </div>
      <a href="#projetos" className="hero-scroll"><span>Scroll para explorar</span><ArrowDownRight className="w-4 h-4" /></a>
    </section>
  );
}
