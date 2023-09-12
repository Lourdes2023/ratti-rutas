import {
  ContactContainer,
  InfoContainer,
  WhatsAppLink,
  DataContactContainer,
} from "./ContactStyled";
import { FaPhone, FaMobile, FaWhatsapp } from "react-icons/fa";
import { BiChevronDownCircle } from "react-icons/bi";

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
            <BiChevronDownCircle
              style={{ fontSize: "30px", color: "#ffffffc0" }}
            />
            <p>
              <FaPhone /> <a href="tel:+541160832758">Tel: 11 6083-2758</a>
            </p>
            <p>
              <FaMobile /> <a href="tel:+541140254010">Cel: 11 4025-4010</a>
            </p>
            <p>
              <FaWhatsapp />
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
    </ContactContainer>
  );
}

export default Contact;
