import { motion } from "framer-motion";
import styled from "styled-components";

export const AboutStylesContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10vh;
  padding: 50px;
  border-radius: 18px;
  text-align: center;
  width: 100%;
  @media (max-width: 780px) {
    padding: 0px;
  }
`;
export const AboutContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 50px;
  width: 80%;
  @media (max-width: 780px) {
  }
`;
export const AboutSectionConten = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  align-items: center;
  padding: 50px;
  margin-top: 50px;
  margin-bottom: 50px;
  text-align: right;
  gap: 20px;
  border: 10px solid white;
  border-radius: 5px;
  background-image: var(--color-back-About);
  @media (max-width: 780px) {
    display: flex;
    justify-content: center;
    padding: 10px;
    text-align: center;
    flex-direction: column;
  }
  p {
    color: var(--color-secondary-blue);
    font-size: 18px;
    @media (max-width: 780px) {
      font-size: 16px;
      font-weight: 300;
    }
  }
  h2 {
    color: var(--color-secondary-green);
    font-size: 24px;
    font-weight: 600;
    margin-bottom: 10px;
  }
  img {
    width: 80%;
  }
  .AboutText {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: start;
    width: 50%;
    padding: 20px;
    border-radius: 12px;
    @media (max-width: 780px) {
      width: 100%;
      padding: 10px;
    }
  }

  .AboutImage {
    border-radius: 12px;
    width: 50%;
    @media (max-width: 780px) {
      width: 100%;
    }
  }
`;
export const fadeInAnimation = styled(motion.div)`
  opacity: 0;
  transition: opacity 0.5s;

  &.visible {
    opacity: 1;
  }
`;
