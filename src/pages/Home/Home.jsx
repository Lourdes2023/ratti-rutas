import Hero from "../../components/Hero/Hero";
import {
  CategoryStyledContainer,
  HomeContainer,
  ProductStyledContainer,
} from "./Homestyled";
import About from "../../components/About/About";
import Contact from "../../components/Contact/Contact";
import Services from "../../components/Services/Services";
import Categorias from "../../components/Categorias/Categorias";
import { CategoryWrapper } from "../../components/Categorias/CategoriaStyles";
import ProductsCart from "../../components/Product/ProductCards";
const Home = () => {
  return (
    <HomeContainer>
      <Hero />
      <h3>Sobre Nosotros</h3>
      <About />
      <h3>Nuestros Servicios</h3>
      <Services />{" "}
      <CategoryStyledContainer>
        <CategoryWrapper>
          <h3>Nuestras Categorías</h3>
          <Categorias />
        </CategoryWrapper>
      </CategoryStyledContainer>
      <ProductStyledContainer>
        <h3>Flores de condolencias</h3>
        <ProductsCart />
      </ProductStyledContainer>
      <h3>Contacta a Nuestro Equipo</h3>
      <Contact />
      <h3>Envianos tu Consulta</h3>
    </HomeContainer>
  );
};

export default Home;
