import { Box, List, ListItem, ListItemText, Typography } from "@mui/material";
import { useEffect } from "react";
import styles from '../style/modal.module.scss';

export default function FighterDetails({fighter}) {
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
          <List>
            {
              Object.values(fighter.powerstats).map((power) => (
                <ListItem>
                  <ListItemText>
                    {power}
                  </ListItemText>
                </ListItem>
              ))
            }
          </List>
        </Box>) : <></>
      }
    </>
  )
}