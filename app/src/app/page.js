import { Avatar, Box, Card, CardContent, Divider, Drawer, Grid, Icon, ListItemButton, ListItemText, MenuItem, MenuList, TextField, Typography } from "@mui/material";

async function getHeroes(){
  const response = await fetch("http://homologacao3.azapfy.com.br/api/ps/metahumans");
  return response.json();
}

export default async function Topster() {
  const heroes = await getHeroes();
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
        {heroes.map((hero) => 
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
        <TextField />
      </Drawer>
    </Box>
  );
}