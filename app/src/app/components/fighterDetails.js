import { Box, List, ListItem, ListItemText, Typography } from "@mui/material";
import { ArrowDropDown, ArrowDropUp } from "@mui/icons-material";
import { useEffect } from "react";
import styles from '../style/modal.module.scss';

export default function FighterDetails({fighter, opponent}) {
  useEffect(() => {
    console.log(fighter);
  }, [])
  return(
    <>
      { fighter !== null ? 
        (
        <Box className={`${styles.fighterDetails}`}>
          <Box>
            <img src={ fighter.images.lg } width={200} alt="Fighter" />
            <Typography>{ fighter.name }</Typography>
          </Box>
          <List className={styles.list}>
            {
              Object.values(fighter.powerstats).map((powerValue, statsIndex) => (
                <ListItem key={`${fighter.id}`}>
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