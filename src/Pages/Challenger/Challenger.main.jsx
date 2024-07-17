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
  const PROXY = 'https://wecanomg.shop';

  /////////////////////////////////////////////////
  const [loading, setLoading] = useState(false);
  const [challengeInfo, setChallengeInfo] = useState([]);
  const [showModal, setShowModal] = useState(false);
  useEffect(() => {
    const fetchChallengeInfo = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`${PROXY}/recruit/${id}`, {
          headers: {
            Authorization: 'Bearer ' + localStorage.getItem('login-token'),
          },
        });
        console.log('해당 챌린지 정보:', response);
        setChallengeInfo(response.data.data);
        setIsJoined(response.data.data.participate);
        console.log(challengeInfo);
      } catch (error) {
        console.error('챌린지 정보를 가져오는데 실패', error);
      } finally {
        setLoading(false);
      }
    };

    fetchChallengeInfo();
  }, [id]);
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



  const handleJoin = async () => {
    try {
      // 서버에 참여 상태 변경 요청
      const response = await axios.post(
        `${PROXY}/recruit/participation`,
        { recruitId: id, participate: !isJoined },  // 참여 상태를 토글한 값을 보냅니다.
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ` + localStorage.getItem('login-token'),
          },
        }
      );
  
      if (response.status === 200) {
        // 서버에서 성공적으로 처리되었을 경우, 클라이언트 상태 업데이트
        setIsJoined(response.data.participate);  // 응답에서 받은 최신 참여 상태로 업데이트
  
        // 모달과 알림 처리
        response.data.participate ? openModal() : closeModal();
        alert(`챌린지 ${response.data.participate ? '참여가 완료되었습니다!' : '참여가 취소되었습니다!'}`);
      } else {
        // 서버에서 에러 응답을 받은 경우
        console.error('Server responded with an error:', response.status);
      }
    } catch (error) {
      console.error('참여 신청 중 에러 발생', error);
      alert('참여 처리 중 문제가 발생했습니다. 잠시 후 다시 시도해 주세요.');
    }
  };
  
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
