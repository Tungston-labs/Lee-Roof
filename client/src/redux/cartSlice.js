// cartSlice.js
import { createSlice } from "@reduxjs/toolkit";

const loadCart = () => {
  try {
    const cartData = localStorage.getItem("cart");
    return cartData ? JSON.parse(cartData) : [];
  } catch {
    return [];
  }
};

const saveCart = (items) => {
  localStorage.setItem("cart", JSON.stringify(items));
};

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: loadCart(),
  },
  reducers: {
    addToCart: (state, action) => {
      // Create a unique key for this product variant
      const uniqueId = `${action.payload.id}-${action.payload.material}-${action.payload.thickness}-${action.payload.color}`;

      const existing = state.items.find((item) => item.uniqueId === uniqueId);

      if (existing) {
        existing.qty += 1;
      } else {
        state.items.push({ ...action.payload, qty: 1, uniqueId });
      }
      saveCart(state.items);
    },

    updateQty: (state, action) => {
      const { uniqueId, qty } = action.payload;
      const item = state.items.find((item) => item.uniqueId === uniqueId);
      if (item && qty > 0) {
        item.qty = qty;
      }
      saveCart(state.items);
    },

    removeFromCart: (state, action) => {
      state.items = state.items.filter((item) => item.uniqueId !== action.payload);
      saveCart(state.items);
    },

    clearCart: (state) => {
      state.items = [];
      localStorage.removeItem("cart");
    },
  },
});

export const { addToCart, updateQty, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
