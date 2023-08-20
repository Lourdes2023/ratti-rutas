import styled from "styled-components";

export const AboutStylesContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 10vh;
  background-color: var();
  padding: 50px 0;
  border-radius: 18px;
  text-align: center;
  width: 80%;
`;
export const AboutContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 0 auto;
  padding: 0 20px;

  @media (max-width: 780px) {
  }
`;
export const AboutSectionConten = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  align-items: center;
  padding: 50px;
  margin-bottom: 50px;
  text-align: right;
  gap: 20px;
  border: 10px solid white;
  border-radius: 5px;
  background-color: var(--color-back-seccionlight);
  @media (max-width: 780px) {
    display: flex;
    justify-content: center;
    padding: 10px;
    flex-direction: column;
  }
  p {
    color: var(--color-muted-text);
    font-size: 18px;
    @media (max-width: 780px) {
      font-size: 16px;
    }
  }
  h2 {
    color: var(--color-secondary);
    font-size: 24px;
    font-weight: 600;
    margin-bottom: 10px;
  }
  img {
    width: 100%;
  }
  .AboutText {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: start;
    width: 50%;
    padding: 20px;
    border-radius: 12px;
    @media (max-width: 780px) {
      width: 100%;
    }
  }

  .AboutImage {
    border-radius: 12px;
    width: 50%;
    @media (max-width: 780px) {
      width: 100%;
    }
  }
`;
