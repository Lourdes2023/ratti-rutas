import { Form, FormContainer } from "./FormStyles";
import { Formik } from "formik";
import Input from "../UI/Input/Input";
import TextArea from "../UI/TextArea/TextArea";
import Submit from "../UI/Submit/Submit";
import { validationSchemaContact } from "../../formik/validationSchema";
import { initialValuesContact } from "../../formik/initialValues";

function ForContact() {
  return (
    <FormContainer>
      <Formik
        initialValues={initialValuesContact}
        validationSchema={validationSchemaContact}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <Input name="name" placeholder="Nombre y Apellido" type="Text" />
            <Input name="email" placeholder="Correo Electrónico" type="Text" />
            <TextArea name="Message" placeholder="Mensaje" type="text" />
            <Submit disabled={isSubmitting} type="submit">
              Enviar
            </Submit>
          </Form>
        )}
      </Formik>
    </FormContainer>
  );
}

export default ForContact;
