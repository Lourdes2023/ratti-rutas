import React from "react";
import {
  AboutStylesContainer,
  AboutContainer,
  AboutSectionConten,
  AboutButton,
} from "./AboutStyled";
import Imagen4 from "../../assets/9.svg";
const About = () => {
  return (
    <AboutStylesContainer>
      <AboutContainer>
        <AboutSectionConten>
          <div className="AboutText">
            <h2>Nosotros</h2>
          <p>
            En nuestra funeraria, somos una familia comprometida con nuestra
            comunidad. Nos aseguramos de ofrecer un servicio personalizado y
            cálido, para que cada familia se sienta apoyada y cuidada en todo
            momento. A pesar de que solo llevamos tres años en el negocio,
            estamos decididos a seguir trabajando por muchos más años, siempre
            con la misma pasión y compromiso por ayudar a las familias que
            necesiten de nuestros servicios.
          </p>
          <AboutButton href="#">Ver más</AboutButton>
        </div>
          <div className="AboutImage">
            <img src={Imagen4} alt="imagen4" style={{ borderRadius: "12px" }} />
          </div>
        </AboutSectionConten>
      </AboutContainer>
    </AboutStylesContainer>
  );
};

export default About;
