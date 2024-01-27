import React, { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import * as mylike from './Styled/Mypage.main.liked';
import TopNav from '../TopNav/TopNav.main';
import Card from '../Category/Category.card';
import axios from 'axios';

function MyFinished() {
  ////////////////////////////////////////////////////////////////////////
  const navigate = useNavigate();
  const NavClick = (e, type) => {
    e.preventDefault();
    navigate(`${type}`);
  };
  /////////////////////////////////////////////////////////////////////
  const baseURL = 'http://3.35.3.205:8080';
  const userId = localStorage.getItem('user-id');
  ////////////////////////////////////////////////////
  const [loading, setLoading] = useState(false);
  const [challengeLiked, setChallengeLiked] = useState([]);
  useEffect(() => {
    const fetchChallengeThree = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`${baseURL}/challenge/completed`, {
          headers: {
            Authorization: 'Bearer ' + localStorage.getItem('login-token'),
          },
        });
        console.log('챌린지 완료 목록 불러오기:', response);
        setChallengeLiked(response.data.data);
        console.log(challengeLiked);
      } catch (error) {
        console.error('챌린지 완료 목록 불러오기 실패', error);
      } finally {
        setLoading(false);
      }
    };

    fetchChallengeThree();
  }, []);
  ///////////////////////////////////////////////////////////////
  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };
  ////////////////////////////////////////////////////////////////////
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = challengeLiked.slice(indexOfFirstItem, indexOfLastItem);
  return (
    <mylike.TotalWrapper>
      <mylike.PageButton onClick={() => handlePageChange(currentPage - 1)}>
        {'<'}
      </mylike.PageButton>
      <mylike.RealWrapper>
        <mylike.title>참여 완료 챌린지</mylike.title>
        <mylike.cardsWrapper>
          {currentItems.map((item, index) => (
            <Card key={index} data={item} />
          ))}
        </mylike.cardsWrapper>
      </mylike.RealWrapper>
      <mylike.PageButton onClick={() => handlePageChange(currentPage + 1)}>
        {'>'}
      </mylike.PageButton>
    </mylike.TotalWrapper>
  );
}

export default MyFinished;
