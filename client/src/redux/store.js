import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./productSlice"; // your product slice
import materialReducer from "./materialSlice"
const store = configureStore({
  reducer: {
    product: productReducer,
    materials: materialReducer,
  },
});

export default store;
