import { styled } from "styled-components";
import { motion } from "framer-motion";

export const ButtonStyle = styled(motion.button)`
  display: inline-block;
  background: var(--color-buttonEm-bg);
  border-radius: 50px;
  border-right: 1px solid white;
  display: inline-block;
  box-shadow: 0 0 15px rgba(0, 168, 89, 0.7);
  font-size: 20px;
  text-align: center;
  padding: 20px;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background: var(--color-buttonEm-bg-hover);
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
  gap: 30px;
  cursor: pointer;
  height: 50px;
  background-image: var(--color--back--category);
  width: 100%;
  border: 1px solid;
`;
export const ButtonStylesCart = styled(motion.button)`
  display: inline-block;
  background: var(--color-backg-contact);
  border-radius: 15px;
  border: none;
  text-align: center;
  padding: 10px;
  height: 40px;
  width: 90px;
  color: var(--color-text-contact);
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background: var(--color-button-hoverCart);
    color: var(--color-button-text);
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
  @media (max-width: 980px) {
    font-size: 18px;
    padding: 8px;
  }
`;
