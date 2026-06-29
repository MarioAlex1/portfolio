import { createElement } from "react";
import { Server, Shield, Infinity as DevopsIcon } from "lucide-react";
import { Perfil } from "@/types/portfolio";

export const MEU_PERFIL_PT: Perfil = {
  hexNome: "0x4D4152494F",
  nome: "Mário Alex",
  cargo: "Desenvolvedor Backend",
  localizacao: "Ceará, Brasil",
  sobre: "Desenvolvedor focado em construir APIs robustas, arquiteturas escaláveis e soluções eficientes de backend. Sólido entendimento de infraestrutura e mentalidade Security-by-Design.",
  links: {
    github: "https://github.com/MarioAlex1",
    linkedin: "https://www.linkedin.com/in/m%C3%A1rio-alex-7402732bb/",
    email: "alexxbarbosa662@gmail.com",
    organization: "https://github.com/MarioSystems"
  },
  educacao: "Análise e Desenvolvimento de Sistemas - IFCE",
  orgSobre: "MarioSystems é uma organização pessoal de engenharia de software criada para simular ambientes corporativos reais de alta criticidade, com foco absoluto em padrões arquiteturais complexos, segurança defensiva e automação de infraestrutura.",
  
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
      titulo: "Backend & Engenharia Core",
      competencias: ["NestJS", "Node.js", "Python / Django", "Java", "SOLID & OOP", "TDD (Cypress / Pytest)", "Event-Driven Design"]
    },
    {
      titulo: "Dados & Comunicação",
      competencias: ["PostgreSQL", "Redis Cache", "RabbitMQ", "WebSockets", "Webhooks", "Prisma ORM", "TypeORM"]
    },
    {
      titulo: "DevOps & Infraestrutura",
      competencias: ["Docker & Compose", "Nginx Proxy", "Linux CLI", "Bash Scripting", "GitHub Actions", "Virtual Machines", "Observabilidade"]
    }
  ],
  emAprendizado: [
    "Arquitetura Limpa (Clean Architecture) & Arquitetura Hexagonal (Ports & Adapters)",
    "APIs Complexas & System Design Avançado",
    "Segurança de Sistemas Linux & Hardening de Infraestrutura",
    "Sistemas Distribuídos & Comunicação Baseada em Eventos"
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
        "Desenvolvimento colaborativo de backend (em dupla) com suporte institutional e acadêmico",
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
      github: "Privado",
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
      github: "Privado",
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

export const MEU_PERFIL_EN: Perfil = {
  hexNome: "0x4D4152494F",
  nome: "Mário Alex",
  cargo: "Backend Developer",
  localizacao: "Ceará, Brazil",
  sobre: "Developer focused on building robust APIs, scalable architectures, and efficient backend solutions. Solid understanding of infrastructure and a Security-by-Design mindset.",
  links: {
    github: "https://github.com/MarioAlex1",
    linkedin: "https://www.linkedin.com/in/m%C3%A1rio-alex-7402732bb/",
    email: "alexxbarbosa662@gmail.com",
    organization: "https://github.com/MarioSystems"
  },
  educacao: "Analysis and Systems Development - IFCE",
  orgSobre: "MarioSystems is a personal software engineering organization created to simulate real-world, high-criticality enterprise environments, with absolute focus on complex architectural patterns, defensive security, and infrastructure automation.",
  
  principiosEngenharia: [
    "Clean & Hexagonal Architecture",
    "SOLID Principles & OOP Clean Code",
    "Scalable Backend & Event-Driven Design",
    "Security Best Practices & Hardening",
    "Containerization & Infrastructure isolation",
    "Observability, Automated TDD & Maintainability"
  ],
  objetivosOrg: [
    "Build backend systems based on real-world corporate scenarios.",
    "Explore and master distributed architectures and high scalability.",
    "Develop applications with a native Security-by-Design mindset.",
    "Refine complex workflows in DevOps, CI/CD, and Linux infrastructure."
  ],

  foco: [
    { titulo: "Backend Core", desc: "RESTful APIs, high-performance WebSockets, and asynchronous processing.", icone: createElement(Server, { className: "w-5 h-5 text-emerald-400" }) },
    { titulo: "Offensive Security", desc: "Security-by-design mindset, strong cryptography, and server hardening.", icone: createElement(Shield, { className: "w-5 h-5 text-red-400" }) },
    { titulo: "Infrastructure", desc: "Orchestration with Docker, environment automation, and reverse proxy.", icone: createElement(DevopsIcon, { className: "w-5 h-5 text-purple-400" }) }
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
      descricao: "Enterprise-grade authentication and authorization gateway. Strict implementation of RBAC, Refresh Tokens, enterprise rate limiting, and isolation via secure guards.",
      tags: ["NestJS", "TypeScript", "PostgreSQL", "Prisma", "Redis", "Docker"],
      status: "In Progress",
      github: "https://github.com/MarioSystems",
      features: ["JWT Authentication & Refresh Tokens", "Role-Based Access Control (RBAC)", "Secure Route Guards", "Request Validation & Rate Limiting", "Modular Architecture & Dockerized Environment"],
      imagens: []
    },
    {
      titulo: "Notification Platform (MarioSystems)",
      descricao: "Scalable multi-channel notification platform based on asynchronous messaging. Resilient queue processing with automated retry policies.",
      tags: ["NestJS", "RabbitMQ", "PostgreSQL", "Redis", "Docker"],
      status: "In Progress",
      github: "https://github.com/MarioSystems",
      features: ["Email Notifications & SMS Integration", "Push Notifications", "Automated Retry Mechanisms", "Queue Processing & Worker Services", "Logging, Monitoring & Event-Based Communication"],
      imagens: []
    },
    {
      titulo: "AI Security Analyzer (MarioSystems)",
      descricao: "AI-assisted system focused on log threat classification, login behavioral analysis, and real-time automated risk scoring.",
      tags: ["NestJS", "OpenAI API", "PostgreSQL", "Redis", "Docker"],
      status: "In Progress",
      github: "https://github.com/MarioSystems",
      features: ["Threat Classification via OpenAI API", "Login Behavior Analysis", "Risk Scoring & Security Alerts", "AI-Powered Recommendations", "Event Correlation & Audit Logging"],
      imagens: []
    },
    {
      titulo: "IAM Security System (MarioSystems)",
      descricao: "Identity and access management platform focused on complex audit trails, strict request monitoring, and security middleware validation.",
      tags: ["Django", "DRF", "PostgreSQL", "Redis", "Docker"],
      status: "In Progress",
      github: "https://github.com/MarioSystems",
      features: ["Identity and Access Management (IAM)", "Granular Role Management", "Enterprise Audit Trails", "Request Monitoring & Activity Logging", "Middleware Security Validation"],
      imagens: []
    },
    {
      titulo: "API - Leite do Futuro",
      descricao: "High-criticality API developed for the innovative ecosystem of the 'Leite do Futuro' project (landing page at https://leite-do-futuro-web.vercel.app/). I worked on the conception and development of a robust backend API from scratch (partnering with another backend developer) to migrate the old architecture based solely on frontend and Firebase, providing intelligence for A2A2 milk quality management, traceability, and genotyping.",
      tags: ["Django", "DRF", "PostgreSQL", "Celery", "Redis", "Docker"],
      status: "In Progress",
      github: "Privado",
      features: [
        "Complete architectural migration from a coupled structure (Firebase/frontend) to an independent backend API built from scratch",
        "Continuous integration with the existing platform and landing page",
        "Full traceability of dairy production chain data, from milking to distribution",
        "Genotyping management module (identification of properties and A2A2 milk protein/fat composition)",
        "Collaborative backend development (partnered) with institutional and academic support",
        "RESTful architecture documented via OpenAPI 3 (drf-spectacular) and JWT authentication with Argon2",
        "Asynchronous task queue and job scheduling with Celery & Redis",
        "Computer vision and OCR (OpenCV & Tesseract) for label processing and operational data",
        "Analytical data processing with Pandas/Openpyxl and on-demand PDF report generation with ReportLab",
        "Full multi-container environment orchestration using Docker and Docker Compose"
      ],
      imagens: []
    },
    {
      titulo: "PersonalSync",
      descricao: "High-scalability API and mobile app for training management and direct trainer-student connection. Developed as an academic Capstone Project designed for a real client.",
      tags: ["Express", "TypeScript", "TypeORM", "PostgreSQL", "Socket.io", "Vitest"],
      status: "In Progress",
      github: "Privado",
      features: [
        "Academic Capstone Project custom-built for a real client",
        "REST Architecture with Express (Node.js) and strict validation with Zod",
        "Bi-directional communication and real-time events using Socket.io",
        "Database persistence and migrations managed via TypeORM & PostgreSQL",
        "Security integrated with Helmet, Express Rate Limit, and Bcrypt encryption",
        "Real-time fault and performance monitoring integrated with Sentry",
        "Robust unit and integration test suite with Vitest and Supertest",
        "Isolated test database environments orchestrated via Docker Compose"
      ],
      imagens: []
    },
    {
      titulo: "Point do Barbeiro",
      descricao: "High-performance API developed for barbershop booking automation, reservations, and operational workflows. Exclusive participation in the backend development in partnership with another backend developer, with visual interfaces (web/mobile) integrated and built by other team developers.",
      tags: ["Django", "DRF", "PostgreSQL", "JWT", "Pytest", "CI/CD"],
      status: "In Progress",
      github: "Privado",
      features: [
        "Exclusive role in the backend API development partnering with another backend developer",
        "Service integration with web and mobile interfaces developed by other team members",
        "Django architecture structured in modular layers utilizing Services",
        "Agile project management using GitHub Projects with Kanban and Sprint cycles",
        "Automation of Continuous Integration pipelines (CI/CD) via GitHub Actions",
        "Detailed technical documentation of modeling and requirements structured in Google Docs",
        "Data isolation per barbershop (Multi-tenancy) and access controls (Owner and Barber)",
        "5-step self-service booking flow with immediate persistence and double-booking prevention",
        "Passwordless validation based on client phone number and dynamic integration with WhatsApp API"
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
      descricao: "Mobile app for cataloging and tracking anime integrated with the MyAnimeList API (Jikan API). Designed under a Domain/Feature-Based Architecture and dynamic UI based on Material Design 3.",
      tags: ["React Native", "Expo", "TypeScript", "Firebase", "Material Design 3"],
      status: "Completed",
      github: "https://github.com/MarioAlex1/redCloud",
      features: [
        "Project developed individually as an academic portfolio",
        "Modular architecture based on domains/features (Feature-Based)",
        "File-based navigation implemented with Expo Router & React Navigation",
        "Full functional authentication using Firebase Authentication SDK",
        "Robust integration with Jikan API v4 (MyAnimeList)",
        "Dynamic Light/Dark theme system based on Material Design 3",
        "Local session and settings persistence using AsyncStorage",
        "Android development builds configuration via Expo Application Services (EAS)"
      ],
      imagens: []
    }
  ]
};