import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { ProductContainer, ProductWrapper } from "./ProductCardsStyles";
import Product from "./Product";
import ButtonCart from "../UI/Button/ButtonCart";
import { ButtonContainerStyle } from "../UI/Button/ButtonStyled";
import { LIMITE_INICIAL } from "../../utilidades/constants";

const ProductsCard = () => {
  const [limit, setlimit] = useState(LIMITE_INICIAL);
  let products = useSelector((state) => state.products.products);
  const { selectedCategory } = useSelector((state) => state.categorias);
  const totalProduct = useSelector((state) => state.products.totalProducts);
  if (selectedCategory) {
    products = { [selectedCategory]: products[selectedCategory] };
  }
  useEffect(() => {
    setlimit(LIMITE_INICIAL);
  }, [selectedCategory]);
  console.log("products:", products);
  console.log("selectedCategory:", selectedCategory);
  console.log("totalProduct:", totalProduct);
  console.log("limit:", limit);
  return (
    <>
      <ProductContainer>
        <ProductWrapper>
          {Object.entries(products).map(([, flowers]) => {
            return flowers.map((flower) => {
              if (limit >= flower.id || selectedCategory) {
                return <Product {...flower} key={flower.id} />;
              }
              return null;
            });
          })}
        </ProductWrapper>
      </ProductContainer>
      {!selectedCategory && (
        <ButtonContainerStyle>
          <ButtonCart
            disabled={LIMITE_INICIAL === limit}
            onClick={() => setlimit((prevLimit) => prevLimit - LIMITE_INICIAL)}
          >
            Ver menos
          </ButtonCart>
          <ButtonCart
            disabled={totalProduct <= limit}
            onClick={() => setlimit((prevLimit) => prevLimit + LIMITE_INICIAL)}
          >
            Ver más
          </ButtonCart>
        </ButtonContainerStyle>
      )}
    </>
  );
};

export default ProductsCard;
