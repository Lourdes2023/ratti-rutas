import styled from "styled-components";

export const ValidateContainerStyled = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
padding: 1rem;
width: 100%;
height: 100%;
color: var(--color-text-dark);
background: var(--color-background);
border-radius: 0.5rem;
& h1 {
  margin-left: 1em;
  color: var(--color-secondary-blue);
}
& p {
    margin-left: 1em;
    color: var(--color-secondary-blue);
}
@media (max-width: 980px) {
  width: 100%;
}
`;
   
