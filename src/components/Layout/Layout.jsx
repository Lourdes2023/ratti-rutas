import styled from "styled-components";
import Navbar from "../Navbar/Navbar";
const LayoutContainerStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: auto;
`;
const ContentContainerStyled = styled.div``;

const Layout = ({ children }) => {
  return (
    <LayoutContainerStyled>
      <Navbar />
      <ContentContainerStyled> {children} </ContentContainerStyled>
    </LayoutContainerStyled>
  );
};

export default Layout;
