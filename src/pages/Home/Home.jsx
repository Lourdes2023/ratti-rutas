import Hero from "../../components/Hero/Hero";
import {
  AboutStyledContainer,
  ContactStyledContainer,
  HeroSeccionContainer,
  HomeContainer,
  ServicesStylesContainer,
} from "./Homestyled";
import About from "../../components/About/About";
import Contact from "../../components/Contact/Contact";
import Services from "../../components/Services/Services";

const Home = () => {
  return (
    <HomeContainer>
      <HeroSeccionContainer>
        <Hero />
      </HeroSeccionContainer>
      <hr />
      <AboutStyledContainer>
        <h3>Sobre Nosotros</h3>

        <About />
      </AboutStyledContainer>
      <ServicesStylesContainer>
        <h3>Nuestros Servicios</h3>
        <Services />{" "}
      </ServicesStylesContainer>

      <ContactStyledContainer>
        <h3>Contacta a Nuestro Equipo</h3>
        <Contact />
        <h3>Envianos tu Consulta</h3>
      </ContactStyledContainer>
    </HomeContainer>
  );
};

export default Home;
