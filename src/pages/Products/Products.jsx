import React from "react";
import { ProductsPageContainer } from "./ProductsStyles";
import ProductGrid from "../../components/ProductDisplay/ProductGrid";
import Categorias from "../../components/Categorias/Categorias";
export const Products = () => {
  return (
    <>
      <ProductsPageContainer>
        <h3>Seleccione Categoria</h3>
        <Categorias />
        <ProductGrid />
      </ProductsPageContainer>
     
    </>
  );
};
export default Products;
