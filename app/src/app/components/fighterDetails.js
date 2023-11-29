import { Box, List, ListItem, ListItemText, Typography } from "@mui/material";
import { ArrowDropDown, ArrowDropUp } from "@mui/icons-material";
import styles from '../style/modal.module.scss';

export default function FighterDetails({fighter, opponent}) {
  return(
    <>
      { fighter !== null ? 
        (
        <Box className={styles.fighterDetails}>
          <Box className={styles.card}>
            <img src={ fighter.images.lg } alt="Fighter" />
            <Typography className={styles.heroName}>{ fighter.name }</Typography>
          </Box>
          <List className={styles.list}>
            {
              Object.values(fighter.powerstats).map((powerValue, statsIndex) => (
                <ListItem key={`${fighter.id}-${statsIndex}`}>
                  <ListItemText>
                    {powerValue}
                  </ListItemText>
                  {
                    powerValue > Object.values(opponent.powerstats)[statsIndex] ? <ArrowDropUp color="success" /> : <ArrowDropDown color="error" />
                  }
                </ListItem>
              ))
            }
          </List>
        </Box>) : <></>
      }
    </>
  )
}