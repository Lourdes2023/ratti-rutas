import styled from "styled-components";

export const CategoryStyledContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  padding-bottom: 20px;
  margin-top: 18vh;
  margin-bottom: 1px;
  background: var(--color-crema-claro);
  box-shadow: var(--color-shadow);
  border-radius: 12px;
  & h3 {
    font-size: 2rem;
    font-weight: 600;
    margin-top: 10vh;
    text-align: center;
    width: 50%;
    color: var(--color-bordo-profundo);
    padding: 20px;
    @media (max-width: 780px) {
      font-size: 1.5rem;
    }
  }
`;

export const ProductsStyledContainer = styled(CategoryStyledContainer)`
  & h3 {
    padding-top: 20px;
    margin-top: 0;
    color: var(--color-brown-earth);
  }
`;
