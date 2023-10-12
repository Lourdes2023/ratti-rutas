import { createSlice } from "@reduxjs/toolkit";

const initialState = null;

const activeProductSlice = createSlice({
  name: "activeProduct",
  initialState,
  reducers: {
    setActiveProduct: (state, action) => action.payload,
    clearActiveProduct: () => null,
  },
});

export const { setActiveProduct, clearActiveProduct } =
  activeProductSlice.actions;

export default activeProductSlice.reducer;
