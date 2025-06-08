import styled from "styled-components";

export const ProductsSection = styled.section`
  width: 100%;
  padding: 2rem 1rem;
  margin-top: 10vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: var(--color-crema-claro);
  gap: 2rem;
`;

export const CardGrid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1.5rem;
  justify-items: center;
`;

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 240px;
  padding: 1rem;
  border-radius: 8px;
  background: var(--background-color);
  box-shadow: var(--box-shadow-color);
  transition: box-shadow 0.2s ease, transform 0.2s ease;
  text-align: center;
  &:hover {
    transform: translateY(-4px);
    box-shadow: var(--box-shadow-hover-color);
  }
`;

export const CardImage = styled.img`
  width: 100%;
  max-height: 160px;
  object-fit: cover;
  margin-bottom: 0.5rem;
`;

export const CardTitle = styled.h4`
  margin: 0.5rem 0;
  font-size: 1rem;
  color: var(--primary-color);
`;

export const CardDescription = styled.p`
  font-size: 0.875rem;
  color: var(--secondary-color);
`;
