import React, { useEffect, useState, useRef } from 'react';
import * as mypage from './Styled/Mypage.main';
import TopNav from '../TopNav/TopNav.main';
import MyInfo from './Mypage.Info';
import MyLiked from './Mypage.liked';
import MyEnjoying from './Mypage.enjoying';
import MyParticipate from './Mypage.beforeparticipate';
import MyFinished from './Mypage.finishedchallenge';
import MyDonation from './Mypage.donation';
function Mypage() {
  return (
    <mypage.TotalWrapper>
      <TopNav></TopNav>
      <MyInfo></MyInfo>
      <MyLiked></MyLiked>
      <MyEnjoying></MyEnjoying>
      <MyParticipate></MyParticipate>
      <MyFinished></MyFinished>
      <MyDonation></MyDonation>
    </mypage.TotalWrapper>
  );
}

export default Mypage;
