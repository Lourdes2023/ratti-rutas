import styled from "styled-components";

export const CartIconStyles = styled.div`
  display: flex;
  position: relative;
  font-size: 1em;
  padding: 5px;
  color: var(--color-text-contact);
  border-radius: 5px;
  cursor: pointer;
  margin: 10px;
  @media (max-width: 780px) {
    font-size: 1em;
  }

  @media (max-width: 380px) {
    margin-right: 0;
  }
`;

export const CountCart = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  right: 0;
  left: 90%;
  bottom: 100%;
  font-size: 0.5em;
  color: white;
  background-color: var(--color-secondary-red);
  border-radius: 50%;
  width: 20px;
  height: 20px;
`;
