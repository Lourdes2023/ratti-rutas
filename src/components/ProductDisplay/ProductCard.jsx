import React from "react";
// import { useParams } from "react-router-dom";

import {
  ProductContent,
  ProductImage,
  ProductTitle,
  ProductWrapper,
} from "./ProductStyles";
import { useDispatch } from "react-redux";
import { addtocart } from "../../redux/cart/Slice.Cart";
import ButtonCart from "../UI/Button/ButtonCart";

const ProductCard = ({ id, title, price, img, desc }) => {
  const dispatch = useDispatch();

  return (
    <ProductWrapper>
      <ProductContent>
        <ProductImage src={img} alt={title} />
        <ProductTitle>{title}</ProductTitle>
        <ProductTitle>{price}</ProductTitle>
        <ButtonCart
          onClick={() => dispatch(addtocart({ id, title, price, img, desc }))}
        >
          Agregar
        </ButtonCart>
      </ProductContent>
    </ProductWrapper>
  );
};

export default ProductCard;
