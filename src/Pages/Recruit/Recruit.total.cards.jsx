import React, { useEffect, useState, useRef } from 'react';
import * as recruitcards from './Styled/Recruit.total.cards';
import CategoryCard from '../Category/Category.card';
import { useNavigate } from 'react-router-dom';

function RecruitTotalCards() {
  const array11 = [
    {
      id: 0,
      title: '빨리 달리기',
      type: '미라클 모닝',
      photo: '1',
      date: '2023-11-01',
      leastnumber: '3',
      name: '홍길동',
      text: '너무너무 만족합니다..다시 한번 하고 싶어요!',
    },
    {
      id: 1,
      title: '밥 제시간에 먹기',
      type: '기타',
      photo: '1',
      date: '2023-12-02',
      leastnumber: '4',
      name: '홍창기',
      text: '안녕하세요! 챌린지는 ~에 진행될 예정입니다.. 구체적인 사안은 추후에 정해요!',
    },
    {
      id: 2,
      title: '다이어트',
      type: '기타',
      photo: '1',
      date: '2023-10-11',
      leastnumber: '5',
      name: '문보경',
      text: '너무너무 만족합니다..다시 한번 하고 싶어요!',
    },
    {
      id: 3,
      title: '일본어 공부',
      type: '미라클 모닝',
      photo: '2',
      date: '2023-11-01',
      leastnumber: '4',
      name: '김현수',
      text: '안녕하세요! 챌린지는 ~에 진행될 예정입니다.. 구체적인 사안은 추후에 정해요!',
    },
    {
      id: 4,
      title: '중간고사 A',
      type: '공부',
      photo: '2',
      date: '2023-12-02',
      leastnumber: '10',
      name: '박해민',
      text: '너무너무 만족합니다..다시 한번 하고 싶어요!',
    },
    {
      id: 5,
      title: '운동 열심히',
      type: '운동',
      photo: '1',
      date: '2023-10-11',
      leastnumber: '10',
      name: '박이든',
      text: '안녕하세요! 챌린지는 ~에 진행될 예정입니다.. 구체적인 사안은 추후에 정해요!',
    },
  ];

  const handleSortClick = (sortType) => {
    // 정렬 방법을 업데이트
    setSelectedSort(sortType);
    // 여기에서 정렬에 대한 로직을 추가할 수 있습니다.
  };
  const navigate = useNavigate();
  const NavClick = (e, type, index) => {
    e.preventDefault();
    navigate(type, {
      state: {
        selectedCategoryIndex: index,
      },
    });
  };

  ///////////////pagination//////////////////
  const [selectedSort, setSelectedSort] = useState();
  const itemsPerPage = 15; // 한 페이지에 표시할 아이템 수
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentCategories = array11.slice(indexOfFirstItem, indexOfLastItem);
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(array11.length / itemsPerPage); i++) {
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
      {currentCategories.map((item, index) => (
        <CategoryCard key={item.index} data={item} />
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
