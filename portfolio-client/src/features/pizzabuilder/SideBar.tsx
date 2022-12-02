import { Paper } from "@mui/material";
import Checkout from "../checkout/Checkout";

export default function SideBar() {
  return (
    <Paper elevation={4}>
      <Checkout />
    </Paper>
  );
}
