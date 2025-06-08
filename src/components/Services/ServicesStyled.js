import styled from "styled-components";
import { Link } from "react-router-dom";
export const ServicesContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 60px;
  width: 80%;
  margin-top: 15vh;
  background: var(--color-back-Services);
  border-radius: 12px;
  box-shadow: var(--box-shadow-color);
  h3 {
    font-size: 36px;
    color: var(--color-Logo-text);
    padding: 10px 20px;
  }
  @media (max-width: 780px) {
    padding: 0;
  }
`;

export const ServicesWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 40px;
  width: 100%;
  margin-top: 30px;
`;

export const Service = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 290px;
  padding: 20px;
  border-radius: 12px;
  background-color: var(--background-color);
  box-shadow: var(--box-shadow-color);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  &:hover {
    transform: translateY(-5px);
    box-shadow: var(--box-shadow-hover-color);
  }
  @media (max-width: 780px) {
    width: 250px;
  }
`;

export const ServiceImage = styled.img`
  width: 100%;
  max-height: 150px;
  object-fit: cover;
  margin-bottom: 10px;
`;

export const ServiceTitle = styled.h4`
  font-size: 18px;
  color: var(--color-Logo-text);
  margin-bottom: 10px;
`;

export const ServiceDescription = styled.p`
  font-size: 14px;
  color: var(--color-text-dark);
`;
export const LinkIten = styled(Link)`
  padding: 5px 15px;
  border-radius: 15px;
  background-color: var(--color-button-hoverCart);
  color: var(--color-button-text);
  transition: all 0.3s ease;
  &:hover {
    background-color: var(--color-primary-bordo);
  }
`;
