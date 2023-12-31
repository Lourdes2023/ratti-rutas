import styled from "styled-components";

export const CategoryStyledContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  padding-bottom: 20px;
  margin-bottom: 1px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  & h3 {
    font-size: 2rem;
    font-weight: 600;
    margin-top: 10vh;
    text-align: center;
    width: 50%;
    color: #4a5568;
    padding: 20px;
    @media (max-width: 780px) {
      font-size: 1.5rem;
    }
  }
`;

export const ProductsStyledContainer = styled(CategoryStyledContainer)`
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  & h3 {
    padding-top: 20px;
    margin-top: 0;
    color: #4a5568;
  }
`;
