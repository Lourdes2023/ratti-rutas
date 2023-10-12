import { ErrorMessage, Field } from "formik";
import { ErrorMessageStyled, InputBoxStyled, InputStyled } from "./inputStyles";
const Input = ({ type, placeholder, name }) => {
  return (
    <Field name={name}>
      {({ field, form: { errors, touched } }) => (
        <InputBoxStyled>
          <InputStyled
            type={type}
            placeholder={placeholder}
            {...field}
            isError={errors[field.name] && touched[field.name]}
          />
          <ErrorMessage name={field.name}>
            {(mensaje) => <ErrorMessageStyled>{mensaje}</ErrorMessageStyled>}
          </ErrorMessage>
        </InputBoxStyled>
      )}
    </Field>
  );
};

export default Input;
