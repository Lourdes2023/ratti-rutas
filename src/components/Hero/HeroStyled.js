import styled from "styled-components";
import image5 from "../../assets/39.svg";
export const HeroContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${image5});
  background-size: cover;
  background-position: center;
  width: 100%;
  margin-top: 10vh;
  @media (max-width: 980px) {
    justify-content: center;
    flex-direction: column;
    border-radius: 10px;
  }
`;

export const Herotext = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-direction: column;
  width: 50%;
  padding: 10px;
  background: #2f6d6464;
  border-radius: 10px;
  @media (max-width: 980px) {
    width: 90%;
    margin-top: 5vh;
    border-radius: 18px;
    border: 0.5px solid white;
    box-shadow: rgba(102, 108, 113, 0.498) 0px 0px 5rem inset,
      rgba(102, 108, 113, 0.498) 0px 0px 2rem inset;
  }
  .gradient-text {
    font-size: 3rem;
    text-align: center;
    padding: 1rem;
    background-image: var(--color-title-Grad1);
    -webkit-background-clip: text;
    color: transparent;
    font-size: 1.5rem;
    text-align: center;
    padding: 0;
  }

  h1 {
    font-size: 3rem;
    font-weight: 800;
    line-height: 1.5;
    text-align: center;
    padding: 1rem;
    color: var(--color-text-hero);
    @media (max-width: 980px) {
      font-size: 1rem;
    }
  }
  span {
    color: var(--color-text-hero);
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

export const HeroImg = styled.div`
  flex-direction: column;
  text-align: center;
  padding: 10px;
  margin-top: 40px;
  margin-bottom: 20px;
  width: 40%;
  border: 0.5px solid white;
  box-shadow: rgba(102, 108, 113, 0.498) 0px 0px 5rem inset,
    rgba(102, 108, 113, 0.498) 0px 0px 2rem inset;
  border-radius: 18px;
  @media (max-width: 980px) {
    width: 90%;
  }
  p {
    text-align: center;
    margin-top: 2rem;
    color: #f0f0f0;
    font-size: 1.5rem;
    font-weight: 300;
    padding: 1rem;
    @media (max-width: 980px) {
      font-size: 1.2rem;
      margin-top: 1rem;
    }
  }
`;
