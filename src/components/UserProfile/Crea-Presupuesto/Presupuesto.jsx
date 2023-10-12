import { Formik } from "formik";
import { Form } from "../../Form/FormStyles";
import Input from "../../UI/Input/Input";
import Submit from "../../UI/Submit/Submit";
import { PresupuestoContainer, Title, InputContainer } from "../UserProfile";
import { initialValuesPresupuesto } from "../../../formik/initialValues";
import { validationSchemaPresupuesto } from "../../../formik/validationSchema";
const PresupuestoForm = () => {
  const handleSubmit = (values) => {
    console.log(values);
  };

  return (
    <PresupuestoContainer>
      <Title>Presupuesto </Title>
      <p>
        Pídenos presupuesto sin compromiso y te ofreceremos un servicio cercano,
        de calidad y pensado para ti.
      </p>
      <Formik
        initialValues={initialValuesPresupuesto}
        validationSchema={validationSchemaPresupuesto}
        onSubmit={(values) => console.log(values)}
      >
        {({ isSubmitting }) => (
          <Form>
            <p>
              <strong>1 - Ingrese sus datos</strong>
            </p>
            <Input
              name="name"
              label="Nombre"
              type="text"
              placeholder="Tu nombre"
            />
            <p>
              <strong>2 - Ingrese su email</strong>
            </p>

            <Input
              name="email"
              label="Email"
              type="email"
              placeholder="Tu email"
            />
            <p>
              <strong>3 - Ingrese su teléfono</strong>
            </p>
            <Input
              name="telefono"
              label="Celular"
              type="text"
              placeholder="Tu celular"
            />
            <p>
              <strong>4 - Ingrese Localidad del fallecido</strong>
            </p>

            <Input
              name="localidad"
              label="Localidad"
              type="text"
              placeholder="Tu localidad"
            />
            <p>
              <strong>5 - Ingrese dirección del fallecido</strong>
            </p>
            <Input
              name="direccion"
              label="Dirección"
              type="text"
              placeholder="Tu dirección"
            />

            <p>
              <strong>6 - Ingrese su código postal</strong>
            </p>
            <Input
              name="codigoPostal"
              label="Código Postal"
              type="text"
              placeholder="Código Postal"
            />
            <p>
              <strong>7 -El fallecimiento ya se produjo?</strong>
            </p>
            <InputContainer>
              <label>
                <p>Si</p>
                <Input
                  name="true"
                  label="Fallecimiento"
                  type="checkbox"
                  placeholder="Fallecimiento"
                />
              </label>

              <label>
                <p>No</p>
                <Input
                  name="false"
                  label="Fallecimiento"
                  type="checkbox"
                  placeholder="Fallecimiento"
                />
              </label>
            </InputContainer>

            <Submit disabled={isSubmitting}>Enviar</Submit>
          </Form>
        )}
      </Formik>
    </PresupuestoContainer>
  );
};

export default PresupuestoForm;
