import React, { useState, useEffect, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import * as checkroom from './Styled/Chat.checkroom';
import profileimg from '../../Assets/img/profile.png';
import thumbdown from '../../Assets/img/mypage/thumbdown.png';
import { GoBackButton } from './Styled/Chat.checkroom';
import { ProgressBar, ProgressBarValue } from './Styled/Chat.checkroom';
import { DislikeButton } from './Styled/DislikeButton';
function Chatcheckroom() {
  const { challengeId, checkDate } = useParams();
  const [images, setImages] = useState();
  const baseURL = 'http://3.35.3.205:8080';
  const navigate = useNavigate();
  const hiddenFileInput = useRef(null);

  const [checkRoom, setcheckRoom] = useState({});
  const userName = localStorage.getItem('user-name');
  const [loading, setLoading] = useState(false);

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
    const formData = new FormData();
    formData.append('challengeId', challengeId);
    formData.append('image', selectedImage);

    try {
      const response = await axios.post(
        `${baseURL}/challenge/checkroom/upload`,
        formData,
        {
          headers: {
            Authorization: `Bearer ` + localStorage.getItem('login-token'),
            'Content-Type': 'multipart/form-data',
          },
        }
      );
      console.log('이미지 업로드 완료 및 API 응답:', response);
      fetchCheckRoom(); // Fetch the latest checkroom data
    } catch (error) {
      console.error('이미지 업로드 중 에러 발생', error);
    }
  };

  const goBack = () => {
    navigate(`/challenge/info/${challengeId}`);
  };

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
            checkRoom.challengeChecks.map(
              (
                item,
                index // map 함수 수정
              ) => (
                <checkroom.message key={item.id}>
                  <checkroom.profile src={profileimg} />
                  <checkroom.sendWrapper>
                    <checkroom.nickname>
                      {item.nickName} {/* 각 item의 nickName에 접근 */}
                    </checkroom.nickname>
                    <checkroom.sendimage>
                      <img src={item.checkImages} />
                    </checkroom.sendimage>
                  </checkroom.sendWrapper>
                  <checkroom.dislikewrapper>
                    <checkroom.dislikeimg src={thumbdown} />
                    <checkroom.dislikenum>
                      {item.dislike} {/* 각 item의 dislike에 접근 */}
                    </checkroom.dislikenum>
                  </checkroom.dislikewrapper>
                </checkroom.message>
              )
            )}
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
          <checkroom.upload onClick={triggerFileInput}>
            <p>사진 업로드</p>
          </checkroom.upload>
        </checkroom.BottomWrapper>
      </checkroom.modal>
    </checkroom.TotalWrapper>
  );
}

export default Chatcheckroom;
