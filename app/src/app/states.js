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

export const useFightModal = create((set) => ({
  open: false,
  setOpen: (toOpen) => set({open: toOpen}),
}));

export const useWinner = create((set) => ({
  winner: '',
  setWinner: (fighterName) => set({winner: fighterName}),
}));

export const useModalOpen = create((set) => ({
  open: false,
  toggleOpen: (toOpen) => set({open: (toOpen === true ? false : true)}),
}));
