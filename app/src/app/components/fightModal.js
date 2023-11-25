import { Box, List, ListItem, ListItemText, Modal, Typography } from "@mui/material";
import { useFightHeroes, useFightModal } from "../states";
import FighterDetails from "./fighterDetails";

export default function FightModal(){
  const isOpen = useFightModal((state) => state.open);
  const setOpen = useFightModal((state) => state.setOpen);
  const fighterA = useFightHeroes((state) => state.fighterA);
  const setFighterA = useFightHeroes((state) => state.setFighterA);
  const fighterB = useFightHeroes((state) => state.fighterB);
  const setFighterB = useFightHeroes((state) => state.setFighterB);

  const handleClose = () => {
    setOpen(false);
    
    setFighterA(null);
    setFighterB(null);
  };

  return(
    <Modal open={isOpen} onClose={handleClose}>
      {
        fighterA !== null ?
        (
          <Box>
            <Typography>Winner {fighterA.name}</Typography>
            <FighterDetails fighter={fighterA} />
            <List>
              <ListItem>
                <ListItemText>Intelligence</ListItemText>
              </ListItem>
              <ListItem>
                <ListItemText>Strength</ListItemText>
              </ListItem>
              <ListItem>
                <ListItemText>Speed</ListItemText>
              </ListItem>
              <ListItem>
                <ListItemText>Durability</ListItemText>
              </ListItem>
              <ListItem>
                <ListItemText>Power</ListItemText>
              </ListItem>
              <ListItem>
                <ListItemText>Combat</ListItemText>
              </ListItem>
            </List>
            <FighterDetails fighter={fighterB} />
          </Box>
        ) : <></>
      }
    </Modal>
  )
}