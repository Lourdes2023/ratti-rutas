import styled from "styled-components";
import imageContac from "../../assets/contact.svg";
export const ContactContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: row;
  gap: 2rem;
  width: 100%;
  margin-top: 18vh;
  padding: 2rem 0;
  border-radius: 12px;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
  h2 {
    color: var(--color-darkgray-contact);
    font-size: 2.5rem;
    margin-bottom: 20px;
    padding: 20px;
    @media (max-width: 580px) {
      font-size: 1.5rem;
    }
  }
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 45%;
  max-width: 500px;
  gap: 1rem;
  margin: 0 1rem;
  p {
    font-size: 1.2rem;
    color: var(--color-text-contact);
    margin-bottom: 20px;
    line-height: 1.5;
  }
  @media (max-width: 768px) {
    width: 100%;
    margin-bottom: 2rem;
  }
  @media (max-width: 380px) {
    width: 90%;
  }
`;

export const WhatsAppLink = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
  border-radius: 5px;
  padding: 2rem 0;
  margin: 2rem 0;
  background-image: none;
  background-color: transparent;
  h1 {
    color: #f1efd4;
    font-size: 1.5rem;
    margin: 20px 10px 20px 10px;
  }
  p {
    padding: 10px;
    color: var(--color-text-contact);
    font-size: 1rem;
  }
  @media (max-width: 980px) {
    margin-bottom: 1rem;
    padding: 0;
  }
`;
export const DataContactContainer = styled.div`
  text-align: center;
  width: 90%;
  margin-bottom: 1rem;
  background: transparent;
  p {
    color: var(--color-darkgray-contact);
    font-size: 1rem;
    border-bottom: 0.5px solid var(--color-border-blue);
  }
  a {
    margin-left: 10px;
    color: var(--color-darkgray-contact);
    &:hover {
      color: var(--color-contact-hover);
    }
  }
`;
