
import { create } from 'zustand'

export interface Combo {
  nome: string
  descricao: string
  imagens: string[]
}

export interface Category {
  id: string
  titulo: string
  opcoes?: string[]
  imagens: string[]
  descricao: string
  icon: string
  combos?: Combo[]
}

interface ModalStore {
  isOpen: boolean
  activeCategory: Category | null
  selectedOption: string
  openModal: (category: Category, option?: string) => void
  closeModal: () => void
  setSelectedOption: (option: string) => void
}

export const useModalStore = create<ModalStore>((set) => ({
  isOpen: false,
  activeCategory: null,
  selectedOption: '',
  openModal: (category, option = '') => set({ 
    isOpen: true, 
    activeCategory: category,
    selectedOption: option || (category.opcoes ? category.opcoes[0] : '')
  }),
  closeModal: () => set({ 
    isOpen: false, 
    activeCategory: null,
    selectedOption: ''
  }),
  setSelectedOption: (option) => set({ selectedOption: option })
}))
