import { BsPlusLg } from "react-icons/bs";
import { IoMdRemove } from "react-icons/io";
import Count from "../../UI/Count/Count";
import Increase from "../../UI/increase/Increase";

import {
  CardTitleStyled,
  PriceStyled,
  ProductContainerStyled,
  QuantityContainerStyled,
  TextContainerStyled,
} from "./modalStyles";

const ModalCartCard = ({ img, title, price, quantity }) => {
  return (
    <ProductContainerStyled>
      <img src={img} alt={title} />
      <TextContainerStyled>
        <CardTitleStyled>{title}</CardTitleStyled>
        <PriceStyled>{price}</PriceStyled>
      </TextContainerStyled>
      <QuantityContainerStyled>
        <Increase>
          <IoMdRemove />
        </Increase>
        <Count>{quantity}</Count>
        <Increase>
          <BsPlusLg />
        </Increase>
      </QuantityContainerStyled>
    </ProductContainerStyled>
  );
};

export default ModalCartCard;
