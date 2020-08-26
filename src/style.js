import styled, { createGlobalStyle } from "styled-components";

export const MainContainer = styled.div`
  height: 100%;
  position: relative;
  touch-action: none;
  transform: translate(0px, ${(props) => props.scrollHeight}px);
  transition: all 1.5s ease;
`;

export const PageContainer = styled.div`
  display: table-row;
`;

export const PageContent = styled.div`
  display: table-cell;
  vertical-align: middle;
  height: 100vh;
  width: 100%;
`;
export const GlobalStyle = createGlobalStyle`
  body {
    overflow: hidden;
    margin: 0;
  }
  ::-webkit-scrollbar {
    width: 0px;
    background: transparent;
  }
`;
