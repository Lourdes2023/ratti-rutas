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
            DEJANOS CUIDARLO TODO <span>CONTACTANOS</span>
          </h1>

          <p>
            Desde el primer momento en que nos llamas, nos encargamos de los
            trámites esenciales para dar inicio al servicio que corresponde.
          </p>
        </Herotext>
        <Button>LLAMANOS</Button>
      </HeroContainer>
    </HeroSeccionContainer>
  );
};

export default Hero;
