import React, { useState, useEffect } from "react";
import PaymentForm from "../../components/Form/PaymentForm/PaymentForm";
import ShippingForm from "../../components/Form/ShippingForm/ShippingForm";
import { useSelector } from "react-redux";

const Payment = () => {
  const [showPaymentForm, setShowPaymentForm] = useState(false);
  const shippingInfo = useSelector((state) => state.form.shippingInfo);

  useEffect(() => {
    if (shippingInfo && Object.keys(shippingInfo).length > 0) {
      setShowPaymentForm(true);
    }
  }, [shippingInfo]);

  return (
    <>
      {!showPaymentForm && <ShippingForm />}
      {showPaymentForm && <PaymentForm />}
    </>
  );
};

export default Payment;
