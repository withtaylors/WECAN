import React, { useEffect, useState, useRef } from 'react';
import * as recruitcards from './Styled/Recruit.total.cards';
import CategoryCard from '../Category/Category.card';

function RecruitTotalCards() {
  const categories = [
    { title: '달리기', date: '2023-11-01' },
    { title: '밥 제시간에 먹기', date: '2023-12-02' },
    { title: '다이어트', date: '2023-10-11' },
    { title: '일본어 공부', date: '2023-11-01' },
    { title: '중간고사 A', date: '2023-12-02' },
    { title: '운동 열심히', date: '2023-10-11' },
    { title: '달리기', date: '2023-11-01' },
    { title: '밥 제시간에 먹기', date: '2023-12-02' },
    { title: '다이어트', date: '2023-10-11' },
    { title: '일본어 공부', date: '2023-11-01' },
    { title: '중간고사 A', date: '2023-12-02' },
    { title: '운동 열심히', date: '2023-10-11' },
    { title: '달리기', date: '2023-11-01' },
    { title: '밥 제시간에 먹기', date: '2023-12-02' },
    { title: '다이어트', date: '2023-10-11' },
    { title: '일본어 공부', date: '2023-11-01' },
    { title: '중간고사 A', date: '2023-12-02' },
    { title: '운동 열심히', date: '2023-10-11' },
    { title: '달리기', date: '2023-11-01' },
    { title: '밥 제시간에 먹기', date: '2023-12-02' },
    { title: '다이어트', date: '2023-10-11' },
    { title: '일본어 공부', date: '2023-11-01' },
    { title: '중간고사 A', date: '2023-12-02' },
    { title: '운동 열심히', date: '2023-10-11' },
    { title: '달리기', date: '2023-11-01' },
    { title: '밥 제시간에 먹기', date: '2023-12-02' },
    { title: '다이어트', date: '2023-10-11' },
    { title: '일본어 공부', date: '2023-11-01' },
    { title: '중간고사 A', date: '2023-12-02' },
    { title: '운동 열심히', date: '2023-10-11' },
    { title: '달리기', date: '2023-11-01' },
    { title: '밥 제시간에 먹기', date: '2023-12-02' },
    { title: '다이어트', date: '2023-10-11' },
    { title: '일본어 공부', date: '2023-11-01' },
    { title: '중간고사 A', date: '2023-12-02' },
    { title: '운동 열심히', date: '2023-10-11' },
    { title: '달리기', date: '2023-11-01' },
    { title: '밥 제시간에 먹기', date: '2023-12-02' },
    { title: '다이어트', date: '2023-10-11' },
    { title: '일본어 공부', date: '2023-11-01' },
    { title: '중간고사 A', date: '2023-12-02' },
    { title: '운동 열심히', date: '2023-10-11' },
  ];

  const handleSortClick = (sortType) => {
    // 정렬 방법을 업데이트
    setSelectedSort(sortType);
    // 여기에서 정렬에 대한 로직을 추가할 수 있습니다.
  };

  ///////////////pagination//////////////////
  const [selectedSort, setSelectedSort] = useState();
  const itemsPerPage = 15; // 한 페이지에 표시할 아이템 수
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentCategories = categories.slice(indexOfFirstItem, indexOfLastItem);
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(categories.length / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <recruitcards.TotalCardsWrapper>
      <recruitcards.SortContainer>
        <recruitcards.SortText
          onClick={() => handleSortClick('인기순')}
          selected={selectedSort === '인기순'}
        >
          인기순
        </recruitcards.SortText>
        <recruitcards.SortText> | </recruitcards.SortText>
        <recruitcards.SortText
          onClick={() => handleSortClick('후기순')}
          selected={selectedSort === '후기순'}
        >
          후기순
        </recruitcards.SortText>
      </recruitcards.SortContainer>
      {currentCategories.map((category, index) => (
        <CategoryCard key={index} title={category.title} date={category.date} />
      ))}
      <recruitcards.PaginationWrapper>
        {pageNumbers.map((number) => (
          <recruitcards.PaginationNumber
            key={number}
            onClick={() => setCurrentPage(number)}
            active={currentPage === number}
          >
            {number}
          </recruitcards.PaginationNumber>
        ))}
      </recruitcards.PaginationWrapper>
    </recruitcards.TotalCardsWrapper>
  );
}

export default RecruitTotalCards;
