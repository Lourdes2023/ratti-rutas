import React from "react";
import {
  TramiteContainer,
  Title,
  Paragraph,
  Container,
  StepContent,
  StepContentContact,
} from "../UserProfile";

import {
  FaUserCheck,
  FaTasks,
  FaUserTie,
  FaFileAlt,
  FaBalanceScale,
  FaClipboard,
} from "react-icons/fa";
const TramitePostFuneral = () => {
  return (
    <TramiteContainer>
      <Container>
        <Title>¿Qué sigue después del funeral ?</Title>
        <FaClipboard size={20} color="#718096" />
        <Paragraph>
          Una vez realizada la ceremonia de despedida, comprendemos que es un
          momento difícil y lleno de emociones. En ese momento, te ofrecemos
          nuestro apoyo integral para que puedas centrarte en recuperar la
          normalidad. En <i>Cocheria Ratti</i>, sabemos lo que te conviene y te
          brindamos una serie de servicios para facilitar este proceso de
          pepeleo.
        </Paragraph>
      </Container>
      <Container>
        <Title>Asesoramiento Profesional</Title>
        <Paragraph>
          Nuestro equipo de expertos está aquí para proporcionarte asesoramiento
          en cada paso del camino:
        </Paragraph>{" "}
        <FaUserTie size={20} color=" #718096" />
      </Container>
      <StepContent>
        <StepContentContact>
          <Paragraph>
            <strong>Entendimiento de la Situación Económica:</strong> <hr />{" "}
            <br />
            Te ayudamos a comprender la situación económica actual en Argentina,
            las obligaciones tributarias que puedan surgir y cómo proceder para
            acceder a la disposición de bienes de manera eficiente.
          </Paragraph>{" "}
          <FaUserCheck size={20} color=" #718096" />
        </StepContentContact>
        <StepContentContact>
          <Paragraph>
            <strong>Estudio de Viabilidad de Prestaciones:</strong> <hr />{" "}
            <br />
            Realizamos un estudio detallado de las prestaciones en el Instituto
            Nacional de Servicios Sociales para Jubilados y Pensionados (INSSJP)
            y clases pasivas para asegurarnos de que obtengas todos los
            beneficios a los que tienes derecho.
          </Paragraph>
          <FaTasks size={20} color=" #718096" />
        </StepContentContact>
        <StepContentContact>
          <Paragraph>
            <strong>Resolución de Dudas y Árbol Sucesorio:</strong> <hr />{" "}
            <br />
            Resolvemos todas tus dudas y te ayudamos a definir el árbol
            sucesorio de acuerdo con las leyes argentinas para que el proceso de
            sucesión sea claro y ordenado.
          </Paragraph>
          <FaFileAlt size={20} color="#718096" />
        </StepContentContact>

        <StepContentContact>
          <Paragraph>
            <strong>Asesoría sobre la Masa Hereditaria:</strong> <hr /> <br />
            Te proporcionamos asesoría detallada sobre los bienes de la masa
            hereditaria, las obligaciones y los plazos que debes cumplir según
            las normativas argentinas.
          </Paragraph>
          <FaBalanceScale size={20} color="#718096" />
        </StepContentContact>
        <StepContentContact>
          <Paragraph>
            <strong>Información sobre Otras Gestiones:</strong> <hr /> <br />{" "}
            Además de los aspectos legales, te informamos sobre cualquier otra
            gestión necesaria en Argentina para que no te pierdas ningún detalle
            importante.
          </Paragraph>
          <FaClipboard size={20} color="#718096" />
        </StepContentContact>
      </StepContent>
      <StepContent>
        {" "}
        <Title>Olvida el Papeleo, Nosotros lo Gestionamos</Title>
        <Paragraph>
          Nos encargamos de toda la gestión documental necesaria para facilitar
          el proceso en Argentina:
        </Paragraph>
        <ul>
          <li>
            <Paragraph>
              <strong>Certificados Esenciales:</strong> Obtendremos para ti los
              certificados más importantes, como el certificado literal de
              defunción, el certificado de últimas voluntades, el certificado de
              contrato de seguros con cobertura de fallecimiento y el
              certificado de matrimonio/nacimiento cuando sea necesario.
            </Paragraph>
          </li>
        </ul>
      </StepContent>
    </TramiteContainer>
  );
};

export default TramitePostFuneral;
