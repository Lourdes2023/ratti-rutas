import styled from "styled-components";

export const HeroSeccionContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 8rem 1rem;
  width: 100%;
  background-color: var(--color-back-body);
`;

export const HeroContainer = styled.div`
  max-width: 800px;
  width: 100%;
  text-align: center;
`;

export const Herotext = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 2rem;
  background: rgba(255, 255, 255, 0.7);
  border-radius: 12px;

  & h1 {
    margin: 0 0 1rem;
    font-size: 2.5rem;
    color: var(--color-text-hero);
  }

  & p {
    margin-bottom: 2rem;
    color: var(--color-text-dark);
    font-size: 1.125rem;
    font-weight: 300;
  }
`;

export const HeroButton = styled.a`
  display: inline-block;
  background-color: #5b1f29;
  color: #f8f5f1;
  padding: 0.75rem 1.5rem;
  border-radius: 20px;
  font-weight: 600;
  text-decoration: none;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #6f4e37;
  }
`;
