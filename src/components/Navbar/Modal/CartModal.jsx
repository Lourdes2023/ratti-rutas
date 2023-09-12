import { MdOutlineClose } from "react-icons/md";
import ModalCartCard from "./ModalCartCard";
import Submit from "../../UI/Submit/Submit";
import { AiOutlineDelete } from "react-icons/ai";
import {
  CloseButtonStyled,
  ContainerStyled,
  ModalContainerStyled,
  PriceContainerStyled,
  PriceStyled,
  ProductsWrapperStyled,
  TitleStyled,
  TotalStyled,
} from "./modalStyles";
import { useDispatch, useSelector } from "react-redux";
import { toggleHiddenCART } from "../../../redux/cart/Slice.Cart";
import Increase from "../../UI/increase/Increase";

const CartModal = () => {
  const dispatch = useDispatch();
  const hiddenCart = useSelector((state) => state.cart.hidden);
  const cartItems = useSelector((state) => state.cart);
  return (
    <>
      <ModalContainerStyled hidden={hiddenCart}>
        <ContainerStyled>
          <CloseButtonStyled
            hidden={hiddenCart}
            onClick={() => dispatch(toggleHiddenCART())}
          >
            <MdOutlineClose size="24px" />
          </CloseButtonStyled>
          <TitleStyled>
            <h1>Tus Productos</h1>
          </TitleStyled>
          <Increase onClick={() => dispatch(clearCart())}>
            <AiOutlineDelete size="24px" />
          </Increase>

          <ProductsWrapperStyled>
            {cartItems.length ? (
              cartItems.map((item) => {
                console.log("Item ID:", item.id);
                return <ModalCartCard {...item} key={item.id} />;
              })
            ) : (
              <p>Ningun producto en tu carrito</p>
            )}
          </ProductsWrapperStyled>
          <PriceContainerStyled>
            <hr />
            <TotalStyled>
              <p>Total:</p>
              <PriceStyled>1900</PriceStyled>
            </TotalStyled>
            <CloseButtonStyled>
              <Submit />
            </CloseButtonStyled>
          </PriceContainerStyled>
        </ContainerStyled>
      </ModalContainerStyled>
    </>
  );
};

export default CartModal;
