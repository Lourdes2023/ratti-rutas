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
  align-items: center;
  margin-bottom: 0.5rem;
`;

const RemoveButton = styled.button`
  background: #5b1f29;
  color: #fff;
  border: none;
  padding: 0.2rem 0.5rem;
  border-radius: 4px;
  cursor: pointer;
`;

export default function Cart({ items, onRemove }) {
  if (items.length === 0) return null;
  return (
    <CartContainer>
      {items.map((item, idx) => (
        <Item key={idx}>
          <span>{item.name}</span>
          <span>
            ${item.price}{' '}
            <RemoveButton onClick={() => onRemove(idx)}>Quitar</RemoveButton>
          </span>
        </Item>
      ))}
    </CartContainer>
  );
}
