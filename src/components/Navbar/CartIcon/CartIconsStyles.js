import styled from "styled-components";

export const CartIconStyles = styled.div`
  display: flex;
  border: 1px solid;
  font-size: 1.5em;
  padding: 5px;
  background-image: var(--color-title-Grad1);
  -webkit-background-clip: padding-box;
  color: white;
  border-radius: 5px;
  @media (max-width: 380px) {
    font-size: 1em;
  }
`;
