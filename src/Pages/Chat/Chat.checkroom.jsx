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
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadedImage, setUploadedImage] = useState(null); // 업로드된 이미지의 URL을 저장할 새로운 상태

  const baseURL = 'http://3.35.3.205:8080';

  useEffect(() => {
    const fetchCheckroomData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `${baseURL}/challenge/checkroom/${challengeId}/${checkDate}`
        );
        const { challengeChecks, startDate, endDate } = response.data.data;
        console.log(response.data.data);

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
    navigate(`/challenge/info/${challengeId}`);
  };

  // 파일 선택 핸들러
  const handleFileSelect = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  // 이미지 업로드 핸들러
  const handleUpload = async () => {
    if (!selectedFile) {
      alert('No file selected!');
      return;
    }

    const formData = new FormData();
    formData.append('image', selectedFile); // 'images'에서 'image'로 변경
    formData.append('challengeId', challengeId);

    try {
      const uploadResponse = await axios.post(
        `${baseURL}/challenge/checkroom/upload`,
        formData,
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ` + localStorage.getItem('login-token'),
          },
        }
      );

      // 업로드된 이미지의 URL을 상태에 저장
      const uploadedImageUrl = uploadResponse.data.data.checkImages[0];
      setUploadedImage(uploadedImageUrl); // 상태 업데이트
      alert('Upload successful!');
    } catch (error) {
      console.error('Error uploading file:', error);
      alert('Upload failed!');
    }
  };

  // 숨겨진 파일 입력 참조를 위한 ref
  const hiddenFileInput = React.useRef(null);

  // 숨겨진 파일 입력을 클릭하는 함수
  const handleClick = () => {
    hiddenFileInput.current.click();
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
            checkroomData.map(
              ({ challengeCheckId, nickName, checkImages, dislike }) => (
                <checkroom.message key={challengeCheckId}>
                  <checkroom.profile src={profileimg} />
                  <checkroom.sendWrapper>
                    <checkroom.nickname>{nickName}</checkroom.nickname>
                    <checkroom.sendimage>
                      <img src={checkImages} />
                    </checkroom.sendimage>
                  </checkroom.sendWrapper>
                  <checkroom.dislikewrapper>
                    <checkroom.dislikeimg src={thumbdown} />
                    <checkroom.dislikenum>{dislike}</checkroom.dislikenum>
                  </checkroom.dislikewrapper>
                </checkroom.message>
              )
            )}
        </checkroom.scrollView>

        <checkroom.BottomWrapper>
          {/* 숨겨진 파일 입력 요소 */}
          <checkroom.coupon>
            <p>쿠폰 사용하기</p>
          </checkroom.coupon>
          <input
            type="file"
            ref={hiddenFileInput}
            onChange={handleFileSelect}
            style={{ display: 'none' }} // 숨기기
          />
          {/* 사용자에게 보이는 업로드 버튼 */}
          <checkroom.upload onClick={handleClick}>
            <p>사진 업로드</p>
          </checkroom.upload>
        </checkroom.BottomWrapper>
      </checkroom.modal>
    </checkroom.TotalWrapper>
  );
}

export default Chatcheckroom;
