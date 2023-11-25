import React, { useEffect, useState, useRef } from 'react';
import * as mystyles from './Styled/Home.main';
import ChallengingMain from './Home.main.challenging';
import HomeReviews from './Home.main.reviews';
import MyChallenge from './Home.main.mychallenge';
function Home() {
  const handleNavigateStore = () => {
    alert('내용을 입력하세요!!');
  };

  const handleNavigateProduct = () => {
    alert('내용을 입력하세요!');
  };

  return (
    <mystyles.CategoryWrapper>
      <mystyles.Banner></mystyles.Banner>
      <MyChallenge></MyChallenge>
      <ChallengingMain></ChallengingMain>
      <HomeReviews></HomeReviews>
    </mystyles.CategoryWrapper>
  );
}

export default Home;
