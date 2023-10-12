import styled from "styled-components";
export const SignUpStyledContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;
export const SignUpStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 10vh;
  gap: 20px;
  width: 100%;
  height: 100%;
`;

export const SignUptTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
  & p {
    margin-bottom: 20px;
    text-align: center;
    color: var(--color-primary-blue);
  }
`;
