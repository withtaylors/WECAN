import React, { useEffect, useState, useRef } from 'react';
import { useParams } from 'react-router-dom';
import * as challengerReview from './Styled/Challenger.review.main.js';
import ChallengeReviewWritten from './Challenger.reviewWritten.jsx';
import heartImg from '../../Assets/img/Heart.png';
import messeageImg from '../../Assets/img/message-square.png';
import * as challengereview from './Styled/Challenger.main.reviewWritten';
import { ACCESS_TOKEN } from '../../Api/request.js';
import axios from 'axios';
import request from '../../Api/request.js';

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
  //////////////////////////////////////////////////////
  const { id } = useParams();
  const [groupedArray, setGroupedArray] = useState([]);
  const [content, setContent] = useState();
  const baseURL = 'http://3.35.3.205:8080';

  /////////////////////////////////////////////////
  const [loading, setLoading] = useState(false);
  const [challengeInfo, setChallengeInfo] = useState([]);

  const fetchChallengeInfo = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`${baseURL}/recruit/${id}`, {
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('login-token'),
        },
      });
      console.log('해당 챌린지 정보:', response);
      setChallengeInfo(response.data.data);
      console.log(challengeInfo);
    } catch (error) {
      console.error('챌린지 정보를 가져오는데 실패', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchChallengeInfo();
  }, [id]);

  //////////////////////////////////////////////////
  const handleWrite = async () => {
    const jsonData = {
      recruitId: parseInt(id, 10),
      content: content,
    };
    try {
      const response = await axios.post(
        `${baseURL}/recruit/comment`,
        jsonData,
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ` + localStorage.getItem('login-token'),
          },
        }
      );
      // API 응답에 따른 처리
      console.log('댓글 전송 완료 및 API 응답:', response);
      fetchChallengeInfo();
    } catch (error) {
      console.error('댓글 작성 중 에러 발생', error);
    }
  };
  /////////////////////////////////////////////////////////////////
  //useEffect에서 상태를 업데이트할 때에는 해당 상태나 props를 사용해야 하며, 외부 변수나 상수를 사용하면 무한 루프가 발생할 수 있다
  /*useEffect(() => {
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
  }, [id]);

  // 선택한 id에 해당하는 배열 요소 리스트
  const selectedArray =
    groupedArray.find((group) => group[0].id === parseInt(id, 10)) || []; */

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
            댓글{challengeInfo.comments && challengeInfo.comments.length}개
          </challengerReview.reviewNumber1>
        </challengerReview.Info>
        <challengerReview.reviewNumber2>
          댓글{challengeInfo.comments && challengeInfo.comments.length}개
        </challengerReview.reviewNumber2>
      </challengerReview.Top>
      {challengeInfo.comments &&
        challengeInfo.comments.map((item) => (
          <challengereview.totalWrapper>
            <challengereview.profileWrapper>
              <challengereview.photo></challengereview.photo>
              <challengereview.profileReal>
                <challengereview.name>{item.userName}</challengereview.name>
                <challengereview.date>{item.date}</challengereview.date>
              </challengereview.profileReal>
            </challengereview.profileWrapper>
            <challengereview.reviewText>
              {item.content}
            </challengereview.reviewText>
            <challengereview.replyText>답글달기</challengereview.replyText>
          </challengereview.totalWrapper>
        ))}
      <challengerReview.textWriting>
        <challengerReview.myprofileWrapper>
          <challengereview.profileWrapper>
            <challengereview.photo></challengereview.photo>
            <challengereview.profileReal>
              <challengereview.name></challengereview.name>
              <challengereview.date></challengereview.date>
            </challengereview.profileReal>
          </challengereview.profileWrapper>
        </challengerReview.myprofileWrapper>

        <challengerReview.textWritingReal
          placeholder='댓글을 입력하세요...'
          value={content}
          onChange={(e) => setContent(e.target.value)}
          maxLength={600}
        ></challengerReview.textWritingReal>
        <challengerReview.textUpdateWrapper>
          <challengerReview.textUpdateButton onClick={handleWrite}>
            등록
          </challengerReview.textUpdateButton>
        </challengerReview.textUpdateWrapper>
      </challengerReview.textWriting>
    </challengerReview.TotalWrapper>
  );
}

export default ChallengeReview;
