import { Terminal } from "lucide-react";

export function Header() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-zinc-950/70 border-b border-zinc-800">
      <div className="max-w-4xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2 font-mono font-bold text-emerald-400">
          <Terminal className="w-5 h-5" />
          <span>~/portfolio</span>
        </div>
        <div className="flex items-center gap-4 text-sm text-zinc-400">
          <a href="#sobre" className="hover:text-zinc-100 transition-colors">sobre</a>
          <a href="#skills" className="hover:text-zinc-100 transition-colors">skills</a>
          <a href="#projetos" className="hover:text-zinc-100 transition-colors">projetos</a>
        </div>
      </div>
    </header>
  );
}