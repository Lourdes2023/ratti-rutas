import styled from "styled-components";

export const InputBoxStyled = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px 0px;
  padding: 10px;
  background: var(--color-buttonLogin-bg);
`;

export const InputStyled = styled.input`
  padding: 10px;
  border: 1px solid var(--color-primary-blue);
  border-radius: 5px;
  font-size: 1rem;
  outline: none;
  background-color: aliceblue;
  &:focus {
    border-color: var(--color-primary);
  }

`;

export const ErrorMessageStyled = styled.p`
  color: red;
  font-size: 0.8rem;
  margin-top: 5px;
`;
