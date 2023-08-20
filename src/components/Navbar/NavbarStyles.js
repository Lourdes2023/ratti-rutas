import styled from "styled-components";
import { NavLink } from "react-router-dom";
export const NavbarContainerStyled = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 4.5rem;
  width: 100%;
  box-shadow: var(--color-shadow);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: white;
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
  }
  h1 {
    font-size: 1.2rem;
  }
`;
export const MenuLinkContainer = styled.ul`
  display: flex;
  gap: 20px;
  @media (max-width: 980px) {
    display: none;
    position: absolute;
    top: 87px;
    left: 0;
    right: 0;
    height: 50vh;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    gap: 50px;
    transition: 0.5s;
    background: #343434;
  }
`;

export const NavbarLinkStyled = styled(NavLink)`
  padding: 0.5rem 2.5rem;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  color: var(--color-secondary);
  border-radius: 4px;
  margin-right: 2rem;
  transition: 0.5s all ease;

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

  @media (max-width: 980px) {
    display: block;
    font-size: 2em;
    margin: 10px 0px 0px 50px;
  }
`;
