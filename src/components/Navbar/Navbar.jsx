import Logo from "../../assets/logo2.png";
import { FaUser } from "react-icons/fa";
import { useLocation } from "react-router-dom";
import {
  LoginContainer,
  Loginstyled,
  LogoContainer,
  MenuLinkContainer,
  MenuLink,
  NavbarContainer,
  NavbarContainerStyled,
  NavbarLinkStyled,
  UserNameStyles,
  ButtonStyles,
  IconContainerStyles,
} from "./NavbarStyles";
import CartIcon from "./CartIcon/CartIcons";
import ModalCart from "./Modal/CartModal";
import { useSelector } from "react-redux";
import UserMenu from "./UserMenu/UserMenu";
import { useDispatch } from "react-redux";
import { FaChevronCircleUp } from "react-icons/fa";
import { useState } from "react";
import { motion } from "framer-motion";
import { items } from "../../utilidades/NavbarAnimation";
const itemVariants = {
  open: {
    opacity: 1,
    y: 0,
  },
  closed: {
    opacity: 0,
    y: 20,
  },
};

const Navbar = () => {
  const location = useLocation();
  const currentUser = useSelector((state) => state.user.currentUser);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <NavbarContainerStyled>
      <ModalCart />{" "}
      <LogoContainer>
        <img src={Logo} alt="Logo" />
        <h3>
          Cocheria
          <br /> Ratti
        </h3>
      </LogoContainer>{" "}
      <NavbarContainer
        initial={false}
        animate={isOpen ? "open" : "closed"}
        className="menu"
      >
        <MenuLinkContainer
          variants={{
            open: {
              clipPath: "inset(0% 0% 0% 0% round 10px)",
              transition: {
                type: "spring",
                bounce: 0,
                duration: 0.7,
                delayChildren: 0.3,
                staggerChildren: 0.05,
              },
            },
            closed: {
              clipPath: "inset(10% 50% 90% 50% round 10px)",
              transition: {
                type: "spring",
                bounce: 0,
                duration: 0.3,
              },
            },
          }}
          style={{ pointerEvents: isOpen ? "auto" : "none" }}
        >
          <NavbarLinkStyled variants={itemVariants}>
            <MenuLink
              to={"/"}
              className={location.pathname === "/" ? "active" : ""}
            >
              <p>Home</p>
            </MenuLink>
          </NavbarLinkStyled>
          <NavbarLinkStyled variants={itemVariants}>
            <MenuLink
              to={"/About"}
              className={location.pathname === "/About" ? "active" : ""}
            >
              <p>Nosotros</p>
            </MenuLink>
          </NavbarLinkStyled>
          <NavbarLinkStyled variants={itemVariants}>
            <MenuLink
              to={"/Services"}
              className={location.pathname === "/Services" ? "active" : ""}
            >
              <p>Servicios</p>
            </MenuLink>
          </NavbarLinkStyled>
          <NavbarLinkStyled variants={itemVariants}>
            <MenuLink
              to={"/Contact"}
              className={location.pathname === "/Contact" ? "active" : ""}
            >
              <p>Contacto</p>
            </MenuLink>
          </NavbarLinkStyled>
          <NavbarLinkStyled variants={itemVariants}>
            <MenuLink
              to={"/products"}
              className={location.pathname === "/products" ? "active" : ""}
            >
              <p>Productos</p>
            </MenuLink>
          </NavbarLinkStyled>
          <LoginContainer>
            {currentUser ? (
              <UserNameStyles>
                <UserMenu />
                <p>{currentUser.nombre}</p>
              </UserNameStyles>
            ) : (
              <Loginstyled to={"/login"}>
                <p>Login</p>
                <FaUser size={13} color="green" />
              </Loginstyled>
            )}
          </LoginContainer>
        </MenuLinkContainer>
        <ButtonStyles
          onClick={() => setIsOpen(!isOpen)}
          whileHover={{ scale: 1.1 }}
        >
          <IconContainerStyles
            variants={{
              open: { rotate: 180 },
              closed: { rotate: 0 },
            }}
            transition={{ duration: 0.2 }}
            style={{ originY: 0.55 }}
          >
            <FaChevronCircleUp size={18} />
          </IconContainerStyles>
        </ButtonStyles>
        <motion.div transition={{ duration: 0.2 }} whileHover={{ scale: 1.2 }}>
          <CartIcon />
        </motion.div>
      </NavbarContainer>
    </NavbarContainerStyled>
  );
};

export default Navbar;
