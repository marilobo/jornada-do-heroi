import { create } from 'zustand'

export const useHeroesFilter = create((set) => ({
  searchText: [],
  setSearch: (text) => set({searchText: text}),
}))

