import * as Yup from "yup";

const phoneRegex = /\d{10}$/;

export const ValidationSchema = Yup.object({
  name: Yup.string().trim().required("Campo Requerido"),
  phoneNumber: Yup.string()
    .matches(phoneRegex, "Número inválido")
    .required("Campo Requerido"),
  email: Yup.string().email("Email inválido").required("Campo Requerido"),
  Consult: Yup.string().required("Campo Requerido"),
  Message: Yup.string().required("Campo Requerido"),
});
