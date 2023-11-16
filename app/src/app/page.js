import { Collapse, List, ListItem, ListItemText } from "@mui/material";

async function getHerois(){
  const response = await fetch('http://homologacao3.azapfy.com.br/api/ps/metahumans');
  return response.json();
}

export default async function Topster() {
  const herois = await getHerois();
  return (
    <div>
      <h1>Heróis</h1>
      {/* <pre>{JSON.stringify(herois,null,2)}</pre> */}
      <List>
        <ListItem>
          <ListItemText primary="Id:" secondary={herois[0].id}></ListItemText>
        </ListItem>
        <ListItem>
          <ListItemText primary="Name:" secondary={herois[0].name}></ListItemText>
        </ListItem>
        <ListItem>
          <ListItemText primary="Slug:" secondary={herois[0].slug}></ListItemText>
        </ListItem>
        <ListItem>
          <ListItemText primary="Powerstats:">
          </ListItemText>          
          <List component="div">
            <ListItem>
              <ListItemText primary="Intelligence:" secondary={herois[0].powerstats.intelligence}></ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText primary="Strength:" secondary={herois[0].powerstats.strength}></ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText primary="Speed:" secondary={herois[0].powerstats.speed}></ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText primary="Durability:" secondary={herois[0].powerstats.durability}></ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText primary="Power:" secondary={herois[0].powerstats.power}></ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText primary="Combat:" secondary={herois[0].powerstats.combat}></ListItemText>
            </ListItem>
          </List>
        </ListItem>
      </List>
    </div>
  );
}