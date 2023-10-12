import ShippingForm from "../../components/Form/ShippingForm/ShippingForm";
import Summary from "../../components/Resumen/Summary";
import {
  CheckoutContainerStyled,
  SummaryContainerStyled,
} from "./CheckoutStyles";
import { useSelector } from "react-redux";

const Checkout = () => {
  return (
    <>
      <CheckoutContainerStyled>
        <SummaryContainerStyled>
          <Summary />
        </SummaryContainerStyled>
      </CheckoutContainerStyled>
    </>
  );
};

export default Checkout;
