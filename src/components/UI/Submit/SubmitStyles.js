import styled from "styled-components";

export const SubmitButton = styled.button`
  background: var(--color-backg-contact);
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 20px;
  font-size: 1.2rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin-bottom: 40px;
  &:hover {
    background-color: var(--color-secondary);
  }
`;
