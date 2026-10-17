import { createElement } from "react";
import { Server, Database, Container } from "lucide-react";
import { Perfil } from "@/types/portfolio";

export const MEU_PERFIL_PT: Perfil = {
  hexNome: "0x4D4152494F",
  nome: "Mário Alex",
  cargo: "Desenvolvedor Backend Júnior",
  subtitulo: "Estudante de ADS (IFCE) com experiência prática em projetos colaborativos com Python, Django REST, TypeScript, Node.js, PostgreSQL, Docker e arquitetura Multi-Tenant.",
  disponibilidade: "Disponível para oportunidades Júnior em Backend (Remoto / Híbrido)",
  localizacao: "Ceará, Brasil (Horário de Brasília UTC-3)",
  sobre: "Estudante de Análise e Desenvolvimento de Sistemas pelo IFCE, com experiência prática em projetos colaborativos utilizando Python, Django, Django REST Framework, TypeScript, Node.js e PostgreSQL. Possui contato com desenvolvimento de APIs REST, testes automatizados, migração e integridade de dados, arquitetura multi-tenant (Database-per-Tenant) e ambientes conteinerizados com Docker. Também participa de atividades de investigação técnica em ambientes Linux e de diagnóstico de aplicações. Busca oportunidades júnior em desenvolvimento backend, com interesse em consolidar conhecimentos em bancos de dados, qualidade de código e infraestrutura básica, priorizando soluções confiáveis e aprendizado contínuo.",
  links: {
    github: "https://github.com/MarioAlex1",
    linkedin: "https://www.linkedin.com/in/m%C3%A1rio-alex-7402732bb/",
    email: "alexxbarbosa662@gmail.com",
    organization: "https://github.com/MarioSystems"
  },
  educacao: "Análise e Desenvolvimento de Sistemas — IFCE (Instituto Federal do Ceará)",
  orgSobre: "MarioSystems é meu laboratório pessoal de estudos e prototipagem de engenharia de software, criado para simular cenários arquiteturais, experimentar conceitos de backend (autenticação, microsserviços, mensageria) e exercitar boas práticas de código de forma independente.",
  
  principiosEngenharia: [
    {
      titulo: "SaaS Multi-Tenant & Isolamento de Dados",
      descricao: "Experiência prática na implementação de isolamento físico por barbearia via Database-per-Tenant no PostgreSQL com Django.",
      tag: "Arquitetura"
    },
    {
      titulo: "Modelagem Relacional & Consistência",
      descricao: "Foco na integridade referencial, transações atômicas para prevenção de concorrência e aprofundamento constante em SQL puro.",
      tag: "Bancos de Dados"
    },
    {
      titulo: "APIs RESTful Estruturadas & Camada de Serviços",
      descricao: "Desenvolvimento modular com separação de responsabilidades (Service Layers) para manter a lógica desacoplada.",
      tag: "Backend"
    },
    {
      titulo: "Qualidade de Código & Testes Automatizados",
      descricao: "Prática na criação e execução de testes unitários e de integração com Pytest e Vitest em pipelines de CI/CD.",
      tag: "Qualidade"
    },
    {
      titulo: "Ambientes Reproduzíveis com Docker",
      descricao: "Padronização de ambientes de desenvolvimento e teste através de Docker Compose e noções essenciais de Linux.",
      tag: "DevOps Básico"
    },
    {
      titulo: "Autonomia & Resolução de Problemas",
      descricao: "Compromisso em conduzir problemas desde o requisito até a depuração, entendendo o que acontece por baixo dos frameworks.",
      tag: "Fundamentos"
    }
  ],
  objetivosOrg: [
    "Praticar a criação de funcionalidades completas com autonomia, da modelagem ao teste.",
    "Dominar fundamentos avançados de SQL e PostgreSQL (joins, índices, transações, explain).",
    "Consolidar deploy e operação de aplicações backend com Docker e servidores Linux.",
    "Estudar conceitos de mensageria assíncrona e arquiteturas orientadas a eventos (RabbitMQ)."
  ],

  foco: [
    { 
      titulo: "Backend com Python & Django", 
      desc: "Desenvolvimento de APIs REST com Django REST Framework, Service Layers, testes com Pytest e integração de serviços.", 
      icone: createElement(Server, { className: "w-5 h-5 text-emerald-400" }) 
    },
    { 
      titulo: "PostgreSQL & Multi-Tenancy", 
      desc: "Modelagem relacional, queries SQL, transações atômicas e arquitetura Multi-Tenant com Database-per-Tenant.", 
      icone: createElement(Database, { className: "w-5 h-5 text-purple-400" }) 
    },
    { 
      titulo: "Docker & Ambientes Linux", 
      desc: "Containerização com Docker Compose, configuração de variáveis de ambiente e diagnóstico de serviços.", 
      icone: createElement(Container, { className: "w-5 h-5 text-blue-400" }) 
    }
  ],
  categoriasSkills: [
    {
      titulo: "Backend & Linguagens",
      descricao: "Experiência prática em projetos colaborativos e acadêmicos",
      competencias: ["Python", "Django", "Django REST Framework", "TypeScript", "Node.js", "Express", "NestJS (estudos)", "SOLID & OOP", "Pytest", "Vitest"]
    },
    {
      titulo: "Bancos de Dados & Persistência",
      descricao: "Modelagem relacional, ORMs e foco em aprofundamento SQL",
      competencias: ["PostgreSQL", "SQL (DML, DDL, JOINs)", "Django ORM", "TypeORM", "Prisma ORM", "Redis (Cache)", "Database-per-Tenant"]
    },
    {
      titulo: "DevOps Básico & Ferramentas",
      descricao: "Containerização, automação de testes e controle de versão",
      competencias: ["Docker & Compose", "Linux CLI / Bash", "Git & GitHub", "GitHub Actions (CI)", "Postman / Insomnia", "OpenAPI / Swagger"]
    }
  ],
  emAprendizado: [
    "Aprofundamento em SQL e PostgreSQL puro (modelagem, constraints, transações ACID, locks e explain analyze)",
    "Desenvolvimento com autonomia técnica de ponta a ponta sem dependência de ferramentas de IA",
    "Deploy, publicação e diagnóstico de aplicações backend conteinerizadas com Docker em ambientes reais",
    "Conceitos teóricos de mensageria assíncrona & filas com RabbitMQ e Celery para desacoplamento"
  ],
  projetos: [
    {
      id: "point-barbeiro",
      titulo: "Point do Barbeiro — SaaS Multi-Tenant (Database-per-Tenant)",
      categoria: "production",
      categoriaNome: "Cenários Reais & Produção",
      descricao: "Desenvolvimento de uma arquitetura SaaS multi-tenant corporativa utilizando Python, Django, Django REST Framework e PostgreSQL, implementando isolamento físico de dados por barbearia por meio de bancos de dados independentes (Database-per-Tenant), com banco central para governança, provisionamento automatizado e roteamento dinâmico de queries.",
      desafio: "Garantir isolamento estrito de dados entre barbearias eliminando qualquer risco de vazamento cruzado (cross-tenant data leakage), gerenciando o ciclo de vida de múltiplos bancos independentes no PostgreSQL, automatizando a criação de novas bases no onboarding e roteando consultas ORM dinamicamente em tempo de execução sem degradação de performance.",
      solucaoArquitetural: "Arquitetura SaaS Multi-Tenant com padrão Database-per-Tenant no PostgreSQL. Um banco de dados central gerencia o catálogo, planos e controle das barbearias; um Database Router customizado intercepta as operações do ORM do Django e as direciona dinamicamente ao banco do tenant correspondente com base no contexto da requisição; scripts automatizados cuidam do provisionamento e da execução distribuída de migrations para cada nova barbearia.",
      destaquesTecnicos: [
        "Isolamento Físico de Dados: Separação estrita dos bancos de dados PostgreSQL para cada tenant/barbearia",
        "Gerenciamento Central de Tenants: Banco central para cadastro, controle de licenças e governança das barbearias",
        "Roteamento Dinâmico de Queries: Estrutura customizada de Django Database Router direcionando conexões por requisição",
        "Provisionamento Automatizado: Criação, preparação e execução automatizada de migrations por tenant no onboarding",
        "Camada de Serviços & Atomic Lock: Prevenção de concorrência e double-booking em transações atômicas",
        "Qualidade & CI/CD: Pipeline automatizado no GitHub Actions com testes unitários e de integração via Pytest"
      ],
      tags: ["Django", "DRF", "PostgreSQL", "Multi-Tenant", "Database-per-Tenant", "Multi-Database", "Pytest", "CI/CD", "Docker"],
      status: "Em Progresso",
      github: "Privado",
      metricas: [
        { label: "Arquitetura SaaS", valor: "Database-per-Tenant" },
        { label: "Isolamento de Dados", valor: "Separação Física PostgreSQL" },
        { label: "Roteamento ORM", valor: "Dynamic DB Router" }
      ],
      fluxoArquitetural: [
        { fase: "01. Tenant Ingress", componente: "Tenant Identification Middleware", descricao: "Extrai o identificador do tenant (subdomínio ou header) da requisição e valida a assinatura." },
        { fase: "02. Central Catalog DB", componente: "Central Control Database", descricao: "Consulta o banco central para validar o status da barbearia e resolver metadados da conexão." },
        { fase: "03. Dynamic Routing", componente: "Django Database Router", descricao: "Direciona dinamicamente as operações de leitura e escrita do ORM para o banco isolado do tenant." },
        { fase: "04. Isolated Tenant DB", componente: "PostgreSQL (Database-per-Tenant)", descricao: "Executa as transações de agendamentos, clientes e finanças com isolamento físico absoluto." },
        { fase: "05. Auto-Provisioning", componente: "Tenant Provisioner & Migration Runner", descricao: "Provisiona novas bases de dados PostgreSQL e aplica migrations versionadas de forma automatizada." }
      ],
      features: [
        "Arquitetura SaaS Multi-Tenant com isolamento de dados Database-per-Tenant",
        "Separação física completa dos bancos de dados PostgreSQL de cada barbearia",
        "Banco de dados central para governança, cadastro e gerenciamento das barbearias",
        "Roteamento dinâmico de conexões direcionando consultas ao banco correspondente",
        "Provisionamento e preparação automatizada de bancos de dados para novos tenants",
        "Estrutura distribuída para migração de dados e versionamento de schemas",
        "Camada de serviço modular desacoplada com transações atômicas contra double-booking",
        "Integração dinâmica com API do WhatsApp para notificações e confirmações",
        "Pipeline de CI/CD automatizado no GitHub Actions com suite de testes no Pytest"
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
      id: "leite-do-futuro-api",
      titulo: "API — Leite do Futuro",
      categoria: "production",
      categoriaNome: "Cenários Reais & Produção",
      descricao: "API backend desenvolvida em dupla com outro desenvolvedor para o ecossistema 'Leite do Futuro'. Participação na migração da estrutura legada acoplada a Firebase para uma API RESTful independente em Django REST Framework, integrando persistência no PostgreSQL, processamento assíncrono com Celery e geração de laudos técnicos.",
      desafio: "Desacoplar as regras de negócio de um frontend legado baseado em Firebase, estruturando modelos relacionais no PostgreSQL para rastreabilidade de leite A2A2 e configurando tarefas assíncronas para operações mais pesadas.",
      solucaoArquitetural: "Django REST Framework estruturado em camadas de serviço, documentação via OpenAPI 3 (Swagger), integração com PostgreSQL e delegação assíncrona de rotinas analíticas e OCR via Celery e Redis.",
      destaquesTecnicos: [
        "Participação direta na migração de solução legada (Firebase) para API Django RESTful",
        "Modelagem relacional de dados em PostgreSQL para rastreabilidade da produção leiteira",
        "Uso de Celery e Redis para execução em background de processamento de dados e PDFs",
        "Documentação técnica padronizada com especificação OpenAPI 3 (drf-spectacular)",
        "Ambiente conteinerizado para desenvolvimento e homologação com Docker Compose"
      ],
      tags: ["Django", "DRF", "PostgreSQL", "Celery", "Redis", "Docker", "Python"],
      status: "Em Progresso",
      github: "Privado",
      demoUrl: "https://leite-do-futuro-web.vercel.app/",
      metricas: [
        { label: "Arquitetura", valor: "Django REST Framework" },
        { label: "Documentação", valor: "OpenAPI 3 / Swagger" },
        { label: "Processamento Assíncrono", valor: "Celery Task Queue" }
      ],
      fluxoArquitetural: [
        { fase: "01. Ingress", componente: "Landing & Web Platform", descricao: "Recepção de requisições autenticadas da aplicação web institucional." },
        { fase: "02. Core Business", componente: "Django REST Framework", descricao: "Execução das regras de negócio de qualidade e rastreabilidade zootécnica." },
        { fase: "03. Task Delegation", componente: "Celery & Redis Worker", descricao: "Delegação assíncrona de rotinas que demandam processamento adicional." },
        { fase: "04. Persistence", componente: "PostgreSQL Database", descricao: "Armazenamento relacional com integridade referencial de fazendas, tanques e coletas." },
        { fase: "05. Reporting", componente: "ReportLab Engine", descricao: "Geração sob demanda de relatórios e laudos analíticos em formato PDF." }
      ],
      features: [
        "Migração arquitetural de frontend acoplado a Firebase para API independente Django REST",
        "Integração contínua com a landing page oficial (https://leite-do-futuro-web.vercel.app/)",
        "Rastreabilidade de dados de ordenha, lotes e distribuição na cadeia de suprimentos",
        "Estruturação de tarefas em background com Celery e Redis",
        "Modelagem relacional estruturada no banco de dados PostgreSQL",
        "Ambiente orquestrado com Docker Compose para padronização de desenvolvimento"
      ],
      imagens: []
    },
    {
      id: "personal-sync",
      titulo: "PersonalSync",
      categoria: "production",
      categoriaNome: "Cenários Reais & Produção",
      descricao: "API e aplicativo mobile para gestão de treinos e conexão direta entre personal trainer e aluno. Desenvolvido como Projeto Integrador acadêmico projetado sob demanda para atender a um cliente real.",
      desafio: "Garantir sincronização em tempo real das séries e treinos entre personal trainer e aluno com validação estrita de tipos e estrutura relacional de dados.",
      solucaoArquitetural: "Servidor Node.js com Express e Socket.io para comunicação de eventos em tempo real, validação estrutural com Zod, persistência gerenciada pelo TypeORM em PostgreSQL e testes automatizados com Vitest.",
      destaquesTecnicos: [
        "Comunicação bidirecional e eventos em tempo real usando Socket.io",
        "Validação de esquema estrita ponta a ponta com TypeScript e Zod",
        "Integração de telemetria e captura de falhas com Sentry",
        "Suíte de testes unitários e de integração com Vitest e Supertest",
        "Ambientes isolados de banco de testes orquestrados com Docker Compose"
      ],
      tags: ["Express", "TypeScript", "TypeORM", "PostgreSQL", "Socket.io", "Vitest", "Docker"],
      status: "Em Progresso",
      github: "Privado",
      metricas: [
        { label: "Tempo Real", valor: "Socket.io Events" },
        { label: "Validação", valor: "Zod Schema Typing" },
        { label: "Testes", valor: "Vitest + Supertest" }
      ],
      fluxoArquitetural: [
        { fase: "01. Auth / Handshake", componente: "Mobile / Web App", descricao: "Handshake inicial seguro validando credenciais JWT via HTTP e WebSocket." },
        { fase: "02. Input Validation", componente: "Zod Schema Parser", descricao: "Validação minuciosa de cargas, repetições e tipos de dados antes do processamento." },
        { fase: "03. Realtime Broadcast", componente: "Socket.io Rooms", descricao: "Disparo do evento de conclusão de série para a tela do treinador." },
        { fase: "04. Persistence Layer", componente: "TypeORM & PostgreSQL", descricao: "Persistência relacional com migrations versionadas no PostgreSQL." },
        { fase: "05. Error Tracking", componente: "Sentry Monitor", descricao: "Captura de exceções e monitoramento de falhas em tempo real." }
      ],
      features: [
        "Projeto integrador acadêmico projetado para atender a um cliente real",
        "Arquitetura REST com Express (Node.js) e validação de esquemas com Zod",
        "Comunicação bidirecional e eventos em tempo real usando Socket.io",
        "Persistência e migrations de banco gerenciadas via TypeORM & PostgreSQL",
        "Segurança integrada com Helmet, Express Rate Limit e Bcrypt",
        "Suíte de testes de integração e unitários com Vitest e Supertest"
      ],
      imagens: []
    },
    {
      id: "auth-gateway",
      titulo: "Auth Gateway (MarioSystems Lab)",
      categoria: "mariosystems",
      categoriaNome: "Estudo Arquitetural (Lab)",
      descricao: "Projeto de laboratório pessoal explorando padrões de autenticação e autorização corporativa. Implementação de RBAC, Refresh Token Rotation, rate limiting com Redis e isolamento por Guards no NestJS.",
      desafio: "Praticar conceitos de segurança e autorização de APIs, investigando estratégias de mitigação contra brute-force e gerenciamento de sessões com cache.",
      solucaoArquitetural: "Arquitetura modular em NestJS isolando o ciclo de autenticação com JWT e Refresh Tokens em Redis, praticando guards declarativos para validação de papéis de acesso (RBAC).",
      destaquesTecnicos: [
        "Estudo de estratégias de Refresh Token Rotation com invalidação em Redis",
        "Criação de Guards customizados do NestJS para validação de permissões RBAC",
        "Validação estrita de contratos de payload via class-validator e DTOs",
        "Ambiente conteinerizado com Docker Compose e PostgreSQL + Prisma"
      ],
      tags: ["NestJS", "TypeScript", "PostgreSQL", "Prisma", "Redis", "Docker"],
      status: "Em Progresso",
      github: "https://github.com/MarioSystems",
      metricas: [
        { label: "Framework", valor: "NestJS Modular" },
        { label: "Controle de Acesso", valor: "RBAC Guards" },
        { label: "Sessão / Cache", valor: "Redis Token Store" }
      ],
      fluxoArquitetural: [
        { fase: "01. Ingress", componente: "Client Request", descricao: "Recebimento da requisição HTTP com credenciais no payload." },
        { fase: "02. Rate Limit", componente: "Redis Throttler", descricao: "Mitigação básica de força bruta controlando chamadas por IP." },
        { fase: "03. Auth Guard", componente: "NestJS Guard / JWT", descricao: "Validação do token de acesso e extração do payload de usuário." },
        { fase: "04. Session Cache", componente: "Redis Session Check", descricao: "Checagem de revogação de tokens e controle de sessão ativa." },
        { fase: "05. RBAC Authority", componente: "Role Guard", descricao: "Verificação declarativa dos privilégios do usuário para a rota." }
      ],
      features: [
        "Autenticação JWT com estratégia de Refresh Tokens",
        "Role-Based Access Control (RBAC) com guards modulares",
        "Rate limiting preventivo baseado em Redis",
        "Validação de contratos de payload com DTOs",
        "Ambiente conteinerizado via Docker Compose"
      ],
      imagens: []
    },
    {
      id: "notification-platform",
      titulo: "Notification Platform (MarioSystems Lab)",
      categoria: "mariosystems",
      categoriaNome: "Estudo Arquitetural (Lab)",
      descricao: "Projeto de estudo e prototipagem arquitetural focado nos conceitos teóricos de mensageria orientada a eventos. Exploração conceitual de tópicos de filas com RabbitMQ, retentativas automáticas e Dead-Letter Queues para desacoplamento de serviços.",
      desafio: "Compreender os conceitos e a mecânica teórica de processamento assíncrono de notificações via filas, explorando como evitar gargalos de I/O e perda de mensagens em cenários de alta concorrência.",
      solucaoArquitetural: "Estudo de padrão Event-Driven com RabbitMQ desacoplando produtores de mensagens de workers consumidores em NestJS, analisando estratégias de retry com backoff e Dead-Letter Queues (DLQ).",
      destaquesTecnicos: [
        "Compreensão conceitual de mensageria AMQP (Exchanges, Queues e Bindings)",
        "Estudo de padrões de tolerância a falhas com Dead-Letter Exchange (DLX)",
        "Idempotência de mensagens com auxílio de chave única no Redis",
        "Ambiente local de testes com RabbitMQ e Docker Compose"
      ],
      tags: ["NestJS", "RabbitMQ", "PostgreSQL", "Redis", "Docker", "Mensageria (Estudo)"],
      status: "Em Progresso",
      github: "https://github.com/MarioSystems",
      metricas: [
        { label: "Foco", valor: "Estudo de Conceito" },
        { label: "Protocolo Estudado", valor: "AMQP 0-9-1" },
        { label: "Resiliência Teórica", valor: "DLQ / Retries" }
      ],
      fluxoArquitetural: [
        { fase: "01. Producer", componente: "Notification API", descricao: "Recebe solicitação de notificação e valida payload de entrada." },
        { fase: "02. Message Broker", componente: "RabbitMQ Topic Exchange", descricao: "Roteia a mensagem conceitualmente para a fila do canal específico." },
        { fase: "03. Idempotency Check", componente: "Redis Cache Key", descricao: "Verifica chave única para evitar processamento duplicado." },
        { fase: "04. Worker Consumer", componente: "NestJS Consumer Worker", descricao: "Consome a mensagem da fila de forma desacoplada." },
        { fase: "05. Resiliency Fallback", componente: "Dead-Letter Queue (DLQ)", descricao: "Encaminha falhas persistentes para fila de inspeção técnica." }
      ],
      features: [
        "Estudo conceitual de arquitetura orientada a eventos com mensageria",
        "Estruturação de tópicos e canais com RabbitMQ",
        "Mecanismos de retry e análise de falhas com Dead-Letter Queues",
        "Ambiente de experimentação local com Docker Compose"
      ],
      imagens: []
    },
    {
      id: "iam-security-system",
      titulo: "IAM Security System (MarioSystems Lab)",
      categoria: "mariosystems",
      categoriaNome: "Estudo Arquitetural (Lab)",
      descricao: "Projeto de laboratório pessoal explorando gerenciamento de identidades, controle de acessos em Django REST Framework e registro de trilhas de auditoria para operações sensíveis.",
      desafio: "Praticar regras de governança e permissões granulares em Django, investigando como registrar o histórico de modificações de dados de forma confiável.",
      solucaoArquitetural: "Django REST Framework com Signals e Middleware customizado gravando o histórico de alterações (diffs de dados) no PostgreSQL para rastreabilidade de acessos.",
      destaquesTecnicos: [
        "Registro de trilha de auditoria atrelado a transações no PostgreSQL",
        "Prática de permissões granulares de acesso no Django REST Framework",
        "Inspeção de requisições autenticadas via Middleware customizado",
        "Ambiente conteinerizado com Docker Compose"
      ],
      tags: ["Django", "DRF", "PostgreSQL", "Redis", "Docker", "IAM"],
      status: "Em Progresso",
      github: "https://github.com/MarioSystems",
      metricas: [
        { label: "Controle de Acesso", valor: "RBAC Granular" },
        { label: "Auditoria", valor: "Logs de Diffs em DB" },
        { label: "Backend", valor: "Django REST Framework" }
      ],
      fluxoArquitetural: [
        { fase: "01. Request Guard", componente: "IAM Middleware", descricao: "Intercepta chamadas autenticadas e valida headers de requisição." },
        { fase: "02. Identity Check", componente: "JWT Validation Layer", descricao: "Confirma a validade do token de acesso do usuário." },
        { fase: "03. Policy Check", componente: "Permission Evaluator", descricao: "Compara ação requerida com a matriz de privilégios configurada." },
        { fase: "04. Audit Record", componente: "Audit Signal Dispatcher", descricao: "Registra estado prévio e novo da entidade em tabela de histórico." },
        { fase: "05. Response", componente: "Audited Entity Response", descricao: "Retorna a resposta com identificador para rastreabilidade." }
      ],
      features: [
        "Gerenciamento de Identidade e Acesso (IAM) corporativo",
        "Definição de papéis e permissões granulares",
        "Trilha de auditoria registrando histórico de modificações",
        "Monitoramento básico de logs de atividade"
      ],
      imagens: []
    },
    {
      id: "redcloud",
      titulo: "RedCloud",
      categoria: "mobile",
      categoriaNome: "Mobile & Fullstack",
      descricao: "Aplicativo mobile para catálogo e rastreamento de animes integrado à API pública do MyAnimeList (Jikan API v4). Desenvolvido sob arquitetura modular por domínio de funcionalidade (Feature-Based Architecture) e interface dinâmica baseada em Material Design 3.",
      desafio: "Construir uma interface fluida com consumo resiliente de API pública com restrições severas de rate limiting e suporte a cache offline.",
      solucaoArquitetural: "Arquitetura Feature-Based em React Native com Expo Router, autenticação Firebase, cache local persistente em AsyncStorage e controle de requisições.",
      destaquesTecnicos: [
        "Arquitetura modular baseada em domínios de funcionalidade (Feature-Based)",
        "Navegação moderna baseada em arquivos via Expo Router",
        "Design System adaptativo com suporte dinâmico a temas Light/Dark",
        "Persistência local de preferências e sessão de usuário com AsyncStorage"
      ],
      tags: ["React Native", "Expo", "TypeScript", "Firebase", "Material Design 3"],
      status: "Concluído",
      github: "https://github.com/MarioAlex1/redCloud",
      metricas: [
        { label: "Arquitetura", valor: "Feature-Based Domain" },
        { label: "Navegação", valor: "Expo Router (File-Based)" },
        { label: "Design System", valor: "Material Design 3" }
      ],
      fluxoArquitetural: [
        { fase: "01. User Interface", componente: "React Native / Expo UI", descricao: "Renderização nativa de componentes estilizados com Material Design 3." },
        { fase: "02. Feature Domain", componente: "Feature Domain Controllers", descricao: "Camada isolada de negócios para autenticação, catálogo e tracking." },
        { fase: "03. API Client", componente: "Jikan API v4 Client", descricao: "Consumo de dados com controle de chamadas para evitar bloqueios de taxa." },
        { fase: "04. Cache & Storage", componente: "AsyncStorage Engine", descricao: "Armazenamento local em disco de preferências para acesso rápido." }
      ],
      features: [
        "Projeto desenvolvido individualmente como portfólio de engenharia de software",
        "Arquitetura Modular baseada em domínios de funcionalidade (Feature-Based)",
        "Navegação file-based implementada com Expo Router e React Navigation",
        "Autenticação funcional completa usando Firebase Authentication SDK",
        "Integração com API Jikan v4 (MyAnimeList)",
        "Sistema de temas Light/Dark dinâmico baseado em Material Design 3",
        "Persistência local de sessão e configurações usando AsyncStorage"
      ],
      imagens: []
    }
  ]
};

export const MEU_PERFIL_EN: Perfil = {
  hexNome: "0x4D4152494F",
  nome: "Mário Alex",
  cargo: "Junior Backend Developer",
  subtitulo: "Systems Analysis and Development student (IFCE) with hands-on collaborative project experience in Python, Django REST, TypeScript, Node.js, PostgreSQL, Docker, and Multi-Tenant architecture.",
  disponibilidade: "Open to Junior Backend Developer Opportunities (Remote / Hybrid)",
  localizacao: "Ceará, Brazil (Brasília Time UTC-3)",
  sobre: "Systems Analysis and Development student at IFCE with practical collaborative project experience utilizing Python, Django, Django REST Framework, TypeScript, Node.js, and PostgreSQL. Experienced with RESTful API development, automated testing, data integrity and migration, multi-tenant architectures (Database-per-Tenant), and containerized environments with Docker. Also engaged in technical diagnostics and investigation on Linux systems. Seeking junior backend opportunities, prioritizing solid computer science fundamentals, code quality, and continuous learning.",
  links: {
    github: "https://github.com/MarioAlex1",
    linkedin: "https://www.linkedin.com/in/m%C3%A1rio-alex-7402732bb/",
    email: "alexxbarbosa662@gmail.com",
    organization: "https://github.com/MarioSystems"
  },
  educacao: "Analysis and Systems Development — IFCE (Federal Institute of Ceará)",
  orgSobre: "MarioSystems is my personal software engineering study and prototyping lab, created to simulate architectural patterns, experiment with backend concepts (authentication, microservices, messaging), and build clean code habits independently.",
  
  principiosEngenharia: [
    {
      titulo: "Multi-Tenant SaaS & Data Isolation",
      descricao: "Practical experience implementing physical data isolation per barbershop via Database-per-Tenant in PostgreSQL with Django.",
      tag: "Architecture"
    },
    {
      titulo: "Relational Modeling & Consistency",
      descricao: "Focus on referential integrity, atomic transactions to prevent race conditions, and continuous deepening of raw SQL fundamentals.",
      tag: "Databases"
    },
    {
      titulo: "Structured REST APIs & Service Layers",
      descricao: "Modular development with separation of concerns (Service Layers) to keep business logic clean and decoupled.",
      tag: "Backend"
    },
    {
      titulo: "Code Quality & Automated Testing",
      descricao: "Practical experience building unit and integration test suites with Pytest and Vitest integrated into CI/CD pipelines.",
      tag: "Quality"
    },
    {
      titulo: "Reproducible Environments with Docker",
      descricao: "Standardizing development and test environments using Docker Compose and essential Linux command-line skills.",
      tag: "DevOps Basics"
    },
    {
      titulo: "Autonomy & Problem Solving",
      descricao: "Commitment to owning problems from requirement to debugging, understanding the underlying mechanics beneath frameworks.",
      tag: "Fundamentals"
    }
  ],
  objetivosOrg: [
    "Practice building end-to-end features with increasing autonomy, from modeling to testing.",
    "Master advanced SQL and PostgreSQL fundamentals (joins, indexes, transactions, explain plans).",
    "Consolidate deploy and operation of backend applications using Docker and Linux servers.",
    "Study asynchronous messaging concepts and event-driven architectures (RabbitMQ)."
  ],

  foco: [
    { 
      titulo: "Backend with Python & Django", 
      desc: "Developing RESTful APIs with Django REST Framework, Service Layers, Pytest testing, and third-party integrations.", 
      icone: createElement(Server, { className: "w-5 h-5 text-emerald-400" }) 
    },
    { 
      titulo: "PostgreSQL & Multi-Tenancy", 
      desc: "Relational data modeling, SQL queries, atomic transactions, and Database-per-Tenant SaaS architecture.", 
      icone: createElement(Database, { className: "w-5 h-5 text-purple-400" }) 
    },
    { 
      titulo: "Docker & Linux Environments", 
      desc: "Containerization with Docker Compose, environment variable security, and basic service diagnostics.", 
      icone: createElement(Container, { className: "w-5 h-5 text-blue-400" }) 
    }
  ],
  categoriasSkills: [
    {
      titulo: "Backend & Languages",
      descricao: "Practical collaborative and academic project experience",
      competencias: ["Python", "Django", "Django REST Framework", "TypeScript", "Node.js", "Express", "NestJS (studies)", "SOLID & OOP", "Pytest", "Vitest"]
    },
    {
      titulo: "Databases & Persistence",
      descricao: "Relational modeling, ORMs, and ongoing focus on raw SQL mastery",
      competencias: ["PostgreSQL", "SQL (DML, DDL, JOINs)", "Django ORM", "TypeORM", "Prisma ORM", "Redis (Cache)", "Database-per-Tenant"]
    },
    {
      titulo: "Basic DevOps & Tooling",
      descricao: "Containerization, automated test pipelines, and version control",
      competencias: ["Docker & Compose", "Linux CLI / Bash", "Git & GitHub", "GitHub Actions (CI)", "Postman / Insomnia", "OpenAPI / Swagger"]
    }
  ],
  emAprendizado: [
    "Deepening raw SQL & PostgreSQL fundamentals (modeling, constraints, ACID transactions, locks, explain analyze)",
    "Developing technical autonomy from problem requirement to verification without relying on AI",
    "End-to-end deploy, publication, and diagnostics of containerized backend applications with Docker",
    "Theoretical concepts of asynchronous messaging & queue patterns with RabbitMQ and Celery"
  ],
  projetos: [
    {
      id: "point-barbeiro",
      titulo: "Point do Barbeiro — Multi-Tenant SaaS (Database-per-Tenant)",
      categoria: "production",
      categoriaNome: "Real-World & Production",
      descricao: "Enterprise multi-tenant SaaS architecture built with Python, Django, Django REST Framework, and PostgreSQL, enforcing physical data isolation per barbershop through independent databases (Database-per-Tenant), featuring a central governance database, automated tenant provisioning, and dynamic ORM query routing.",
      desafio: "Ensure strict physical data isolation across barbershops with zero cross-tenant contamination risk, managing the lifecycle of independent PostgreSQL databases, automating schema provisioning on tenant onboarding, and dynamically routing ORM queries at runtime without latency overhead.",
      solucaoArquitetural: "Multi-Tenant SaaS architecture implementing the Database-per-Tenant pattern in PostgreSQL. A central control database manages tenant catalog and status; a custom Django Database Router dynamically directs ORM read/write operations to the resolved tenant database based on request context; automated provisioning pipelines handle database creation and schema migrations across all tenant databases.",
      destaquesTecnicos: [
        "Physical Data Isolation: Strict separation of PostgreSQL databases for each individual tenant",
        "Central Tenant Management: Central catalog database for barbershop registration, subscription control, and governance",
        "Dynamic Query Routing: Custom Django Database Router directing ORM connections based on request tenant context",
        "Automated Provisioning: Automated database initialization and migration execution pipeline on tenant onboarding",
        "Service Layer & Atomic Locking: Concurrency prevention against double-booking using atomic database locks",
        "Quality & CI/CD: Automated GitHub Actions pipeline executing unit and integration tests via Pytest"
      ],
      tags: ["Django", "DRF", "PostgreSQL", "Multi-Tenant", "Database-per-Tenant", "Multi-Database", "Pytest", "CI/CD", "Docker"],
      status: "In Progress",
      github: "Privado",
      metricas: [
        { label: "Multi-Tenant Pattern", valor: "Database-per-Tenant" },
        { label: "Data Isolation", valor: "Physical PostgreSQL Separation" },
        { label: "ORM Routing", valor: "Dynamic DB Router" }
      ],
      fluxoArquitetural: [
        { fase: "01. Tenant Ingress", componente: "Tenant Identification Middleware", descricao: "Extracts tenant identifier (subdomain or header) from request and validates security context." },
        { fase: "02. Central Catalog DB", componente: "Central Control Database", descricao: "Queries the central database to verify tenant status and resolve connection credentials." },
        { fase: "03. Dynamic Routing", componente: "Django Database Router", descricao: "Dynamically routes ORM read/write operations to the resolved tenant-isolated database." },
        { fase: "04. Isolated Tenant DB", componente: "PostgreSQL (Database-per-Tenant)", descricao: "Executes booking, customer, and financial transactions within absolute physical isolation." },
        { fase: "05. Auto-Provisioning", componente: "Tenant Provisioner & Migration Runner", descricao: "Automatically provisions new PostgreSQL database instances and executes versioned schema migrations." }
      ],
      features: [
        "Multi-Tenant SaaS architecture with Database-per-Tenant physical isolation",
        "Complete physical separation of PostgreSQL databases per barbershop",
        "Central database for tenant governance, subscriptions, and management",
        "Dynamic database connection routing directing ORM queries per request",
        "Automated database creation, preparation, and schema migrations on onboarding",
        "Distributed data migration framework and schema versioning",
        "Modular Service Layer with atomic database transactions preventing double-booking",
        "Dynamic WhatsApp API integration for automated schedule confirmation notifications",
        "Automated CI/CD pipeline in GitHub Actions with Pytest integration test suite"
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
      id: "leite-do-futuro-api",
      titulo: "API — Leite do Futuro",
      categoria: "production",
      categoriaNome: "Real-World & Production",
      descricao: "Backend API developed in partnership with another backend engineer for the 'Leite do Futuro' ecosystem. Contributed to migrating the legacy frontend-coupled Firebase architecture into an independent RESTful API with Django REST Framework, integrating PostgreSQL persistence, Celery background tasks, and PDF report compilation.",
      desafio: "Decouple business rules from a legacy Firebase-coupled frontend, designing relational models in PostgreSQL for A2A2 milk traceability and configuring background jobs for heavier routines.",
      solucaoArquitetural: "Django REST Framework structured with Service Layers, documented via OpenAPI 3 (Swagger), integrated with PostgreSQL and background processing delegation via Celery and Redis.",
      destaquesTecnicos: [
        "Direct participation in migrating legacy solution (Firebase) to Django REST API",
        "Relational data modeling in PostgreSQL for dairy supply chain traceability",
        "Using Celery and Redis for background execution of data and PDF tasks",
        "Standardized technical documentation with OpenAPI 3 (drf-spectacular)",
        "Containerized environment for development and staging using Docker Compose"
      ],
      tags: ["Django", "DRF", "PostgreSQL", "Celery", "Redis", "Docker", "Python"],
      status: "In Progress",
      github: "Privado",
      demoUrl: "https://leite-do-futuro-web.vercel.app/",
      metricas: [
        { label: "Architecture", valor: "Django REST Framework" },
        { label: "Documentation", valor: "OpenAPI 3 / Swagger" },
        { label: "Async Tasks", valor: "Celery Task Queue" }
      ],
      fluxoArquitetural: [
        { fase: "01. Ingress", componente: "Landing & Web Platform", descricao: "Receives authenticated requests from the official web client platform." },
        { fase: "02. Core Business", componente: "Django REST Framework", descricao: "Executes business logic for milk quality, pedigree, and traceability." },
        { fase: "03. Task Delegation", componente: "Celery & Redis Worker", descricao: "Asynchronously delegates long-running analytical and report generation tasks." },
        { fase: "04. Persistence", componente: "PostgreSQL Database", descricao: "Stores relational data with referential integrity across farms, tanks, and collections." },
        { fase: "05. Reporting", componente: "ReportLab Engine", descricao: "Compiles on-demand analytical certificates and quality reports in PDF format." }
      ],
      features: [
        "Complete architectural migration from legacy Firebase setup to an independent Django REST API",
        "Continuous integration with the official landing page (https://leite-do-futuro-web.vercel.app/)",
        "Dairy supply chain data traceability from milking to distribution",
        "Background task processing with Celery and Redis",
        "Structured relational data modeling in PostgreSQL database",
        "Full containerization with Docker Compose for local development"
      ],
      imagens: []
    },
    {
      id: "personal-sync",
      titulo: "PersonalSync",
      categoria: "production",
      categoriaNome: "Real-World & Production",
      descricao: "API and mobile application for workout management and trainer-student connection. Developed as an academic Capstone Project designed to serve an actual business client.",
      desafio: "Ensure real-time sync of workout sets and progressions between trainer and student with strict type validation and relational data integrity.",
      solucaoArquitetural: "Node.js server with Express and Socket.io for bidirectional real-time events, runtime validation with Zod, TypeORM migrations on PostgreSQL, and Vitest test coverage.",
      destaquesTecnicos: [
        "Bidirectional real-time event communication powered by Socket.io",
        "End-to-end runtime type safety with TypeScript and Zod",
        "Live exception tracking and telemetry integration with Sentry",
        "Unit and integration test suite with Vitest and Supertest",
        "Isolated test database environments orchestrated via Docker Compose"
      ],
      tags: ["Express", "TypeScript", "TypeORM", "PostgreSQL", "Socket.io", "Vitest", "Docker"],
      status: "In Progress",
      github: "Privado",
      metricas: [
        { label: "Realtime", valor: "Socket.io Events" },
        { label: "Validation", valor: "Zod Schema Typing" },
        { label: "Testing", valor: "Vitest + Supertest" }
      ],
      fluxoArquitetural: [
        { fase: "01. Auth / Handshake", componente: "Mobile / Web App", descricao: "Executes secure JWT handshake across HTTP and WebSocket channels." },
        { fase: "02. Input Validation", componente: "Zod Schema Parser", descricao: "Strictly validates workout sets, weights, and repetitions prior to processing." },
        { fase: "03. Realtime Broadcast", componente: "Socket.io Rooms", descricao: "Broadcasts set completion events to the trainer's live viewport." },
        { fase: "04. Persistence Layer", componente: "TypeORM & PostgreSQL", descricao: "Persists records transactionally with versioned schema migrations." },
        { fase: "05. Error Tracking", componente: "Sentry Monitor", descricao: "Captures exceptions and monitors errors in real time." }
      ],
      features: [
        "Academic capstone project custom-built to serve an actual client",
        "REST API architecture with Express (Node.js) and runtime Zod validation",
        "Bidirectional real-time event engine using Socket.io",
        "Database persistence and schema migrations managed via TypeORM & PostgreSQL",
        "Security hardening with Helmet, Express Rate Limit, and Bcrypt",
        "Robust unit and integration test suite with Vitest and Supertest"
      ],
      imagens: []
    },
    {
      id: "auth-gateway",
      titulo: "Auth Gateway (MarioSystems Lab)",
      categoria: "mariosystems",
      categoriaNome: "Architectural Study (Lab)",
      descricao: "Personal engineering study project exploring corporate authentication and authorization patterns. Implementation of RBAC, Refresh Token Rotation, Redis rate limiting, and NestJS guards.",
      desafio: "Practice API security concepts, investigating brute-force mitigation techniques and token session management with caching.",
      solucaoArquitetural: "Modular architecture in NestJS isolating auth flows with JWT and Refresh Tokens in Redis, practicing declarative guards for role-based access control (RBAC).",
      destaquesTecnicos: [
        "Studying Refresh Token Rotation strategies with Redis invalidation",
        "Building custom NestJS Guards for RBAC permission checks",
        "Enforcing payload validation contracts via class-validator and DTOs",
        "Containerized environment with Docker Compose and PostgreSQL + Prisma"
      ],
      tags: ["NestJS", "TypeScript", "PostgreSQL", "Prisma", "Redis", "Docker"],
      status: "In Progress",
      github: "https://github.com/MarioSystems",
      metricas: [
        { label: "Framework", valor: "NestJS Modular" },
        { label: "Access Control", valor: "RBAC Guards" },
        { label: "Session / Cache", valor: "Redis Token Store" }
      ],
      fluxoArquitetural: [
        { fase: "01. Ingress", componente: "Client Request", descricao: "Receives HTTP request with credentials in payload." },
        { fase: "02. Rate Limit", componente: "Redis Throttler", descricao: "Basic brute-force mitigation throttling requests per IP." },
        { fase: "03. Auth Guard", componente: "NestJS Guard / JWT", descricao: "Validates access token signature and extracts user context." },
        { fase: "04. Session Cache", componente: "Redis Session Check", descricao: "Checks for token revocation and active session states." },
        { fase: "05. RBAC Authority", componente: "Role Guard", descricao: "Declaratively verifies user permissions for the endpoint." }
      ],
      features: [
        "JWT authentication with Refresh Tokens strategy",
        "Role-Based Access Control (RBAC) with modular guards",
        "Preventive rate limiting based on Redis",
        "Strict contract validation with DTOs",
        "Containerized environment via Docker Compose"
      ],
      imagens: []
    },
    {
      id: "notification-platform",
      titulo: "Notification Platform (MarioSystems Lab)",
      categoria: "mariosystems",
      categoriaNome: "Architectural Study (Lab)",
      descricao: "Study and architectural prototyping project exploring event-driven messaging concepts. Conceptual investigation of queue topics with RabbitMQ, automated retries, and Dead-Letter Queues for service decoupling.",
      desafio: "Understand queue-based asynchronous processing concepts and mechanics, exploring how to decouple workloads and handle failures in high-volume traffic.",
      solucaoArquitetural: "Event-driven study pattern with RabbitMQ decoupling publishers from consumer workers in NestJS, analyzing exponential retry strategies and Dead-Letter Queues (DLQ).",
      destaquesTecnicos: [
        "Conceptual understanding of AMQP messaging (Exchanges, Queues, Bindings)",
        "Studying fault tolerance patterns with Dead-Letter Exchange (DLX)",
        "Message idempotency with unique keys in Redis",
        "Local experiment environment with RabbitMQ and Docker Compose"
      ],
      tags: ["NestJS", "RabbitMQ", "PostgreSQL", "Redis", "Docker", "Messaging (Study)"],
      status: "In Progress",
      github: "https://github.com/MarioSystems",
      metricas: [
        { label: "Focus", valor: "Concept Study" },
        { label: "Protocol", valor: "AMQP 0-9-1" },
        { label: "Resilience Study", valor: "DLQ / Retries" }
      ],
      fluxoArquitetural: [
        { fase: "01. Producer", componente: "Notification API", descricao: "Receives notification request and validates payload contract." },
        { fase: "02. Message Broker", componente: "RabbitMQ Topic Exchange", descricao: "Routes message conceptually to designated channel queues." },
        { fase: "03. Idempotency Check", componente: "Redis Cache Key", descricao: "Verifies unique key to prevent duplicate processing." },
        { fase: "04. Worker Consumer", componente: "NestJS Consumer Worker", descricao: "Consumes messages from queue in a decoupled manner." },
        { fase: "05. Resiliency Fallback", componente: "Dead-Letter Queue (DLQ)", descricao: "Routes persistent failures to inspection queue." }
      ],
      features: [
        "Conceptual study of event-driven messaging architecture",
        "Topic and channel queue structuring with RabbitMQ",
        "Retry mechanisms and failure analysis with Dead-Letter Queues",
        "Local experiment environment with Docker Compose"
      ],
      imagens: []
    },
    {
      id: "iam-security-system",
      titulo: "IAM Security System (MarioSystems Lab)",
      categoria: "mariosystems",
      categoriaNome: "Architectural Study (Lab)",
      descricao: "Personal study project exploring identity management, access control in Django REST Framework, and audit trail logging for sensitive operations.",
      desafio: "Practice granular permission rules in Django, investigating how to reliably track entity modification histories.",
      solucaoArquitetural: "Django REST Framework utilizing custom Signals and Middleware recording data modification diffs to PostgreSQL for audit traceability.",
      destaquesTecnicos: [
        "Audit trail recording bound to database transactions in PostgreSQL",
        "Granular access permission practices in Django REST Framework",
        "Authenticated request inspection via custom Middleware",
        "Containerized environment with Docker Compose"
      ],
      tags: ["Django", "DRF", "PostgreSQL", "Redis", "Docker", "IAM"],
      status: "In Progress",
      github: "https://github.com/MarioSystems",
      metricas: [
        { label: "Access Control", valor: "Granular RBAC" },
        { label: "Audit", valor: "Database Diff Logs" },
        { label: "Backend", valor: "Django REST Framework" }
      ],
      fluxoArquitetural: [
        { fase: "01. Request Guard", componente: "IAM Middleware", descricao: "Intercepts authenticated calls and validates request headers." },
        { fase: "02. Identity Check", componente: "JWT Validation Layer", descricao: "Confirms validity of access token." },
        { fase: "03. Policy Check", componente: "Permission Evaluator", descricao: "Matches requested action against privilege matrix." },
        { fase: "04. Audit Record", componente: "Audit Signal Dispatcher", descricao: "Records prior and new entity states to history table." },
        { fase: "05. Response", componente: "Audited Entity Response", descricao: "Returns response with trace identifier." }
      ],
      features: [
        "Identity and Access Management (IAM) study",
        "Granular role and permission definitions",
        "Audit trail logging modification histories",
        "Basic activity log monitoring"
      ],
      imagens: []
    },
    {
      id: "redcloud",
      titulo: "RedCloud",
      categoria: "mobile",
      categoriaNome: "Mobile & Fullstack",
      descricao: "Mobile app for cataloging and tracking anime integrated with the MyAnimeList public API (Jikan API v4). Built under Feature-Based Domain Architecture and dynamic UI following Material Design 3.",
      desafio: "Build a fluid mobile experience consuming a heavily rate-limited public API with offline caching support.",
      solucaoArquitetural: "Feature-Based architecture in React Native with Expo Router, Firebase Auth, local persistent caching with AsyncStorage, and request throttling.",
      destaquesTecnicos: [
        "Feature-based domain architecture isolating concerns across feature sets",
        "Modern file-based routing implemented with Expo Router",
        "Dynamic theme system supporting Light and Dark modes via Material Design 3",
        "Resilient local storage caching using AsyncStorage"
      ],
      tags: ["React Native", "Expo", "TypeScript", "Firebase", "Material Design 3"],
      status: "Completed",
      github: "https://github.com/MarioAlex1/redCloud",
      metricas: [
        { label: "Architecture", valor: "Feature-Based Domain" },
        { label: "Routing", valor: "Expo Router (File-Based)" },
        { label: "Design System", valor: "Material Design 3" }
      ],
      fluxoArquitetural: [
        { fase: "01. User Interface", componente: "React Native / Expo UI", descricao: "Renders adaptive components based on Material Design 3 guidelines." },
        { fase: "02. Feature Domain", componente: "Feature Domain Controllers", descricao: "Manages authentication, catalog browsing, and personal list state." },
        { fase: "03. API Client", componente: "Jikan API v4 Client", descricao: "Fetches anime metadata with built-in throttling against public API rate limits." },
        { fase: "04. Cache & Storage", componente: "AsyncStorage Engine", descricao: "Caches retrieved data locally on device for offline access and speed." }
      ],
      features: [
        "Individually developed as a showcase mobile software engineering portfolio",
        "Modular architecture based on feature domains (Feature-Based Architecture)",
        "Modern file-based routing implemented with Expo Router",
        "Full authentication workflows powered by Firebase Authentication SDK",
        "Robust API integration with Jikan v4 (MyAnimeList)",
        "Dynamic Light/Dark theme switching adhering to Material Design 3",
        "Local session persistence and caching using AsyncStorage"
      ],
      imagens: []
    }
  ]
};