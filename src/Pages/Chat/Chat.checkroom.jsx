import React, { useState, useEffect, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import * as checkroom from './Styled/Chat.checkroom';
import profileimg from '../../Assets/img/profile.png';
import thumbdown from '../../Assets/img/mypage/thumbdown.png';
import { GoBackButton } from './Styled/Chat.checkroom';
import { ProgressBar, ProgressBarValue } from './Styled/Chat.checkroom';
import ChatCoupon from './Chat.Coupon';
import defaultImage from '../../Assets/img/default.jpg';

function Chatcheckroom() {
  const { challengeId, checkDate } = useParams();
  const [images, setImages] = useState();
  const baseURL = 'http://3.35.3.205:8080';
  const navigate = useNavigate();
  const hiddenFileInput = useRef(null);
  // 'dislikes' 상태 변수와 그를 업데이트하는 함수 'setDislikes' 정의
  const [dislikes, setDislikes] = useState([]);
  const [checkRoom, setcheckRoom] = useState([]);
  const userName = localStorage.getItem('user-name');
  const [loading, setLoading] = useState(false);

  // 챌린지 전체 기간과 남은 일수를 바탕으로 진행률을 계산하는 함수
  const calculateProgress = (startDate, endDate, currentDate) => {
    const start = new Date(startDate);
    const end = new Date(endDate);
    const today = currentDate || new Date();

    const totalDuration = end - start;
    const elapsed = today - start;
    const progress = (elapsed / totalDuration) * 100;

    return Math.min(Math.max(progress, 0), 100); // 0에서 100 사이로 제한
  };

  // 진행률 계산
  const progressValue = calculateProgress(
    checkRoom.startDate,
    checkRoom.endDate,
    new Date()
  );
  ///////////////////////////////////////////////////////////////////////

  // 날짜 형식 변환 함수
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('ko-KR', {
      month: 'long',
      day: 'numeric',
    });
  };

  // 날짜 형식 변환
  const formattedCheckDate = formatDate(checkDate);

  // 날짜 간의 차이를 일자로 계산하는 함수
  const calculateDaysLeft = (startDate, endDate) => {
    const start = new Date(startDate);
    const end = new Date(endDate);
    const timeDiff = end.getTime() - start.getTime();
    const daysLeft = Math.ceil(timeDiff / (1000 * 3600 * 24));
    return daysLeft;
  };
  // 남은 일자 계산
  const daysLeft = calculateDaysLeft(checkRoom.startDate, checkRoom.endDate);

  const fetchCheckRoom = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        `${baseURL}/challenge/checkroom/${challengeId}/${checkDate}`,
        {
          headers: {
            Authorization: 'Bearer ' + localStorage.getItem('login-token'),
          },
        }
      );
      console.log('해당 챌린지 정보:', response);
      setcheckRoom(response.data.data);
      console.log(checkRoom);
    } catch (error) {
      console.error('챌린지 정보를 가져오는데 실패', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCheckRoom();
  }, [challengeId, checkDate]);

  const handleFileInput = (e) => {
    if (e.target.files && e.target.files[0]) {
      let img = e.target.files[0];
      setImages(img);
      handleImage(img);
    }
  };

  const triggerFileInput = () => {
    hiddenFileInput.current.click();
  };

  // 이미지 처리 함수
  const handleImage = async (selectedImage) => {
    // FormData를 사용하여 파일 데이터 전송
    const formData = new FormData();

    formData.append('challengeId', challengeId);
    formData.append('image', selectedImage);

    try {
      const response = await axios.post(
        `${baseURL}/challenge/checkroom/upload`,
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
            Authorization: `Bearer ` + localStorage.getItem('login-token'),
          },
        }
      );
      console.log('이미지 업로드 완료 및 API 응답:', response);
      fetchCheckRoom();
    } catch (error) {
      console.error('이미지 업로드 중 에러 발생', error);
    }
  };

  const goBack = () => {
    navigate(`/challenge/info/${challengeId}`);
  };

  // '싫어요' 버튼 클릭 이벤트 처리 함수
  const handleDislikeClick = async (item) => {
    try {
      const response = await axios.post(
        `${baseURL}/challenge/checkroom/dislike`,
        { challengeCheckId: item.challengeCheckId },
        {
          headers: {
            Authorization: 'Bearer ' + localStorage.getItem('login-token'),
          },
        }
      );

      // 사용자가 '싫어요'를 누른 항목에 대한 UI 업데이트
      setDislikes((prev) => ({
        ...prev,
        [item.challengeCheckId]: prev[item.challengeCheckId] + 1, // '싫어요' 수 증가
      }));
    } catch (error) {
      console.error('싫어요 상태 변경 실패', error);
    }
  };
  ////////////////////////////////////////////////////////////////////////////////

  return (
    <checkroom.TotalWrapper>
      <GoBackButton onClick={goBack}>X</GoBackButton>{' '}
      <checkroom.modal>
        <checkroom.TopWrapper>
          <checkroom.checkdate>{formattedCheckDate}</checkroom.checkdate>
          <checkroom.dateleft>
            목표 달성일까지{' '}
            <checkroom.HighlightedText>{daysLeft}</checkroom.HighlightedText> 일
            남았습니다
          </checkroom.dateleft>
          <ProgressBar>
            <ProgressBarValue style={{ width: `${progressValue}%` }} />
          </ProgressBar>
        </checkroom.TopWrapper>
        <checkroom.scrollView>
          {checkRoom.challengeChecks &&
            checkRoom.challengeChecks.map((item, index) => (
              <checkroom.message key={item.challengeCheckId}>
                <checkroom.profile src={profileimg} />
                <checkroom.sendWrapper>
                  <checkroom.nickname>{item.nickName}</checkroom.nickname>
                  <checkroom.sendimage>
                    {item.checkImages.length > 0 ? (
                      item.checkImages.map((image, index) => (
                        <img key={index} src={image} />
                      ))
                    ) : (
                      <img src={defaultImage} alt="Default Image" />
                    )}
                  </checkroom.sendimage>
                </checkroom.sendWrapper>
                <checkroom.dislikewrapper
                  onClick={() => handleDislikeClick(item)}
                >
                  <checkroom.dislikeimg src={thumbdown} />
                  <checkroom.dislikenum>
                    {dislikes[item.challengeCheckId] !== undefined
                      ? dislikes[item.challengeCheckId]
                      : item.dislike}
                  </checkroom.dislikenum>
                </checkroom.dislikewrapper>
              </checkroom.message>
            ))}
        </checkroom.scrollView>

        <checkroom.BottomWrapper>
          <checkroom.coupon>
            <p>쿠폰 사용하기</p>
          </checkroom.coupon>
          <input
            type="file"
            ref={hiddenFileInput}
            onChange={handleFileInput}
            style={{ display: 'none' }}
          />
          {/* 사용자에게 보이는 업로드 버튼 */}
          <checkroom.upload onClick={triggerFileInput}>
            <p>사진 업로드</p>
          </checkroom.upload>
        </checkroom.BottomWrapper>
      </checkroom.modal>
    </checkroom.TotalWrapper>
  );
}

export default Chatcheckroom;
