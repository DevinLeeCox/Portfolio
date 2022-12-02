import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { MenuItemModel } from "../../app/models/menuModels";

const initialState: MenuItemModel[] = [];

export const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<MenuItemModel>) => {
      return [...state, action.payload];
    },
    removeItem: (state, action: PayloadAction<MenuItemModel>) => {
      return state.filter((item) => item.name != action.payload.name);
    },
  },
});

export const { addItem, removeItem } = menuSlice.actions;

export default menuSlice.reducer;
