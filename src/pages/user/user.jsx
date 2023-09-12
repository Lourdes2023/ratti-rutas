import React from "react";
import { useParams } from "react-router-dom";

const containerStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  minHeight: "80vh",
  backgroundColor: "#664a4a",
  borderRadius: "12px",
};

const contentStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  backgroundColor: "#ffffff",
  borderRadius: "8px",
  padding: "20px",
  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
  maxWidth: "600px",
  width: "100%",
};

const titleStyle = {
  fontSize: "24px",
  marginBottom: "10px",
};

function User() {
  const { username } = useParams();

  return (
    <div style={containerStyle}>
      <div style={contentStyle}>
        <h1 style={titleStyle}>¡Gracias {username} por contactarnos!</h1>
        <p>
          Nos pondremos en contacto contigo pronto para responder a tus
          consultas y brindarte la información que necesitas.
        </p>
      </div>
    </div>
  );
}

export default User;
