import styles from '../style/modal.module.scss';
import { Box, List, ListItem, ListItemText, Modal, Typography } from "@mui/material";
import { useFightHeroes, useFightModal, useWinner } from "../states";
import FighterDetails from "./fighterDetails";
import { useEffect } from 'react';

export default function FightModal(){
  const isOpen = useFightModal((state) => state.open);
  const setOpen = useFightModal((state) => state.setOpen);
  const fighterA = useFightHeroes((state) => state.fighterA);
  const setFighterA = useFightHeroes((state) => state.setFighterA);
  const fighterB = useFightHeroes((state) => state.fighterB);
  const setFighterB = useFightHeroes((state) => state.setFighterB);
  const winnerName = useWinner((state) => state.winner);
  const setWinnerName = useWinner((state) => state.setWinner);

  const handleClose = () => {
    setOpen(false);
    
    setFighterA(null);
    setFighterB(null);
  };

  useEffect(() => {
    if(fighterB !== null){

      const fighterASum = Object.values(fighterA.powerstats).reduce((sum, value) => sum + value, 0);
      const fighterBSum = Object.values(fighterB.powerstats).reduce((sum, value) => sum + value, 0);
    
      if(fighterASum > fighterBSum){
        setWinnerName(fighterA.name);
      } else {
        setWinnerName(fighterB.name);
      }
    }
  }, [fighterB]);

  return(
    <Modal open={isOpen} onClose={handleClose} className={styles.modal}>
      {
        fighterB !== null ?
        (
          <Box className={styles.fighterModal}>
            <Typography><span className={styles.winner}>Winner</span> {winnerName}</Typography>
            <Box className={styles.fighters}>
              <FighterDetails fighter={fighterA} />
              <List className={`${styles.list} ${styles.statsText}`}>
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
          </Box>
        ) : <></>
      }
    </Modal>
  )
}