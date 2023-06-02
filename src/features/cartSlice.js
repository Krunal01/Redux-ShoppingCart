import { createSlice } from "@reduxjs/toolkit";
import ProductData from "../ProductData";
const initialState = {
  cart: [],
  items: ProductData,
  totalPrice: 0,
  totalQuantity: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.cart.push(action.payload);
    },
  },
});
export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
