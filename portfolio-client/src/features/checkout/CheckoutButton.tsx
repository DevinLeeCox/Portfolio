import { Backdrop, Badge, Box, Fade, IconButton, Modal, Typography } from "@mui/material";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { useState } from "react";
import Checkout from "./Checkout";
import { itemCount } from "./checkoutSlice";
import { useAppSelector } from "../../app/hooks";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
export default function CheckoutButton() {
  const count = useAppSelector(itemCount);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <IconButton
        size='large'
        aria-label='cart'
        aria-controls='cart-menu'
        aria-haspopup='true'
        onClick={handleOpen}
        color='inherit'
      >
        <Badge badgeContent={count} color='primary'>
          <ShoppingCartOutlinedIcon fontSize='large' />
        </Badge>
      </IconButton>
      <Modal
        aria-labelledby='transition-modal-title'
        aria-describedby='transition-modal-description'
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Checkout />
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
