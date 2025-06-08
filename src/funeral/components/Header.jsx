import styled from 'styled-components';

const HeaderContainer = styled.header`
  background: #f8f5f1;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid #6f4e37;
`;

const Logo = styled.h1`
  margin: 0;
  font-family: 'Playfair Display', serif;
  color: #5b1f29;
  font-size: 1.5rem;
`;

const Nav = styled.nav`
  display: flex;
  gap: 1rem;

  a {
    color: #497d75;
    text-decoration: none;
    font-family: 'Lato', sans-serif;
  }
`;

const CartCount = styled.span`
  background: #5b1f29;
  color: #fff;
  border-radius: 50%;
  padding: 0.2rem 0.6rem;
  font-size: 0.8rem;
`;

export default function Header({ cartCount }) {
  return (
    <HeaderContainer>
      <Logo>Funeraria Serenidad</Logo>
      <Nav>
        <a href="#inicio">Inicio</a>
        <a href="#nosotros">Nosotros</a>
        <a href="#catalogo">Catálogo</a>
        <a href="#servicios">Servicios</a>
        <a href="#carrito">Carrito</a>
        <CartCount>{cartCount}</CartCount>
      </Nav>
    </HeaderContainer>
  );
}
