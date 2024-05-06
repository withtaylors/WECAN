import React, { useEffect, useState, useRef } from 'react';
import * as recruitcards from './Styled/Recruit.total.cards';
import CategoryCard from '../Category/Category.card';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import challengeMake from '../../Assets/img/challengemake.png';
import RecruitTop from './Recruit.totoal.main.top';
import Chatting from '../Chat/Chat.chatting';
import Chat from '../Chat/Chat.chat';
function RecruitMiracleCards() {
  const baseURL = 'http://3.35.3.205:8080';
  const PROXY =
  window.location.hostname === 'localhost'
    ? 'http://3.35.3.205:8080'
    : 'https://wecanomg.shop';
  const [loading, setLoading] = useState(false);
  const [challengeArray, setChallengeArray] = useState([]);
  const [challengeArrayPopular, setChallengeArrayPopular] = useState([]);
  const [challengeArrayLeast, setChallengeArrayLeast] = useState([]);
  /////////////////////////////////////////////////////////
  useEffect(() => {
    const fetchChallengeArray = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `${PROXY}/recruits?page=0&sort=heartNum,desc`,
          {
            headers: {
              Authorization: 'Bearer ' + localStorage.getItem('login-token'),
            },
          }
        );
        console.log('챌린지 목록 미라클 (인기순)-초기:', response);
        setChallengeArray(response.data.data.content);
        console.log(challengeArray);
      } catch (error) {
        console.error('챌린지 목록 미라클을 가져오는데 실패', error);
      } finally {
        setLoading(false);
      }
    };

    fetchChallengeArray();
  }, []);
  ////////////////////////////////////////////////////////
  const sortPopular = async () => {
    try {
      const response = await axios.get(
        `${PROXY}/recruits?page=0&sort=heartNum,desc`,
        {
          headers: {
            Authorization: 'Bearer ' + localStorage.getItem('login-token'),
          },
        }
      );
      console.log('챌린지 목록(인기순):', response);
      setChallengeArrayPopular(response.data.data.content);
      setSelectedSort('인기순');
    } catch (error) {
      console.error('챌린지 목록을 가져오는데 실패', error);
    } finally {
      setLoading(false);
    }
  };
  ////////////////////////////////////////////////////////////
  const sortLeast = async () => {
    try {
      const response = await axios.get(
        `${PROXY}/recruits?page=0&sort=heartNum,desc`,
        {
          headers: {
            Authorization: 'Bearer ' + localStorage.getItem('login-token'),
          },
        }
      );
      console.log('챌린지 목록(최신순):', response);
      setChallengeArrayLeast(response.data.data.content);
      setSelectedSort('최신순');
    } catch (error) {
      console.error('챌린지 목록(최신순)을 가져오는데 실패', error);
    } finally {
      setLoading(false);
    }
  };
  //////////////////////////////////////////////////
  const navigate = useNavigate();
  const NavClick = (e, type, index) => {
    e.preventDefault();
    navigate(type, {
      state: {
        selectedCategoryIndex: index,
      },
    });
  };
  const miracleChallenge = challengeArray.filter(
    (challenge) => challenge.category === 'miracle_morning'
  );

  ///////////////pagination//////////////////
  const [selectedSort, setSelectedSort] = useState();
  const itemsPerPage = 20; // 한 페이지에 표시할 아이템 수
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentCategories = miracleChallenge.slice(
    indexOfFirstItem,
    indexOfLastItem
  );
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(miracleChallenge.length / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <recruitcards.TotalWrapper>
      <RecruitTop></RecruitTop>
      <recruitcards.SortContainer>
        <recruitcards.SortText
          onClick={sortPopular}
          selected={selectedSort === '인기순'}
        >
          인기순
        </recruitcards.SortText>
        <recruitcards.SortText> | </recruitcards.SortText>
        <recruitcards.SortText
          onClick={sortLeast}
          selected={selectedSort === '최신순'}
        >
          최신순
        </recruitcards.SortText>
      </recruitcards.SortContainer>
      <recruitcards.TotalCardsWrapper>
        <recruitcards.ChallengeMakeButton
          src={challengeMake}
          onClick={(e) => NavClick(e, '/challengemake')}
        ></recruitcards.ChallengeMakeButton>
        {currentCategories.map((item, index) => (
          <CategoryCard key={item.index} data={item} />
        ))}
      </recruitcards.TotalCardsWrapper>
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
    </recruitcards.TotalWrapper>
  );
}

export default RecruitMiracleCards;
