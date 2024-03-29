import React, { useEffect, useState, useRef } from 'react';
import * as mystyles from './Styled/Home.main';
import ChallengingMain from './Home.main.challenging';
import HomeReviews from './Home.main.reviews';
import MyChallenge from './Home.main.mychallenge';
import TopNav from '../TopNav/TopNav.main';
import Banner from '../Home/Banner/Banner';
import Bannerimgsample from '../../Assets/img/Banners/Banner1.png';
function Home() {
  const handleNavigateStore = () => {
    alert('내용을 입력하세요!!');
  };

  const handleNavigateProduct = () => {
    alert('내용을 입력하세요!');
  };

  return (
    <mystyles.CategoryWrapper>
      <TopNav></TopNav>
      <mystyles.ContentWrapper>
        <Banner></Banner>
        <MyChallenge></MyChallenge>
        <ChallengingMain></ChallengingMain>
        <HomeReviews></HomeReviews>
      </mystyles.ContentWrapper>
    </mystyles.CategoryWrapper>
  );
}

export default Home;
