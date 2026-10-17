import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mário Alex | Desenvolvedor Backend Júnior",
  description: "Portfólio de Mário Alex — Desenvolvedor Backend Júnior em formação (IFCE). Experiência prática em projetos colaborativos com Python, Django REST, TypeScript, Node.js, PostgreSQL, Docker e arquitetura Multi-Tenant.",
  keywords: [
    "Desenvolvedor Backend Júnior",
    "Junior Backend Developer",
    "Python",
    "Django",
    "Django REST Framework",
    "TypeScript",
    "Node.js",
    "PostgreSQL",
    "Docker",
    "Multi-Tenant",
    "Database-per-Tenant",
    "Pytest"
  ],
  authors: [{ name: "Mário Alex", url: "https://github.com/MarioAlex1" }],
  openGraph: {
    title: "Mário Alex | Desenvolvedor Backend Júnior",
    description: "Portfólio de Mário Alex — Desenvolvedor Backend Júnior com experiência prática em Python, Django REST, TypeScript, Node.js, PostgreSQL, Docker e arquitetura Multi-Tenant.",
    url: "https://github.com/MarioAlex1",
    siteName: "Mário Alex Portfolio",
    locale: "pt_BR",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className="h-full antialiased"
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-50 font-sans">
        {children}
      </body>
    </html>
  );
}
