import { ErrorMessage, Field } from "formik";
import {
  ErrorStyled,
  InputContainerStyles,
  LabelStyles,
} from "../Input/inputStyles";
import { TextAreaStyles } from "./TextAreaStyles";

const TextArea = ({ label, name, isError }) => {
  return (
    <>
      <InputContainerStyles>
        <LabelStyles htmlFor={label}>{label}</LabelStyles>
        <Field name={name} id={label} error={isError} as={TextAreaStyles} />

        <ErrorMessage name={name} component={ErrorStyled} />
      </InputContainerStyles>
    </>
  );
};

export default TextArea;
