import { Form } from "./FormStyles";
import { Formik } from "formik";
import Input from "../UI/Input/Input";
import TextArea from "../UI/TextArea/TextArea";
import Submit from "../UI/Submit/Submit";
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

function ForContact() {
  return (
    <>
      <Formik
        initialValues={{
          name: "",
          phoneNumber: "",
          email: "",
          Consult: "",
          Message: "",
        }}
        validationSchema={ValidationSchema}
        onSubmit={(values, { resetForm }) => {
          resetForm();
        }}
      >
        {({ touched, errors }) => (
          <Form>
            <Input
              name="name"
              label="Nombre y Apellido"
              type="Text"
              isError={errors.name && touched.name}
            />

            <Input
              name="phoneNumber"
              label="Numero"
              type="number"
              isError={errors.phoneNumber && touched.phoneNumber}
            />
            <Input
              name="email"
              label="Correo Electrónico"
              type="Text"
              isError={errors.email && touched.email}
            />
            <Input
              name="Consult"
              label="Motivo de Consulta"
              type="Text"
              isError={errors.Consult && touched.Consult}
            />
            <TextArea name="Message" label="Mensaje" />
            <Submit />
          </Form>
        )}
      </Formik>
    </>
  );
}

export default ForContact;
