import React from "react";
import {
  Container,
  StepContent,
  TramiteContainer,
  ResultContainer,
  Paragraph,
} from "../UserProfile";
import Button from "../../UI/Button/Button";
const Seguros = () => {
  return (
    <Container>
      <TramiteContainer>
        <h1>
          Planificación del Funeral en Vida: Un Valioso Regalo para Tu Familia y
          Tú
        </h1>
      </TramiteContainer>{" "}
      <ResultContainer>
        <Paragraph>
          La planificación previa del funeral en vida es un regalo invaluable
          tanto para tu familia como para ti mismo. Es la manera más sencilla de
          asegurarte de que todo esté organizado y pagado cuando llegue el
          momento. Ya sea para ti o para tus seres queridos, este proceso te
          permite concentrarte en estar con tus seres queridos en un momento de
          despedida, en lugar de tomar decisiones difíciles.
        </Paragraph>
      </ResultContainer>
      <ResultContainer>
        <Paragraph>
          Liberar a la Familia: La planificación previa elimina la carga
          financiera y la toma de decisiones de tus seres queridos en un momento
          en el que están emocionalmente abrumados. Ayuda a evitar el desgaste
          emocional excesivo y les brinda la tranquilidad de saber que todo está
          en orden.
        </Paragraph>
      </ResultContainer>
      <ResultContainer>
        <Paragraph>
          <strong>Tranquilidad para Ti y Tus Seres Queridos:</strong> Este
          proceso te brinda la oportunidad de tener voz en la forma en que
          deseas ser despedido. También proporciona consuelo a tu familia en su
          duelo al darles tiempo para diseñar un homenaje de despedida que
          alivie su dolor y celebre tu vida de la manera que deseas.
        </Paragraph>{" "}
        <Paragraph>
          <strong> Facilidades de Pago:</strong> Entendemos que cada situación
          es única. Por eso, ponemos a disposición de nuestros clientes
          facilidades de pago que se adaptan a cada caso. Queremos que este
          servicio sea accesible para todos.
        </Paragraph>
      </ResultContainer>
      <StepContent>
        <Paragraph>¿Cómo Funciona?</Paragraph>
        <ul>
          <li>
            <strong>Un Servicio para Ti o para Tus Seres Queridos:</strong>{" "}
            Puedes contratar nuestro servicio, Electium, en cualquier momento,
            ya sea para ti o para tus familiares directos. Ofrecemos un servicio
            integral que cubre las etapas antes, durante y después de la
            defunción.
          </li>
          <hr />
          <li>
            <strong>Tú Decides Cómo Quieres que Sea la Despedida:</strong>
            Con la guía de un asesor personal, podrás dejar decididos todos los
            detalles del servicio para que la despedida sea exactamente como tú
            lo desees. Además, tienes la flexibilidad de modificar cualquier
            detalle en cualquier momento que lo necesites.
          </li>
          <hr />
          <li>
            <strong> Activación del Servicio con una Sola Llamada:</strong>
            Cuando llegue el momento, el servicio se activará con una sola
            llamada. Todo se desarrollará tal como lo elegiste. Tu voluntad es
            nuestro compromiso, y estamos aquí para brindarte apoyo y cumplir
            con tus deseos.
          </li>
        </ul>
      </StepContent>
      <Paragraph>
        La planificación previa del funeral en vida es una forma de aliviar el
        estrés y la carga emocional de tus seres queridos en un momento difícil.
        Además, te permite asegurarte de que tu despedida se lleve a cabo de la
        manera que deseas. Contáctanos hoy mismo para obtener más información
        sobre cómo puedes planificar tu futuro y el de tus seres queridos con
        tranquilidad. Tu bienestar y paz mental son nuestra prioridad.
      </Paragraph>
      <Button>Contáctanos</Button>
    </Container>
  );
};

export default Seguros;
