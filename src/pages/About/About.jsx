import React from "react";
import {
  AboutStylesContainer,
  AboutContainer,
  AboutSectionConten,
} from "./AboutStyled";
import Imagen4 from "../../assets/9.svg";
import Imagen5 from "../../assets/2.svg";
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
          </div>
          <div className="AboutImage">
            <img src={Imagen4} alt="imagen4" style={{ borderRadius: "12px" }} />
          </div>
        </AboutSectionConten>

        <AboutSectionConten>
          <div className="AboutImage">
            <img src={Imagen5} alt="imagen4" style={{ borderRadius: "12px" }} />
          </div>
          <div className="AboutText">
            <h2>Misión</h2>
            <p>
              Nuestra misión es ayudar a que cada familia pueda despedirse de su
              ser querido de una manera digna y respetuosa, al mismo tiempo que
              les brindamos apoyo durante este difícil proceso. Sabemos que
              nuestro trabajo es esencial para ayudar a las familias a superar
              la pérdida y estamos orgullosos de poder hacerlo.
            </p>
          </div>
        </AboutSectionConten>
      </AboutContainer>
    </AboutStylesContainer>
  );
};

export default About;
