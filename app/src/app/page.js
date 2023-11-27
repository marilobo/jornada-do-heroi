"use client"

import styles from './style/styles.module.scss';
import { Avatar, Box, Drawer, Grid, ListItemText, MenuItem, MenuList, Typography } from "@mui/material";
import FilterInput from "./components/filterInput";
import { useEffect } from "react";
import { useHeroesFilter, useFightHeroes, useFightModal, useFilteredHeroes, useHeroesList } from "./states";
import FightModal from "./components/fightModal";
import HeroCard from './components/heroCard';

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
      <Drawer className={styles.drawer} variant="permanent" open={true} anchor="left"> 
        <Box className={styles.drawerBox}>
          <Avatar sx={{margin:"auto"}}/>
          <Typography>RICARDO</Typography>
        </Box>
        <Box>
          <MenuList>
            <MenuItem className={styles.navigationButton}>
              <ListItemText>Cartas</ListItemText>
            </MenuItem>
          </MenuList>
        </Box>
      </Drawer>
      <FightModal />
      <Grid container 
        className={styles.grid}
        spacing={8}
        justifyContent="flex-start"
      >
        {filteredHeroesList.map((hero) => 
          <HeroCard key={hero.id} hero={hero} />
        )};
      </Grid>
      <Drawer className={styles.drawer} variant="permanent" open={true} anchor="right">
        <FilterInput />
      </Drawer>
    </Box>
  );
}