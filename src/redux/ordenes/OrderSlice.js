import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  orders: null,
  loading: false,
  error: null,
};

const orderSlice = createSlice({
  name: "orders",
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
        orders: [...action.payload],
        loading: false,
        error: null,
      };
    },
    fetchOrderFail: (state,action) => {
      return {
        ...state,
        loading: true,
        error: action.payload,
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
        orders: null,
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
