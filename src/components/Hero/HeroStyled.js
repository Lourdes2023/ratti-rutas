import styled from "styled-components";
import ImgHero from "../../assets/HeroImg2.svg";
export const HeroSeccionContainer = styled.section`
  display: flex;
  justify-content:center;
  align-items: center;
  flex-direction: column;
  width: 90%;
  padding: 60px;
  margin-top: 15vh;
  @media (max-width: 1024px) {
    margin-top: 10vh;
  }
`;

export const HeroContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 50%;
  margin-top: 20px;
`;

export const Herotext = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  flex-direction: column;
  padding: 20px;
  border-radius: 10px;
  background: var(--background-color);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  @media (max-width: 1024px) {
    border-radius: 18px;
  
  }

  & h1 {
    font-size: 2.5rem;
    font-weight: 700;
    line-height: 1.5;
    text-align: center;
    padding: 1rem;
    color: var(--color-text-hero);
    @media (max-width: 1024px) {
      font-size: 1.8rem;
      font-weight: 600;
    }
  }

  & p {
    color: var(--color-text-dark); /* Color de texto personalizado */
    font-size: 18px;
    font-weight: 300;
    line-height: 1.5;
    margin-bottom: 20px;
    padding: 1rem;
    @media (max-width: 980px) {
      font-size: 1.2rem;
      font-weight: 300;
      border-radius: 10px;
    }
  }
`;

export const Heroimg = styled.div`
  width: 100%;
  height: 100%;

  @media (max-width: 980px) {
    width: 90%;
    margin-bottom: 20px;
  }

  & img {
    width: 100%;
    height: 100%;
    @media (max-width: 980px) {
      font-size: 1.2rem;
      margin-top: 1rem;
    }
  }
`;
