import { useNavigate } from "react-router-dom";
import {useDispatch, useSelector} from "react-redux"

import ButtonCart from "../../components/UI/Button/ButtonCart";

import {
  OrdersContainerStyle,
} from "./OrdersStyled";
import { useEffect } from "react";
import { getOrders } from "../../axios/axiosOrdenes";
import { clearError, fetchOrderFail } from "../../redux/ordenes/OrderSlice";
import Summary from "../../components/Resumen/Summary";

const Orders = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const currentUser = useSelector(state => state.user)
  const {orders, error} = useSelector(state => state.orders)

  useEffect(() => {
    if (!orders) {
      getOrders(dispatch, currentUser)
    }

    if(!currentUser?.token) {
      dispatch(fetchOrderFail())
    } else {
      error && dispatch(clearError())
    }

  }, [currentUser, dispatch, error, orders])

  return (
    <>
      <OrdersContainerStyle>
        <h2> Mis ordenes </h2>
        <Summary/>
      </OrdersContainerStyle>
     <ButtonCart onClick={() => navigate("/")} >continuar</ButtonCart>
    </>
  );
};

export default Orders;