import { FormContainer } from "../../components/Form/FormStyles";
import { Form } from "../../components/Form/FormStyles";
import { Link } from "react-router-dom";
import Submit from "../../components/UI/Submit/Submit";
import Input from "../../components/UI/Input/Input";
import { Formik } from "formik";
import { LoginUser } from "../../axios/axiosUser";
import { loginInitialValues } from "../../formik/initialValues";
import { loginValidationSchema } from "../../formik/validationSchema";
import Logo from "../../assets/logo2.png";
import useCheckAuth from "../../hooks/useRedirect";
import {
  TitleContainer,
  LoginStyledContainer,
  LoginStyled,
} from "./LoginStyles";
import { useDispatch } from 'react-redux';
import { setCurrentUser } from "../../redux/user/userSlice";

const Login = () => {

  const dispatch = useDispatch();
  useCheckAuth('/');

  
  return (
    <FormContainer>
      <Formik
        initialValues={loginInitialValues}
        validationSchema={loginValidationSchema}
        onSubmit={async (values) => {
          const user = await LoginUser(values.email, values.password)
          console.log("Login usuario:",user);
          if(user){
            dispatch(setCurrentUser({...user.usuario, Token: user.Token}))
          }         
        }}
      >
        <LoginStyledContainer>
          <Form>
            <img src={Logo} alt="logo" />
            <TitleContainer>
              <h2>Iniciar sesion</h2>
              <p>Por favor, complete el siguiente formulario</p>
            </TitleContainer>
            <LoginStyled>
              <Input
                name="email"
                label="Correo electrónico"
                type="email"
                placeholder="Ingrese su correo electrónico"
              />
              <Input
                name="password"
                label="Contraseña"
                type="password"
                placeholder="Ingrese su contraseña"
              />
              <Submit>iniciar sesion</Submit>
            </LoginStyled>
          </Form>
        </LoginStyledContainer>
      </Formik>
      <p>
        ¿No tienes una cuenta?{" "}
        <Link to="/SignUp">
          <Submit>Registro</Submit>
        </Link>
      </p>
    </FormContainer>
  );
};

export default Login;
