import { Box, Button, ButtonGroup, Typography } from "@mui/material";
import { useAppSelector } from "../../app/hooks";

export default function Checkout() {
  const cart = useAppSelector((state) => state.checkout);

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          minHeight: 200,
        }}
      >
        <Box>
          <>
            <div>Checkout temp</div>
            {cart.map((item) => {
              return (
                <Typography>
                  ${item.price} - {item.name}
                </Typography>
              );
            })}
          </>
        </Box>
        <Box sx={{ display: "flex", flexDirection: "row" }}>
          <ButtonGroup fullWidth={true}>
            <Button variant='outlined'>Cancel</Button>
            <Button variant='outlined'>Checkout</Button>
          </ButtonGroup>
        </Box>
      </Box>
    </>
  );
}
