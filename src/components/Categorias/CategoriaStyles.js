import styled from "styled-components";
export const CategoryContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  cursor: pointer;
`;
export const CategoryWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 50%;
  padding: 20px;
`;

export const CategoryConten = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: var(--color-crema-claro);
  border-radius: 10px;
  padding: 20px;
  border: 1px solid var(--color-brown-earth);
  width: 100%;
  box-shadow: var(--color-shadow);
  transition: background 0.3s ease;

  &:hover {
    background: var(--color-sage-green);
  }
`;
export const CategoryImage = styled.img`
  width: 80%;
  max-height: 150px;
  object-fit: cover;
  margin-bottom: 10px;
`;
export const CategoryTitle = styled.p`
  font-size: 18px;
  color: var(--color-bordo-profundo);
  margin-bottom: 10px;
`;
