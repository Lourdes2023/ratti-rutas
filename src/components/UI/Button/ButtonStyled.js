import { styled } from "styled-components";
import { motion } from "framer-motion";

export const ButtonStyle = styled(motion.button)`
  display: inline-block;
  background-image: var(--color-buttonLogin-bg-hover);
  border-radius: 18px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  font-size: 16px;
  text-align: center;
  padding: 14px;
  cursor: pointer;
  color: var(--color-button-text);
  font-weight: 600;
  &:hover {
    background-image: var(--color-buttonLogin-bg);
    transform: scale(1.1);
  }
  @media (max-width: 980px) {
    font-size: 18px;
    padding: 8px;
  }
`;

export const ButtonContainerStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
  gap: 20px;
  cursor: pointer;
`;

export const ButtonStylesCart = styled(motion.button)`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--color-bordo-profundo);
  border: 1px solid var(--color-brown-earth);
  margin: 0;
  border-radius: 18px;
  text-align: center;
  padding: 18px;
  height: 40px;
  width: 120px;
  color: var(--color-crema-claro);
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;

  &:hover {
    background-color: var(--color-sage-green);
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }

  @media (max-width: 980px) {
    font-size: 14px;
    padding: 8px 16px;
    width: 100px;
  }
`;
