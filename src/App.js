import React from 'react';
import './App.css';
import ScrollableContainer from './scrollable-container';
import { PageContainer, PageContent } from './style'


const PAGE = [
  <div>Tes 1</div>,
  <div>Tes 2</div>,
  <div>Tes 3</div>
]

function App() {
  return (
    <div>
      <ScrollableContainer>
        {PAGE.map((p, index) => (
          <PageContainer key={index}>
            <PageContent>{p}</PageContent>
          </PageContainer>
        ))}
      </ScrollableContainer>
    </div>
  );
}

export default App;
