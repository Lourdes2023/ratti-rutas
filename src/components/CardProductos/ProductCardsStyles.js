import styled from "styled-components";
import { Link } from "react-router-dom";

export const ProductContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 60px;
  width: 80%;
  margin: 0 auto;
  h2 {
    font-size: 24px;
    color: var(--primary-color);
    margin-bottom: 40px;
  }
  @media (max-width: 780px) {
    padding: 0;
  }
`;

export const ProductWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 40px;
  margin-bottom: 20px;
`;

export const ProductContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 240px;
  height: 340px;
  padding: 20px;
  border-radius: 5px;
  background-color: var(--background-color);
  box-shadow: var(--box-shadow-color);
  transition: all 0.3s ease;
  &:hover {
    transform: translateY(-5px);
    box-shadow: var(--box-shadow-hover-color);
  }
`;

export const ProductImage = styled.img`
  width: 100%;
  max-height: 200px;
  object-fit: cover;
  margin-bottom: 10px;
`;

export const ProductTitle = styled.h4`
  font-size: 18px;
  color: var(--primary-color);
`;

export const ProductDescription = styled.p`
  font-size: 14px;
  color: var(--secondary-color);
`;
