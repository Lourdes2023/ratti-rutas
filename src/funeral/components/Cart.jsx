import styled from 'styled-components';

const CartContainer = styled.div`
  padding: 1rem;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.05);
  margin-top: 2rem;
`;

const Item = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;
`;

export default function Cart({ items }) {
  if (items.length === 0) return null;
  return (
    <CartContainer>
      {items.map((item, idx) => (
        <Item key={idx}>
          <span>{item.name}</span>
          <span>${item.price}</span>
        </Item>
      ))}
    </CartContainer>
  );
}
