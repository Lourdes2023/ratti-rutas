import styled from "styled-components";

export const ContainerInfoService = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const ContentInfoService = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 17vh;
  background-color: #ffffff;
  border-radius: 8px;
  padding: 20px;
  width: 80%;
  & h4 {
    color: var(--color-primary-blue);
    font-size: 24px;
    font-weight: 600;
    text-align: center;
  }
  & p {
    font-size: 16px;
    font-weight: 400;
    line-height: 1.6;
    text-align: center;
  }
  & img {
    width: 100%;
    height: 100%;
    border-radius: 8px;
  }
`;
