
import { create } from 'zustand'
import { Categoria } from '../types/catalogo'

interface ModalStore {
  isOpen: boolean
  activeCategory: Categoria | null
  selectedOption: string
  openModal: (category: Categoria, option?: string) => void
  closeModal: () => void
  setSelectedOption: (option: string) => void
}

export const useServicesModalStore = create<ModalStore>((set) => ({
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
