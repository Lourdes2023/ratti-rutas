import styled from "styled-components";
export const CategoryContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
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
  background: var(--color-Categories);
  border-radius: 10px;
  padding: 20px;
  border: 1px solid white;
  width: 100%;
`;
export const CategoryImage = styled.img`
  width: 80%;
  max-height: 150px;
  object-fit: cover;
  margin-bottom: 10px;
`;
export const CategoryTitle = styled.p`
  font-size: 18px;
  color: var(--color-text-contact);
  margin-bottom: 10px;
`;
