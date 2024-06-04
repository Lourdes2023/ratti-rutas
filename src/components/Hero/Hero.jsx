import React from "react";
import {
  HeroSeccionContainer,
  Herotext,
  HeroContainer,
  // Heroimg,
} from "./HeroStyled";
import Button from "../UI/Button/Button";
// import ImgHero from "../../assets/HeroImg2.svg";
const Hero = () => {
  return (
    <HeroSeccionContainer>
      <HeroContainer>
        <Herotext>
          <h1>
            DEJANOS CUIDARLO TODO CONTACTANOS
          </h1>

          <p>
            Desde el primer momento en que nos llamas, nos encargamos de los
            trámites esenciales para dar inicio al servicio que corresponde.
          </p> 
          <Button>Llamar</Button>
        </Herotext>
       
      </HeroContainer>
    </HeroSeccionContainer>
  );
};

export default Hero;
