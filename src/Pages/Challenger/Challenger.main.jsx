import React, { useEffect, useState, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import * as challenger from './Styled/Challenger.main';
import TopNav from '../TopNav/TopNav.main';
import ChallengeReview from '../Challenger/Challenger.reveiw.main';

function ChallengeInfo() {
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
  const { id } = useParams();
  const [product, setProduct] = useState(array11[0]);

  useEffect(() => {
    // id에 해당하는 제품을 찾아서 상태를 업데이트
    const selectedProduct = array11.find(
      (item) => item.id === parseInt(id, 10)
    );
    setProduct(selectedProduct || {});
  }, [id]);
  console.log(product);
  const navigate = useNavigate();
  const NavClick = (e, type) => {
    e.preventDefault();
    navigate(`${type}`);
  };
  return (
    <challenger.totalWrapper>
      <TopNav></TopNav>
      <challenger.InfoWrapper>
        <challenger.topInfoWrapper>
          <challenger.firstPicture></challenger.firstPicture>
          <challenger.realInfoWrapper>
            <challenger.infoType>{product.type}</challenger.infoType>
            <challenger.infoTitle>{product.title}</challenger.infoTitle>
            <challenger.infoJoinRate>
              <challenger.infoJoinRateNumber>
                최소 인원수 {product.leastnumber}명
              </challenger.infoJoinRateNumber>
              <challenger.infoJoinRateBar></challenger.infoJoinRateBar>
            </challenger.infoJoinRate>
            <challenger.joinButton
              onClick={(e) => NavClick(e, '/challengemake')}
            >
              챌린저 함께하기
            </challenger.joinButton>
          </challenger.realInfoWrapper>
        </challenger.topInfoWrapper>
        <challenger.infoExplain>
          <challenger.infoExplainContext>
            {product.text}
          </challenger.infoExplainContext>
        </challenger.infoExplain>
      </challenger.InfoWrapper>

      <ChallengeReview></ChallengeReview>
    </challenger.totalWrapper>
  );
}

export default ChallengeInfo;
