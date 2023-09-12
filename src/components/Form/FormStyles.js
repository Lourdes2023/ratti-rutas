import { Form as FormikForm } from "formik";
import styled from "styled-components";

export const Form = styled(FormikForm)`
  display: block;
  text-align: center;
  padding: 40px 0;
  flex-direction: column;
  border: 1px solid var(--color-border);
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  h2 {
    font-size: 2rem;
    color: var(--color-text-contact);
    margin-bottom: 20px;
    padding: 20px 10px;
    background: var(--color-backg-contact);
    @media (max-width: 380px) {
      font-size: 1.5rem;
    }
  }
  @media (max-width: 980px) {
    padding: 0;
  }
`;
