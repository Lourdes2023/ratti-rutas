import { HiOutlineShoppingCart } from "react-icons/hi";

import { useDispatch } from "react-redux";
import { toggleHiddenCART } from "../../../redux/cart/Slice.Cart";
import { CartIconStyles } from "./CartIconsStyles";

const CartIcon = () => {
  const dispatch = useDispatch();
  return (
    <CartIconStyles onClick={() => dispatch(toggleHiddenCART())}>
      <HiOutlineShoppingCart />
    </CartIconStyles>
  );
};

export default CartIcon;
