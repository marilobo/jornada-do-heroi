import { create } from 'zustand';

export const useHeroesFilter = create((set) => ({
  searchText: '',
  setSearch: (text) => set({searchText: text}),
}));

export const useHeroesList = create((set) => ({
  heroesList: [],
  setHeroesList: (heroes) => set({heroesList: heroes}),
}));

export const useFilteredHeroes = create((set) => ({
  filteredHeroes: [],
  setFilteredHeroes: (heroes) => set({filteredHeroes: heroes}),
}));

export const useFightHeroes = create((set) => ({
  fighterA: null,
  fighterB: null,
  setFighterA: (newFighter) => set({fighterA: newFighter}),
  setFighterB: (newFighter) => set({fighterB: newFighter}),
}));
