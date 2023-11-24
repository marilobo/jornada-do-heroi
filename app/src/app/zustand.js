import { create } from 'zustand'

const useHeroesList = create((set) => ({
  heroesList: [],
  setHeroes: (heroes) => set({heroesList: heroes}),
}))