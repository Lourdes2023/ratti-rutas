import { MdOutlineClose } from "react-icons/md";
import ModalCartCard from "./ModalCartCard";
import Submit from "../../UI/Submit/Submit";
import { AiOutlineDelete } from "react-icons/ai";
import {
  CloseButtonStyled,
  ContainerStyled,
  CardTitleStyled,
  ModalContainerStyled,
  PriceStyled,
  ProductsWrapperStyled,
  TextContainerStyled,
  TotalStyled,
  TitleStyled,
  TitleContainerStyled,
} from "./modalStyles";
import { useDispatch, useSelector } from "react-redux";
import { toggleHiddenCART, clearCart } from "../../../redux/cart/Slice.Cart";
import { useRef } from "react";
import BtnItem from "../../UI/increase/Increase";
import { useNavigate } from "react-router-dom";
import { useScroll } from "framer-motion";
import { Progress, BackgroundCircle, IndicatorCircle } from "./modalStyles";
const CartModal = () => {
  const ref = useRef(null);
  const { scrollXProgress } = useScroll({ container: ref });
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const hiddenCart = useSelector((state) => state.cart.hidden);
  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalPrice = cartItems.reduce(
    (acc, cartItem) => acc + cartItem.quantity * cartItem.price,
    0
  );

  return (
    <>
      <ModalContainerStyled hidden={hiddenCart}>
        {" "}
        <TitleStyled>
          <h1>Tus Productos</h1>
        </TitleStyled>{" "}
        <TitleContainerStyled>
          <Progress width="100" height="100" viewBox="0 0 100 100">
            <BackgroundCircle cx="50" cy="50" r="30" pathLength="1" />
            <IndicatorCircle
              cx="50"
              cy="50"
              r="30"
              pathLength="1"
              style={{ pathLength: scrollXProgress }}
            />
          </Progress>{" "}
          <p>Vaciar Carrito</p>{" "}
          <TextContainerStyled>
            <BtnItem onClick={() => dispatch(clearCart())}>
              <AiOutlineDelete size="24px" />
            </BtnItem>
          </TextContainerStyled>{" "}
        </TitleContainerStyled>
        <CloseButtonStyled
          hidden={hiddenCart}
          onClick={() => dispatch(toggleHiddenCART())}
        >
          <MdOutlineClose size="24px" />
        </CloseButtonStyled>
        <ContainerStyled>
          <ProductsWrapperStyled ref={ref}>
            {cartItems.length ? (
              cartItems.map((productoscart) => {
                console.log("Item ID:", productoscart.id);
                return (
                  <ModalCartCard {...productoscart} key={productoscart.id} />
                );
              })
            ) : (
              <p>Ningun producto en tu carrito</p>
            )}
          </ProductsWrapperStyled>
        </ContainerStyled>{" "}
        <TotalStyled>
          <CardTitleStyled>Total:</CardTitleStyled>
          <PriceStyled>$ {totalPrice}</PriceStyled>
        </TotalStyled>{" "}
        <TitleStyled>
          <Submit
            onClick={() => {
              navigate("/validate");
              dispatch(toggleHiddenCART());
            }}
          >
            Iniciar pedido
          </Submit>
        </TitleStyled>
      </ModalContainerStyled>
    </>
  );
};

export default CartModal;
