import { createElement } from "react";
import { Server, Shield, Infinity as DevopsIcon } from "lucide-react";

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
      features: ["JWT Authentication & Refresh Tokens", "Role-Based Access Control (RBAC)", "Secure Route Guards", "Request Validation & Rate Limiting", "Modular Architecture & Dockerized Environment"],
      imagens: []
    },
    {
      titulo: "Notification Platform (MarioSystems)",
      descricao: "Plataforma escalável de notificações multi-canal baseada em mensageria assíncrona. Processamento de filas resiliente com políticas de retry automáticas.",
      tags: ["NestJS", "RabbitMQ", "PostgreSQL", "Redis", "Docker"],
      status: "Em Progresso",
      github: "https://github.com/MarioSystems",
      features: ["Email Notifications & SMS Integration", "Push Notifications", "Automated Retry Mechanisms", "Queue Processing & Worker Services", "Logging, Monitoring & Event-Based Communication"],
      imagens: []
    },
    {
      titulo: "AI Security Analyzer (MarioSystems)",
      descricao: "Sistema auxiliado por Inteligência Artificial focado na classificação de ameaças em logs, análise comportamental de logins e score automático de risco em tempo real.",
      tags: ["NestJS", "OpenAI API", "PostgreSQL", "Redis", "Docker"],
      status: "Em Progresso",
      github: "https://github.com/MarioSystems",
      features: ["Threat Classification via OpenAI API", "Login Behavior Analysis", "Risk Scoring & Security Alerts", "AI-Powered Recommendations", "Event Correlation & Audit Logging"],
      imagens: []
    },
    {
      titulo: "IAM Security System (MarioSystems)",
      descricao: "Plataforma de gerenciamento de identidades e acessos focada em trilhas de auditoria complexas, monitoramento estrito de requisições e validação de middleware de segurança.",
      tags: ["Django", "DRF", "PostgreSQL", "Redis", "Docker"],
      status: "Em Progresso",
      github: "https://github.com/MarioSystems",
      features: ["Identity and Access Management (IAM)", "Granular Role Management", "Enterprise Audit Trails", "Request Monitoring & Activity Logging", "Middleware Security Validation"],
      imagens: []
    },
    {
      titulo: "API - Leite do Futuro",
      descricao: "API de alta criticidade desenvolvida para o ecossistema do projeto inovador 'Leite do Futuro' (landing page em https://leite-do-futuro-web.vercel.app/). Atuei na concepção e desenvolvimento de uma API backend robusta do zero (em dupla com outro desenvolvedor backend) para migrar a antiga estrutura baseada apenas em frontend e Firebase, fornecendo inteligência para a gestão de qualidade de leite A2A2, rastreabilidade e genotipagem.",
      tags: ["Django", "DRF", "PostgreSQL", "Celery", "Redis", "Docker"],
      status: "Em Progresso",
      github: "Privado",
      features: [
        "Migração arquitetural completa de uma estrutura acoplada (Firebase/frontend) para uma API backend independente construída do zero",
        "Integração contínua com a plataforma e com a landing page existente do projeto",
        "Rastreabilidade completa de dados de produção da cadeia leiteira, desde a ordenha até a distribuição",
        "Módulo de gestão de genotipagem (identificação de propriedades e composição de proteínas/gorduras de leite A2A2)",
        "Desenvolvimento colaborativo de backend (em dupla) com suporte institucional e acadêmico",
        "Arquitetura RESTful documentada via OpenAPI 3 (drf-spectacular) e autenticação JWT via Argon2",
        "Fila de tarefas assíncronas e agendamento de rotinas com Celery & Redis",
        "Visão computacional e OCR (OpenCV & Tesseract) para processamento de rotulagens e dados operacionais",
        "Processamento de dados analíticos com Pandas/Openpyxl e geração de relatórios sob demanda em PDF com ReportLab",
        "Orquestração completa de ambiente multi-container usando Docker e Docker Compose"
      ],
      imagens: []
    },
    {
      titulo: "PersonalSync",
      descricao: "API de alta escalabilidade e aplicativo mobile para gestão de treinos e conexão direta entre personal trainer e aluno. Desenvolvido como Projeto Integrador acadêmico projetado para atender a um cliente real.",
      tags: ["Express", "TypeScript", "TypeORM", "PostgreSQL", "Socket.io", "Vitest"],
      status: "Em Progresso",
      github: "https://github.com/MarioAlex1/fitSync",
      features: [
        "Projeto acadêmico integrador desenvolvido sob medida para um cliente real",
        "Arquitetura REST com Express (Node.js) e validação rigorosa com Zod",
        "Comunicação bidirecional e eventos em tempo real usando Socket.io",
        "Persistência e migrations de banco gerenciadas via TypeORM & PostgreSQL",
        "Segurança integrada com Helmet, Express Rate Limit e criptografia Bcrypt",
        "Monitoramento de falhas e performance em tempo real integrado ao Sentry",
        "Suíte de testes de integração e unitários robusta com Vitest e Supertest",
        "Ambientes isolados de banco de testes orquestrados via Docker Compose"
      ],
      imagens: []
    },
    {
      titulo: "Point do Barbeiro",
      descricao: "API de alta performance desenvolvida para automação de agendamentos, reservas e fluxos de trabalho operacionais para barbearias. Atuação exclusiva no desenvolvimento do backend em parceria com outro desenvolvedor backend, sendo as interfaces visuais (web/mobile) integradas e criadas por outros desenvolvedores da equipe.",
      tags: ["Django", "DRF", "PostgreSQL", "JWT", "Pytest", "CI/CD"],
      status: "Em Progresso",
      github: "https://github.com/MarioAlex1",
      features: [
        "Atuação exclusiva no desenvolvimento da API backend em parceria com outro desenvolvedor backend",
        "Integração de serviços com interfaces (web e mobile) desenvolvidas por outros membros da equipe",
        "Arquitetura Django estruturada em camadas modulares com uso de Services (camada de serviço)",
        "Gestão ágil de projeto utilizando GitHub Projects com metodologia Kanban e ciclos de Sprints",
        "Automatização de pipelines de Integração Contínua (CI/CD) via GitHub Actions",
        "Documentação técnica detalhada de modelagem e requisitos estruturada no Google Docs",
        "Isolamento de dados por barbearia (Multi-tenancy) e controle de acessos (Dono e Barbeiro)",
        "Fluxo de agendamento self-service em 5 passos com persistência imediata e prevenção de double-booking",
        "Validação passwordless baseada no telefone do cliente e integração dinâmica com API do WhatsApp"
      ],
      imagens: [
        "/imagens/projetos/point-barbeiro/dashboard-barber.png",
        "/imagens/projetos/point-barbeiro/dashboard-barber-mobile.png",
        "/imagens/projetos/point-barbeiro/dashboard-scrollado.png",
        "/imagens/projetos/point-barbeiro/passo-1.png",
        "/imagens/projetos/point-barbeiro/passo-2.png",
        "/imagens/projetos/point-barbeiro/passo-3.png",
        "/imagens/projetos/point-barbeiro/passo-3-scrollado.png",
        "/imagens/projetos/point-barbeiro/passo-4.png",
        "/imagens/projetos/point-barbeiro/passo-5.png",
        "/imagens/projetos/point-barbeiro/confirmacao.png",
        "/imagens/projetos/point-barbeiro/logar-admin.png",
        "/imagens/projetos/point-barbeiro/dashboard-admin.png"
      ]
    },
    {
      titulo: "RedCloud",
      descricao: "Aplicativo mobile para catálogo e rastreamento de animes integrado à API do MyAnimeList (Jikan API). Projetado sob uma arquitetura modular por domínio de funcionalidade (Feature-Based Architecture) e interface dinâmica baseada em Material Design 3.",
      tags: ["React Native", "Expo", "TypeScript", "Firebase", "Material Design 3"],
      status: "Concluído",
      github: "https://github.com/MarioAlex1/redCloud",
      features: [
        "Projeto desenvolvido individualmente como portfólio acadêmico",
        "Arquitetura Modular baseada em domínios de funcionalidade (Feature-Based)",
        "Navegação file-based implementada com Expo Router & React Navigation",
        "Autenticação funcional completa usando Firebase Authentication SDK",
        "Integração robusta com API Jikan v4 (MyAnimeList)",
        "Sistema de temas Light/Dark dinâmico baseado em Material Design 3",
        "Persistência local de sessão e configurações usando AsyncStorage",
        "Configuração de builds de desenvolvimento Android via Expo Application Services (EAS)"
      ],
      imagens: []
    }
  ]
};