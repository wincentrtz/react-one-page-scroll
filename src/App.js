import React from "react";

import ScrollableContainer from "./scrollable-container";
import { GlobalStyle } from "./style";

// const PAGE = [<div>Tes 1</div>, <div>Tes 2</div>, <div>Tes 3</div>];

function App() {
  return (
    <React.Fragment>
      <GlobalStyle />
      <ScrollableContainer>
        <div>Ts !</div>
        <div>Res</div>
        <div>Gerse</div>
      </ScrollableContainer>
    </React.Fragment>
  );
}

export default App;
