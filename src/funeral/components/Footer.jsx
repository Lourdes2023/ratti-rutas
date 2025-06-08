import styled from 'styled-components';

const FooterContainer = styled.footer`
  background: #f8f5f1;
  color: #8d8d8d;
  text-align: center;
  padding: 2rem 1rem;
  border-top: 2px solid #6f4e37;
`;

export default function Footer() {
  return (
    <FooterContainer>
      <p style={{ fontFamily: 'Playfair Display, serif', margin: 0 }}>
        Honrar la vida, incluso en la despedida.
      </p>
      <p>Contacto: (000) 123 4567</p>
    </FooterContainer>
  );
}
