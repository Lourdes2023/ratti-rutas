import styled from "styled-components";

export const OrdersContainerStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 15vh;
  padding: 1rem;
  width: 100%;
  height: 100%;
  color: var(--color-text-dark);
  background: var(--color-background);
  border-radius: 0.5rem;

  & h2 {
    font-size: 2rem;
    color: var(--color-primary-blue);
    margin-bottom: 20px;
    padding: 20px 10px;
    @media (max-width: 580px) {
      font-size: 1.5rem;
    }
  }

  @media (max-width: 980px) {
    width: 100%;
  }
`;


