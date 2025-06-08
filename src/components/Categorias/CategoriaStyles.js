import styled from "styled-components";
export const CategoryItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  padding: 1rem;
`;

export const CategoryCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: var(--color-Categories);
  border-radius: 0.5rem;
  padding: 1rem;
  border: 1px solid #fff;
`;
export const CategoryImage = styled.img`
  width: 80%;
  max-height: 120px;
  object-fit: cover;
  margin-bottom: 0.5rem;
`;
export const CategoryTitle = styled.p`
  font-size: 0.9rem;
  color: var(--color-text-contact);
  margin-bottom: 0.5rem;
`;
