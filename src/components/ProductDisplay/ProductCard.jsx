import React from "react";
// import { useParams } from "react-router-dom";

import { CardWrapper, CardImage, CardTitle } from "./ProductStyles";
import { useDispatch } from "react-redux";
import { addtocart } from "../../redux/cart/Slice.Cart";
import ButtonCart from "../UI/Button/ButtonCart";

const ProductCard = ({ id, title, price, img, desc }) => {
  const dispatch = useDispatch();

  return (
    <CardWrapper>
      <CardImage src={img} alt={title} />
      <CardTitle>{title}</CardTitle>
      <CardTitle>{price}</CardTitle>
      <ButtonCart
        onClick={() => dispatch(addtocart({ id, title, price, img, desc }))}
      >
        Agregar
      </ButtonCart>
    </CardWrapper>
  );
};

export default ProductCard;
