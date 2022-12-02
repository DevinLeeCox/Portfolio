import { configureStore } from "@reduxjs/toolkit";
import checkoutSlice from "../../features/checkout/checkoutSlice";

export const store = configureStore({
  reducer: {
    checkout: checkoutSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
