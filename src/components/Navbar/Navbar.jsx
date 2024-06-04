import Logo from "../../assets/logo2.png";
import { CiUser } from "react-icons/ci";
import { useLocation } from "react-router-dom";
import {
  LoginContainer,
  Loginstyled,
  LogoContainer,
  MenuLinkContainer,
  MenuLink,
  NavbarContainerStyled,
  NavbarLinkContainer,
  UserNameStyles,
} from "./NavbarStyles";
import { useSelector } from "react-redux";
import { color } from "framer-motion";


const Navbar = () => {
  const location = useLocation();
  const currentUser = useSelector((state) => state.user.currentUser);

  
  return (
    <NavbarContainerStyled>
      <NavbarLinkContainer>
      <LogoContainer>
        <img src={Logo} alt="Logo" />
      </LogoContainer>{" "}
      <MenuLinkContainer >
       
          <MenuLink
            to={"/"}
            className={location.pathname === "/" ? "active" : ""}
          >
            Home
          </MenuLink>
        
          <MenuLink
            to={"/About"}
            className={location.pathname === "/About" ? "active" : ""}
          >
            Nosotros
          </MenuLink>
        
          <MenuLink
            to={"/Services"}
            className={location.pathname === "/Services" ? "active" : ""}
          >
            Servicios
          </MenuLink>
        
          <MenuLink
            to={"/Contact"}
            className={location.pathname === "/Contact" ? "active" : ""}
          >
           Contacto
          </MenuLink>
        
          <MenuLink
            to={"/products"}
            className={location.pathname === "/products" ? "active" : ""}
          >
            Productos
          </MenuLink>
        
       
      </MenuLinkContainer>
      </NavbarLinkContainer>
       <LoginContainer>
          {currentUser ? (
            <UserNameStyles>
              <p>{currentUser.nombre}</p>
            </UserNameStyles>
          ) : (
            <Loginstyled to={"/login"} >
               Login
              <CiUser  size={18} color="green" />
            </Loginstyled>
          )}
        </LoginContainer>
    </NavbarContainerStyled>
  );
};

export default Navbar;