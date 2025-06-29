import {
  ContactContainer,
  InfoContainer,
  WhatsAppLink,
  DataContactContainer,
} from "./ContactStyled";
import ForContact from "../Form/Form";
import { FaPhone, FaMobile, FaWhatsapp } from "react-icons/fa";

function Contact() {
  return (
    <ContactContainer>
      <InfoContainer>
        <WhatsAppLink>
          <h1>¡Estamos aquí para Atenderte!</h1>
          <p>
            No dudes en ponerte en contacto con nosotros.
            <br /> Estamos listos para asistirte.
          </p>
          <DataContactContainer>
            <p>
              <FaPhone style={{ color: "var(--color-bordo-profundo)" }} /> <a href="tel:+541160832758">Tel: 11 6083-2758</a>
            </p>
            <p>
              <FaMobile style={{ color: "var(--color-bordo-profundo)" }} /> <a href="tel:+541140254010">Cel: 11 4025-4010</a>
            </p>
            <p>
              <FaWhatsapp style={{ color: "var(--color-bordo-profundo)" }} />
              <a
                className="whatsapp-btn"
                href="https://api.whatsapp.com/send?text=Buen%20día%20quisiera%20consultar%20sobre%20&amp;phone=5491140254010"
                target="_blank"
                title="Chatea con Nosotros"
              >
                Envianos un mensaje
              </a>
            </p>
            <p>
              Int. Carlos Ratti 1402, Ituzaingó.
              <br /> Provincia de Buenos Aires.
            </p>
          </DataContactContainer>
        </WhatsAppLink>
      </InfoContainer>
      <ForContact />
    </ContactContainer>
  );
}

export default Contact;
