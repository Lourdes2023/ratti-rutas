import { Formik } from "formik";
import { Form } from "../FormStyles";
import Input from "../../UI/Input/Input";
import Submit from "../../UI/Submit/Submit";
import { ShippingFormContainer, ShippingFormTitle } from "./ShippingFormStyles";
import { FaShippingFast } from "react-icons/fa";
import { initialValuesShipping } from "../../../formik/initialValues";
import { validationSchemaShipping } from "../../../formik/validationSchema";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { addShippingInfo } from "../../../redux/Form/FormSlice";
const ShippingForm = () => {
  const navigate = useNavigate;
  const dispatch = useDispatch();
  return (
    <ShippingFormContainer>
      <ShippingFormTitle>Finalizá tu compra</ShippingFormTitle>

      <h2>
        Información de envío{" "}
        <span>
          <FaShippingFast />
        </span>{" "}
      </h2>

      <p>1 - Ingrese los datos para el envío</p>
      <Formik
        initialValues={initialValuesShipping}
        validationSchema={validationSchemaShipping}
        onSubmit={(values) => {
          dispatch(addShippingInfo(values));
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <Input
              name="name"
              label="Nombre"
              type="text"
              placeholder="Tu nombre"
            />
            <Input
              name="cellphone"
              label="Celular"
              type="text"
              placeholder="Tu celular"
            />
            <Input
              name="location"
              label="Localidad"
              type="text"
              placeholder="Tu localidad"
            />
            <Input
              name="address"
              label="Dirección"
              type="text"
              placeholder="Tu dirección"
            />
            <Submit disabled={isSubmitting}>Iniciar Pedido</Submit>
          </Form>
        )}
      </Formik>
    </ShippingFormContainer>
  );
};

export default ShippingForm;
