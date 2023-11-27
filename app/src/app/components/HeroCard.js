import { Box, Card, CardActionArea, CardContent, Grid, Typography } from "@mui/material";
import { useFightHeroes } from "../states";

export default function HeroCard({hero}) {
  const fighterA = useFightHeroes((state) => state.fighterA);
  const setFighterA = useFightHeroes((state) => state.setFighterA);
  const setFighterB = useFightHeroes((state) => state.setFighterB);

  const handleCardClick = (hero) => {
    if(fighterA === null){
      setFighterA(hero);
    }
    else{
      setFighterB(hero);
    }
  };

  return(
    <Grid item>
      <Card sx={{width:"11vw"}}>
        <CardActionArea onClick={() => handleCardClick(hero)}>
          <CardContent>
            <img src={hero.images.lg}/>
            <Typography variant="h6" sx={{textAlign:"center"}}>{hero.name}</Typography>
            <Box sx={{textAlign:"center"}}>
              <Typography>
                🗡️ {
                  Object.values(hero.powerstats).reduce((sum, value) => sum + value, 0)
                }
              </Typography>
            </Box>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  )
}