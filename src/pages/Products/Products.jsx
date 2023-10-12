import React from "react";
import {
  CategoryStyledContainer,
  ProductsStyledContainer,
} from "./ProductsStyles";
import ProductsCard from "../../components/CardProductos/ProductCards";
import Categorias from "../../components/Categorias/Categorias";
export const Products = () => {
  return (
    <>
      <CategoryStyledContainer>
        <h3>Seleccione Categoria</h3>
        <Categorias />
      </CategoryStyledContainer>
      <ProductsStyledContainer>
        <h3>Nuestros productos</h3>
        <ProductsCard />
      </ProductsStyledContainer>
    </>
  );
};
export default Products;
