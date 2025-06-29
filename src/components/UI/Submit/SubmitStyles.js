import styled from "styled-components";

import { motion } from "framer-motion";

export const SubmitButton = styled(motion.button)`
  background: var(--color-bordo-profundo);
  color: var(--color-crema-claro);
  padding: 10px 20px;
  border: none;
  border-radius: 20px;
  font-size: 1.2rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin-bottom: 40px;
  &:hover {
    background: var(--color-sage-green);
  }
`;
