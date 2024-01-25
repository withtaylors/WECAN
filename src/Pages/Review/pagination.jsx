/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState, useEffect } from 'react';
import { ReactComponent as leftArrowSvg } from '../../Assets/img/leftArrowPagi.svg';
import { ReactComponent as rightArrowSvg } from '../../Assets/img/rightArrowPagi.svg';
import styled from 'styled-components';
// import { colors } from "constants/colors";
import { getPagination, getTotalPage } from './paging';

const Pagination = ({ curPage, data, articlePerPage, setCurPage }) => {
  const pageInfos = getPagination({
    currentPage: curPage,
    pagePerView: 5,
    articlePerPage,
    total: data.length,
  });
  console.log(pageInfos);
  const handleChangePage = (move) => {
    if (move === 'left' && pageInfos.first.movable) {
      setCurPage(curPage - 1);
    }
    if (move === 'right' && pageInfos.last.movable) {
      setCurPage(curPage + 1);
    }
  };

  // 예시
  return (
    <Wrap>
      {/* <LeftArrowIcon onClick={() => handleChangePage('left')} /> */}
      {pageInfos.pages.map((num) => (
        <PerPage
          key={num}
          $clicked={num === curPage}
          onClick={() => setCurPage(num)}
        >
          {num}
        </PerPage>
      ))}
      {/* <RightArrowIcon onClick={() => handleChangePage('right')} /> */}
    </Wrap>
  );
};

const Wrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding-top: 16px;
  padding: 60px 0;
`;

const ArrowButton = styled.button`
  width: 24px;
  height: 24px;
  background-color: transparent;
`;

const LeftArrowIcon = styled(leftArrowSvg)`
  width: 20px;
  height: 20px;
  cursor: pointer;
`;

const RightArrowIcon = styled(rightArrowSvg)`
  width: 20px;
  height: 20px;
  cursor: pointer;
`;

const PerPage = styled.span`
  font-weight: 400;
  font-size: 14px;
  line-height: 100%;
  padding: 10px 14px;
  border-radius: 50%;
  color: ${({ $clicked }) => ($clicked ? 'white' : 'black')};
  background-color: ${({ $clicked }) => ($clicked ? '#DD518C' : '#EEEEEE')};
  cursor: pointer;
`;

export default Pagination;
