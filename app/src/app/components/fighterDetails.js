import { Box, List, ListItem, ListItemText, Typography } from "@mui/material";
import { useEffect } from "react";

export default function FighterDetails({fighter}) {
  useEffect(() => {
    console.log(fighter);
  }, [])
  return(
    <>
      { fighter !== null ? 
        (
        <>
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
        </>) : <></>
      }
    </>
  )
}