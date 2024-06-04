import styled from "styled-components";
import imageContac from "../../assets/contact.svg";
export const ContactContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  margin-top: 18vh;
  border-radius: 12px;
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
  justify-content: center;
  width: 80%;
  gap: 90px;
  margin: 40px 40px;
  p {
    font-size: 1.2rem;
    color: var(--color-text-contact);
    margin-bottom: 20px;
    line-height: 1.5;
  }
  @media (max-width: 980px) {
    display: block;
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
  padding: 40px 0;
  margin: 40px 0;
  background-image: url(${imageContac});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
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
    margin-bottom: 20px;
    padding: 0;
  }
`;
export const DataContactContainer = styled.div`
  text-align: center;
  width: 90%;
  background: var(--color-backg-contact);
  margin-bottom: 250px;
  p {
    color: #f1efd4;
    font-size: 1rem;
    border-bottom: 0.5px solid #ffffffc0;
  }
  a {
    margin-left: 20px;
    color: #f1efd4;
    &:hover {
      color: var(--color-contact-hover);
    }
  }
`;
