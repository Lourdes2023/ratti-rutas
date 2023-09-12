import Logo from "../../assets/logo2.png";
import { LuMenu } from "react-icons/lu";
import {
  LogoConatiner,
  MenuLinkContainer,
  MobileIcont,
  NavbarContainerStyled,
  NavbarLinkStyled,
} from "./NavbarStyles";
import CartIcon from "./CartIcon/CartIcons";
import ModalCart from "./Modal/CartModal";
const Navbar = () => {
  return (
    <>
      <NavbarContainerStyled>
        <ModalCart />
        <LogoConatiner>
          <img src={Logo} alt="Logo" />
          <h3>
            Cocheria
            <br /> Ratti
          </h3>
        </LogoConatiner>
        <MobileIcont>
          <LuMenu />
        </MobileIcont>
        <MenuLinkContainer className="menu-container">
          <NavbarLinkStyled to={"/"}>Home</NavbarLinkStyled>
          <NavbarLinkStyled to={"/About"}>Nosotros</NavbarLinkStyled>
          <NavbarLinkStyled to={"/Services"}>Servicios</NavbarLinkStyled>
          <NavbarLinkStyled to={"/Contact"}>Contacto</NavbarLinkStyled>{" "}
        </MenuLinkContainer>
        <CartIcon />
      </NavbarContainerStyled>
    </>
  );
};

export default Navbar;
