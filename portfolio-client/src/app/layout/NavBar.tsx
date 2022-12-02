import { Box, Typography, AppBar, Toolbar } from "@mui/material";
import CheckoutButton from "../../features/checkout/CheckoutButton";

export default function NavBar() {
  return (
    <Box>
      <AppBar position='static'>
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography variant='h6'>Pizza Stop</Typography>
          <CheckoutButton />
        </Toolbar>
      </AppBar>
    </Box>
  );
}
