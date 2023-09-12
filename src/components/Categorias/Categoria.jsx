import { motion } from "framer-motion";

import {
  CategoryContainer,
  CategoryImage,
  CategoryTitle,
  CategoryConten,
} from "./CategoriaStyles";
import { useSelector, useDispatch } from "react-redux";
import { selectCategorias } from "../../redux/categorias/categoriesSlice";
const Categoria = ({ img, category }) => {
  const { selectedCategory } = useSelector((state) => state.categorias);
  const dispatch = useDispatch();

  return (
    <motion.div whileHover={{ scale: 1.05 }}>
      <CategoryContainer
        selected={category === selectedCategory}
        onClick={() => dispatch(selectCategorias(category))}
      >
        <CategoryConten>
          <CategoryImage src={img} alt={category} />
          <CategoryTitle>{category}</CategoryTitle>
        </CategoryConten>
      </CategoryContainer>
    </motion.div>
  );
};

export default Categoria;
