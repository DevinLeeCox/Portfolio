import { FormGroup, FormControlLabel, Checkbox, Grid } from "@mui/material";
import React from "react";
import { useAppDispatch } from "../../app/hooks";
import { addItem, removeItem } from "../checkout/checkoutSlice";

const toppingsList = ["Pepperoni", "Bacon", "MeatBall", "Ham"];

export default function ToppingSelector() {
  const dispatch = useAppDispatch();

  const handleChange = (e: React.ChangeEvent, checked: boolean) => {
    const toppingName = e.currentTarget.getAttribute("Name");
    if (toppingName && checked) {
      dispatch(addItem({ name: toppingName, price: 10 }));
    } else {
      dispatch(removeItem({ name: toppingName, price: 10 }));
    }
  };

  return (
    <>
      <FormGroup>
        <Grid container>
          {toppingsList.map((topping) => (
            <Grid key={topping} item xs={6}>
              <FormControlLabel
                control={<Checkbox name={topping} onChange={handleChange} />}
                label={topping}
              />
            </Grid>
          ))}
        </Grid>
      </FormGroup>
    </>
  );
}
