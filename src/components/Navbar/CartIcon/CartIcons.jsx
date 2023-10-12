import { ImCart } from "react-icons/im";

import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { toggleHiddenCART } from "../../../redux/cart/Slice.Cart";
import { CartIconStyles, CountCart } from "./CartIconsStyles";

const CartIcon = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);
  const cartItemsCount = cartItems.reduce(
    (accumulator, cartItem) => accumulator + cartItem.quantity,
    0
  );
  console.log(cartItemsCount);
  return (
    <CartIconStyles onClick={() => dispatch(toggleHiddenCART())}>
      <ImCart />
      <CountCart>{cartItemsCount}</CountCart>
    </CartIconStyles>
  );
};

export default CartIcon;
