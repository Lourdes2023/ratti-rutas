import React from "react";
import { motion } from "framer-motion";
// import { useParams } from "react-router-dom";

import {
  ProductContent,
  ProductImage,
  ProductTitle,
  ProductPrice,
  ProductWrapper,
} from "./ProductCardsStyles";
import { useDispatch } from "react-redux";
import { addtocart } from "../../redux/cart/Slice.Cart";
import ButtonCart from "../UI/Button/ButtonCart";

const Product = ({ id, title, price, img, desc }) => {
  const dispatch = useDispatch();

  return (
    <ProductWrapper as={motion.div} whileHover={{ scale: 1.02 }}>
      <ProductContent>
        <ProductImage src={img} alt={title} />
        <ProductTitle>{title}</ProductTitle>
        <ProductPrice>${price}</ProductPrice>
        <ButtonCart
          onClick={() => dispatch(addtocart({ id, title, price, img, desc }))}
        >
          Agregar
        </ButtonCart>
      </ProductContent>
    </ProductWrapper>
  );
};

export default Product;
