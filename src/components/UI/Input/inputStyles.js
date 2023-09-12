import styled from "styled-components";

export const InputContainerStyles = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const InputStyles = styled.input`
  width: 80%;
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid var(--color-border);
  border-radius: 20px;
`;

export const LabelStyles = styled.label`
  display: block;
  margin-bottom: 10px;
  font-size: 1.2rem;
  color: var(--color-darkgray-contact);
`;
export const ErrorStyled = styled.span`
  color: red;
  font-size: 14px;
  margin-top: 4px;
`;
