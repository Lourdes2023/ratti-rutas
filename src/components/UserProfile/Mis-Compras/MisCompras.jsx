import React from "react";
import { TramiteContainer, StepContent } from "../UserProfile";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getOrder } from "../../../axios/axiosOrdenes";
import { clearError, fetchOrderFail } from "../../../redux/ordenes/OrderSlice";
import ShippingForm from "../../Form/ShippingForm/ShippingForm";
const MisCompras = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.user.currentUser);
  const { ordenes, error } = useSelector((state) => state.ordenes);
  useEffect(() => {
    if (!ordenes) {
      getOrder(dispatch, currentUser);
    }

    if (!currentUser?.token) {
      dispatch(fetchOrderFail());
    } else {
      error && dispatch(clearError());
    }
  }, [ordenes, dispatch, currentUser, error]);

  return (
    <TramiteContainer>
      <ShippingForm />
      <StepContent></StepContent>
    </TramiteContainer>
  );
};

export default MisCompras;
