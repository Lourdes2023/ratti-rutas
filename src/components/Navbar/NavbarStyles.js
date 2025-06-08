import styled from "styled-components";
import { NavLink, Link } from "react-router-dom";

export const NavbarContainerStyled = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 10;
  background: var(--color-back-Header);
  border-bottom: 1px solid #6f4e37;
  box-shadow: var(--color-shadow);
  animation: fadeDown 0.6s ease forwards;

  @keyframes fadeDown {
    from {
      opacity: 0;
      transform: translateY(-10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  & img {
    width: 60px;
    border-radius: 8px;
  }
`;

export const NavbarLinkContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.75rem 1rem;
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
  }
`;

export const MenuLinkContainer = styled.nav`
  display: flex;
  align-items: center;
  gap: 1.5rem;
`;



export const MenuLink = styled(NavLink)`
  font-family: "Lato", sans-serif;
  color: #8d8d8d;
  transition: color 0.3s ease;

  &:hover {
    color: #497d75;
  }

  &.active {
    color: #5b1f29;
    font-weight: 600;
  }
`;

export const LoginContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

export const Loginstyled = styled(Link)`
  font-family: "Lato", sans-serif;
  color: #5b1f29;
  padding: 0.25rem 0.75rem;
  border: 1px solid #5b1f29;
  border-radius: 6px;
  text-decoration: none;
  transition: background-color 0.3s ease, color 0.3s ease;

  &:hover {
    background-color: #5b1f29;
    color: #f8f5f1;
  }
`;

export const UserNameStyles = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-family: "Lato", sans-serif;
  & p {
    color: #5b1f29;
  }
`;