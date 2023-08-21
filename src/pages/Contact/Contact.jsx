import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Importa el hook useNavigate si no está importado
import {
  ContactContainer,
  InfoContainer,
  WhatsAppLink,
  ContactForm,
  ContactTitle,
  ContactForLabel,
  ContactFormInput,
  ContactFormTextarea,
  SubmitButton,
} from "./ContactStyled";

const initialValue = {
  username: "",
  userEmail: "",
  phoneNumber: "",
  userQuery: "",
};

function Contact() {
  const [form, setForm] = useState(initialValue);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !form.username.trim() ||
      !form.userEmail.trim() ||
      !form.phoneNumber.trim() ||
      !form.userQuery.trim()
    ) {
      alert("Complete los datos");
      return;
    }

    setForm(initialValue);
    navigate(`/User/${form.username}`);
  };

  return (
    <ContactContainer>
      <InfoContainer>
        <h2>Contacta a Nuestro Equipo</h2>
        <WhatsAppLink>
          <h1>¡Estamos aquí para Atenderte!</h1>
          <p>
            No dudes en ponerte en contacto con nosotros. Estamos listos para
            asistirte.
          </p>
          <a
            className="whatsapp-btn"
            href="https://api.whatsapp.com/send?text=Buen%20día%20quisiera%20consultar%20sobre%20&amp;phone=5491140254010"
            target="_blank"
            title="Chatea con Nosotros"
          >
            <img
              src="https://irp.cdn-website.com/738820e6/dms3rep/multi/Whatsapp_Icon2.png"
              border="0"
              style={{ width: "60px" }}
              alt="WhatsApp Icon"
            />
          </a>
        </WhatsAppLink>

        <ContactForm>
          <ContactTitle>Formulario de Contacto</ContactTitle>

          <ContactForLabel>Nombre:</ContactForLabel>
          <ContactFormInput
            type="text"
            placeholder="Username"
            id="username"
            name="username"
            value={form.username}
            onChange={handleChange}
          />

          <ContactForLabel>Email:</ContactForLabel>
          <ContactFormInput
            type="email"
            value={form.userEmail}
            name="userEmail"
            onChange={handleChange}
          />

          <ContactForLabel>Número de Teléfono:</ContactForLabel>
          <ContactFormInput
            type="tel"
            value={form.phoneNumber}
            name="phoneNumber"
            onChange={handleChange}
          />

          <ContactForLabel>Consulta:</ContactForLabel>
          <ContactFormTextarea
            value={form.userQuery}
            name="userQuery"
            onChange={handleChange}
            rows={5}
          />

          <SubmitButton onClick={handleSubmit}>Enviar</SubmitButton>
        </ContactForm>

        <p>Int. Carlos Ratti 1402, Ituzaingó, Provincia de Buenos Aires</p>
      </InfoContainer>
    </ContactContainer>
  );
}

export default Contact;
