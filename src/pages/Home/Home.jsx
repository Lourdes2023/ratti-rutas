import Hero from "../../components/Hero/Hero";
import {
  AboutStyledContainer,
  ContactStyledContainer,
  HeroSeccionContainer,
  HomeContainer,

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
      <AboutStyledContainer>
        <About />
        <Services />{" "}
      </AboutStyledContainer>
   
      <ContactStyledContainer>
        <Contact />
      </ContactStyledContainer>
    </HomeContainer>
  );
};

export default Home;
