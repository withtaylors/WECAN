import React, { useEffect, useState, useRef } from 'react';
import { useParams } from 'react-router-dom';
import * as challengerReview from './Styled/Challenger.review.main.js';
import ChallengeReviewWritten from './Challenger.reviewWritten.jsx';
import heartImg from '../../Assets/img/Heart.png';
import messeageImg from '../../Assets/img/message-square.png';
import * as challengereview from './Styled/Challenger.main.reviewWritten';

function ChallengeReview() {
  const array22 = [
    {
      id: 0,
      name: '홍길동',
      text: '너무너무 만족합니다..다시 한번 하고 싶어요!',
    },
    {
      id: 0,
      name: '홍창기',
      text: '안녕하세요! 챌린지는 ~에 진행될 예정입니다.. 구체적인 사안은 추후에 정해요!',
    },
    {
      id: 1,
      name: '문보경',
      text: '함께 하고 싶습니다!',
    },
    {
      id: 1,
      name: '김현수',
      text: '만족스럽지 않습니다!',
    },
    {
      id: 2,
      name: '박해민',
      text: '다시 도전하고 싶습니다',
    },
    {
      id: 2,
      name: '박이든',
      text: '안녕하세요! 챌린지는 ~에 진행될 예정입니다.. 구체적인 사안은 추후에 정해요!',
    },
  ];

  const { id } = useParams();
  const [groupedArray, setGroupedArray] = useState([]);

  useEffect(() => {
    // id를 기준으로 그룹화
    const groupedById = array22.reduce((acc, item) => {
      if (!acc[item.id]) {
        acc[item.id] = [];
      }
      acc[item.id].push(item);
      return acc;
    }, {});

    // Object.values를 사용하여 배열로 변환
    const resultArray = Object.values(groupedById);

    // 상태 업데이트
    setGroupedArray(resultArray);
  }, [array22]);

  // 선택한 id에 해당하는 배열 요소 리스트
  const selectedArray =
    groupedArray.find((group) => group[0].id === parseInt(id, 10)) || [];

  return (
    <challengerReview.TotalWrapper>
      <challengerReview.Top>
        <challengerReview.Info>
          <challengerReview.Likes>
            <challengerReview.photo0 src={heartImg}></challengerReview.photo0>
          </challengerReview.Likes>
          <challengerReview.reviewNumber1>
            <challengerReview.photo1
              src={messeageImg}
            ></challengerReview.photo1>
            댓글{selectedArray.length}
          </challengerReview.reviewNumber1>
        </challengerReview.Info>
        <challengerReview.reviewNumber2>
          댓글{selectedArray.length}개
        </challengerReview.reviewNumber2>
      </challengerReview.Top>
      {selectedArray.map((item) => (
        <challengereview.totalWrapper>
          <challengereview.profileWrapper>
            <challengereview.photo></challengereview.photo>
            <challengereview.profileReal>
              <challengereview.name>{item.name}</challengereview.name>
              <challengereview.date>{item.date}</challengereview.date>
            </challengereview.profileReal>
          </challengereview.profileWrapper>
          <challengereview.reviewText>{item.text}</challengereview.reviewText>
          <challengereview.replyText>답글달기</challengereview.replyText>
        </challengereview.totalWrapper>
      ))}
      <challengerReview.textWriting>
        <challengerReview.textWritingReal>
          댓글을 입력하세요...
        </challengerReview.textWritingReal>
      </challengerReview.textWriting>
    </challengerReview.TotalWrapper>
  );
}

export default ChallengeReview;
