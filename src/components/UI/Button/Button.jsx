import React from "react";
import { ButtonStyle } from "./ButtonStyled";
import { FiPhoneCall } from "react-icons/fi";

import { motion } from "framer-motion";
const Button = ({ children, disabled = false }) => {
  return (
    <ButtonStyle disabled={disabled}>
      <motion.div
        whileTap={{ scale: 1.1, color: "green", transition: { duration: 0.2 } }}
      >
        <a
          className="whatsapp-btn" // Asegúrate de tener estilos CSS para este nombre de clase
          href="https://api.whatsapp.com/send?text=Buen%20día%20quisiera%20consultar%20sobre%20&amp;phone=5491140254010"
          target="_blank"
          title="Chatea con Nosotros"
        >
          <FiPhoneCall size={16} style={{ marginRight: "8px" }} />
          {children}
        </a>
      </motion.div>
    </ButtonStyle>
  );
};

export default Button;
