import styled from "styled-components";

export const ContactContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 10vh;
  border-radius: 12px;
`;

export const InfoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;

  h2 {
    font-size: 2.5rem;
    color: var(--color-secondary);
    margin-bottom: 20px;

    @media (max-width: 780px) {
      font-size: 2rem;
    }
  }

  p {
    font-size: 1.2rem;
    color: var(--color-muted-text);
    margin-bottom: 20px;
    line-height: 1.5;
  }
`;

export const WhatsAppLink = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  border-radius: 12px;
  margin-top: 20px;
  padding: 20px;
  background-color: var(--color-buttonEm-bg);
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);

  h1 {
    color: var(--color-secondary);
    font-size: 1.8rem;
    margin-bottom: 10px;

    @media (max-width: 780px) {
      font-size: 1.5rem;
    }
  }

  p {
    color: var(--color-muted-text);
    font-size: 1.1rem;
    text-align: center;
    margin-bottom: 20px;
  }

  a.whatsapp-btn {
    display: inline-block;
    margin-top: 10px;
    text-decoration: none;
    border-radius: 15px;
    overflow: hidden;

    img {
      width: 60px;
    }
  }
`;

export const ContactForm = styled.form`
  margin: 40px auto;
  padding: 30px;
  border: 1px solid var(--color-border);
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
`;

export const ContactTitle = styled.h2`
  font-size: 2rem;
  color: var(--color-secondary);
  margin-bottom: 20px;
`;

export const ContactForLabel = styled.label`
  display: block;
  margin-bottom: 10px;
  font-size: 1.2rem;
  color: var(--color-text-dark);
`;

export const ContactFormInput = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid var(--color-border);
  border-radius: 5px;
`;

export const ContactFormTextarea = styled.textarea`
  width: 100%;
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid var(--color-border);
  border-radius: 5px;
  resize: vertical;
`;

export const SubmitButton = styled.button`
  background-color: var(--color-buttonEm-bg);
  color: var(--color-buttonEm-text);
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  font-size: 1.2rem;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: var(--color-buttonEm-bg-hover);
  }
`;
