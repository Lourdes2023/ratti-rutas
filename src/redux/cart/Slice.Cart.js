import { createSlice } from "@reduxjs/toolkit";
import { addItemToCart, removeItemFromCart } from "./CartUtils";

const INITIALSTATE = {
  cartItems: [],
  hidden: true,
};

const cartSlice = createSlice({
  name: "cart",
  initialState: INITIALSTATE,
  reducers: {
    //agregar
    addtocart: (state, action) => {
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload),
      };
    },

    //remover
    removeFromCart: (state, action) => {
      return {
        ...state,
        cartItems: removeItemFromCart(state.cartItems, action.payload),
      };
    },
    clearCart: (state) => {
      return {
        ...state,
        cartItems: [],
      };
    },
    toggleHiddenCART: (state) => {
      return {
        ...state,
        hidden: !state.hidden,
      };
    },
  },
});

export const { addtocart, removeFromCart, clearCart, toggleHiddenCART } =
  cartSlice.actions;

export default cartSlice.reducer;
