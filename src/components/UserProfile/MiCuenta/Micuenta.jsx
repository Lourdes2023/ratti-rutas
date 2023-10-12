import { useSelector } from "react-redux";
import {
  Container,
  Title,
  Paragraph,
  Step,
  PresupuestoContainer,
} from "../UserProfile";
import { MdMarkEmailRead } from "react-icons/md";
import image from "../../../assets/User.svg";
const Micuenta = () => {
  const { currentUser } = useSelector((state) => state.user);

  return (
    <Container>
      <PresupuestoContainer>
        {" "}
        <h1>Datos de tu cuenta </h1>
        {currentUser ? (
          <Step>
            <Title> Nombre: {currentUser.nombre}</Title>
            <img src={image} alt="user" />
            <Paragraph Paragraph>Email: {currentUser.email}</Paragraph>
            <MdMarkEmailRead size={40} color=" #718096" />
          </Step>
        ) : (
          <div>Cargando datos...</div>
        )}
      </PresupuestoContainer>
    </Container>
  );
};

export default Micuenta;
