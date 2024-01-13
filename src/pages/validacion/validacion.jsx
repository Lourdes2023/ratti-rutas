
import { Formik } from 'formik';
import Submit from '../../components/UI/Submit/Submit';
import { useNavigate } from 'react-router-dom';
import { ValidateContainerStyled } from './ValidateStyles';
import {  useSelector } from 'react-redux';
import { validateInitialValues } from '../../formik/initialValues';
import { validateValidationSchema } from '../../formik/validationSchema';
import Input from '../../components/UI/Input/Input';
import { Form } from '../../components/Form/FormStyles';
import { verifyUser } from '../../axios/axiosUser';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setVerified } from '../../redux/user/userSlice';


const Validate = () => {
  const codeFromAPI = useSelector((state) => state.user.currentUser.code);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const currentUser = useSelector(state => state.user.currentUser);

 
  useEffect(() => {
    if (currentUser && currentUser.verified) {
      navigate('/checkout');
    }
  }, [currentUser, navigate]);


  return (
    <ValidateContainerStyled>
      <h1>Validar cuenta</h1>
      <p>Ingrese este código para validar su cuenta: {codeFromAPI}</p>
      <Formik
        initialValues={validateInitialValues}
        validationSchema={validateValidationSchema}
        onSubmit={async values => {
          await verifyUser(currentUser.email, values.code);
          dispatch(setVerified());
          navigate('/checkout');
        }}

      >
        <Form>
          <Input
            name="email"
            type="email"
            placeholder="email"
          />
          <Input
            name="code"
            type="code"
            placeholder="code"
          />
          <Submit>Validar</Submit>
        </Form>
      </Formik>
    </ValidateContainerStyled>
  );
};

export default Validate;
