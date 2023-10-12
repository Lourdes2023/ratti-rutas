import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  ordenes: null,
  loading: false,
  error: null,
};

const orderSlice = createSlice({
  name: "order",
  initialState: initialState,
  reducers: {
    CreateOrderFail: (state = initialState, action) => {
      return {
        ...state,
        error: action.payload,
      };
    },
    fetchOrderSuccess: (state, action) => {
      return {
        ...state,
        ordenes: [...action.payload],
        loading: false,
        error: action.payload,
      };
    },
    fetchOrderFail: (state) => {
      return {
        ...state,
        loading: true,
        error: null,
      };
    },

    fetchOrderStart: (state) => {
      return {
        ...state,
        loading: true,
      };
    },

    clearError: (state) => {
      return {
        ...state,

        error: null,
      };
    },

    clearOrder: (state) => {
      return {
        ...state,
        ordenes: null,
      };
    },
  },
});

export const {
  CreateOrderFail,
  fetchOrderSuccess,
  clearError,
  clearOrder,
  fetchOrderFail,
  fetchOrderStart,
} = orderSlice.actions;

export default orderSlice.reducer;
