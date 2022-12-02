import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CartItem } from "../../app/models/cartItem";
import { RootState } from "../../app/stores/store";

const initialState: CartItem[] = [];

export const checkoutSlice = createSlice({
  name: "checkout",
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<CartItem>) => {
      return [...state, action.payload];
    },
    removeItem: (state, action: PayloadAction<CartItem>) => {
      return state.filter((item) => item.name != action.payload.name);
    },
  },
});

export const { addItem, removeItem } = checkoutSlice.actions;

export const itemCount = (state: RootState) => state.checkout.length;

export default checkoutSlice.reducer;
