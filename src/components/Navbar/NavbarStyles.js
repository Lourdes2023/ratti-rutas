import styled from "styled-components";
import { NavLink, Link } from "react-router-dom";

export const NavbarContainerStyled = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  position: fixed;
  width: 100%;
  z-index: 2;
 
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
  & img {
    width: 50px;
  }

`;

export const NavbarLinkContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction : column;
  background-image: var(--color-back-Header);
  width: 100%;
  max-width: 800px;
  margin-top: 1rem;
  padding: 1rem;
  border-radius: 10px;
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
  }
`;

export const MenuLinkContainer = styled.nav`
  display: flex;
  gap: 2rem;
  margin-top: 1rem;
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
  justify-content: center; 
  flex-direction: column;
  gap: 21px;
  border-radius: 10px;
  background-color: ;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
  padding: 10px;
  position: fixed;
  top: 10px;
  right: 10px;
  & h3 {
    color: #333;
  }
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
  }
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