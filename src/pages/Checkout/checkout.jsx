import { useSelector } from 'react-redux';
import ShippingForm from "../../components/Form/ShippingForm/ShippingForm";
import {
  CheckoutContainerStyled,
  SummaryContainerStyled,
} from "./CheckoutStyles";


const Checkout = () => {
const { cartItems } = useSelector((state) => state.cart);
const price = cartItems.reduce((acc, curr) => acc + curr.price * curr.quantity, 0);

  return (
    <>
      <CheckoutContainerStyled>
        <SummaryContainerStyled>
          <ShippingForm
          cartItems={cartItems}
          price={price}
        
          />
        </SummaryContainerStyled>
      </CheckoutContainerStyled>
    </>
  );
};

export default Checkout;