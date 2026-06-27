export function Footer() {
  return (
    <footer className="border-t border-zinc-900 bg-zinc-950/40 py-8 text-center text-xs text-zinc-600 font-mono">
      © {new Date().getFullYear()} — Built with Next.js & Tailwind CSS
    </footer>
  );
}