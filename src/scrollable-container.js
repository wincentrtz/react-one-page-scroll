import React, { useState } from "react";
import { withRouter } from "react-router-dom";

import PAGES from "constants/apps/pages";
import { MainContainer } from "./style";

const ONE_PAGE_HEIGHT_PROPERTY = document.documentElement.scrollHeight;
const ONE_PAGE_WIDTH_PROPERTY = document.documentElement.scrollWidth;
const DOWN = "DOWN";
const UP = "UP";

const ScrollableContainer = ({ children, location, history }) => {
  const [isScrolling, setIsScrolling] = useState(false);
  const pathname = location.pathname.substring(1);
  const page = PAGES[pathname] || PAGES["home"];
  const scrollHeight = page.pageNumber * -ONE_PAGE_HEIGHT_PROPERTY;

  const scrollPage = ({ clientX, clientY, deltaY }) => {
    if (isUseOnePageScroll(clientX, clientY)) {
      setIsScrolling(true);
      const direction = deltaY < 0 ? UP : DOWN;
      handleUpdateCurrentPage(direction, page);
      setTimeout(() => {
        setIsScrolling(false);
      }, 2000);
    }
  };

  const isUseOnePageScroll = (xAxis, yAxis) =>
    !isScrolling && !isOnExperienceCardScroll(xAxis, yAxis);

  const isOnExperienceCardScroll = (xAxis, yAxis) =>
    horizontalPositionByPercentage(xAxis) >= 10 &&
    horizontalPositionByPercentage(xAxis) <= 80 &&
    verticalPositionByPercentage(yAxis) >= 40 &&
    verticalPositionByPercentage(yAxis) <= 75;

  const horizontalPositionByPercentage = xAxis =>
    ((xAxis % ONE_PAGE_WIDTH_PROPERTY) * 100) / ONE_PAGE_WIDTH_PROPERTY;

  const verticalPositionByPercentage = yAxis =>
    ((yAxis % ONE_PAGE_HEIGHT_PROPERTY) * 100) / ONE_PAGE_HEIGHT_PROPERTY;

  const handleUpdateCurrentPage = (direction, page) => {
    if (direction === UP && page.pageNumber !== 0)
      history.push({ pathname: page.prevPage });
    else if (direction === DOWN && page.pageNumber !== 4)
      history.push({ pathname: page.nextPage });
  };

  return (
    <div onWheel={e => scrollPage(e)}>
      <MainContainer scrollHeight={scrollHeight}>{children}</MainContainer>
    </div>
  );
};

export default withRouter(ScrollableContainer);
