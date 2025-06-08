import React from "react";
import {
  CategoryStyledContainer,
  ProductsStyledContainer,
} from "./ProductsStyles";
import ProductGrid from "../../components/ProductDisplay/ProductGrid";
import Categorias from "../../components/Categorias/Categorias";
export const Products = () => {
  return (
    <>
      <CategoryStyledContainer>
        <h3>Seleccione Categoria</h3>
        <Categorias /> 
        <ProductGrid />
      </CategoryStyledContainer>
     
    </>
  );
};
export default Products;
