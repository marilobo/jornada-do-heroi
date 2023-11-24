"use client"

import { Avatar, Box, Card, CardContent, Divider, Drawer, Grid, Icon, ListItemButton, ListItemText, MenuItem, MenuList, Typography } from "@mui/material";
import FilterInput from "./components/filterInput";
import { useEffect } from "react";
import { useHeroesFilter, useFilteredHeroes, useHeroesList } from "./states";

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
  useEffect(() => {
    async function fetchData() {
      const heroes = await getHeroes();
      setHeroesList(heroes);
      setFilteredHeroesList(heroes);
    }

    fetchData();
  }, [])

  useEffect(() => {
    const filteredHeroes = heroesList.filter((hero) => hero.name.toLowerCase().includes(filterText.toLowerCase()));
    setFilteredHeroesList(filteredHeroes);
  }, [filterText])

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
                <ListItemText>Heróis</ListItemText>
              </ListItemButton>            
            </MenuItem>
          </MenuList>
        </Box>
      </Drawer>
      <Grid container sx={{marginLeft:14, width: "calc(100% - 340px)"}} spacing={8} justifyContent="flex-start">
        {filteredHeroesList.map((hero) => 
          <Grid item key={hero.id}>
            <Card sx={{width:"11vw"}}>
              <CardContent>
                <img src={hero.images.lg}/>
                <Typography variant="h6" sx={{textAlign:"center"}}>{hero.name}</Typography>
                <Typography sx={{textAlign:"center"}}>
                  <Typography>
                    🗡️ {
                      Object.values(hero.powerstats).reduce((sum, value) => sum + value, 0)
                    }
                  </Typography>
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        )};
      </Grid>
      <Drawer variant="permanent" open={true} anchor="right">
        <FilterInput />
      </Drawer>
    </Box>
  );
}