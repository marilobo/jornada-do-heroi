"use client"

import { TextField } from "@mui/material";
import { useHeroesFilter } from "../states";

export default function FilterInput() {
  const searchText = useHeroesFilter((state) => state.searchText);
  const setSearch = useHeroesFilter((state) => state.setSearch);
  const handleInputChange = ({target}) => {
    setSearch(target.value);
  };

  return (
    <TextField
      value={searchText}
      onChange={handleInputChange}
      placeholder={"Search..."}
    />
  )
}
