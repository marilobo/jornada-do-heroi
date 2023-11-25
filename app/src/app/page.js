"use client"

import { Avatar, Box, Card, CardActionArea, CardContent, Divider, Drawer, Grid, Icon, ListItemButton, ListItemText, MenuItem, MenuList, Typography } from "@mui/material";
import FilterInput from "./components/filterInput";
import { useEffect } from "react";
import { useHeroesFilter, useFightHeroes, useFilteredHeroes, useHeroesList } from "./states";

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
  const setFighterA = useFightHeroes((state) => state.setFighterA);
  const fighterB = useFightHeroes((state) => state.fighterB);
  const setFighterB = useFightHeroes((state) => state.setFighterB);

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

  const fight = () => {
  
    console.log("fight");

    setFighterA(null);
    setFighterB(null);
  
  };

  const handleCardClick = (hero) => {
    console.log("entrei no handle");
    if(fighterA === null){
      console.log('cheguei no if');
      console.log("fighterA: " + hero.name);
      setFighterA(hero);
    }
    else{
      console.log('cheguei no else');
      console.log("fighterB: " + hero.name);
      setFighterB(hero);
      fight();
    }
  };
  
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
      <Grid container sx={{marginLeft:14, width: "calc(100% - 340px)"}} spacing={8} justifyContent="flex-start">
        {filteredHeroesList.map((hero) => 
          <Grid item key={hero.id}>
            <Card sx={{width:"11vw"}}>
              <CardActionArea onClick={() => handleCardClick(hero)}>
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
              </CardActionArea>
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