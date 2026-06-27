import { ReactNode } from "react";

export interface Skill {
  nome: string;
  icone: ReactNode;
}

export interface Projeto {
  titulo: string;
  descricao: string;
  tags: string[];
  github: string;
  status: string;
  features?: string[];
  imagens?: string[];
}

export interface Perfil {
  hexNome: string;
  nome: string;
  cargo: string;
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
  foco: {
    titulo: string;
    desc: string;
    icone: ReactNode;
  }[];
  categoriasSkills: {
    titulo: string;
    competencias: string[];
  }[];
  emAprendizado: string[];
  projetos: Projeto[];
}