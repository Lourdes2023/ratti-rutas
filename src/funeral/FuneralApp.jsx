import { useState } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import Header from './components/Header';
import FlowerCatalog from './components/FlowerCatalog';
import Cart from './components/Cart';
import Footer from './components/Footer';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    background: #f8f5f1;
    font-family: 'Lato', sans-serif;
    color: #8d8d8d;
    scroll-behavior: smooth;
  }
`;

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Main = styled.main`
  flex: 1;
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const Section = styled.section`
  padding: 3rem 0;
  scroll-margin-top: 80px;
`;

const Message = styled.div`
  position: fixed;
  top: 1rem;
  right: 1rem;
  background: #5b1f29;
  color: #fff;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  opacity: ${props => (props.show ? 1 : 0)};
  transition: opacity 0.3s ease;
`;

export default function FuneralApp() {
  const [cart, setCart] = useState([]);
  const [showMsg, setShowMsg] = useState(false);

  const addToCart = (flower) => {
    setCart([...cart, flower]);
    setShowMsg(true);
    setTimeout(() => setShowMsg(false), 2000);
  };

  const removeFromCart = (index) => {
    setCart(cart.filter((_, i) => i !== index));
  };

  return (
    <PageContainer>
      <GlobalStyle />
      <Header cartCount={cart.length} />
      <Main>
        <Section id="inicio">
          <p style={{ textAlign: 'center', fontFamily: 'Playfair Display, serif', color: '#6f4e37' }}>
            Estamos para acompañarte con respeto y calidez.
          </p>
        </Section>
        <Section id="nosotros">
          <h2 style={{ fontFamily: 'Playfair Display, serif', color: '#6f4e37' }}>Sobre nosotros</h2>
          <p>Nuestra funeraria brinda contención y acompañamiento en todo momento.</p>
        </Section>
        <Section id="catalogo">
          <FlowerCatalog addToCart={addToCart} />
        </Section>
        <Section id="servicios">
          <h2 style={{ fontFamily: 'Playfair Display, serif', color: '#6f4e37' }}>Servicios</h2>
          <p>Ofrecemos organización integral, asesoría y acompañamiento.</p>
        </Section>
        <Section id="carrito">
          <h2 style={{ fontFamily: 'Playfair Display, serif', color: '#6f4e37' }}>Tu carrito</h2>
          <Cart items={cart} onRemove={removeFromCart} />
        </Section>
      </Main>
      <Footer />
      <Message show={showMsg}>Tu gesto ha sido registrado con amor</Message>
    </PageContainer>
  );
}
