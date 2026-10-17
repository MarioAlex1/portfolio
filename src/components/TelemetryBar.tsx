"use client";

import { Activity, Database, Cpu, Radio } from "lucide-react";

interface TelemetryBarProps {
  lang: "pt" | "en";
}

export function TelemetryBar({ lang }: TelemetryBarProps) {
  return (
    <div className="w-full bg-zinc-900 text-zinc-100 border border-zinc-800 rounded-2xl p-4 sm:p-5 shadow-xl relative overflow-hidden transition-all">
      {/* Subtle grid background */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(#10b981 1px, transparent 1px)",
          backgroundSize: "16px 16px"
        }}
      />

      <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        {/* Left Side: System Badge */}
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-emerald-950/60 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0">
            <Radio className="w-4 h-4 animate-pulse" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-emerald-400">
                {lang === "pt" ? "MarioSystems • Dev & Study Lab" : "MarioSystems • Dev & Study Lab"}
              </span>
            </div>
            <p className="text-xs text-zinc-400 font-mono">
              status: <span className="text-zinc-200">ACTIVE</span> — lab: <span className="text-emerald-400">Junior Backend Hub</span>
            </p>
          </div>
        </div>

        {/* Right Side: Key Telemetry Metrics */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 w-full md:w-auto text-xs font-mono">
          <div className="flex items-center gap-2 bg-zinc-950/60 border border-zinc-800 px-3 py-1.5 rounded-lg">
            <Database className="w-3.5 h-3.5 text-purple-400 shrink-0" />
            <div className="truncate">
              <div className="text-[10px] text-zinc-500 uppercase">{lang === "pt" ? "Prioridade 01" : "Top Priority"}</div>
              <div className="text-zinc-200 font-semibold truncate">SQL & PostgreSQL</div>
            </div>
          </div>

          <div className="flex items-center gap-2 bg-zinc-950/60 border border-zinc-800 px-3 py-1.5 rounded-lg">
            <Cpu className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
            <div className="truncate">
              <div className="text-[10px] text-zinc-500 uppercase">{lang === "pt" ? "Arquitetura" : "Architecture"}</div>
              <div className="text-zinc-200 font-semibold truncate">Multi-Tenant (DB-per-Tenant)</div>
            </div>
          </div>

          <div className="col-span-2 sm:col-span-1 flex items-center gap-2 bg-zinc-950/60 border border-zinc-800 px-3 py-1.5 rounded-lg">
            <Activity className="w-3.5 h-3.5 text-amber-400 shrink-0" />
            <div className="truncate">
              <div className="text-[10px] text-zinc-500 uppercase">{lang === "pt" ? "Ambientes" : "Environments"}</div>
              <div className="text-zinc-200 font-semibold truncate">Docker & Linux CLI</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
