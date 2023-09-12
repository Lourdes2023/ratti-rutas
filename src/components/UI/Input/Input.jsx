import { ErrorMessage, Field } from "formik";
import {
  ErrorStyled,
  InputContainerStyles,
  InputStyles,
  LabelStyles,
} from "./inputStyles";

const Input = ({ label, type, name, isError }) => {
  return (
    <>
      <InputContainerStyles>
        <LabelStyles htmlFor={label}>{label}</LabelStyles>
        <Field
          type={type}
          id={label}
          name={name}
          error={isError}
          as={InputStyles}
        />
        <ErrorMessage name={name} component={ErrorStyled} />
        {/* <ErrorMessage name={name} component={ErrorStyled} />     */}
        {isError && <ErrorMessage></ErrorMessage>}
      </InputContainerStyles>
    </>
  );
};

export default Input;
