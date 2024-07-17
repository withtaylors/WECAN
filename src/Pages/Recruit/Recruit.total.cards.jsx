import React, { useEffect, useState, useRef } from 'react';
import * as recruitcards from './Styled/Recruit.total.cards';
import CategoryCard from '../Category/Category.card';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import challengeMake from '../../Assets/img/challengemake.png';

function RecruitTotalCards() {
  const baseURL = 'http://3.35.3.205:8080';
  const PROXY ='https://wecanomg.shop';
  const [loading, setLoading] = useState(false);
  const [challengeArray, setChallengeArray] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [selectedSort, setSelectedSort] = useState();
  const [challengeArrayPopular, setChallengeArrayPopular] = useState([]);
  const [challengeArrayLeast, setChallengeArrayLeast] = useState([]);
  /////////////////////////////////////////////////////////
  useEffect(() => {
    const fetchChallengeArray = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `${PROXY}/recruits?page=${currentPage}&sort=heartNum,desc`,
          {
            headers: {
              Authorization: 'Bearer ' + localStorage.getItem('login-token'),
            },
          }
        );
        console.log('챌린지 목록(인기순)-초기:', response);
        setChallengeArray(response.data.data.content);
        console.log(challengeArray);
      } catch (error) {
        console.error('챌린지 목록을 가져오는데 실패', error);
      } finally {
        setLoading(false);
      }
    };

    fetchChallengeArray();
  }, [currentPage]);
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
      setChallengeArray(challengeArrayPopular);
    } catch (error) {
      console.error('챌린지 목록(인기순)을 가져오는데 실패', error);
    } finally {
      setLoading(false);
    }
  };
  ////////////////////////////////////////////////////////////
  const sortLeast = async () => {
    try {
      const response = await axios.get(
        `${PROXY}/recruits?page=0&sort=startDate,desc`,
        {
          headers: {
            Authorization: 'Bearer ' + localStorage.getItem('login-token'),
          },
        }
      );
      console.log('챌린지 목록(최신순):', response);
      setChallengeArrayLeast(response.data.data.content);
      setSelectedSort('최신순');
      setChallengeArray(challengeArrayLeast);
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

  ///////////////pagination//////////////////
  const changePage = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <recruitcards.TotalWrapper>
      <recruitcards.TotalCardsWrapper>
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
        <recruitcards.ChallengeMakeButton
          src={challengeMake}
          onClick={(e) => NavClick(e, '/challengemake')}
        ></recruitcards.ChallengeMakeButton>
        {challengeArray &&
          challengeArray.map((item, index) => (
            <CategoryCard key={item.index} data={item} />
          ))}
      </recruitcards.TotalCardsWrapper>
      <recruitcards.PaginationWrapper>
        <recruitcards.PaginationButton
          onClick={() => changePage(0)}
          selected={currentPage === 0}
        >
          1
        </recruitcards.PaginationButton>
        <recruitcards.PaginationButton
          onClick={() => changePage(1)}
          selected={currentPage === 1}
        >
          2
        </recruitcards.PaginationButton>
        <recruitcards.PaginationButton
          onClick={() => changePage(2)}
          selected={currentPage === 2}
        >
          3
        </recruitcards.PaginationButton>
      </recruitcards.PaginationWrapper>
    </recruitcards.TotalWrapper>
  );
}

export default RecruitTotalCards;
