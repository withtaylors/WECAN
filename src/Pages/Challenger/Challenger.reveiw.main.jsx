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
  //////////////////////////////////////////////////////
  const { id } = useParams();
  const [groupedArray, setGroupedArray] = useState([]);
  const [content, setContent] = useState();
  const baseURL = 'http://3.35.3.205:8080';
  const userName = localStorage.getItem('user-name');
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

  return (
    <challengerReview.TotalWrapper>
      <challengerReview.Top>
        <challengerReview.Info>
          <challengerReview.Likes>
            <challengerReview.photo0 src={heartImg}></challengerReview.photo0>
            {challengeInfo.heartNum} 개
          </challengerReview.Likes>
          <challengerReview.reviewNumber1>
            <challengerReview.photo1
              src={messeageImg}
            ></challengerReview.photo1>
            댓글{challengeInfo.comments && challengeInfo.comments.length}개
          </challengerReview.reviewNumber1>
        </challengerReview.Info>
        <challengerReview.reviewNumber2>
          댓글
          <challengerReview.reviewNumberreal>
            {challengeInfo.comments && challengeInfo.comments.length}
          </challengerReview.reviewNumberreal>
          개
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
              <challengereview.name>{userName}</challengereview.name>
            </challengereview.profileReal>
          </challengereview.profileWrapper>
        </challengerReview.myprofileWrapper>

        <challengerReview.textWritingReal
          placeholder="댓글을 입력하세요..."
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
