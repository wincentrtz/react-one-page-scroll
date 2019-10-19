import React, { useState } from "react";

import { MainContainer } from "./style";

const ONE_PAGE_HEIGHT_PROPERTY = document.documentElement.scrollHeight;
const DOWN = "DOWN";
const UP = "UP";

const ScrollableContainer = ({ children }) => {
  const [isScrolling, setIsScrolling] = useState(false);
  const [page, setPage] = useState(0);
  const scrollHeight = page * -ONE_PAGE_HEIGHT_PROPERTY;

  const scrollPage = ({ deltaY }) => {
    if (!isScrolling) {
      setIsScrolling(true);
      const direction = deltaY < 0 ? UP : DOWN;
      handleUpdateCurrentPage(direction, page);
      setTimeout(() => {
        setIsScrolling(false);
      }, 2000);
    }
  };

  const handleUpdateCurrentPage = (direction, page) => {
    if (direction === UP && page !== 0)
      setPage(--page);
    else if (direction === DOWN && page !== 4)
      setPage(++page);
  };

  return (
    <div onWheel={e => scrollPage(e)}>
      <MainContainer scrollHeight={scrollHeight}>{children}</MainContainer>
    </div>
  );
};

export default ScrollableContainer;
