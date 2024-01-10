
import { Formik } from 'formik';
import Submit from '../../components/UI/Submit/Submit';
import { useNavigate } from 'react-router-dom';
import { ValidateContainerStyled } from './ValidateStyles';
import { useDispatch, useSelector } from 'react-redux';
import { validateInitialValues } from '../../formik/initialValues';
import { validateValidationSchema } from '../../formik/validationSchema';
import Input from '../../components/UI/Input/Input';
import { Form } from '../../components/Form/FormStyles';
import { verifyUser } from '../../axios/axiosUser';






const Validate = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const codeFromAPI = useSelector((state) => state.user.currentUser.code);


  return (
    <ValidateContainerStyled>
      <h1>Validar cuenta</h1>
      <p>Ingrese este código para validar su cuenta: {codeFromAPI}</p>
      <Formik
        initialValues={validateInitialValues}
        validationSchema={validateValidationSchema}
        onSubmit={async (values) => {
          const { email, code } = values; 
          const response = await verifyUser(email, code); 
          if (response) {
            navigate('/');
          }
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
