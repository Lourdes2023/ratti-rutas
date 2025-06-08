import styled from "styled-components";
import { Link } from "react-router-dom";
import { ButtonStylesCart } from "../UI/Button/ButtonStyled";

export const ProductContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: var(--color-crema-claro);
  padding: 60px 20px;
  width: 80%;
  margin: 0 auto;
  border-radius: 12px;
  box-shadow: var(--color-shadow);
  h2 {
    font-size: 24px;
    color: var(--color-bordo-profundo);
    margin-bottom: 40px;
    font-family: "Playfair Display", serif;
  }
  @media (max-width: 780px) {
    padding: 20px;
    width: 95%;
  }
`;

export const ProductWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 60px;
  margin-bottom: 40px;
`;

export const ProductContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  width: 240px;
  min-height: 360px;
  padding: 20px;
  border-radius: 12px;
  background-color: var(--color-crema-claro);
  border: 1px solid var(--color-brown-earth);
  box-shadow: var(--color-shadow);
  transition: all 0.3s ease;
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }
`;

export const ProductImage = styled.img`
  width: 100%;
  max-height: 200px;
  object-fit: cover;
  margin-bottom: 10px;
  border-radius: 8px;
`;

export const ProductTitle = styled.h4`
  font-size: 18px;
  color: var(--color-bordo-profundo);
`;

export const ProductDescription = styled.p`
  font-size: 14px;
  color: var(--color-gris-piedra);
`;

export const ProductButton = styled(ButtonStylesCart)`
  margin-top: auto;
`;
