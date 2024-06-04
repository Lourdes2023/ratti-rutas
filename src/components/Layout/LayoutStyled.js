import styled from "styled-components";
import fondo from "../../assets/fondogrisflor2.png";
export const LayoutContainerStyled = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: auto;
  background-image: url(${fondo});
  background-repeat: no-repeat;
  background-size: 100%;
  background-position: top;
`;
