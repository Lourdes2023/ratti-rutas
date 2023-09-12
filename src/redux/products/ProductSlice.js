import { createSlice } from "@reduxjs/toolkit";
import { CategoriasProductos, ProductDataTotal } from "../../data/ProductData";

const INITIALSTATE = {
  products: CategoriasProductos,
  totalProducts: ProductDataTotal,
};

export const productSlice = createSlice({
  name: "products",
  initialState: INITIALSTATE,
  reducers: {
    getProducts: (state) => {
      return state;
    },
  },
});

export const { getProducts } = productSlice.actions;

export default productSlice.reducer;
