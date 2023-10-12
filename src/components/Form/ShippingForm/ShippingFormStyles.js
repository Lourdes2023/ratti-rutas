import styled from "styled-components";

export const ShippingFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 15vh;
  margin-bottom: 5rem;
  padding: 1rem;
  width: 100%;
  height: 100%;
  background-color: var(--color-back-body);
  border-radius: 0.5rem;
  color: var(--color-text-dark);
  & h2 {
    color: var(--color-text-dark);
    font-size: 1.5rem;
  }
  & span {
    margin-left: 1em;
    color: var(--color-secondary-blue);
  }
`;

export const ShippingFormTitle = styled.h1`
  font-size: 2rem;
  color: var(--color-text-contact);
  margin-bottom: 20px;
  padding: 20px;
  background: var(--color-backg-contact);
  border-radius: 25px;
`;
