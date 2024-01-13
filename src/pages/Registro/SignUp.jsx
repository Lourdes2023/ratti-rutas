import React from "react";
import { FormContainer } from "../../components/Form/FormStyles";
import { Form } from "../../components/Form/FormStyles";
import {
  SignUpStyledContainer,
  SignUptTitle,
  SignUpStyled,
} from "./SignUpStyled";
import Submit from "../../components/UI/Submit/Submit";
import { Formik } from "formik";
import { registerInitialValues } from "../../formik/initialValues";
import Input from "../../components/UI/Input/Input";
import { registerValidationSchema } from "../../formik/validationSchema";
import { Link } from "react-router-dom";
import { ButtonContainerStyle } from "../../components/UI/Button/ButtonStyled";
import Logo from "../../assets/logo2.png";
import { CreateUser } from "../../axios/axiosUser";
import { setCurrentUser } from "../../redux/user/userSlice";
import { useDispatch } from "react-redux";
import useCheckAuth from "../../hooks/useRedirect";
const SignUp = () => {
  const dispatch = useDispatch();
  useCheckAuth('/login');

  return (
    <SignUpStyled>
      <FormContainer>
        <Formik
          initialValues={registerInitialValues}
          validationSchema={registerValidationSchema}
          onSubmit={async (values, actions) => {
            const user = await CreateUser(
              values.name,
              values.email,
              values.password
            );
            console.log(user.usuario.code)
            actions.resetForm();
            if (user) {
              dispatch(setCurrentUser(
                {...user.usuario,code: user.usuario.code }));

            }
          }}
        >
          <Form>
            <img src={Logo} alt="logo" />
            <SignUptTitle>
              <h2>Registro</h2>
              <p>Por favor, complete el siguiente formulario</p>
            </SignUptTitle>
            <SignUpStyledContainer>
              <Input name="name"
                     type="text"
                     placeholder="Ingrese su nombre" />
              <Input
                name="email"
                type="email"
                placeholder="Ingrese correo electrónico"
              />
              <Input
                name="password"
                type="password"
                placeholder="Ingrese su contraseña"
              />
            </SignUpStyledContainer>
            <ButtonContainerStyle>
              <Submit>Registrarse</Submit>
            </ButtonContainerStyle>
          </Form>
        </Formik>

        <SignUptTitle>
          <p>
            ¿Ya tienes una cuenta?{" "}
            <Link to="/login">
              <Submit>Iniciar sesión</Submit>
            </Link>
          </p>
        </SignUptTitle>
      </FormContainer>
    </SignUpStyled>
  );
};

export default SignUp;
