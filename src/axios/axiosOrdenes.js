import axios from "axios";
import {
  fetchOrderStart,
  fetchOrderFail,
  fetchOrderSuccess,
  CreateOrderFail,
} from "../redux/ordenes/OrderSlice";
import { BASE_URL } from "../utilidades/constants";

export const getOrder = async (dispatch, currentUser) => {
  dispatch(fetchOrderStart());

  console.log(currentUser.token);

  try {
    const orders = await axios.get(`${BASE_URL}orders`, {
      headers: {
        "x-token": currentUser.token,
      },
    });
    if (orders) {
      dispatch(fetchOrderSuccess(orders.data.data));
    }
  } catch (error) {
    console.log(error);
    dispatch(fetchOrderFail("Upss, algo salío mal. Intentalo de nuevo"));
  }
};

export const createOrder = async (order, dispatch, currentUser) => {
  try {
    const response = await axios.post(`${BASE_URL}orders`, order, {
      headers: {
        "x-token": currentUser.token,
      },
    });
    if (response) {
      getOrder(dispatch, currentUser);
    }
  } catch (error) {
    console.log(error);
    dispatch(CreateOrderFail());
  }
};
