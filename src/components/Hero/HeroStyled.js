import styled from "styled-components";
import ImgHero from "../../assets/HeroImg2.svg";
export const HeroSeccionContainer = styled.section`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  width: 90%;
  padding: 80px 40px;
  margin-top: 15vh;
  background-image: url(${ImgHero});
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-position: 90% 17vh;
  background-size: auto 70%;
  @media (max-width: 1024px) {
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-image: none;
    margin-top: 10vh;
    background-color: #f5f7fa;
  }
`;

export const HeroContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-left: 10%;
  width: 50%;
  @media (max-width: 1024px) {
    flex-direction: column;
    margin-left: 0;
  }
`;

export const Herotext = styled.div`
  display: flex;
  justify-content: flex-start;
  text-align: left;
  flex-direction: column;
  padding: 20px;
  border-radius: 10px;
  @media (max-width: 1024px) {
    border-radius: 18px;
    border: 0.5px solid white;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  }

  & span {
    font-size: 3rem;
    font-weight: 800;
    text-align: left;
    background-image: var(--color-title-Grad1);
    -webkit-background-clip: text;
    color: transparent;
    text-align: center;
    padding: 0;
    @media (max-width: 980px) {
      font-size: 1.8rem;
      font-weight: 600;
    }
  }

  & h1 {
    font-size: 3rem;
    font-weight: 800;
    line-height: 1.5;
    text-align: center;
    padding: 1rem;
    color: var(--color-secondary-blue); /* Color de texto personalizado */
    @media (max-width: 1024px) {
      font-size: 1.8rem;
      font-weight: 600;
    }
  }

  & p {
    color: var(--color-secondary-blue); /* Color de texto personalizado */
    font-size: 1.5rem;
    font-weight: 600;
    line-height: 1.5;
    margin-bottom: 30px;
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
