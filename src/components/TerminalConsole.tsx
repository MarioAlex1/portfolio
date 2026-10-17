"use client";

import { useState, useRef, useEffect, useMemo } from "react";
import { Terminal, Send, Trash2, Sparkles, Folder, FileText, CheckCircle2 } from "lucide-react";
import { Perfil } from "@/types/portfolio";
import { TRANSLATIONS } from "@/data/translations";

interface TerminalConsoleProps {
  perfil: Perfil;
  lang: "pt" | "en";
  onSelectProject?: (projectId: string) => void;
}

interface CommandOutput {
  command: string;
  output: React.ReactNode;
  timestamp: string;
  dir: string;
}

interface VirtualItem {
  type: "file" | "dir";
  size?: string;
  perms?: string;
  date?: string;
  content?: string;
}

// Initial Virtual file system definition
const INITIAL_ROOT_FS: Record<string, VirtualItem> = {
  "about.md": {
    type: "file",
    size: "1.2K",
    perms: "-rw-r--r--",
    date: "Oct 17 14:00",
    content: `# Mário Alex — Desenvolvedor Backend Júnior
> Estudante de Análise e Desenvolvimento de Sistemas (IFCE)

Experiência prática em projetos colaborativos utilizando Python, Django,
Django REST Framework, TypeScript, Node.js e PostgreSQL.

- Foco: APIs RESTful, Modelagem Relacional e Arquitetura Multi-Tenant
- Localização: Ceará, Brasil (UTC-3)
- GitHub: https://github.com/MarioAlex1
- LinkedIn: https://www.linkedin.com/in/mário-alex-7402732bb/
- Status: Aberto a oportunidades júnior em desenvolvimento backend`
  },
  "dossie.json": {
    type: "file",
    size: "940B",
    perms: "-rw-r--r--",
    date: "Oct 17 14:15",
    content: `{
  "candidato": "Mário Alex",
  "nivel": "Desenvolvedor Backend Júnior (em formação)",
  "instituicao": "IFCE (Análise e Desenvolvimento de Sistemas)",
  "disponibilidade": "Remoto / Híbrido (CLT / PJ)",
  "foco_numero_01": "SQL e PostgreSQL (Fundamentos, JOINs, Transações ACID, EXPLAIN)",
  "diferenciais_reais": [
    "Experiência prática em projetos colaborativos reais (Point do Barbeiro & Leite do Futuro)",
    "Arquitetura Multi-Tenant com isolamento físico Database-per-Tenant e Django DB Router",
    "Compromisso com autonomia técnica de ponta a ponta sem muletas de IA",
    "Cultura de testes automatizados com Pytest e Vitest em pipelines de CI"
  ],
  "ambientes": "Docker Compose e comandos essenciais de Linux"
}`
  },
  "skills.txt": {
    type: "file",
    size: "820B",
    perms: "-rw-r--r--",
    date: "Oct 17 14:10",
    content: `=== MATRIZ DE COMPETÊNCIAS TÉCNICAS ===

[BACKEND & LINGUAGENS]
• Python • Django • Django REST Framework
• TypeScript • Node.js • Express • NestJS (estudos)
• SOLID • OOP • Pytest • Vitest

[BANCOS DE DADOS & PERSISTÊNCIA]
• PostgreSQL • SQL (DML, DDL, JOINs, Constraints)
• Multi-Tenant (Database-per-Tenant)
• Django ORM • TypeORM • Prisma ORM • Redis (Cache)

[DEVOPS BÁSICO & FERRAMENTAS]
• Docker • Docker Compose • Linux CLI / Bash
• Git & GitHub • GitHub Actions (CI) • OpenAPI / Swagger`
  },
  "docker-compose.yml": {
    type: "file",
    size: "640B",
    perms: "-rw-r--r--",
    date: "Oct 17 13:50",
    content: `version: '3.8'

services:
  point-barbeiro-api:
    build: .
    command: gunicorn core.wsgi:application --bind 0.0.0.0:8000
    ports:
      - "8000:8000"
    environment:
      - DJANGO_SETTINGS_MODULE=config.settings.production
      - DATABASE_ROUTER=core.routers.TenantDatabaseRouter
    depends_on:
      - postgres-central
      - redis

  postgres-central:
    image: postgres:16-alpine
    environment:
      POSTGRES_DB: central_catalog_db
      POSTGRES_USER: mario
    volumes:
      - central_data:/var/lib/postgresql/data
    ports:
      - "5432:5432"

  redis:
    image: redis:7.2-alpine
    ports:
      - "6379:6379"

volumes:
  central_data:`
  },
  "roadmap.txt": {
    type: "file",
    size: "1.1K",
    perms: "-rw-r--r--",
    date: "Oct 17 14:20",
    content: `=== PLANO DE EVOLUÇÃO E CONSOLIDAÇÃO TÉCNICA (30 DIAS) ===

[DIAS 1–7] SQL Básico e Diagnóstico:
• Consultas puras, filtros, agregações e GROUP BY sem dependência de ORM.
• Resolução independente de exercícios de lógica e banco de dados.

[DIAS 8–14] Relacionamentos e Backend:
• Prática aprofundada de JOINs, constraints e modelagem relacional.
• Construção de API com Django REST Framework e testes unitários.

[DIAS 15–21] Docker e Operação:
• Subir API + PostgreSQL com Docker Compose em ambiente limpo.
• Configurar variáveis de ambiente seguras e diagnosticar logs de falhas.

[DIAS 22–30] Consolidação e Empregabilidade:
• Documentação de estudos de caso dos projetos reais.
• Treinamento de entrevistas técnicas com foco em explicar decisões de código.`
  },
  "contact.sh": {
    type: "file",
    size: "320B",
    perms: "-rwxr-xr-x",
    date: "Oct 17 14:05",
    content: `#!/bin/bash
echo "=== CANAIS DE CONTATO DE MÁRIO ALEX ==="
echo "E-mail:   alexxbarbosa662@gmail.com"
echo "LinkedIn: https://www.linkedin.com/in/mário-alex-7402732bb/"
echo "GitHub:   https://github.com/MarioAlex1"
echo "Org Lab:  https://github.com/MarioSystems"`
  },
  "projects": {
    type: "dir",
    size: "4.0K",
    perms: "drwxr-xr-x",
    date: "Oct 17 14:30"
  }
};

const PROJECTS_FS: Record<string, { type: "file"; size: string; perms: string; date: string; content: string; id: string }> = {
  "point-barbeiro.md": {
    type: "file",
    size: "1.8K",
    perms: "-rw-r--r--",
    date: "Oct 17 14:25",
    id: "point-barbeiro",
    content: `# Point do Barbeiro — SaaS Multi-Tenant (Database-per-Tenant)
- Stack: Python, Django, Django REST Framework, PostgreSQL, Docker, Pytest
- Arquitetura: Multi-Tenant com isolamento físico de banco de dados por barbearia
- Destaques:
  * Banco central de controle para catálogo e governança de tenants
  * Django Database Router customizado para roteamento dinâmico de queries ORM
  * Criação e preparação automatizada de bancos de dados no onboarding
  * Transações atômicas no PostgreSQL prevenindo double-booking
  * Pipeline automatizado de CI/CD via GitHub Actions com Pytest`
  },
  "leite-do-futuro.md": {
    type: "file",
    size: "1.5K",
    perms: "-rw-r--r--",
    date: "Oct 17 14:26",
    id: "leite-do-futuro-api",
    content: `# API — Leite do Futuro
- Stack: Django, DRF, PostgreSQL, Celery, Redis, Docker
- Arquitetura: RESTful API desacoplada de frontend legado
- Destaques:
  * Migração de frontend acoplado a Firebase para API independente Django REST
  * Modelagem relacional no PostgreSQL para rastreabilidade de leite A2A2
  * Fila de tarefas assíncronas em background com Celery e Redis
  * Documentação OpenAPI 3 / Swagger com drf-spectacular`
  },
  "personalsync.md": {
    type: "file",
    size: "1.3K",
    perms: "-rw-r--r--",
    date: "Oct 17 14:27",
    id: "personal-sync",
    content: `# PersonalSync
- Stack: Express, TypeScript, TypeORM, PostgreSQL, Socket.io, Vitest
- Destaques:
  * Projeto integrador acadêmico projetado sob medida para cliente real
  * Comunicação bidirecional e eventos em tempo real com Socket.io
  * Validação estrita de esquemas em runtime com Zod
  * Testes automatizados com Vitest e Supertest`
  },
  "auth-gateway.md": {
    type: "file",
    size: "1.2K",
    perms: "-rw-r--r--",
    date: "Oct 17 14:28",
    id: "auth-gateway",
    content: `# Auth Gateway (MarioSystems Lab)
- Stack: NestJS, TypeScript, PostgreSQL, Prisma, Redis, Docker
- Foco: Estudo e prototipagem de autenticação JWT, Refresh Tokens e RBAC no NestJS`
  },
  "notification-platform.md": {
    type: "file",
    size: "1.2K",
    perms: "-rw-r--r--",
    date: "Oct 17 14:29",
    id: "notification-platform",
    content: `# Notification Platform (MarioSystems Lab)
- Stack: NestJS, RabbitMQ, PostgreSQL, Redis, Docker
- Foco: Estudo conceitual de mensageria assíncrona orientada a eventos e filas com RabbitMQ`
  },
  "redcloud.md": {
    type: "file",
    size: "1.1K",
    perms: "-rw-r--r--",
    date: "Oct 17 14:30",
    id: "redcloud",
    content: `# RedCloud Mobile App
- Stack: React Native, Expo Router, TypeScript, Firebase, Material Design 3
- Foco: Aplicativo mobile com navegação file-based e arquitetura modular por domínio de feature`
  }
};

export function TerminalConsole({ perfil, lang, onSelectProject }: TerminalConsoleProps) {
  const [inputVal, setInputVal] = useState("");
  const [history, setHistory] = useState<CommandOutput[]>([]);
  const [commandIndex, setCommandIndex] = useState<number>(-1);
  const [executedCommands, setExecutedCommands] = useState<string[]>([]);
  const [currentDir, setCurrentDir] = useState<"~" | "~/projects">("~");
  const [customFiles, setCustomFiles] = useState<Record<string, VirtualItem>>({});
  const terminalBottomRef = useRef<HTMLDivElement>(null);
  const consoleBodyRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Combined virtual root filesystem
  const rootFS = useMemo(() => {
    return { ...INITIAL_ROOT_FS, ...customFiles };
  }, [customFiles]);

  const getTime = () => {
    return new Date().toLocaleTimeString();
  };

  const handleCommand = (cmdStr: string) => {
    const trimmed = cmdStr.trim();
    if (!trimmed) return;

    setExecutedCommands((prev) => [...prev, trimmed]);
    setCommandIndex(-1);

    const parts = trimmed.split(" ").filter(Boolean);
    const primary = parts[0].toLowerCase();
    const flags = parts.filter(p => p.startsWith("-"));
    const args = parts.slice(1).filter(p => !p.startsWith("-"));
    const firstArg = args[0] ? args[0] : "";

    let resultNode: React.ReactNode = null;

    switch (primary) {
      case "help":
        resultNode = (
          <div className="space-y-2 font-mono text-xs text-zinc-300">
            <p className="text-emerald-400 font-bold">
              {lang === "pt" ? "Comandos Linux & Navegação:" : "Linux & Navigation Commands:"}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-1.5 pt-1 text-[11px]">
              <div><span className="text-yellow-400 font-bold">ls [-la]</span> : Listar arquivos e pastas</div>
              <div><span className="text-yellow-400 font-bold">cat &lt;arquivo&gt;</span> : Exibir conteúdo</div>
              <div><span className="text-yellow-400 font-bold">head / tail</span> : Primeiras/últimas linhas</div>
              <div><span className="text-yellow-400 font-bold">cd &lt;dir&gt;</span> : Trocar de diretório</div>
              <div><span className="text-yellow-400 font-bold">pwd</span> : Mostrar caminho atual</div>
              <div><span className="text-yellow-400 font-bold">tree</span> : Exibir árvore de arquivos</div>
              <div><span className="text-yellow-400 font-bold">mkdir &lt;pasta&gt;</span> : Criar diretório na sessão</div>
              <div><span className="text-yellow-400 font-bold">touch &lt;arquivo&gt;</span> : Criar arquivo na sessão</div>
              <div><span className="text-yellow-400 font-bold">rm &lt;arquivo&gt;</span> : Remover arquivo da sessão</div>
              <div><span className="text-yellow-400 font-bold">git status/log</span> : Histórico e status Git</div>
              <div><span className="text-yellow-400 font-bold">top / htop</span> : Processos do backend</div>
              <div><span className="text-yellow-400 font-bold">docker ps</span> : Containers em execução</div>
              <div><span className="text-yellow-400 font-bold">env / printenv</span> : Variáveis de ambiente</div>
              <div><span className="text-yellow-400 font-bold">ping &lt;host&gt;</span> : Testar latência de rede</div>
              <div><span className="text-yellow-400 font-bold">free -m</span> : Memória RAM do host</div>
              <div><span className="text-yellow-400 font-bold">df -h</span> : Espaço em disco</div>
              <div><span className="text-yellow-400 font-bold">curl &lt;url&gt;</span> : Simular requisição HTTP</div>
              <div><span className="text-yellow-400 font-bold">grep &lt;termo&gt;</span> : Filtrar linhas de arquivo</div>
              <div><span className="text-yellow-400 font-bold">python3 / node</span> : Informações de runtime</div>
              <div><span className="text-yellow-400 font-bold">whoami / uname</span> : Identidade e SO Linux</div>
              <div><span className="text-yellow-400 font-bold">inspect &lt;id&gt;</span> : Abrir modal do projeto</div>
              <div><span className="text-yellow-400 font-bold">arch</span> : Diagrama Multi-Tenant</div>
              <div><span className="text-yellow-400 font-bold">cowsay &lt;txt&gt;</span> : Mascote Linux clássico</div>
              <div><span className="text-yellow-400 font-bold">sudo &lt;cmd&gt;</span> : Executar como root</div>
              <div><span className="text-yellow-400 font-bold">clear</span> : Limpar tela</div>
            </div>
            <p className="text-zinc-500 text-[10px] pt-1">
              {lang === "pt" ? "Dica: Pressione TAB para auto-completar comandos, arquivos e diretórios." : "Tip: Press TAB to auto-complete commands, filenames, and directories."}
            </p>
          </div>
        );
        break;

      case "ls":
      case "dir": {
        const isLong = flags.some(f => f.includes("l"));
        const showAll = flags.some(f => f.includes("a"));

        const renderItem = (name: string, item: VirtualItem) => (
          <div key={name} className="flex items-center gap-3">
            {isLong && (
              <span className="text-zinc-500 text-[11px] font-mono">
                {item.perms || "-rw-r--r--"} 1 mario mario {item.size || "1.0K"} {item.date || "Oct 17 15:00"}
              </span>
            )}
            {item.type === "dir" ? (
              <span className="text-blue-400 font-bold flex items-center gap-1.5">
                <Folder className="w-3.5 h-3.5 fill-current" /> {name}/
              </span>
            ) : (
              <span className="text-zinc-200 flex items-center gap-1.5">
                <FileText className="w-3 h-3 text-zinc-400" /> {name}
              </span>
            )}
          </div>
        );

        if (currentDir === "~") {
          if (firstArg === "projects") {
            resultNode = (
              <div className="space-y-1 font-mono text-xs">
                {showAll && (
                  <>
                    <div className="text-zinc-500 text-[11px]">drwxr-xr-x 2 mario mario 4.0K Oct 17 14:30 .</div>
                    <div className="text-zinc-500 text-[11px]">drwxr-xr-x 3 mario mario 4.0K Oct 17 14:00 ..</div>
                  </>
                )}
                {Object.entries(PROJECTS_FS).map(([name, item]) => renderItem(name, item))}
              </div>
            );
          } else {
            resultNode = (
              <div className="space-y-1 font-mono text-xs">
                {showAll && (
                  <>
                    <div className="text-zinc-500 text-[11px]">drwxr-xr-x 4 mario mario 4.0K Oct 17 14:00 .</div>
                    <div className="text-zinc-500 text-[11px]">drwxr-xr-x 3 root  root  4.0K Oct 17 12:00 ..</div>
                    <div className="text-zinc-500 text-[11px]">-rw------- 1 mario mario  3.2K Oct 17 15:10 .bash_history</div>
                    <div className="text-zinc-500 text-[11px]">-rw-r--r-- 1 mario mario   220 Oct 17 13:00 .bashrc</div>
                  </>
                )}
                {Object.entries(rootFS).map(([name, item]) => renderItem(name, item))}
              </div>
            );
          }
        } else {
          resultNode = (
            <div className="space-y-1 font-mono text-xs">
              {showAll && (
                <>
                  <div className="text-zinc-500 text-[11px]">drwxr-xr-x 2 mario mario 4.0K Oct 17 14:30 .</div>
                  <div className="text-zinc-500 text-[11px]">drwxr-xr-x 3 mario mario 4.0K Oct 17 14:00 ..</div>
                </>
              )}
              {Object.entries(PROJECTS_FS).map(([name, item]) => renderItem(name, item))}
            </div>
          );
        }
        break;
      }

      case "cd":
        if (!firstArg || firstArg === "~" || firstArg === "/home/mario") {
          setCurrentDir("~");
          resultNode = null;
        } else if (firstArg === "projects" || firstArg === "./projects" || firstArg === "~/projects") {
          setCurrentDir("~/projects");
          resultNode = null;
        } else if (firstArg === ".." || firstArg === "../") {
          setCurrentDir("~");
          resultNode = null;
        } else if (rootFS[firstArg]?.type === "dir" || firstArg === "projects/") {
          setCurrentDir("~/projects");
          resultNode = null;
        } else {
          resultNode = (
            <div className="font-mono text-xs text-red-400">
              bash: cd: {firstArg}: No such file or directory
            </div>
          );
        }
        break;

      case "pwd":
        resultNode = (
          <div className="font-mono text-xs text-zinc-300">
            {currentDir === "~" ? "/home/mario" : "/home/mario/projects"}
          </div>
        );
        break;

      case "mkdir":
        if (!firstArg) {
          resultNode = (
            <div className="font-mono text-xs text-amber-400">
              mkdir: missing operand. Usage: mkdir &lt;directory_name&gt;
            </div>
          );
        } else {
          const dirName = firstArg.replace(/[/\\?%*:|"<>]/g, "");
          setCustomFiles(prev => ({
            ...prev,
            [dirName]: {
              type: "dir",
              size: "4.0K",
              perms: "drwxr-xr-x",
              date: "Oct 17 15:15"
            }
          }));
          resultNode = (
            <div className="font-mono text-xs text-emerald-400">
              [✓] Created directory &apos;{dirName}&apos; in session.
            </div>
          );
        }
        break;

      case "touch":
        if (!firstArg) {
          resultNode = (
            <div className="font-mono text-xs text-amber-400">
              touch: missing file operand. Usage: touch &lt;filename&gt;
            </div>
          );
        } else {
          const fileName = firstArg.replace(/[/\\?%*:|"<>]/g, "");
          setCustomFiles(prev => ({
            ...prev,
            [fileName]: {
              type: "file",
              size: "0B",
              perms: "-rw-r--r--",
              date: "Oct 17 15:15",
              content: `# ${fileName}\nCreated by session user at ${new Date().toISOString()}`
            }
          }));
          resultNode = (
            <div className="font-mono text-xs text-emerald-400">
              [✓] Created file &apos;{fileName}&apos; in session.
            </div>
          );
        }
        break;

      case "rm": {
        const target = firstArg;
        if (!target) {
          resultNode = (
            <div className="font-mono text-xs text-amber-400">
              rm: missing operand. Usage: rm &lt;filename&gt;
            </div>
          );
        } else if (flags.some(f => f.includes("rf")) && (target === "/" || target === "/*" || target === "*")) {
          resultNode = (
            <div className="p-3 bg-red-950/60 border border-red-500/50 rounded-lg font-mono text-xs space-y-1 text-red-200">
              <p className="font-bold text-red-400">⚠️ [MarioSystems Cloud Defense Active]</p>
              <p>rm -rf /: Permissão negada. Arquivos protegidos por snapshots e isolamento físico!</p>
              <p className="text-zinc-400 text-[11px]">Nice try! O portfólio continua 100% íntegro e operacional. 😉</p>
            </div>
          );
        } else if (customFiles[target]) {
          setCustomFiles(prev => {
            const next = { ...prev };
            delete next[target];
            return next;
          });
          resultNode = (
            <div className="font-mono text-xs text-zinc-300">
              [✓] Removed &apos;{target}&apos; from session.
            </div>
          );
        } else if (INITIAL_ROOT_FS[target] || PROJECTS_FS[target]) {
          resultNode = (
            <div className="font-mono text-xs text-amber-400">
              rm: cannot remove &apos;{target}&apos;: Permission denied (Read-only system portfolio asset)
            </div>
          );
        } else {
          resultNode = (
            <div className="font-mono text-xs text-red-400">
              rm: cannot remove &apos;{target}&apos;: No such file or directory
            </div>
          );
        }
        break;
      }

      case "whoami":
        resultNode = (
          <div className="font-mono text-xs text-emerald-400 font-semibold">
            mario (Desenvolvedor Backend Júnior • IFCE)
          </div>
        );
        break;

      case "uname":
        resultNode = (
          <div className="font-mono text-xs text-zinc-300">
            Linux mariosystems 6.8.0-generic #42-Ubuntu SMP PREEMPT_DYNAMIC x86_64 GNU/Linux
          </div>
        );
        break;

      case "date":
        resultNode = (
          <div className="font-mono text-xs text-zinc-300">
            {new Date().toString()}
          </div>
        );
        break;

      case "hostname":
        resultNode = (
          <div className="font-mono text-xs text-zinc-300">
            mariosystems-dev-lab
          </div>
        );
        break;

      case "echo":
        resultNode = (
          <div className="font-mono text-xs text-zinc-200">
            {parts.slice(1).join(" ") || ""}
          </div>
        );
        break;

      case "history":
        resultNode = (
          <div className="space-y-0.5 font-mono text-xs text-zinc-300 max-h-48 overflow-y-auto">
            {executedCommands.map((cmd, i) => (
              <div key={i} className="flex gap-3">
                <span className="text-zinc-600 w-6 text-right select-none">{i + 1}</span>
                <span>{cmd}</span>
              </div>
            ))}
          </div>
        );
        break;

      case "tree":
        resultNode = (
          <div className="font-mono text-xs text-zinc-300 leading-snug">
            <p className="text-blue-400 font-bold">/home/mario</p>
            {Object.keys(rootFS).filter(k => k !== "projects").map((name) => (
              <p key={name}>├── {name}</p>
            ))}
            <p className="text-blue-400">└── projects/</p>
            {Object.keys(PROJECTS_FS).map((pName, idx, arr) => (
              <p key={pName} className="text-emerald-400">
                {idx === arr.length - 1 ? "    └── " : "    ├── "} {pName}
              </p>
            ))}
            <p className="text-zinc-500 pt-1 text-[11px]">
              1 directory, {Object.keys(rootFS).length + Object.keys(PROJECTS_FS).length - 1} files
            </p>
          </div>
        );
        break;

      case "cat": {
        if (!firstArg) {
          resultNode = (
            <div className="font-mono text-xs text-amber-400">
              cat: missing file operand. Example: &apos;cat about.md&apos; or &apos;cat dossie.json&apos;
            </div>
          );
        } else {
          let fileObj = currentDir === "~" ? rootFS[firstArg] : PROJECTS_FS[firstArg];
          if (!fileObj && currentDir === "~" && firstArg.startsWith("projects/")) {
            const sub = firstArg.replace("projects/", "");
            fileObj = PROJECTS_FS[sub];
          }

          if (fileObj && fileObj.content) {
            resultNode = (
              <div className="p-3 rounded-lg bg-zinc-900/80 border border-zinc-800 text-xs font-mono text-zinc-200 overflow-x-auto whitespace-pre-wrap leading-relaxed">
                {fileObj.content}
              </div>
            );
          } else if (fileObj && fileObj.type === "dir") {
            resultNode = (
              <div className="font-mono text-xs text-amber-400">
                cat: {firstArg}: Is a directory. Use &apos;cd {firstArg}&apos; or &apos;ls {firstArg}&apos; instead.
              </div>
            );
          } else {
            resultNode = (
              <div className="font-mono text-xs text-red-400">
                cat: {firstArg}: No such file or directory
              </div>
            );
          }
        }
        break;
      }

      case "head":
      case "tail": {
        const isHead = primary === "head";
        const fileParam = firstArg.startsWith("-") ? args[1] : firstArg;
        let lineCount = 5;
        const nFlag = flags.find(f => f.startsWith("-n"));
        if (nFlag) {
          const parsed = parseInt(nFlag.replace("-n", ""), 10);
          if (!isNaN(parsed) && parsed > 0) lineCount = parsed;
        }

        if (!fileParam) {
          resultNode = (
            <div className="font-mono text-xs text-amber-400">
              {primary}: missing file operand. Usage: {primary} [-n 5] &lt;file&gt;
            </div>
          );
        } else {
          let fileObj = currentDir === "~" ? rootFS[fileParam] : PROJECTS_FS[fileParam];
          if (!fileObj && currentDir === "~" && fileParam.startsWith("projects/")) {
            fileObj = PROJECTS_FS[fileParam.replace("projects/", "")];
          }

          if (fileObj && fileObj.content) {
            const lines = fileObj.content.split("\n");
            const sliced = isHead ? lines.slice(0, lineCount) : lines.slice(-lineCount);
            resultNode = (
              <div className="p-3 rounded-lg bg-zinc-900/80 border border-zinc-800 text-xs font-mono text-zinc-200 overflow-x-auto whitespace-pre-wrap leading-relaxed">
                {sliced.join("\n")}
              </div>
            );
          } else {
            resultNode = (
              <div className="font-mono text-xs text-red-400">
                {primary}: {fileParam}: No such file or directory
              </div>
            );
          }
        }
        break;
      }

      case "grep": {
        if (!firstArg) {
          resultNode = (
            <div className="font-mono text-xs text-amber-400">
              Usage: grep &lt;pattern&gt; &lt;file&gt;
            </div>
          );
        } else {
          const pattern = firstArg;
          const targetFile = args[1] || "skills.txt";
          const fileObj = currentDir === "~" ? rootFS[targetFile] : PROJECTS_FS[targetFile];
          if (fileObj && fileObj.content) {
            const matchingLines = fileObj.content
              .split("\n")
              .filter(line => line.toLowerCase().includes(pattern.toLowerCase()));
            resultNode = matchingLines.length > 0 ? (
              <div className="space-y-1 font-mono text-xs text-zinc-300">
                {matchingLines.map((line, idx) => (
                  <div key={idx} className="text-zinc-200">
                    <span className="text-emerald-400">{targetFile}:</span> {line}
                  </div>
                ))}
              </div>
            ) : (
              <div className="font-mono text-xs text-zinc-500">
                No matching lines found for pattern &apos;{pattern}&apos; in {targetFile}.
              </div>
            );
          } else {
            resultNode = (
              <div className="font-mono text-xs text-red-400">
                grep: {targetFile}: No such file or directory
              </div>
            );
          }
        }
        break;
      }

      case "git": {
        const sub = firstArg.toLowerCase();
        if (sub === "status" || !sub) {
          resultNode = (
            <div className="font-mono text-xs text-zinc-300 space-y-1 bg-zinc-900/60 p-3 rounded-lg border border-zinc-800">
              <p className="text-emerald-400 font-bold">On branch main</p>
              <p className="text-zinc-400">Your branch is up to date with &apos;origin/main&apos;.</p>
              <p className="text-zinc-500 pt-1">nothing to commit, working tree clean</p>
              <p className="text-zinc-500 text-[11px] pt-1">CI/CD: GitHub Actions [Pytest & Vitest Suites Passing ✓]</p>
            </div>
          );
        } else if (sub === "log") {
          resultNode = (
            <div className="space-y-2 font-mono text-xs text-zinc-300 bg-zinc-900/60 p-3 rounded-lg border border-zinc-800">
              <div className="border-l-2 border-emerald-500 pl-2">
                <p className="text-yellow-400">commit 8f3a1d9 (HEAD -&gt; main, origin/main)</p>
                <p className="text-zinc-400 text-[11px]">Author: Mário Alex &lt;alexxbarbosa662@gmail.com&gt;</p>
                <p className="text-zinc-300 font-semibold">feat(tenant): implement Database-per-Tenant dynamic routing &amp; isolation</p>
              </div>
              <div className="border-l-2 border-zinc-700 pl-2">
                <p className="text-yellow-400">commit 6e2b401</p>
                <p className="text-zinc-400 text-[11px]">Author: Mário Alex &lt;alexxbarbosa662@gmail.com&gt;</p>
                <p className="text-zinc-300">feat(async): add Celery background workers with Redis broker for Leite do Futuro</p>
              </div>
              <div className="border-l-2 border-zinc-700 pl-2">
                <p className="text-yellow-400">commit 3c9d724</p>
                <p className="text-zinc-400 text-[11px]">Author: Mário Alex &lt;alexxbarbosa662@gmail.com&gt;</p>
                <p className="text-zinc-300">test: configure automated Pytest test suite for transaction atomic locks</p>
              </div>
            </div>
          );
        } else if (sub === "branch") {
          resultNode = (
            <div className="font-mono text-xs text-zinc-300">
              <span className="text-emerald-400 font-bold">* main</span>
            </div>
          );
        } else {
          resultNode = (
            <div className="font-mono text-xs text-zinc-400">
              git: &apos;{sub}&apos; is not a recognized command. Try &apos;git status&apos; or &apos;git log&apos;.
            </div>
          );
        }
        break;
      }

      case "top":
      case "htop": {
        resultNode = (
          <div className="space-y-2 font-mono text-[11px] text-zinc-300 overflow-x-auto p-3 bg-zinc-950 rounded-lg border border-zinc-800">
            <div className="text-zinc-400 space-y-0.5 border-b border-zinc-800 pb-2">
              <p><span className="text-emerald-400 font-bold">top - 15:20:00</span> up 12 days, 1 user, load average: 0.14, 0.10, 0.08</p>
              <p>Tasks: <span className="text-white font-bold">5 total</span>, 1 running, 4 sleeping, 0 stopped</p>
              <p>%Cpu(s): <span className="text-emerald-400">1.2 us</span>, 0.4 sy, 0.0 ni, 98.4 id, 0.0 wa</p>
              <p>MiB Mem : <span className="text-white">2048.0 total</span>, 642.5 used, 1405.5 free, 128.0 buff/cache</p>
            </div>
            <table className="w-full text-left pt-1">
              <thead>
                <tr className="text-zinc-500 border-b border-zinc-800">
                  <th className="pr-3">PID</th>
                  <th className="pr-3">USER</th>
                  <th className="pr-3">PR</th>
                  <th className="pr-3">RES</th>
                  <th className="pr-3">%CPU</th>
                  <th className="pr-3">%MEM</th>
                  <th>COMMAND</th>
                </tr>
              </thead>
              <tbody className="text-zinc-300 divide-y divide-zinc-900">
                <tr>
                  <td className="text-emerald-400">1042</td>
                  <td>mario</td>
                  <td>20</td>
                  <td>68M</td>
                  <td>0.8</td>
                  <td>3.3</td>
                  <td>gunicorn: point-barbeiro-api (Django)</td>
                </tr>
                <tr>
                  <td className="text-emerald-400">1055</td>
                  <td>postgres</td>
                  <td>20</td>
                  <td>94M</td>
                  <td>0.4</td>
                  <td>4.6</td>
                  <td>postgres: central_catalog_db</td>
                </tr>
                <tr>
                  <td className="text-emerald-400">1068</td>
                  <td>postgres</td>
                  <td>20</td>
                  <td>78M</td>
                  <td>0.2</td>
                  <td>3.8</td>
                  <td>postgres: tenant_barbearia_01</td>
                </tr>
                <tr>
                  <td className="text-emerald-400">1080</td>
                  <td>mario</td>
                  <td>20</td>
                  <td>52M</td>
                  <td>0.1</td>
                  <td>2.5</td>
                  <td>celery worker: leite-do-futuro</td>
                </tr>
                <tr>
                  <td className="text-emerald-400">1092</td>
                  <td>redis</td>
                  <td>20</td>
                  <td>18M</td>
                  <td>0.0</td>
                  <td>0.9</td>
                  <td>redis-server *:6379</td>
                </tr>
              </tbody>
            </table>
          </div>
        );
        break;
      }

      case "ps":
      case "docker": {
        resultNode = (
          <div className="space-y-2 font-mono text-[11px] text-zinc-300 overflow-x-auto p-2 bg-zinc-900/60 rounded border border-zinc-800">
            <p className="text-emerald-400 font-bold">CONTAINER ID   IMAGE                 COMMAND                  STATUS          PORTS                    NAMES</p>
            <div className="space-y-1 text-zinc-400">
              <div>d4f9a1c2e3   point-barbeiro-api:v2  &quot;gunicorn core.wsgi&quot;     Up 4 hours      0.0.0.0:8000-&gt;8000/tcp   point-barbeiro-prod</div>
              <div>b7e3f8a0c1   postgres:16-alpine     &quot;docker-entrypoint.s…&quot;   Up 4 hours      0.0.0.0:5432-&gt;5432/tcp   postgres-central-catalog</div>
              <div>c2a9d4f1e5   postgres:16-alpine     &quot;docker-entrypoint.s…&quot;   Up 4 hours      0.0.0.0:5433-&gt;5432/tcp   postgres-tenant-barbearia-01</div>
              <div>a1b2c3d4e5   redis:7.2-alpine       &quot;redis-server&quot;           Up 4 hours      0.0.0.0:6379-&gt;6379/tcp   redis-cache-service</div>
              <div>f5e4d3c2b1   leite-futuro-api:v1    &quot;celery -A core worker&quot;  Up 4 hours      -                        leite-futuro-worker</div>
            </div>
          </div>
        );
        break;
      }

      case "env":
      case "printenv": {
        resultNode = (
          <div className="space-y-1 font-mono text-xs text-zinc-300 bg-zinc-900/70 p-3 rounded-lg border border-zinc-800">
            <div><span className="text-emerald-400">USER</span>=mario</div>
            <div><span className="text-emerald-400">ROLE</span>=Desenvolvedor Backend Júnior (em formação)</div>
            <div><span className="text-emerald-400">INSTITUTION</span>=IFCE (Análise e Desenvolvimento de Sistemas)</div>
            <div><span className="text-emerald-400">MAIN_STACK</span>=Python, Django, Django REST, TypeScript, PostgreSQL</div>
            <div><span className="text-emerald-400">TOP_PRIORITY</span>=SQL e PostgreSQL (Fundamentos, JOINs, Transações ACID, EXPLAIN)</div>
            <div><span className="text-emerald-400">TENANT_ROUTER</span>=core.routers.TenantDatabaseRouter</div>
            <div><span className="text-emerald-400">TENANT_ISOLATION</span>=database-per-tenant</div>
            <div><span className="text-emerald-400">CENTRAL_DB_URL</span>=postgresql://mario:***@postgres-central:5432/central_catalog_db</div>
            <div><span className="text-emerald-400">CACHE_URL</span>=redis://redis:6379/0</div>
            <div><span className="text-emerald-400">ENVIRONMENT</span>=production</div>
            <div><span className="text-emerald-400">LANG</span>=pt_BR.UTF-8</div>
          </div>
        );
        break;
      }

      case "ping": {
        const targetHost = firstArg || "db.mariosystems.internal";
        resultNode = (
          <div className="space-y-1 font-mono text-xs text-zinc-300 bg-zinc-900/80 p-3 rounded-lg border border-zinc-800">
            <p className="text-zinc-400 font-bold">PING {targetHost} (172.20.0.4) 56(84) bytes of data.</p>
            <p>64 bytes from {targetHost} (172.20.0.4): icmp_seq=1 ttl=64 time=0.421 ms</p>
            <p>64 bytes from {targetHost} (172.20.0.4): icmp_seq=2 ttl=64 time=0.388 ms</p>
            <p>64 bytes from {targetHost} (172.20.0.4): icmp_seq=3 ttl=64 time=0.402 ms</p>
            <p>64 bytes from {targetHost} (172.20.0.4): icmp_seq=4 ttl=64 time=0.395 ms</p>
            <div className="pt-2 text-zinc-400 border-t border-zinc-800 text-[11px]">
              <p>--- {targetHost} ping statistics ---</p>
              <p className="text-emerald-400">4 packets transmitted, 4 received, 0% packet loss, time 3004ms</p>
              <p>rtt min/avg/max/mdev = 0.388/0.401/0.421/0.013 ms</p>
            </div>
          </div>
        );
        break;
      }

      case "free": {
        resultNode = (
          <div className="space-y-1 font-mono text-xs text-zinc-300 bg-zinc-900/60 p-3 rounded-lg border border-zinc-800 overflow-x-auto">
            <pre className="text-zinc-300 leading-relaxed">
{`               total        used        free      shared  buff/cache   available
Mem:            2048         642        1406          24         128        1380
Swap:           1024           0        1024`}
            </pre>
          </div>
        );
        break;
      }

      case "df": {
        resultNode = (
          <div className="space-y-1 font-mono text-xs text-zinc-300 bg-zinc-900/60 p-3 rounded-lg border border-zinc-800 overflow-x-auto">
            <pre className="text-zinc-300 leading-relaxed">
{`Filesystem      Size  Used Avail Use% Mounted on
/dev/root        50G   14G   34G  30% /
/dev/sda1       512M  120M  392M  24% /boot
tmpfs           1.0G     0  1.0G   0% /dev/shm
overlay          50G   14G   34G  30% /var/lib/docker/overlay2`}
            </pre>
          </div>
        );
        break;
      }

      case "curl": {
        const urlTarget = firstArg || "/api/health";
        resultNode = (
          <div className="space-y-1 font-mono text-xs text-zinc-300 bg-zinc-900/80 p-3 rounded-lg border border-zinc-800">
            <p className="text-zinc-500 font-bold">HTTP/1.1 200 OK</p>
            <p className="text-zinc-500">Date: {new Date().toUTCString()}</p>
            <p className="text-zinc-500">Server: Nginx/1.24.0 (Ubuntu)</p>
            <p className="text-zinc-500">Content-Type: application/json</p>
            <p className="text-zinc-500">X-Tenant-Isolation: Database-per-Tenant</p>
            <div className="pt-2 text-emerald-400">
              {`{ "status": "UP", "service": "point-barbeiro-api", "target": "${urlTarget}", "database": "healthy" }`}
            </div>
          </div>
        );
        break;
      }

      case "python":
      case "python3": {
        if (flags.some(f => f.includes("version") || f === "-V")) {
          resultNode = (
            <div className="font-mono text-xs text-zinc-300">
              Python 3.12.3 (GCC 13.2.0, 64-bit)
            </div>
          );
        } else if (flags.includes("-c")) {
          const codeArg = parts.slice(2).join(" ");
          resultNode = (
            <div className="font-mono text-xs text-emerald-400">
              {codeArg.replace(/['"()]/g, "").replace("print", "") || "Hello from Python 3.12!"}
            </div>
          );
        } else {
          resultNode = (
            <div className="space-y-1 font-mono text-xs text-zinc-300 bg-zinc-900/70 p-3 rounded-lg border border-zinc-800">
              <p className="text-emerald-400 font-bold">Python 3.12.3 [Ubuntu 24.04]</p>
              <p className="text-zinc-400">&gt;&gt;&gt; import django, rest_framework, pytest</p>
              <p className="text-zinc-400">&gt;&gt;&gt; print(&quot;Stack: Python, Django, DRF, PostgreSQL, Pytest&quot;)</p>
              <p className="text-emerald-300">&apos;Stack: Python, Django, DRF, PostgreSQL, Pytest&apos;</p>
            </div>
          );
        }
        break;
      }

      case "node":
      case "nodejs": {
        resultNode = (
          <div className="font-mono text-xs text-zinc-300">
            Node.js v20.18.0 (TypeScript 5.x • Vitest • TypeORM • Express)
          </div>
        );
        break;
      }

      case "cowsay": {
        const textToSay = args.join(" ") || "Mário Alex: Pronto para o desafio backend!";
        resultNode = (
          <pre className="font-mono text-xs text-emerald-400 whitespace-pre leading-snug">
{` _________________________________________
< ${textToSay} >
 -----------------------------------------
        \\   ^__^
         \\  (oo)\\_______
            (__)\\       )\\/\\
                ||----w |
                ||     ||`}
          </pre>
        );
        break;
      }

      case "sudo":
        resultNode = (
          <div className="space-y-1 font-mono text-xs">
            <p className="text-zinc-400">[sudo] password for mario: <span className="text-zinc-600">••••••••</span></p>
            <p className="text-emerald-400 font-bold flex items-center gap-1.5 pt-1">
              <CheckCircle2 className="w-4 h-4 text-emerald-500" />
              {lang === "pt" 
                ? "Permissão concedida: Mário Alex está pronto para contratação como Desenvolvedor Backend Júnior!" 
                : "Permission granted: Mário Alex is ready for hire as a Junior Backend Developer!"}
            </p>
          </div>
        );
        break;

      case "about":
        resultNode = (
          <div className="space-y-2 font-mono text-xs text-zinc-300 leading-relaxed">
            <p className="text-emerald-400 font-bold">
              {perfil.nome} — {perfil.cargo}
            </p>
            <p>{perfil.sobre}</p>
            <p className="text-zinc-400">
              <span className="text-purple-400 font-semibold">{lang === "pt" ? "Localização:" : "Location:"}</span> {perfil.localizacao} | <span className="text-purple-400 font-semibold">{lang === "pt" ? "Formação:" : "Education:"}</span> {perfil.educacao}
            </p>
          </div>
        );
        break;

      case "skills":
        resultNode = (
          <div className="space-y-2 font-mono text-xs text-zinc-300">
            <p className="text-emerald-400 font-bold">
              {lang === "pt" ? "Stack Tecnológica & Engenharia:" : "Engineering & Tech Stack:"}
            </p>
            {perfil.categoriasSkills.map((cat, i) => (
              <div key={i} className="space-y-1">
                <span className="text-yellow-400 font-semibold">[{cat.titulo}]:</span>
                <p className="text-zinc-400 pl-2">{cat.competencias.join(" • ")}</p>
              </div>
            ))}
          </div>
        );
        break;

      case "projects":
        resultNode = (
          <div className="space-y-2 font-mono text-xs text-zinc-300">
            <p className="text-emerald-400 font-bold">
              {lang === "pt" ? "Sistemas em Destaque (use 'inspect <id>' para abrir):" : "Featured Systems (type 'inspect <id>' to open):"}
            </p>
            <div className="space-y-2">
              {perfil.projetos.map((proj) => (
                <div key={proj.id} className="border-l-2 border-emerald-500/50 pl-3 py-0.5">
                  <div className="flex items-center gap-2">
                    <button 
                      onClick={() => onSelectProject?.(proj.id)}
                      className="text-yellow-400 font-bold hover:underline cursor-pointer text-left"
                    >
                      {proj.titulo}
                    </button>
                    <span className="text-[10px] px-1.5 py-0.2 bg-zinc-800 rounded text-zinc-400">id: {proj.id}</span>
                  </div>
                  <p className="text-zinc-400 text-[11px] line-clamp-1">{proj.descricao}</p>
                </div>
              ))}
            </div>
          </div>
        );
        break;

      case "inspect":
      case "open":
        if (!firstArg) {
          resultNode = (
            <div className="font-mono text-xs text-amber-400">
              {lang === "pt" 
                ? "Por favor, especifique o ID do projeto. Exemplo: 'inspect point-barbeiro' ou 'inspect leite-do-futuro-api'." 
                : "Please specify the project ID. Example: 'inspect point-barbeiro' or 'inspect leite-do-futuro-api'."}
            </div>
          );
        } else {
          const matchedProj = perfil.projetos.find(
            p => p.id.toLowerCase() === firstArg.toLowerCase() || p.titulo.toLowerCase().includes(firstArg.toLowerCase())
          );
          if (matchedProj) {
            onSelectProject?.(matchedProj.id);
            resultNode = (
              <div className="font-mono text-xs text-emerald-400">
                {lang === "pt" 
                  ? `[✓] Abrindo especificação técnica do sistema: ${matchedProj.titulo}` 
                  : `[✓] Opening system technical spec: ${matchedProj.titulo}`}
              </div>
            );
          } else {
            resultNode = (
              <div className="font-mono text-xs text-red-400">
                {lang === "pt" ? `Projeto '${firstArg}' não encontrado. Digite 'projects' para listar IDs.` : `Project '${firstArg}' not found. Type 'projects' to view valid IDs.`}
              </div>
            );
          }
        }
        break;

      case "arch":
        resultNode = (
          <div className="space-y-2 font-mono text-[11px] text-zinc-300 overflow-x-auto p-2 bg-zinc-950/80 rounded border border-zinc-800">
            <p className="text-emerald-400 font-bold">
              {lang === "pt" ? "Arquitetura Multi-Tenant com Database-per-Tenant (Point do Barbeiro):" : "Multi-Tenant Database-per-Tenant Architecture (Point do Barbeiro):"}
            </p>
            <pre className="text-emerald-300/90 leading-tight">
{`[Client Request (Subdomínio / Header)]
       │
       ▼
[Tenant Identification Middleware] ──► [Extração e Validação de Contexto]
       │
       ▼
[Banco Central de Controle]        ──► [Consulta Catálogo & Status da Barbearia]
       │
       ▼
[Django Database Router]           ──► [Roteamento Dinâmico de Queries ORM]
       │
       ├──► Barbearia 1 ──► [PostgreSQL DB "barbearia_01"] (Isolamento Físico)
       ├──► Barbearia 2 ──► [PostgreSQL DB "barbearia_02"] (Isolamento Físico)
       └──► Barbearia N ──► [PostgreSQL DB "barbearia_N"]  (Isolamento Físico)`}
            </pre>
          </div>
        );
        break;

      case "contact":
        resultNode = (
          <div className="space-y-2 font-mono text-xs text-zinc-300">
            <p className="text-emerald-400 font-bold">
              {lang === "pt" ? "Canais de Comunicação:" : "Communication Channels:"}
            </p>
            <div className="space-y-1 text-zinc-300">
              <div>• E-mail: <a href={`mailto:${perfil.links.email}`} className="text-yellow-400 underline">{perfil.links.email}</a></div>
              <div>• LinkedIn: <a href={perfil.links.linkedin} target="_blank" rel="noreferrer" className="text-yellow-400 underline">{perfil.links.linkedin}</a></div>
              <div>• GitHub: <a href={perfil.links.github} target="_blank" rel="noreferrer" className="text-yellow-400 underline">{perfil.links.github}</a></div>
              <div>• MarioSystems Org: <a href={perfil.links.organization} target="_blank" rel="noreferrer" className="text-yellow-400 underline">{perfil.links.organization}</a></div>
            </div>
          </div>
        );
        break;

      case "clear":
        setHistory([]);
        setInputVal("");
        return;

      default:
        resultNode = (
          <div className="font-mono text-xs text-red-400">
            {lang === "pt" ? `Comando não reconhecido: '${trimmed}'. Digite 'help' para a lista de comandos Linux.` : `Command not recognized: '${trimmed}'. Type 'help' for available Linux commands.`}
          </div>
        );
        break;
    }

    setHistory((prev) => [
      ...prev,
      {
        command: trimmed,
        output: resultNode,
        timestamp: getTime(),
        dir: currentDir
      }
    ]);

    setInputVal("");
  };

  useEffect(() => {
    // Only scroll inside the terminal console body when commands are run, NEVER scroll the browser window
    if (history.length > 0 && consoleBodyRef.current) {
      consoleBodyRef.current.scrollTop = consoleBodyRef.current.scrollHeight;
    }
  }, [history]);

  // Tab auto-completion
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleCommand(inputVal);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      if (executedCommands.length > 0) {
        const nextIdx = commandIndex === -1 ? executedCommands.length - 1 : Math.max(0, commandIndex - 1);
        setCommandIndex(nextIdx);
        setInputVal(executedCommands[nextIdx]);
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (executedCommands.length > 0 && commandIndex !== -1) {
        const nextIdx = commandIndex + 1;
        if (nextIdx < executedCommands.length) {
          setCommandIndex(nextIdx);
          setInputVal(executedCommands[nextIdx]);
        } else {
          setCommandIndex(-1);
          setInputVal("");
        }
      }
    } else if (e.key === "Tab") {
      e.preventDefault();
      const current = inputVal.trim();
      if (!current) return;

      const availableCommands = [
        "ls", "cat", "head", "tail", "cd", "pwd", "tree", "mkdir", "touch", "rm",
        "whoami", "uname", "echo", "history", "git", "top", "htop", "ps", "docker",
        "env", "printenv", "ping", "free", "df", "curl", "python3", "python", "node",
        "cowsay", "sudo", "inspect", "open", "arch", "about", "skills", "projects",
        "contact", "clear", "help"
      ];

      const parts = current.split(" ");
      if (parts.length === 1) {
        const match = availableCommands.find(c => c.startsWith(parts[0].toLowerCase()));
        if (match) {
          setInputVal(match + " ");
        }
      } else if (["cat", "head", "tail", "ls", "grep", "rm"].includes(parts[0].toLowerCase())) {
        const fileNames = currentDir === "~" 
          ? Object.keys(rootFS) 
          : Object.keys(PROJECTS_FS);
        const prefix = parts.slice(1).join(" ").toLowerCase();
        const matchFile = fileNames.find(f => f.toLowerCase().startsWith(prefix));
        if (matchFile) {
          setInputVal(`${parts[0]} ${matchFile}`);
        }
      } else if (parts[0].toLowerCase() === "cd") {
        const dirs = ["projects", "..", "~"];
        const prefix = parts[1]?.toLowerCase() || "";
        const matchDir = dirs.find(d => d.startsWith(prefix));
        if (matchDir) {
          setInputVal(`cd ${matchDir}`);
        }
      } else if (parts[0].toLowerCase() === "inspect" || parts[0].toLowerCase() === "open") {
        const projIds = perfil.projetos.map(p => p.id);
        const prefix = parts[1]?.toLowerCase() || "";
        const matchId = projIds.find(id => id.startsWith(prefix));
        if (matchId) {
          setInputVal(`${parts[0]} ${matchId}`);
        }
      } else if (parts[0].toLowerCase() === "git") {
        const gitSubs = ["status", "log", "branch"];
        const prefix = parts[1]?.toLowerCase() || "";
        const matchSub = gitSubs.find(s => s.startsWith(prefix));
        if (matchSub) {
          setInputVal(`git ${matchSub}`);
        }
      }
    }
  };

  const quickCommands = [
    "help",
    "ls -la",
    "cat about.md",
    "cat dossie.json",
    "git status",
    "top",
    "docker ps",
    "tree",
    "arch",
    "clear"
  ];

  return (
    <section id="terminal" className="space-y-4 scroll-mt-20">
      <div className="flex items-center justify-between border-b border-zinc-200 dark:border-zinc-800 pb-2">
        <h3 className="text-xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 flex items-center gap-2">
          <span className="text-emerald-600 dark:text-emerald-400 font-mono">03.</span> {TRANSLATIONS[lang].terminalHeader}
        </h3>
        <span className="text-[11px] font-mono text-zinc-500 flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          Linux Shell Virtual
        </span>
      </div>

      <div className="w-full bg-zinc-950 text-zinc-100 border border-zinc-800 rounded-2xl overflow-hidden shadow-2xl font-mono">
        {/* Terminal Titlebar */}
        <div className="px-4 py-2.5 bg-zinc-900/90 border-b border-zinc-800 flex items-center justify-between gap-3 text-xs text-zinc-400">
          <div className="flex items-center gap-2 min-w-0">
            <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
            <span className="ml-2 text-zinc-400 font-mono text-[11px] flex items-center gap-1 truncate">
              <Terminal className="w-3.5 h-3.5 text-emerald-400" /> mario@mariosystems:{currentDir}$
            </span>
          </div>
          {history.length > 0 && (
            <button 
              onClick={() => setHistory([])}
              className="text-zinc-500 hover:text-zinc-300 flex items-center gap-1 text-[11px] transition-colors cursor-pointer"
              title="Clear terminal"
            >
              <Trash2 className="w-3.5 h-3.5" /> clear
            </button>
          )}
        </div>

        {/* Quick Commands Chips */}
        <div className="px-4 py-2 bg-zinc-900/40 border-b border-zinc-800/80 flex flex-wrap items-center gap-1.5 text-xs">
          <span className="text-[11px] text-zinc-500 flex items-center gap-1">
            <Sparkles className="w-3 h-3 text-emerald-400" /> {lang === "pt" ? "Atalhos Rápidos:" : "Quick Commands:"}
          </span>
          {quickCommands.map((cmd) => (
            <button
              key={cmd}
              onClick={() => handleCommand(cmd)}
              className="px-2 py-0.5 rounded bg-zinc-800/80 hover:bg-emerald-950 hover:text-emerald-300 hover:border-emerald-500/40 border border-zinc-700/60 text-zinc-300 text-[11px] transition-all cursor-pointer"
            >
              {cmd}
            </button>
          ))}
        </div>

        {/* Console Body */}
        <div 
          onClick={() => inputRef.current?.focus()}
          ref={consoleBodyRef}
          className="p-4 sm:p-5 max-h-96 min-h-60 overflow-y-auto space-y-4 text-xs cursor-text"
        >
          {/* Welcome Message */}
          <div className="text-zinc-400 space-y-1">
            <p className="text-emerald-400 font-bold">
              MarioSystems Linux Shell [Ubuntu 24.04 LTS / Kernel 6.8.0]
            </p>
            <p className="text-zinc-500 text-[11px]">
              {lang === "pt" 
                ? "Terminal interativo com comandos Linux (ls, cat, cd, pwd, tree, git, top, docker ps, curl, inspect). Pressione TAB para auto-completar." 
                : "Interactive terminal with Linux command emulation (ls, cat, cd, pwd, tree, git, top, docker ps, curl, inspect). Press TAB to auto-complete."}
            </p>
          </div>

          {/* History */}
          {history.map((item, idx) => (
            <div key={idx} className="space-y-1.5 pt-1">
              <div className="flex items-center gap-2 text-zinc-400 text-[11px]">
                <span className="text-emerald-400">mario@mariosystems:{item.dir}$</span>
                <span className="text-zinc-100 font-semibold">{item.command}</span>
                <span className="text-zinc-600 text-[10px] ml-auto">{item.timestamp}</span>
              </div>
              <div className="pl-3 border-l border-zinc-800 py-1">
                {item.output}
              </div>
            </div>
          ))}

          <div ref={terminalBottomRef} />
        </div>

        {/* Input Bar */}
        <div className="px-4 py-2.5 bg-zinc-900/60 border-t border-zinc-800 flex items-center gap-2">
          <span className="terminal-prompt text-emerald-400 font-bold text-xs select-none">mario@mariosystems:{currentDir}$</span>
          <input
            ref={inputRef}
            type="text"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder={lang === "pt" ? "digite 'ls', 'cat about.md', 'tree' ou 'help'..." : "type 'ls', 'cat about.md', 'tree' or 'help'..."}
            className="flex-1 bg-transparent border-none outline-none text-zinc-100 font-mono text-xs placeholder:text-zinc-600"
            autoComplete="off"
            spellCheck="false"
          />
          <button
            onClick={() => handleCommand(inputVal)}
            className="p-1.5 text-zinc-400 hover:text-emerald-400 transition-colors cursor-pointer"
            aria-label="Send command"
          >
            <Send className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </section>
  );
}
