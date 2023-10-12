import React from "react";
import {
  Container,
  Title,
  Step,
  StepIcon,
  Paragraph,
  StepContentContact,
} from "../UserProfile";
import Button from "../../UI/Button/Button";
import {
  FaCertificate,
  FaPhone,
  FaFileAlt,
  FaMoneyBillAlt,
  FaFileSignature,
} from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";
const QueHacerAnteUnaDefuncion = () => {
  return (
    <Container>
      <Title>Pasos más importantes tras una defunción</Title>
      <Step>
        <StepIcon>
          <FaCertificate color="white" />
        </StepIcon>
        <Paragraph>Obtener el Certificado de Defunción</Paragraph>
        <Paragraph>
          El primer paso es obtener el certificado de defunción, que se emite en
          el hospital, la funeraria o el registro civil. Este documento es
          esencial para realizar otros trámites legales y organizativos
        </Paragraph>
      </Step>
      <Step>
        <StepIcon>
          <FaPhone color="white" />
        </StepIcon>
        <Paragraph>Contactar a una Funeraria</Paragraph>
        <Paragraph>
          Contacta a una funeraria para organizar los detalles del entierro o la
          cremación. La funeraria te ayudará a preparar el cuerpo, elegir un
          ataúd o urna y coordinar la ceremonia fúnebre.
        </Paragraph>
        <StepContentContact>
          <p>Te atendemos 24 hs </p>
          <Button>Lamanos</Button>
        </StepContentContact>
      </Step>
      <Step>
        <StepIcon>
          <FaFileAlt color="white" />
        </StepIcon>
        <Paragraph>Notificar a las Autoridades y Personas Relevantes</Paragraph>
        <Paragraph>
          Notifica a las autoridades locales sobre la defunción si es necesario
          según las regulaciones locales. Además, informa a familiares, amigos y
          personas cercanas sobre el fallecimiento y organiza la asistencia a la
          ceremonia fúnebre.
        </Paragraph>
      </Step>
      <Step>
        <StepIcon>
          <FaMoneyBillAlt color="white" />
        </StepIcon>
        <Paragraph>Gestionar los Bienes del Fallecido</Paragraph>
        <Paragraph>
          Administra los bienes del fallecido, que incluyen cuentas bancarias,
          propiedades y otros activos. Puede ser necesario liquidar cuentas,
          pagar deudas y transferir propiedades de acuerdo con las leyes de
          sucesión aplicables.
        </Paragraph>
      </Step>
      <Step>
        <StepIcon>
          <FaFileSignature color="white" />
        </StepIcon>
        <Paragraph>Revisar Documentos Legales y Trámites de Seguros</Paragraph>
        <Paragraph>
          Revise el testamento del fallecido y otros documentos legales
          relevantes, como pólizas de seguros y contratos financieros.
          Comunícate con las compañías de seguros para iniciar el proceso de
          reclamación y cubrir gastos relacionados con la defunción.
        </Paragraph>
      </Step>
    </Container>
  );
};

export default QueHacerAnteUnaDefuncion;
