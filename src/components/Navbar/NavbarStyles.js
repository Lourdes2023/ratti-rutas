import styled from "styled-components";
import { NavLink, Link } from "react-router-dom";
import { motion } from "framer-motion";

export const NavbarContainerStyled = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 4.5rem;
  width: 100%;
  background-color: var(--color-back-Header);
  box-shadow: var(--color-shadow);
  position: fixed;
  top: 5px;
  z-index: 2;
  bottom: 0;
  border: 1px solid white;
  @media (max-width: 1024px) {
    gap: 20px;
  }
  @media (max-width: 380px) {
  }
`;
export const NavbarContainer = styled(motion.nav)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90%;
  height: 100%;
  padding: 0 1rem;
  filter: drop-shadow(1px 1px 1px #4700b3);
  .menu {
    width: 300px;
  }
  @media (max-width: 1024px) {
  }
  @media (max-width: 340px) {
    padding: 0;
  }
`;

export const LogoContainer = styled.div`
  font-family: "Times New Roman", Times, serif;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-left: 2rem;
  gap: 10px;
  & img {
    width: 50px;
  }
  h3 {
    color: var(--color-Logo-text);
    font-size: 1.2rem;
  }
  @media (max-width: 1024px) {
    margin-left: 1rem;
    margin-right: 0;
  }
  @media (max-width: 780px) {
    h3 {
      font-size: 1em;
    }
  }
  @media (max-width: 380px) {
    img {
      font-size: 1em;
    }
  }
`;
export const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 1024px) {
    gap: 30px;
  }
`;

export const MenuLinkContainer = styled(motion.ul)`
  display: flex;
  gap: 50px;
  @media (max-width: 1024px) {
    justify-content: center;
    align-items: center;
    flex-direction: column;
    position: absolute;
    top: 100%;
    left: 0;
    right: 300%;
    width: 240px;
    height: 390px;
    gap: 10px;
    padding: 0;
    background-color: var(--color-back-Header);
    z-index: 999;
  }
  @media (max-width: 380px) {
    width: 210px;

    gap: 10px;
    padding: 0;
    background-color: var(--color-back-Header);
    z-index: 999;
  }
`;

export const NavbarLinkStyled = styled(motion.li)``;
export const Loginstyled = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 5px;
  cursor: pointer;
  height: 30px;
  padding: 5px;
  border-radius: 8px;
  background-image: var(--color-buttonLogin-bg);
  color: var(--color-button-text);
  font-size: 14px;

  &:hover {
    background-image: var(--color-buttonLogin-bg-hover);
  }
  &:active {
    background-image: var(--color-buttonEm-bg-hover);
  }
  &:focus {
    background-color: #e6e6e6;
  }
  span {
    font-size: 12px;
    font-weight: 400;
    color: var(--color-text-contact);
  }
`;
export const SignUpStyled = styled(Loginstyled)`
  background: var(--color-buttonLogin-bg-hover);
`;
export const MenuLink = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  align-items: center;
  height: 40px;
  width: 80px;
  border-radius: 10px;
  transition: color 0.3s ease-in-out;
  &:hover {
    background-color: #3c4857;
  }
  &.active {
    background-color: #3c4857;
  }
  & p {
    font-size: 16px;
    font-weight: 400;
    padding: 10px;
    color: var(--color-text-contact);
  }
`;

export const MenuItemLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90%;
  border: 1px solid var(--color-primary-blue);
  border-radius: 10px;
  transition: color 0.3s ease-in-out;
  &:hover {
  }
`;
export const ButtonStyles = styled(motion.button)`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  border: none;
  cursor: pointer;
  margin: 2rem;
  z-index: 1;
  @media (max-width: 1024px) {
    margin: 0;
  }
`;
export const IconContainerStyles = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;
  background: var(--color-primary-blue);
  border-radius: 1em;
  @media (max-width: 380px) {
    padding: 10px;
    height: 0.5em;
    gap: 10px;
  }
`;

export const MobileIcont = styled(motion.div)`
  display: none;
  @media (max-width: 1024px) {
    display: flex;
    color: var(--color-text-contact);
    cursor: pointer;
  }
`;

export const UserNameStyles = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  gap: 10px;
  & p {
    font-size: 12px;
    font-weight: 400;
    color: var(--color-text-contact);
  }
  @media (max-width: 580px) {
    p {
      display: none;
    }
  }
`;
