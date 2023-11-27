"use client"

import { Avatar, Box, Drawer, Grid, ListItemButton, ListItemText, MenuItem, MenuList, Typography } from "@mui/material";
import FilterInput from "./components/filterInput";
import { useEffect } from "react";
import { useHeroesFilter, useFightHeroes, useFilteredHeroes, useHeroesList, useFightModal } from "./states";
import FightModal from "./components/fightModal";
import HeroCard from "./components/HeroCard";

async function getHeroes(){
  const response = await fetch("http://homologacao3.azapfy.com.br/api/ps/metahumans");
  return response.json();
}


export default function Topster() {
  const heroesList = useHeroesList((state) => state.heroesList);
  const setHeroesList = useHeroesList((state) => state.setHeroesList);
  const filterText = useHeroesFilter((state) => state.searchText);
  const filteredHeroesList = useFilteredHeroes((state) => state.filteredHeroes);
  const setFilteredHeroesList = useFilteredHeroes((state) => state.setFilteredHeroes);
  const fighterA = useFightHeroes((state) => state.fighterA);
  const fighterB = useFightHeroes((state) => state.fighterB);
  const setFightModalOpen = useFightModal((state) => state.setOpen);

  useEffect(() => {
    async function fetchData() {
      const heroes = await getHeroes();
      setHeroesList(heroes);
      setFilteredHeroesList(heroes);
    }

    fetchData();
  }, []);

  useEffect(() => {
    const filteredHeroes = heroesList.filter((hero) => hero.name.toLowerCase().includes(filterText.toLowerCase()));
    setFilteredHeroesList(filteredHeroes);
  }, [filterText])

  useEffect(() => {
  
    if(fighterB !== null){
      console.log("Fight: "+fighterA.name+" vs. "+fighterB.name);

      setFightModalOpen(true);
    }
  
  }, [fighterB]);
  
  return (
    <Box>
      <Drawer variant="permanent" open={true} anchor="left"> 
        <Box sx={{textAlign:"center"}}>
          <Avatar sx={{margin:"auto"}}/>
          <Typography>Default</Typography>
        </Box>
        <Box>
          <MenuList>
            <MenuItem>
              <ListItemButton>
                <ListItemText>Heroes</ListItemText>
              </ListItemButton>            
            </MenuItem>
          </MenuList>
        </Box>
      </Drawer>
      <FightModal />
      <Grid container sx={{marginLeft:14, width: "calc(100% - 340px)"}} spacing={8} justifyContent="flex-start">
        {filteredHeroesList.map((hero) => 
          <HeroCard key={hero.id} hero={hero} />
        )};
      </Grid>
      <Drawer variant="permanent" open={true} anchor="right">
        <FilterInput />
      </Drawer>
    </Box>
  );
}