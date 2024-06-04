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
        <hr />
        <About />
        <br />
        <h3>Nuestros Servicios</h3>
        <hr />
        <Services />{" "}
      </AboutStyledContainer>
      <hr />
      <ContactStyledContainer>
        <h3> Envianos tus consultas</h3>
        <Contact />
      </ContactStyledContainer>
    </HomeContainer>
  );
};

export default Home;
