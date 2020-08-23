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
  const scrollHeight = page * -ONE_PAGE_HEIGHT_PROPERTY;

  const scrollPage = ({ deltaY }) => {
    if (!isScrolling) {
      setIsScrolling(true);
      const direction = deltaY < 0 ? UP : DOWN;
      const isPageChanged = handleUpdateCurrentPage(direction, page);
      if (isPageChanged) {
        setTimeout(() => {
          setIsScrolling(false);
        }, 2000);
      } else {
        setIsScrolling(false);
      }
    }
  };

  const handleUpdateCurrentPage = (direction, page) => {
    if (direction === UP && page !== 0) {
      setPage(--page);
      return true;
    } else if (direction === DOWN && page < children.length - 1) {
      setPage(++page);
      return true;
    }
    return false;
  };

  return (
    <div onWheel={(e) => scrollPage(e)}>
      <MainContainer scrollHeight={scrollHeight}>{children}</MainContainer>
    </div>
  );
};

export default ScrollableContainer;
