import styled from "styled-components";

export const InputBoxStyled = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px 0px;
  padding: 10px;
  background: transparent;
`;

export const InputStyled = styled.input`
  padding: 10px;
  border: 1px solid var(--color-brown-earth);
  border-radius: 5px;
  font-size: 1rem;
  outline: none;
  background-color: var(--color-crema-claro);
  color: var(--color-bordo-profundo);
  &::placeholder {
    color: var(--color-gris-piedra);
  }
  &:focus {
    border-color: var(--color-sage-green);
  }

`;

export const ErrorMessageStyled = styled.p`
  color: red;
  font-size: 0.8rem;
  margin-top: 5px;
`;
