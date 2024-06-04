import styled from "styled-components";

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  & h2 {
    margin-bottom: 20px;
    text-align: center;
    color: var(--color-primary-bordo);
  }
`;
export const LoginStyledContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 10vh;
  gap: 20px;
  width: 100%;
  height: 100%;
  & img {
    width: 70px;
    height: 64px;
  }
`;
export const LoginStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 20px;
`;
