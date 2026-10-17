import { ReactNode } from "react";

export type CategoriaProjeto = "all" | "mariosystems" | "production" | "mobile";

export interface ArquiteturaEtapa {
  fase: string;
  componente: string;
  descricao: string;
  badge?: string;
}

export interface MetricaProjeto {
  label: string;
  valor: string;
}

export interface Projeto {
  id: string;
  titulo: string;
  categoria: CategoriaProjeto;
  categoriaNome: string;
  descricao: string;
  desafio?: string;
  solucaoArquitetural?: string;
  destaquesTecnicos?: string[];
  tags: string[];
  github: string;
  status: string;
  features?: string[];
  imagens?: string[];
  fluxoArquitetural?: ArquiteturaEtapa[];
  metricas?: MetricaProjeto[];
  demoUrl?: string;
}

export interface Perfil {
  foto?: string;
  hexNome: string;
  nome: string;
  cargo: string;
  subtitulo: string;
  disponibilidade: string;
  localizacao: string;
  sobre: string;
  links: {
    github: string;
    linkedin: string;
    email: string;
    organization: string;
  };
  educacao: string;
  orgSobre: string;
  principiosEngenharia: {
    titulo: string;
    descricao: string;
    tag: string;
  }[];
  objetivosOrg: string[];
  foco: {
    titulo: string;
    desc: string;
    icone: ReactNode;
  }[];
  categoriasSkills: {
    titulo: string;
    descricao?: string;
    competencias: string[];
  }[];
  emAprendizado: string[];
  projetos: Projeto[];
}
