import styles from '../style/styles.module.scss';
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

  const powerSum = Object.values(hero.powerstats).reduce((sum, value) => sum + value, 0);
  const cardClass = powerSum < 250 ? styles.normal : powerSum < 350 ? styles.rare : powerSum < 500 ? styles.epic : powerSum < 600 ? styles.legendary : styles.god;

  return(
    <Grid item>
      <Card className={`${cardClass} ${styles.card}`}>
        <CardActionArea onClick={() => handleCardClick(hero)}>
          <CardContent>
            <img src={hero.images.lg}/>
            <Typography variant="h6" className={styles.heroName}>{hero.name}</Typography>
            <Box sx={{textAlign:"center"}}>
              <Typography>
                🗡️ {powerSum}
              </Typography>
            </Box>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  )
}