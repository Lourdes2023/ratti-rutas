import { useSelector } from "react-redux";
import Categoria from "./Categoria";
import { CategoryContainer } from "./CategoriaStyles";
export const Categorias = () => {
  const { categorias } = useSelector((state) => state.categorias);

  return (
    <CategoryContainer>
      {categorias.map((category) => {
        return <Categoria {...category} key={category.id} />;
      })}
    </CategoryContainer>
  );
};
export default Categorias;
