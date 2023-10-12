import { createSlice } from "@reduxjs/toolkit";
import { CategoriasData } from "../../data/DataCategorias";

const INITIAL_STATE = {
  categorias: CategoriasData,
  selectedCategory: null,
};

export const categoriesSlice = createSlice({
  name: "categorias",
  initialState: INITIAL_STATE,
  reducers: {
    selectCategorias: (state, action) => {
      return {
        ...state,
        selectedCategory:
          action.payload !== state.selectedCategory ? action.payload : null,
      };
    },
    categorias: (state) => {
      return state;
    },
  },
});

export const { categorias, selectCategorias } = categoriesSlice.actions;

export default categoriesSlice.reducer;
