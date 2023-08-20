import React from "react";
import { HeroContainer, HeroImg, Herotext } from "./Hero";
import image2 from "../../assets/heroImg.svg";

const Home = () => {
  return (
    <HeroContainer>
      <Herotext>
        {" "}
        <h1>
          DEJANOS CUIDARLO TODO
          <br />
          <span className="gradient-text">
            {" "}
            <i>CONTÁCTANOS</i>
          </span>
        </h1>
        <span>
          Desde el primer momento en que nos llamas, nos encargamos de los
          trámites esenciales para dar inicio al servicio que corresponde.
        </span>
        <div style={{ padding: "14px" }}>
          {" "}
          {/* <Button>Urgencias 24hs</Button> */}
        </div>
      </Herotext>{" "}
      <HeroImg>
        <img
          src={image2}
          alt="imagen2"
          style={{ width: "100%", borderRadius: "12px" }}
        />
        <p>
          <i>
            Las palabras pueden no ser suficientes, por eso estamos aquí para
            brindarte nuestros servicios y productos que estan cuidadosamente
            diseñada para honrar la memoria de tus seres queridos
          </i>
        </p>
      </HeroImg>
    </HeroContainer>
  );
};

export default Home;
