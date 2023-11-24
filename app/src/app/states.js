import { create } from 'zustand';

export const useHeroesFilter = create((set) => ({
  searchText: '',
  setSearch: (text) => set({searchText: text}),
}))

export const useHeroesList = create((set) => ({
  heroesList: [],
  setHeroesList: (heroes) => set({heroesList: heroes}),
}));
