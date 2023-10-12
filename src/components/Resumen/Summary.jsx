import { useSelector } from "react-redux";
import {
  SummaryContainer,
  SummaryItemContainer,
  SummaryValue,
} from "./SummaryStyled";
import SummaryItem from "./SummaryItem";
import ButtonCart from "../UI/Button/ButtonCart";
import { useNavigate } from "react-router-dom";
import { MdRemoveShoppingCart } from "react-icons/md";
const Summary = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const navigate = useNavigate();

  const totalPrice = cartItems.reduce(
    (acc, cartItem) => acc + cartItem.quantity * cartItem.price,
    0
  );

  return (
    <SummaryContainer>
      {cartItems.length === 0 ? (
        <SummaryItemContainer>
          <MdRemoveShoppingCart size={100} color="orange" />
          <h2>No hay productos en el carrito</h2>
        </SummaryItemContainer>
      ) : (
        <>
          <h2>Estos son los productos que seleccionaste</h2>
          {cartItems.map((item) => (
            <SummaryItem key={item.id} {...item} />
          ))}
          <div className="subtotal">
            <SummaryValue>AR$ {totalPrice}</SummaryValue>
            <p>Deseas continuar con la compra ?</p>

            <ButtonCart onClick={() => navigate("/payment")}>
              Finalizar Compra
            </ButtonCart>
          </div>
        </>
      )}
    </SummaryContainer>
  );
};

export default Summary;
