import { Formik } from "formik";
import { Form } from "../FormStyles";
import Input from "../../UI/Input/Input";
import Submit from "../../UI/Submit/Submit";
import { FormContainer } from "../FormStyles";
import { validationSchemaPayment } from "../../../formik/validationSchema";
import { initialValuesPayment } from "../../../formik/initialValues";
import { ImCreditCard } from "react-icons/im";
import { useDispatch, useSelector } from "react-redux";
import { addPaymentInfo } from "../../../redux/Form/FormSlice";
import { useNavigate } from "react-router-dom";
import { clearCart } from "../../../redux/cart/Slice.Cart";
const PaymentForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <FormContainer>
      <h2>
        Información de pago
        <span>
          <ImCreditCard />
        </span>
      </h2>
      <p> 2-Ingrese los datos de su tarjeta de crédito</p>
      <Formik
        initialValues={initialValuesPayment}
        validationSchema={validationSchemaPayment}
        onSubmit={(values) => {
          dispatch(addPaymentInfo(values));
          navigate("/felicitaciones");
          dispatch(clearCart());
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <Input
              name="name"
              type="text"
              placeholder={"Nombre que aparece en la tarjeta"}
            />

            <Input
              name="cardType"
              type="text"
              placeholder={"Tipo de tarjeta"}
            />

            <Input
              name="cardNumber"
              type="number"
              placeholder={"Número de su tarjeta"}
            />

            <Input name="expirationDate" type="number" placeholder={"MM/AA"} />
            <Input
              name="securityCode"
              type="number"
              placeholder={"Código de seguridad"}
            />

            <Submit disabled={isSubmitting}>Continuar</Submit>
          </Form>
        )}
      </Formik>
    </FormContainer>
  );
};

export default PaymentForm;
