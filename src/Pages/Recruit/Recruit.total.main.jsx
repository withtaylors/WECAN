import React, { useEffect, useState, useRef } from 'react';
import * as recruit from './Styled/Recruit.total.cards';
import RecruitCards from './Recruit.total.cards';
import RecruitTop from './Recruit.totoal.main.top';
import TopNav from '../TopNav/TopNav.main';
function RecruitTotal() {
  const handleNavigateStore = () => {
    alert('내용을 입력하세요!!');
  };

  const handleNavigateProduct = () => {
    alert('내용을 입력하세요!');
  };

  return (
    <recruit.TotalWrapper>
      <RecruitTop></RecruitTop>
      <RecruitCards></RecruitCards>
    </recruit.TotalWrapper>
  );
}

export default RecruitTotal;
