import styled from 'styled-components';
import Cart from './Cart';

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const Modal = styled.div`
  background: #fff;
  padding: 2rem;
  border-radius: 8px;
  max-width: 500px;
  width: 90%;
`;

const CloseBtn = styled.button`
  background: #5b1f29;
  color: #fff;
  border: none;
  padding: 0.3rem 0.6rem;
  border-radius: 4px;
  cursor: pointer;
  margin-bottom: 1rem;
`;

export default function CartModal({ items, onClose, onRemove }) {
  return (
    <Overlay onClick={onClose}>
      <Modal onClick={e => e.stopPropagation()}>
        <CloseBtn onClick={onClose}>Cerrar</CloseBtn>
        <Cart items={items} onRemove={onRemove} />
      </Modal>
    </Overlay>
  );
}
