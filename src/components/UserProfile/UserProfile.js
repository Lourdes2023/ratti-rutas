import styled from "styled-components";
export const TramiteContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: var(--color-back-About);
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-top: 20vh;
  & h1 {
    padding: 1em;
    border-radius: 5px;
    background: #f5f5f5;
    color: var(--color-text-hero);
  }
  @media screen and (max-width: 768px) {
    margin-top: 10vh;
    h1 {
      font-size: 20px;
    }
    p {
      font-size: 14px;
    }
  }
  width: 80%;
`;

export const Title = styled.h1`
  color: var(--color-secondary-blue);
  font-size: 24px;
  margin: 50px 0px;
`;

export const Paragraph = styled.p`
  color: #666;
  font-size: 16px;
  padding: 10px;
  margin-top: 10px;
  text-align: center;
  line-height: 1.5;
  width: 80%;
  @media screen and (max-width: 768px) {
    font-size: 14px;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10vh;
  margin-bottom: 1em;
  width: 40%;
  height: auto;
  padding: 20px;
  border-radius: 5px;
  background-color: var(--background-color);
  box-shadow: var(--box-shadow-color);
  transition: all 0.3s ease;
  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  &:hover {
    transform: translateY(-5px);
    box-shadow: var(--box-shadow-hover-color);
  }
  @media screen and (max-width: 768px) {
    width: 80%;
  }
`;

export const Step = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
  background: var(--color--back-category);
`;

export const StepIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: var(--color-primary-blue);
  margin-right: 20px;

  svg {
    font-size: 24px;
    color: #333;
  }
`;

export const StepContentContact = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 240px;
  height: 340px;
  padding: 20px;
  border-radius: 5px;
  background: var(--color-back-About);
  box-shadow: var(--box-shadow-color);
  transition: all 0.3s ease;
  &:hover {
    transform: translateY(-5px);
    box-shadow: var(--box-shadow-hover-color);
  }

  @media screen and (max-width: 768px) {
    width: 80%;
  }
`;
export const ImageContainer = styled.div`
  width: 50%;
  height: 340px;
  margin-bottom: 10px;
  border-radius: 5px;
  background-color: #f2f2f2;
  overflow: hidden;
`;
export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const StepContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 20px;
  width: 50%;
  height: auto;
  padding: 20px;
  border-radius: 5px;
  background: var(--color--back-category);
  box-shadow: var(--box-shadow-color);
  transition: all 0.3s ease;
  &:hover {
    transform: translateY(-5px);
    box-shadow: var(--box-shadow-hover-color);
  }
  @media screen and (max-width: 768px) {
    width: 80%;
  }

  & ul {
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
    text-align: center;
    & li {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      gap: 10px;
      width: 100%;
      height: 100%;
      padding: 10px;
      border-radius: 5px;
      background-color: #fff;
      box-shadow: var(--box-shadow-color);
      transition: all 0.3s ease;
      &:hover {
        transform: translateY(-5px);
        box-shadow: var(--box-shadow-hover-color);
      }
    }
  }
`;

export const PresupuestoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #f5f5f5;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin: 20vh;
`;

export const InputContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin-bottom: 10px;
`;

export const Button = styled.button`
  padding: 10px;
  border-radius: 5px;
  border: none;
  background-color: #333;
  color: #fff;
  font-size: 16px;
  cursor: pointer;
  margin-top: 10px;
`;

export const ResultContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 80%;
  align-items: center;
  margin-top: 20px;
  padding: 20px;
`;
