import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../Redux/Slice/CartSlice"; // Importing cartReducer instead of addItem

const store = configureStore({
  reducer: {
    cart: cartReducer, // Using cartReducer instead of CartSlice
  },
});

export default store;
