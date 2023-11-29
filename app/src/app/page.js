"use client"

import styles from './style/styles.module.scss';
import { Avatar, Box, Button, Drawer, Grid, ListItemText, MenuItem, MenuList, Typography } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import FilterInput from "./components/filterInput";
import { useEffect } from "react";
import { useHeroesFilter, useFightHeroes, useFightModal, useFilteredHeroes, useHeroesList, useModalOpen } from "./states";
import FightModal from "./components/fightModal";
import HeroCard from './components/HeroCard';
import Link from 'next/link';

async function getHeroes(){
  const response = await fetch("http://homologacao3.azapfy.com.br/api/ps/metahumans");
  return response.json();
}


export default function Home() {
  const heroesList = useHeroesList((state) => state.heroesList);
  const setHeroesList = useHeroesList((state) => state.setHeroesList);
  const filterText = useHeroesFilter((state) => state.searchText);
  const filteredHeroesList = useFilteredHeroes((state) => state.filteredHeroes);
  const setFilteredHeroesList = useFilteredHeroes((state) => state.setFilteredHeroes);
  const fighterA = useFightHeroes((state) => state.fighterA);
  const fighterB = useFightHeroes((state) => state.fighterB);
  const setFightModalOpen = useFightModal((state) => state.setOpen);
  const leftDrawerOpen = useModalOpen((state) => state.open);
  const toggleLeftDrawerOpen = useModalOpen((state) => state.toggleOpen);

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
      setFightModalOpen(true);
    }
  
  }, [fighterB]);

  const toggle = () => {
    toggleLeftDrawerOpen(leftDrawerOpen);
  };
  
  return (
    <Box>
      <Button className={styles.menu} onClick={toggle}>
        <MenuIcon fontSize="large" />
      </Button>
      <Drawer className={`${styles.drawer} ${styles.leftDrawer}`} variant="persistent" open={leftDrawerOpen} anchor="left">
        <Box className={styles.drawerBox}>
          <Avatar className={styles.avatar}/>
          <Typography>RICARDO</Typography>
        </Box>
        <Box>
          <MenuList>
            <Link href="#index">
              <MenuItem className={styles.navigationButton}>
                <ListItemText>Cartas</ListItemText>
              </MenuItem>
            </Link>
          </MenuList>
        </Box>
      </Drawer>
      <FightModal />
      <Grid container 
        className={styles.grid}
        spacing={8}
        justifyContent="flex-start"
      >
        <span id="index" ></span>
        {filteredHeroesList.map((hero) => 
          <HeroCard key={hero.id} hero={hero} />
        )};
      </Grid>
      <Drawer className={`${styles.drawer} ${styles.rightDrawer}`} variant="persistent" open={true} anchor="right">
        <FilterInput />
      </Drawer>
    </Box>
  );
}