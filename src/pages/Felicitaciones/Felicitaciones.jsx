import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { PiFlowerThin } from "react-icons/pi";
import { motion } from "framer-motion";

const Container = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f5f5f5;
  .box {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: transparent;
    margin-bottom: 1rem;
  }
`;

const Title = styled.h1`
  display: flex;
  justify-content: center;
  font-size: 3rem;
  margin-bottom: 1rem;
  color: var(--color-primary-blue);

  @media screen and (max-width: 768px) {
    font-size: 2rem;
  }

  @media screen and (max-width: 480px) {
    font-size: 1.2rem;
  }
`;

const Text = styled.p`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: var(--color-secondary-blue);
`;

const Felicitaciones = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      console.log("Redirigiendo...");
      navigate("/Orders");
    }, 3000);
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <Container>
      <Title> Felicitaciones ha realizado una compra exitosa!</Title>
      <Container
        className="box"
        animate={{
          scale: [1, 2, 2, 1, 1],
          rotate: [0, 0, 180, 180, 0],
          borderRadius: ["0%", "0%", "50%", "50%", "0%"],
        }}
        transition={{
          duration: 2,
          ease: "easeInOut",
          times: [0, 0.2, 0.5, 0.8, 1],
          repeat: Infinity,
          repeatDelay: 1,
        }}
      >
        <PiFlowerThin size={70} color=" #219ebc " />
      </Container>

      <Text>Gracias por confiar en Ratti!</Text>
    </Container>
  );
};

export default Felicitaciones;
