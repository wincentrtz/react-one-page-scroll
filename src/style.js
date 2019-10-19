import styled from "styled-components";

export const MainContainer = styled.div`
  height: 100%;
  position: relative;
  touch-action: none;
  transform: translate(0px, ${props => props.scrollHeight}px);
  transition: all 1.5s ease;
`;