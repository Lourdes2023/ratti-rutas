import * as Yup from "yup";

export const validationSchemaContact = Yup.object({
  name: Yup.string().required("El nombre es obligatorio"),
  email: Yup.string()
    .email("El correo electrónico no es válido")
    .required("El correo electrónico es obligatorio"),
  message: Yup.string().required("El mensaje es obligatorio"),
});

export const validationSchemaPayment = Yup.object({
  name: Yup.string().required("El nombre es obligatorio"),
  cardType: Yup.string().required("Este campo es requerido"),
  cardNumber: Yup.string().required("Este campo es requerido"),
  expirationDate: Yup.string().required("Este campo es requerido"),
  securityCode: Yup.string().required("Este campo es requerido"),
});

export const validationSchemaShipping = Yup.object({
  name: Yup.string().required("El nombre es obligatorio"),
  cellphone: Yup.string().required("El teléfono es obligatorio"),
  location: Yup.string().required("La localidad es obligatoria"),
  address: Yup.string().required("La dirección es obligatoria"),
});

export const registerValidationSchema = Yup.object({
  name: Yup.string().required("El nombre es obligatorio"),
  email: Yup.string()
    .email("El correo electrónico no es válido")
    .required("El correo electrónico es obligatorio"),
  password: Yup.string()
    .min(6, "La contraseña debe tener al menos 6 caracteres")
    .required("La contraseña es obligatoria"),
});

export const loginValidationSchema = Yup.object({
  email: Yup.string()
    .email("El correo electrónico no es válido")
    .required("El correo electrónico es obligatorio"),
  password: Yup.string()
    .min(6, "La contraseña debe tener al menos 6 caracteres")
    .required("La contraseña es obligatoria"),
});

export const validationSchemaPresupuesto = Yup.object({
  name: Yup.string().required("El nombre es obligatorio"),
  email: Yup.string()
    .email("El correo electrónico no es válido")
    .required("El correo electrónico es obligatorio"),
  telefono: Yup.string().required("El teléfono es obligatorio"),
  direccion: Yup.string().required("La dirección es obligatoria"),
  localidad: Yup.string().required("La localidad es obligatoria"),
  provincia: Yup.string().required("La provincia es obligatoria"),
  codigoPostal: Yup.string().required("El código postal es obligatorio"),
  fallecimiento: Yup.boolean().required("Este campo es obligatorio"),
});

export const validateValidationSchema= Yup.object({
  email: Yup.string()
    .email("El correo electrónico no es válido")
    .required("El correo electrónico es obligatorio"),
  code: Yup.string().required("El código es obligatorio"),
});