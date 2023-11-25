import { Modal, Typography } from "@mui/material";
import { useFightModal } from "../states";

export default function FightModal(){
  const isOpen = useFightModal((state) => state.open);
  const setOpen = useFightModal((state) => state.setOpen);
  return(
    <Modal open={isOpen} onClose={() => {setOpen(false)}}>
      <Typography>dadwdad</Typography>
    </Modal>
  )
}