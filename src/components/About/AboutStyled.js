import styled from "styled-components";

export const AboutStylesContainer = styled.section`
  display: flex;
  justify-content: center;
  padding: 4rem 1rem;
  background-color: var(--color-back-body);
`;

export const AboutContainer = styled.div`
  max-width: 1000px;
  width: 100%;
`;

export const AboutSectionConten = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  background: #ffffff;
  border: 1px solid #6f4e37;
  border-radius: 12px;
  padding: 2rem;

  @media (max-width: 780px) {
    flex-direction: column;
    text-align: center;
  }

  p {
    color: var(--color-text-dark);
    font-size: 1rem;
    margin-bottom: 1.5rem;
  }

  h2 {
    color: #5b1f29;
    font-size: 2rem;
    margin: 0 0 1rem;
    border-left: 4px solid #5b1f29;
    padding-left: 0.5rem;
  }

  img {
    width: 100%;
    border-radius: 12px;
  }

  .AboutText,
  .AboutImage {
    flex: 1;
  }
`;

export const AboutButton = styled.a`
  display: inline-block;
  background-color: #497d75;
  color: #ffffff;
  padding: 0.5rem 1.25rem;
  border-radius: 20px;
  text-decoration: none;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #5b1f29;
  }
`;
