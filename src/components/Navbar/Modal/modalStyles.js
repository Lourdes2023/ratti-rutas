import styled from "styled-components";
import { motion } from "framer-motion";

// Contenedor principal del modal
export const ModalContainerStyled = styled(motion.div)`
  display: ${(props) => (props.hidden ? "none" : "flex")};
  flex-direction: column;
  overflow: scroll;
  align-items: center;
  width: auto;
  height: auto;
  max-height: 80vh;
  background: var(--color-back-Header);
  padding: 50px 0px;
  position: absolute;
  top: 150%;
  left: 10%;
  right: 10%;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

// Botón de cierre
export const CloseButtonStyled = styled.div`
  height: 32px;
  color: white;
  margin-bottom: 20px;
  position: absolute;
  top: 24px;
  right: 25px;
  bottom: 0;
  cursor: pointer;
  &:hover {
    color: gray;
  }
`;

// Título del modal
export const TitleStyled = styled.div`
  display: flex;
  align-items: center;

  h1 {
    text-align: center;
    font-size: 1rem;
    color: var(--color-backg-contact);
    margin-top: 0;
    border-bottom: 1px solid var(--color-text-contact);
  }
`;

// Contenedor principal
export const ContainerStyled = styled.div`
  display: flex;
  align-items: center;

  width: 100%;
  background: var(--color-back-Services);
`;

export const ProductsWrapperStyled = styled(motion.div)`
  display: flex;
  align-items: center;
  height: 300px;
  width: 50%;
  overflow-x: scroll;
  padding: 20px 10px;
  margin: 0 auto;
  gap: 10px;
  background: var(--color-back-Services);
  p {
    font-size: 14px;
    text-align: center;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const ProductContainerStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 10px;
  gap: 5px;
  width: 210px;
  height: 190px;
  border-radius: 15px;
  background: var(--color-backg-contact);
  & img {
    width: 80px;
    height: 80px;
    border-radius: 20px;
    object-fit: cover;
  }
`;

export const TextContainerStyled = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 5px;
  width: 60px;
`;

export const CardTitleStyled = styled.h3`
  font-size: 12px;
  color: var(--color-text-contact);
  margin-bottom: 2em;
  border-bottom: 1px solid var(--color-text-contact);
`;

export const TextStyled = styled.p`
  color: white;
  font-size: 1rem;
  color: var(--color-primary-blue);
  @media (max-height: 380px) {
    font-size: 0.8rem;
  }
`;

export const PriceStyled = styled.span`
  font-weight: 300;
  font-size: 1rem;
  color: var(--color-text-contact);
`;

export const PriceContainerStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  p {
    text-align: center;
    margin-bottom: 0;
    border-bottom: 1px solid var(--color-text-contact);
  }
`;

// Contenedor de título
export const TitleContainerStyled = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  position: relative;
  width: 80%;
  margin-bottom: 1em;
  gap: 50px;
  border: 1px solid var(--color-text-contact);
  & p {
    font-size: 1rem;
    margin-left: 1rem;
    color: var(--color-text-contact);
    @media (max-width: 768px) {
      font-size: 0.8rem;
    }
  }
  @media (max-width: 768px) {
    width: 90%;
  }
`;

// Contenedor de cantidad
export const QuantityContainerStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
`;

// Total
export const TotalStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 1.2rem;
  margin: 20px 0px;
  padding: 0px 10px;
  width: 90%;
  border: 1px solid var(--color-text-contact);
  gap: 20px;
  color: var(--color-text-contact);
`;

export const Progress = styled.svg`
  position: absolute;
  top: 70px;
  left: 25px;
  transform: rotate(-90deg);
  @media (max-width: 768px) {
    width: 40px;
    top: 29px;
    left: 0;
  }
`;

export const BackgroundCircle = styled.circle`
  stroke-dashoffset: 0;
  stroke-width: 15%;
  fill: none;
  stroke: var(--accent);
  opacity: 0.3;
`;

export const IndicatorCircle = styled(motion.circle)`
  stroke-dashoffset: 0;
  stroke-width: 15%;
  fill: none;
  stroke: var(--accent);
`;
