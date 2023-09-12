import React from "react";
// import { useParams } from "react-router-dom";

import {
  ProductConten,
  ProductImage,
  ProductTitle,
  ProductWrapper,
} from "./ProductCardsStyles";
import { useDispatch } from "react-redux";
import { addtocart } from "../../redux/cart/Slice.Cart";
import ButtonCart from "../UI/Button/ButtonCart";

const Product = ({ img, title, price, id }) => {
  const dispatch = useDispatch();
  return (
    <ProductWrapper>
      <ProductConten>
        <ProductImage src={img} alt={title} />
        <ProductTitle>{title}</ProductTitle>
        <ProductTitle>{price}</ProductTitle>
        <ButtonCart onClick={() => dispatch(addtocart(img, title, price, id))}>
          Agregar
        </ButtonCart>
      </ProductConten>
    </ProductWrapper>
  );
};

export default Product;
