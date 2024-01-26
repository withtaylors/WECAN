import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import * as checkroom from './Styled/Chat.checkroom';
import profileimg from '../../Assets/img/profile.png';
import thumbdown from '../../Assets/img/mypage/thumbdown.png';
import { GoBackButton } from './Styled/Chat.checkroom';

const calculateProgress = (startDate, endDate, today) => {
  const start = new Date(startDate);
  const end = new Date(endDate);
  const totalDays = (end - start) / (1000 * 3600 * 24);
  const daysPassed = (today - start) / (1000 * 3600 * 24);
  return (daysPassed / totalDays) * 100;
};

const formatDate = (dateString) => {
  if (!Date.parse(dateString)) {
    console.error('Invalid date string:', dateString);
    return 'Invalid Date';
  }

  const date = new Date(dateString);
  return new Intl.DateTimeFormat('ko-KR', {
    month: 'long',
    day: 'numeric',
  }).format(date);
};

function Chatcheckroom({}) {
  const { challengeId, checkDate } = useParams();
  const [checkroomData, setCheckroomData] = useState([]);
  const [daysLeft, setDaysLeft] = useState(0);
  const [progressValue, setProgressValue] = useState(0);
  const [loading, setLoading] = useState(false);
  const baseURL = 'http://3.35.3.205:8080';

  useEffect(() => {
    const fetchCheckroomData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `${baseURL}/challenge/checkroom/${challengeId}/${checkDate}`
        );
        const { challengeChecks, startDate, endDate } = response.data.data;
        console.log(response.data.data); // Check the data received from the API

        setCheckroomData(challengeChecks);

        const today = new Date();
        setDaysLeft(
          Math.ceil((new Date(endDate) - today) / (1000 * 3600 * 24))
        );
        setProgressValue(calculateProgress(startDate, endDate, today));
      } catch (error) {
        console.error('Error fetching checkroom data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchCheckroomData();
  }, [challengeId, checkDate]);

  // useNavigate 훅 초기화
  const navigate = useNavigate();

  // 이전 페이지로 돌아가는 함수
  const goBack = () => {
    navigate(-1); // 이전 페이지로 이동
  };

  if (loading) return <div>Loading...</div>;

  return (
    <checkroom.TotalWrapper>
      <GoBackButton onClick={goBack}>X</GoBackButton>{' '}
      <checkroom.modal>
        <checkroom.TopWrapper>
          <checkroom.checkdate>{formatDate(checkDate)}</checkroom.checkdate>
          <checkroom.dateleft>
            목표 달성일까지{' '}
            <checkroom.HighlightedText>{daysLeft}</checkroom.HighlightedText> 일
            남았습니다
          </checkroom.dateleft>
          <progress value={progressValue} max="100" />
        </checkroom.TopWrapper>
        <checkroom.scrollView>
          {checkroomData &&
            checkroomData.map(({ challengeCheckId, nickName, dislike }) => (
              <checkroom.message key={challengeCheckId}>
                <checkroom.profile src={profileimg} />
                <checkroom.sendWrapper>
                  <checkroom.nickname>{nickName}</checkroom.nickname>
                  <checkroom.sendimage>{}</checkroom.sendimage>
                </checkroom.sendWrapper>
                <checkroom.dislikewrapper>
                  <checkroom.dislikeimg src={thumbdown} />
                  <checkroom.dislikenum>{dislike}</checkroom.dislikenum>
                </checkroom.dislikewrapper>
              </checkroom.message>
            ))}
        </checkroom.scrollView>
        <checkroom.BottomWrapper>
          <checkroom.coupon>
            <p>쿠폰 사용하기</p>
          </checkroom.coupon>
          <checkroom.upload>
            <p>사진 업로드</p>
          </checkroom.upload>
        </checkroom.BottomWrapper>
      </checkroom.modal>
    </checkroom.TotalWrapper>
  );
}

export default Chatcheckroom;
