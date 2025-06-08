import React from "react";
// import { useParams } from "react-router-dom";

import {
  ProductContent,
  ProductImage,
  ProductTitle,
  ProductWrapper,
  ProductButton,
} from "./ProductCardsStyles";
import { useDispatch } from "react-redux";
import { addtocart } from "../../redux/cart/Slice.Cart";

const Product = ({ id, title, price, img, desc }) => {
  const dispatch = useDispatch();

  return (
    <ProductWrapper>
      <ProductContent>
        <ProductImage src={img} alt={title} />
        <ProductTitle>{title}</ProductTitle>
        <ProductTitle>{price}</ProductTitle>
        <ProductButton
          onClick={() => dispatch(addtocart({ id, title, price, img, desc }))}
        >
          Comprar
        </ProductButton>
      </ProductContent>
    </ProductWrapper>
  );
};

export default Product;
