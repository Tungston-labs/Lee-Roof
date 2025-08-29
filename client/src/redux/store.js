import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./productSlice"; // your product slice
import materialReducer from "./materialSlice"
import cartReducer from "./cartSlice";
const store = configureStore({
  reducer: {
    product: productReducer,
    materials: materialReducer,
       cart: cartReducer,
  },
});

export default store;
