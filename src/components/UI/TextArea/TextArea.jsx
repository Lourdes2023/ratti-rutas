import { ErrorMessage, Field } from "formik";
import {
  TextAreaStyles,
  ErrorMessageStyled,
  TextAreaContainer,
} from "./TextAreaStyles";

const TextArea = ({ placeholder, name, type }) => {
  return (
    <Field name={name}>
      {({ field, form: { errors, touched } }) => (
        <TextAreaContainer>
          <TextAreaStyles
            type={type}
            placeholder={placeholder}
            {...field}
            isError={errors[field.name] && touched[field.name]}
          />
          <ErrorMessage name={field.name}>
            {(mensaje) => <ErrorMessageStyled>{mensaje}</ErrorMessageStyled>}
          </ErrorMessage>
        </TextAreaContainer>
      )}
    </Field>
  );
};

export default TextArea;
