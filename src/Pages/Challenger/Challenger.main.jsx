import React, { useEffect, useState, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import * as challenger from './Styled/Challenger.main';
import TopNav from '../TopNav/TopNav.main';
import ChallengeReview from '../Challenger/Challenger.reveiw.main';
import axios from 'axios';
import PayModal from './PayModal';
import PayModal2 from './PayModal2';
function ChallengeInfo() {
  const { id } = useParams();
  const baseURL = 'http://3.35.3.205:8080';

  /////////////////////////////////////////////////
  const [loading, setLoading] = useState(false);
  const [challengeInfo, setChallengeInfo] = useState([]);
  const [showModal, setShowModal] = useState(false);
  useEffect(() => {
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

    fetchChallengeInfo();
  }, []);
  /////////////////////////////////

  /*useEffect(() => {
    // id에 해당하는 제품을 찾아서 상태를 업데이트
    const selectedProduct = challengeInfo.find(
      (item) => item.id === parseInt(id, 10)
    );
    setProduct(selectedProduct || {});
  }, [id]);
  console.log(product);*/
  const navigate = useNavigate();
  const NavClick = (e, type) => {
    e.preventDefault();
    navigate(`${type}`);
  };
  const openModal = () => setShowModal(true);
  const closeModal = () => {
    setShowModal(false);
  };
  ///////////////////////////////////////
  const [isJoined, setIsJoined] = useState(false);

  useEffect(() => {
    if (challengeInfo.participate !== undefined) {
      setIsJoined(challengeInfo.participate);
    }
  }, [challengeInfo.participate]);

  const handleJoin = async () => {
    try {
      const response = await axios.post(
        `${baseURL}/recruit/participation`,
        { recruitId: id },
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ` + localStorage.getItem('login-token'),
          },
        }
      );
      console.log(response);

      // 참여 상태를 토글
      setIsJoined((prevIsJoined) => !prevIsJoined);

      if (!isJoined) {
        openModal();
        alert('챌린지 참여가 완료되었습니다!');
      } else {
        alert('챌린지 참여가 취소되었습니다!');
      }
    } catch (error) {
      console.error('참여 신청 중 에러', error);
    }
  };
  console.log(isJoined);
  //////////////////////////////////////

  ////////////////////////////////////////
  return (
    <challenger.totalWrapper>
      <TopNav></TopNav>
      <challenger.InfoWrapper>
        <challenger.topInfoWrapper>
          <challenger.firstPicture
            src={challengeInfo.coverImage}
          ></challenger.firstPicture>
          <challenger.realInfoWrapper>
            <challenger.infoType>{challengeInfo.type}</challenger.infoType>
            <challenger.infoTitle>{challengeInfo.title}</challenger.infoTitle>
            <challenger.infoJoinRate>
              <challenger.infoJoinRateNumber>
                최소 인원수 {challengeInfo.minPeople}명
              </challenger.infoJoinRateNumber>
              <challenger.infoJoinRateBar></challenger.infoJoinRateBar>
            </challenger.infoJoinRate>
            {isJoined ? (
              <challenger.joinButton2 onClick={handleJoin}>
                챌린지 참여 완료
              </challenger.joinButton2>
            ) : (
              <challenger.joinButton onClick={handleJoin}>
                챌린지 함께하기
              </challenger.joinButton>
            )}
          </challenger.realInfoWrapper>
        </challenger.topInfoWrapper>
        <challenger.infoExplain>
          <challenger.infoExplainContext>
            {challengeInfo.content}
          </challenger.infoExplainContext>
        </challenger.infoExplain>
      </challenger.InfoWrapper>
      <ChallengeReview></ChallengeReview>
      {showModal && <PayModal closeModal={closeModal} />}
    </challenger.totalWrapper>
  );
}

export default ChallengeInfo;
