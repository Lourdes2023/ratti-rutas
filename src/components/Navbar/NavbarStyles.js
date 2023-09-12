import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

export const NavbarContainerStyled = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  height: 4.5rem;
  width: 100%;
  box-shadow: var(--color-shadow);
  position: fixed;
  top: 5px;
  bottom: 0;
  background-color: white;
  @media (max-width: 1200px) {
  }
  @media (max-width: 1024px) {
    justify-content: space-around;
  }
`;
export const LogoConatiner = styled.div`
  font-family: "Times New Roman", Times, serif;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: #632526;
  margin-left: 2rem;
  gap: 10px;
  & img {
    width: 50px;
    @media (max-width: 380px) {
      width: 40px;
    }
  }
  h3 {
    font-size: 1.2rem;
  }
  @media (max-width: 780px) {
    font-size: 8px;
    margin-left: 0;
  }
`;
export const MenuLinkContainer = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 1024px) {
    display: ${(props) => (props.isOpen ? "flex" : "none")};
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 50px;
    position: absolute;
    top: 57px;
    right: 2%;
    height: auto;
    width: 200px;
    padding: 30px 0px;
    border: 1px solid #6f6d6d9f;
    border-radius: 5px;
    transition: height 0.5s ease;
    background: #343434;
  }
`;

export const NavbarLinkStyled = styled(NavLink)`
  display: flex;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  margin: 0px 18px;
  color: var(--color-secondary);
  border-radius: 8px;
  transition: 0.5s all ease;
  padding: 10px;
  &:hover {
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
    background-color: var(--color-button-hover);
  }
`;
export const NavbarLinkStyledProduct = styled(NavLink)`
  display: flex;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  border: 1px solid #8e5741;
  color: var(--color-secondary);
  border-radius: 18px;
  transition: 0.5s all ease;
  padding: 10px;
  &:hover {
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
    background-color: var(--color-button-hover);
  }
`;

export const MenuItemLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

export const MobileIcont = styled.div`
  display: none;

  @media (max-width: 1024px) {
    display: flex;
    font-size: 2em;
  }
`;

export const ModalOverlayStyled = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 50;
  width: calc(100vw - 450px);
  height: 100vh;
`;
