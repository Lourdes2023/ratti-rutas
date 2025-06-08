import styled from "styled-components";

export const HeroSeccionContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 8rem 1rem;
  width: 100%;

  @media (max-width: 768px) {
    background-attachment: scroll;
  }
`;

export const HeroContainer = styled.div`
  max-width: 800px;
  width: 100%;
  text-align: center;
`;

export const Herotext = styled.div`
  max-width: 720px; /* antes 600px */
  margin: 0 auto;
  padding: 3rem 2rem; /* antes 2rem */
  background: rgba(255, 255, 255, 0.86);
  border-radius: 16px; /* más suave visualmente */
  box-shadow: 0 6px 30px rgba(91, 31, 41, 0.08); /* sutil sombra para levantar */

  & h1 {
    margin: 0 0 1.5rem;
    font-size: 2.75rem; /* más importante */
    color: var(--color-text-hero);
    line-height: 1.3;
  }

  & p {
    margin-bottom: 2.5rem;
    color: var(--color-text-dark);
    font-size: 1.25rem;
    font-weight: 300;
    line-height: 1.6;
  }
`;

export const HeroButton = styled.a`
  display: inline-block;
  background-color: #5b1f29;
  color: #f1f1f1;
  padding: 0.75rem 1.5rem;
  border-radius: 20px;
  font-weight: 600;
  text-decoration: none;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #6f4e37;
  }
`;
