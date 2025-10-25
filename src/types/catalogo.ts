// src/types/catalogo.ts

export interface Combo {
  nome: string;
  descricao: string;
  imagens: string[];
}

export interface Categoria {
  id: string;
  titulo: string;
  opcoes?: string[];
  imagens: string[];
  descricao: string;
  icon: string;
  combos?: Combo[];
}

export interface Catalogo {
  categorias: Categoria[];
}
