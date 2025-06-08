import { motion } from "framer-motion";

import {
  CategoryItem,
  CategoryCard,
  CategoryImage,
  CategoryTitle,
} from "./CategoriaStyles";
import { useSelector, useDispatch } from "react-redux";
import { selectCategorias } from "../../redux/categorias/categoriesSlice";
const Categoria = ({ img, category }) => {
  const { selectedCategory } = useSelector((state) => state.categorias);
  const dispatch = useDispatch();

  return (
    <motion.div whileHover={{ scale: 1.05 }}>
      <CategoryItem
        selected={category === selectedCategory}
        onClick={() => dispatch(selectCategorias(category))}
      >
        <CategoryCard>
          <CategoryImage src={img} alt={category} />
          <CategoryTitle>{category}</CategoryTitle>
        </CategoryCard>
      </CategoryItem>
    </motion.div>
  );
};

export default Categoria;
