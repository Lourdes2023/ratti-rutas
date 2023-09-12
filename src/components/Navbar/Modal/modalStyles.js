import styled from "styled-components";
import { motion } from "framer-motion";

export const ModalContainerStyled = styled(motion.div)`
  display: ${(props) => (props.hidden ? "none" : "block")};
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 50px;
  width: auto;
  height: auto;
  background-image: var(--color--back--category);
  padding: 20px;
  position: absolute;
  top: 0;
  left: 10%;
  right: 10%;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 12px;
`;

export const CloseButtonStyled = styled.div`
  height: 32px;
  color: white;
  margin-bottom: 20px;
  &:hover {
    color: gray;
  }
`;

export const TitleStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin: 0 0 2rem 0;
  & h1 {
    color: var(--color-button-text);
    margin-top: 0;
  }
`;

export const ContainerStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  width: auto;
  height: 50%;
`;

export const ProductsWrapperStyled = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  width: 80%;
  height: auto;
  margin: 0 auto;
  padding: 1rem;
  padding-left: 0;
`;

export const ProductContainerStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 15px;
  width: auto;
  background: var(--color-muted-text);
  box-shadow: 0 0 20px 5px rgba(0, 0, 0, 0.3);
  padding: 1rem;
  border-radius: 15px;
  border: 1px solid var(--color-text-contact);
  @media (max-height: 380px) {
    flex-direction: column;
  }
  & img {
    width: 80px;
    height: 80px;
    border-radius: 16px;
    object-fit: cover;
  }
`;

export const TextContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: auto;
`;

export const CardTitleStyled = styled.h3`
  margin: 0;
  margin-bottom: 2px;
  font-weight: 500;
`;

export const TextStyled = styled.p`
  margin: 0;
  color: white;
  font-size: 1rem;
  @media (max-height: 380px) {
    display: none;
  }
`;

export const PriceStyled = styled.span`
  font-weight: 800;
  font-size: 1.2rem;
  color: var(--color-text-contact);
`;

export const PriceContainerStyled = styled.div`
  z-index: 1000;
  width: 100%;

  & p {
    text-align: center;
    margin-bottom: 0;
  }
`;

export const SubtotalStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 20px;
`;

export const EnvioStyled = styled(SubtotalStyled)``;

export const TotalStyled = styled(SubtotalStyled)``;

export const ButtonContainerStyled = styled(SubtotalStyled)`
  justify-content: center;
`;

export const QuantityContainerStyled = styled.div`
  display: flex;
  align-items: center;
`;
