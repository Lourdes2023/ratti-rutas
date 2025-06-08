import styled from "styled-components";
import { NavLink, Link } from "react-router-dom";

export const NavbarContainerStyled = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 10;
  background-image: var(--color-back-Header);
  box-shadow: var(--color-shadow);
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  & img {
    width: 60px;
  }
`;

export const NavbarLinkContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem 1rem;
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
  }
`;

export const MenuLinkContainer = styled.nav`
  display: flex;
  align-items: center;
  gap: 2rem;
`;



export const MenuLink = styled(NavLink)`
  &:hover {
     color: var(--color-secondary-red);
  }
  
  &.active {
      color: var(--color-primary-bordo);
      font-weight: 600;
      padding: 0.5rem;
     
  }
  
`;

export const LoginContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const Loginstyled = styled(Link)`
  color: #333;
  text-decoration: none;
  &:hover {
    color: #007bff;
  }
`;

export const UserNameStyles = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  & p {
    color: #333;
  }
`;