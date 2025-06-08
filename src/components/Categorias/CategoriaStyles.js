import styled from "styled-components";
export const CategoryContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  cursor: pointer;
  transition: transform 0.3s ease;
  &:hover {
    transform: translateY(-4px);
  }
`;
export const CategoryWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 50%;
  padding: 20px;
`;

export const CategoryConten = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: ${({ selected }) =>
    selected ? 'var(--color-sage-green)' : 'var(--color-crema-claro)'};
  border-radius: 10px;
  padding: 20px;
  border: 2px solid
    ${({ selected }) =>
      selected ? 'var(--color-bordo-profundo)' : 'var(--color-brown-earth)'};
  box-shadow: var(--color-shadow);
  width: 100%;
  transition: background 0.3s ease, border 0.3s ease;
`;
export const CategoryImage = styled.img`
  width: 80%;
  max-height: 150px;
  object-fit: cover;
  margin-bottom: 10px;
`;
export const CategoryTitle = styled.p`
  font-size: 18px;
  color: ${({ selected }) =>
    selected ? 'var(--color-crema-claro)' : 'var(--color-bordo-profundo)'};
  margin-bottom: 10px;
`;
