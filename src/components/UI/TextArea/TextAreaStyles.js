import styled from "styled-components";

export const TextAreaContainer = styled.div`
  width: 80%;
  padding: 20px;
  margin-bottom: 30px;
  background: transparent;
  border-radius: 20px;
  resize: vertical;
`;

export const ErrorMessageStyled = styled.p`
  color: red;
  font-size: 0.8rem;
  margin-top: 5px;
`;
export const TextAreaStyles = styled.textarea`
  width: 80%;
  padding: 20px;
  border: 1px solid var(--color-brown-earth);
  border-radius: 20px;
  resize: vertical;
  background-color: var(--color-crema-claro);
  color: var(--color-bordo-profundo);
  &::placeholder {
    color: var(--color-gris-piedra);
  }
  &:focus {
    border-color: var(--color-sage-green);
  }
`;
