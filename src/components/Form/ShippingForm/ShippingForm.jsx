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
import { useSelector } from "react-redux";
import { createOrder } from "../../../axios/axiosOrdenes";
import { clearCart } from "../../../redux/cart/Slice.Cart";


const ShippingForm = ( {cartItems, total  } ) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const currentUser =  useSelector(state => state.user.currentUser);
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
        onSubmit={ async (values) => {
          const orderData = { 
            price: total,
            items: cartItems,
            shippingDetails: {...values},
            total: total *2,
          };
          try {
            console.log(orderData, dispatch, currentUser);
            await createOrder(orderData, dispatch, currentUser);
           navigate("/PaymentForm");
            dispatch(clearCart());
          } catch (error) {
            console.error(error);
            alert("No se ha creado la orden")
          }
        }
      }
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
