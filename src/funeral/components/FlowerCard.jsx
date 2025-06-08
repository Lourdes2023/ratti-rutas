import styled from 'styled-components';

const Card = styled.div`
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.05);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.02);
  }
`;

const Image = styled.img`
  width: 100%;
  height: 180px;
  object-fit: cover;
`;

const Content = styled.div`
  padding: 1rem;
`;

const Name = styled.h3`
  margin: 0;
  font-family: 'Playfair Display', serif;
  color: #5b1f29;
`;

const Desc = styled.p`
  margin: 0.5rem 0;
  color: #8d8d8d;
`;

const Price = styled.p`
  margin: 0;
  color: #8d8d8d;
`;

const Button = styled.button`
  margin-top: auto;
  background: #5b1f29;
  color: #fff;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.2s ease;

  &:hover {
    background: #4a1822;
  }
`;

export default function FlowerCard({ flower, onAdd }) {
  return (
    <Card>
      <Image src={flower.image} alt={flower.name} />
      <Content>
        <Name>{flower.name}</Name>
        <Desc>{flower.desc}</Desc>
        <Price>${flower.price}</Price>
      </Content>
      <Button onClick={() => onAdd(flower)}>Enviar con amor</Button>
    </Card>
  );
}
