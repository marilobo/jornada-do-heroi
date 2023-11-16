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
      {
        herois.map((heroi) => (
          <List key={heroi.id}>
            <img src={heroi.images.lg} alt="batata" width={150} />
            <ListItem>
              <ListItemText primary="Id:" secondary={heroi.id}></ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText primary="Name:" secondary={heroi.name}></ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText primary="Slug:" secondary={heroi.slug}></ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText primary="Powerstats:">
              </ListItemText>          
              <List component="div">
                <ListItem>
                  <ListItemText primary="Intelligence:" secondary={heroi.powerstats.intelligence}></ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemText primary="Strength:" secondary={heroi.powerstats.strength}></ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemText primary="Speed:" secondary={heroi.powerstats.speed}></ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemText primary="Durability:" secondary={heroi.powerstats.durability}></ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemText primary="Power:" secondary={heroi.powerstats.power}></ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemText primary="Combat:" secondary={heroi.powerstats.combat}></ListItemText>
                </ListItem>
              </List>
            </ListItem>
          </List>
        ))
      }
    </div>
  );
}