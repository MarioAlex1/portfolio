import { createElement } from "react";
import { Server, Code2, Cpu, Terminal, Shield, Database, Infinity as DevopsIcon, GitBranch, Target, CheckCircle2 } from "lucide-react";

export const MEU_PERFIL = {
  hexNome: "0x4D4152494F",
  nome: "Mário Alex",
  cargo: "Backend Developer",
  localizacao: "Ceará, Brasil",
  sobre: "Desenvolvedor focado em construir APIs robustas, arquitecturas escaláveis e soluções eficientes de backend. Sólido entendimento de infraestrutura e mentalidade Security-by-Design.",
  links: {
    github: "https://github.com/MarioAlex1",
    linkedin: "https://www.linkedin.com/in/m%C3%A1rio-alex-7402732bb/",
    email: "alexxbarbosa662@gmail.com",
    organization: "https://github.com/MarioSystems"
  },
  educacao: "Análise e Desenvolvimento de Sistemas - IFCE",
  orgSobre: "MarioSystems é uma organização pessoal de engenharia de software criada para simular ambientes corporativos reais de alta criticidade, com foco absoluto em padrões arquiteturais complexos, segurança defensiva e automação de infraestrutura.",
  
  // Novas seções baseadas no seu escopo da Organização
  principiosEngenharia: [
    "Clean & Hexagonal Architecture",
    "SOLID Principles & OOP Clean Code",
    "Scalable Backend & Event-Driven Design",
    "Security Best Practices & Hardening",
    "Containerization & Infrastructure isolation",
    "Observability, Automated TDD & Maintainability"
  ],
  objetivosOrg: [
    "Construir sistemas backend baseados em cenários corporativos reais.",
    "Explorar e dominar arquiteturas distribuídas e de alta escalabilidade.",
    "Desenvolver aplicações com mentalidade nativa de Security-by-Design.",
    "Aprimorar fluxos complexos de DevOps, CI/CD e infraestrutura Linux."
  ],

  foco: [
    { titulo: "Backend Core", desc: "APIs RESTful, WebSockets de alta performance e processamento assíncrono.", icone: createElement(Server, { className: "w-5 h-5 text-emerald-400" }) },
    { titulo: "Offensive Security", desc: "Mentalidade security-by-design, criptografia forte e hardening de servidores.", icone: createElement(Shield, { className: "w-5 h-5 text-red-400" }) },
    { titulo: "Infrastructure", desc: "Orquestração com Docker, automação de ambientes e proxy reverso.", icone: createElement(DevopsIcon, { className: "w-5 h-5 text-purple-400" }) }
  ],
  categoriasSkills: [
    {
      titulo: "Backend & Core Engineering",
      competencias: ["NestJS", "Node.js", "Python / Django", "Java", "SOLID & OOP", "TDD (Cypress / Pytest)", "Event-Driven Design"]
    },
    {
      titulo: "Data & Communication",
      competencias: ["PostgreSQL", "Redis Cache", "RabbitMQ", "WebSockets", "Webhooks", "Prisma ORM", "TypeORM"]
    },
    {
      titulo: "DevOps & Infrastructure",
      competencias: ["Docker & Compose", "Nginx Proxy", "Linux CLI", "Bash Scripting", "GitHub Actions", "Virtual Machines", "Observability"]
    }
  ],
  emAprendizado: [
    "Clean Architecture & Hexagonal Architecture (Ports & Adapters)",
    "Complex APIs & Advanced System Design",
    "Linux Systems Security & Infrastructure Hardening",
    "Distributed Systems & Event-Based Communication"
  ],
  projetos: [
    {
      titulo: "Auth Gateway (MarioSystems)",
      descricao: "Gateway de autenticação e autorização de nível empresarial. Implementação estrita de RBAC, Refresh Tokens, rate limiting corporativo e isolamento por guards seguros.",
      tags: ["NestJS", "TypeScript", "PostgreSQL", "Prisma", "Redis", "Docker"],
      status: "Em Progresso",
      github: "https://github.com/MarioSystems",
      features: ["JWT Authentication & Refresh Tokens", "Role-Based Access Control (RBAC)", "Secure Route Guards", "Request Validation & Rate Limiting", "Modular Architecture & Dockerized Environment"]
    },
    {
      titulo: "Notification Platform (MarioSystems)",
      descricao: "Plataforma escalável de notificações multi-canal baseada em mensageria assíncrona. Processamento de filas resiliente com políticas de retry automáticas.",
      tags: ["NestJS", "RabbitMQ", "PostgreSQL", "Redis", "Docker"],
      status: "Em Progresso",
      github: "https://github.com/MarioSystems",
      features: ["Email Notifications & SMS Integration", "Push Notifications", "Automated Retry Mechanisms", "Queue Processing & Worker Services", "Logging, Monitoring & Event-Based Communication"]
    },
    {
      titulo: "AI Security Analyzer (MarioSystems)",
      descricao: "Sistema auxiliado por Inteligência Artificial focado na classificação de ameaças em logs, análise comportamental de logins e score automático de risco em tempo real.",
      tags: ["NestJS", "OpenAI API", "PostgreSQL", "Redis", "Docker"],
      status: "Em Progresso",
      github: "https://github.com/MarioSystems",
      features: ["Threat Classification via OpenAI API", "Login Behavior Analysis", "Risk Scoring & Security Alerts", "AI-Powered Recommendations", "Event Correlation & Audit Logging"]
    },
    {
      titulo: "IAM Security System (MarioSystems)",
      descricao: "Plataforma de gerenciamento de identidades e acessos focada em trilhas de auditoria complexas, monitoramento estrito de requisições e validação de middleware de segurança.",
      tags: ["Django", "DRF", "PostgreSQL", "Redis", "Docker"],
      status: "Em Progresso",
      github: "https://github.com/MarioSystems",
      features: ["Identity and Access Management (IAM)", "Granular Role Management", "Enterprise Audit Trails", "Request Monitoring & Activity Logging", "Middleware Security Validation"]
    },
    {
      titulo: "API - Leite do Futuro",
      descricao: "API complexa desenvolvida para automação, rastreamento e controle operacional no setor agroindustrial com foco em regras de negócio críticas.",
      tags: ["Python", "Django", "Private"],
      status: "Em Progresso",
      github: "Privado",
      features: ["Automação industrial do setor agro", "Controle de cadeia produtiva severo", "Lógica de negócio complexa de backend"]
    },
    {
      titulo: "PersonalSync",
      descricao: "Ecossistema escalável para comunicação e gestão de treinos. Implementação completa de WebSockets para atualizações de treinos e rotinas em tempo real.",
      tags: ["Node.js", "TypeScript", "WebSockets", "Proprietary"],
      status: "Em Progresso",
      github: "Privado",
      features: ["Comunicação em tempo real por WebSockets", "Sincronização de rotinas atleta/trainer", "Gerenciamento de cache resiliente"]
    },
    {
      titulo: "Point do Barbeiro",
      descricao: "API desenvolvida para automatizar reservas e fluxos de trabalho. Configuração de ambiente isolado, pipelines de CI/CD e testes automatizados com Pytest.",
      tags: ["Python", "Django", "Pytest", "CI/CD"],
      status: "Em Progresso",
      github: "https://github.com/MarioAlex1",
      features: ["Automação e agendamento de fluxos", "Pipelines CI/CD estruturadas via Actions", "Testes automatizados completos com Pytest"]
    },
    {
      titulo: "RedCloud",
      descricao: "Aplicativo móvel para rastreamento e catálogo de animes integrado de forma assíncrona à API do MyAnimeList, contendo temas dinâmicos e cache local.",
      tags: ["React Native", "TypeScript", "Firebase"],
      status: "Concluído",
      github: "https://github.com/MarioAlex1/redCloud",
      features: ["Integração restrita com MyAnimeList API", "Gerenciamento de cache e persistência local", "Sincronização com Realtime Database / Firebase"]
    }
  ]
};