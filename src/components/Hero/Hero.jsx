import React from "react";
import {
  HeroSeccionContainer,
  Herotext,
  HeroContainer,
  HeroButton,
} from "./HeroStyled";
import { Link } from "react-router-dom";
// import ImgHero from "../../assets/HeroImg2.svg";
const Hero = () => {
  return (
    <HeroSeccionContainer>
      <HeroContainer>
        <Herotext>
          <h1>Acompañamos con respeto y calidez en cada despedida</h1>
          <p>
            Brindamos orientación y apoyo para que puedas enfocarte en honrar
            la memoria de tus seres queridos.
          </p>
          <HeroButton as={Link} to="/Services">
            Conocer nuestros servicios
          </HeroButton>
        </Herotext>
       
      </HeroContainer>
    </HeroSeccionContainer>
  );
};

export default Hero;
