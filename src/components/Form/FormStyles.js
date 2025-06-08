import { Form as FormikForm } from "formik";
import styled from "styled-components";

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  width: 45%;
  max-width: 500px;
  height: 100%;
  background-color: var(--color-crema-claro);
  border: 1px solid var(--color-brown-earth);
  color: var(--color-gris-piedra);
  & p {
    color: var(--color-gris-piedra);
    font-size: 1.2rem;
    margin-bottom: 1rem;
  }
  & span {
    margin-left: 1em;
    color: var(--color-gris-piedra);
  }
  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const Form = styled(FormikForm)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 1rem;
  text-align: center;
  padding: 40px 0px;
  margin-top: 5vh;
  width: 100%;
  border: 1px solid var(--color-brown-earth);
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  h2 {
    font-size: 2rem;
    color: var(--color-bordo-profundo);
    margin-bottom: 20px;
    padding: 20px 10px;
    @media (max-width: 580px) {
      font-size: 1.5rem;
    }
  }
  & img {
    width: 70px;
    height: 64px;
  }
  @media (max-width: 980px) {
    padding: 5px;
    width: 90%;
  }
`;
