import styled from "styled-components";
import { motion } from "framer-motion";

export const BtnItemStyled = styled(motion.button)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  background-color: var(--color-Logo-text);
  border: none;
  border-radius: 8px;
  font-size: 12px;
  color: white;
  cursor: pointer;
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
  &:hover {
    background-color: var(--color-button-cart);
  }
`;
