import { BsPlusLg } from "react-icons/bs";
import { IoMdRemove } from "react-icons/io";
import Count from "../../UI/Count/Count";
import BtnItem from "../../UI/increase/Increase";

import {
  CardTitleStyled,
  PriceStyled,
  ProductContainerStyled,
  QuantityContainerStyled,
  TextContainerStyled,
} from "./modalStyles";
import { useDispatch } from "react-redux";
import { addtocart, removeFromCart } from "../../../redux/cart/Slice.Cart";

const ModalCartCard = ({ id, title, price, img, desc, quantity }) => {
  const dispatch = useDispatch();

  return (
    <ProductContainerStyled>
      <img src={img} alt={title} />
      <TextContainerStyled>
        <CardTitleStyled>{title}</CardTitleStyled>
        <PriceStyled>$ {price}</PriceStyled>
      </TextContainerStyled>
      <QuantityContainerStyled>
        <BtnItem>
          <IoMdRemove
            size={10}
            onClick={() => dispatch(removeFromCart(id, quantity))}
          />
        </BtnItem>
        <Count>{quantity}</Count>
        <BtnItem>
          <BsPlusLg
            size={10}
            onClick={() =>
              dispatch(addtocart({ id, title, price, img, desc, quantity }))
            }
          />
        </BtnItem>
      </QuantityContainerStyled>
    </ProductContainerStyled>
  );
};

export default ModalCartCard;
