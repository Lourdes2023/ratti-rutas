import LoginInput from '../../components/UI/LoginInput/LoginInput';
import Submit from '../../components/UI/Submit/Submit';
import { useNavigate } from 'react-router-dom';
import { Form, ValidateContainerStyled } from './ValidateStyles';
import { useDispatch, useSelector } from 'react-redux';
import { verifyUser } from '../../axios/axios-user';
import { validateInitialValues, validateValidationSchema } from '../../formik';
import { setCurrentUser, setVerified } from '../../redux/user/userSlice';

const Validate = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.user.currentUser);

  useEffect(() => {
    if (!currentUser) {
      navigate('/login');
    } else if (currentUser.verified) {
      navigate('/');
    }
  }, [currentUser, navigate]);

  return (
    <ValidateContainerStyled>
      <h1>Validar cuenta</h1>
      <Formik
        initialValues={validateInitialValues}
        validationSchema={validateValidationSchema}
        onSubmit={async (values) => {
          try {
            const result = await verifyUser(currentUser.email, values.code);
            dispatch(setVerified(result.isVerified));
            navigate('/');
          } catch (error) {
            // Muestra un mensaje de error al usuario
            alert(error.response.data.msg);
          }
        }}
      >
        <Form>
          <LoginInput name="code" type="code" placeholder="code" />
          <Submit>Validar</Submit>
        </Form>
      </Formik>
    </ValidateContainerStyled>
  );
};

export default Validate;