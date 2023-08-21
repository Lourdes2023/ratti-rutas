import React from "react";
import Logo from "../../assets/logo2.png";
import {
  LogoConatiner,
  MenuLinkContainer,
  NavbarContainerStyled,
  NavbarLinkStyled,
} from "./NavbarStyles";

const Navbar = () => {
  return (
    <NavbarContainerStyled>
      <LogoConatiner>
        <img src={Logo} alt="Logo" />
        <h1>Cocheria Ratti</h1>
      </LogoConatiner>
      <MenuLinkContainer>
        <NavbarLinkStyled to={"/"}>Home</NavbarLinkStyled>
        <NavbarLinkStyled to={"/About"}>Nosotros</NavbarLinkStyled>
        <NavbarLinkStyled to={"/Services"}>Servicios</NavbarLinkStyled>
        <NavbarLinkStyled to={"/Contact"}>Contacto</NavbarLinkStyled>
      </MenuLinkContainer>
    </NavbarContainerStyled>
  );
};

export default Navbar;
