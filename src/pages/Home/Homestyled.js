import styled from "styled-components";
import ImageAbout from "../../assets/fondoHero.png";

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-image: url(${ImageAbout});
  background-size: cover;
  background-attachment: fixed;
  background-position: center;

  & h3 {
    font-size: 2rem;
    margin-top: 10vh;
    font-weight: 600;
    text-align: center;
    width: 50%;
    color: var(--color-secondary-blue);
    padding: 20px;
    @media (max-width: 780px) {
      font-size: 1.5rem;
    }
  }
`;

export const HeroSeccionContainer = styled(HomeContainer)``;
export const AboutStyledContainer = styled(HomeContainer)`
  background-image: url(${ImageAbout});
  background-attachment: fixed;
  background-size: cover;
  @media (max-width: 980px) {
    justify-content: center;
    align-items: center;
    background-position: 100%;
    background-size: 100%;
  }
`;
export const ServicesStylesContainer = styled(HomeContainer)`
  background-image: var(--color-back-Services);
  margin-: 0;
`;

export const ContactStyledContainer = styled(HomeContainer)`
  background-image:url(${""});
`;
