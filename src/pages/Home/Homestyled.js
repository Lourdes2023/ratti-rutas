import styled from "styled-components";

export const HomeContainer = styled.div`
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: 2rem;
  h3 {
    font-size: 2rem;
    margin-top: 20px;
    font-weight: 600;
    text-align: center;
    width: 100%;
    background-image: var(--color-title-Grad1);
    -webkit-background-clip: text;
    color: transparent;
    @media (max-width: 780px) {
      font-size: 1.5rem;
    }
  }
`;
export const ProductStyledContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: auto;
`;
export const CategoryStyledContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: var(--color--back--category);
  width: 100%;
  height: auto;
`;
