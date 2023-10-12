import { createSlice } from "@reduxjs/toolkit";

const formSlice = createSlice({
  name: "form",
  initialState: {
    contactInfo: {},
    shippingInfo: {},
    paymentInfo: {},
  },
  reducers: {
    addContactInfo: (state, action) => {
      state.contactInfo = action.payload;
    },
    addShippingInfo: (state, action) => {
      state.shippingInfo = action.payload;
    },
    addPaymentInfo: (state, action) => {
      state.paymentInfo = action.payload;
    },

    resetForm: (state) => {
      state.contactInfo = {};
      state.shippingInfo = {};
      state.paymentInfo = {};
    },
  },
});

export const { addContactInfo, addShippingInfo, addPaymentInfo } =
  formSlice.actions;

export default formSlice.reducer;
