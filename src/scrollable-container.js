import React, { useState } from "react";

import { PageContainer, PageContent, MainContainer } from "./style";

const ONE_PAGE_HEIGHT_PROPERTY = document.documentElement.scrollHeight;
const DOWN = "DOWN";
const UP = "UP";

const ScrollableContainer = ({ children }) => {
  children = children.map((p, index) => (
    <PageContainer key={index}>
      <PageContent>{p}</PageContent>
    </PageContainer>
  ));

  const [isScrolling, setIsScrolling] = useState(false);
  const [page, setPage] = useState(0);
  const scrollHeight = page;

  const scrollPage = ({ deltaY }) => {
    if (!isScrolling) {
      console.log(deltaY);
      setIsScrolling(true);
      const direction = deltaY < 0 ? UP : DOWN;
      const isPageChanged = handleUpdateCurrentPage(direction, page);
      console.log(page);
      if (isPageChanged) {
        setTimeout(() => {
          setIsScrolling(false);
        }, 2000);
      } else {
        setIsScrolling(false);
      }
    }
  };

  const handleUpdateCurrentPage = (direction, pageRequest) => {
    if (direction === UP && pageRequest !== 0) {
      setPage(--pageRequest);
      return true;
    } else if (direction === DOWN && pageRequest < children.length - 1) {
      setPage(++pageRequest);
      return true;
    }
    return false;
  };

  return (
    <div onClick={(e) => scrollPage(e)}>
      <MainContainer scrollHeight={scrollHeight}>{children}</MainContainer>
    </div>
  );
};

export default ScrollableContainer;
