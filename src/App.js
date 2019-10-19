import React from 'react';

import ScrollableContainer from './scrollable-container';
import { PageContainer, PageContent, GlobalStyle } from './style'

const PAGE = [
  <div>Tes 1</div>,
  <div>Tes 2</div>,
  <div>Tes 3</div>
]

function App() {
  return (
    <React.Fragment>
      <GlobalStyle />
      <ScrollableContainer>
        {PAGE.map((p, index) => (
          <PageContainer key={index}>
            <PageContent>{p}</PageContent>
          </PageContainer>
        ))}
      </ScrollableContainer>
    </React.Fragment>
  );
}

export default App;
