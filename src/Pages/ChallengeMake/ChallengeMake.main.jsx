import React, { useEffect, useState, useRef } from 'react';
import { useParams } from 'react-router-dom';
import TopNav from '../TopNav/TopNav.main';
import * as chgmake from './Styled/ChallengeMake.main.js';
import Chgincruit from './ChallengeMake.incruitMake';
import ChgExplain from './ChallengeMake.Explain.jsx';
import axios from 'axios';

function ChallengeMake() {
  const [selectedValues, setSelectedValues] = useState([]);
  const updateSelectedValues = (values) => {
    setSelectedValues(values);
  };
  const [writtenValues, setWrittenValues] = useState([]);
  const updateWrittenValues = (textArray) => {
    setWrittenValues(textArray);
  };
  ////////////////////////////////////////////////////////////////

  const handleMake = async () => {
    const baseURL = 'http://3.35.3.205:8080';
    const PROXY =
    window.location.hostname === 'localhost'
      ? ''
      : 'https://wecanomg.shop';

    // 이미지 URL을 사용하여 이미지 파일을 가져옴
    const response = await fetch(writtenValues.image);
    const blob = await response.blob();

    // URL에서 파일 이름 추출
    const fileName = writtenValues.image.substring(
      writtenValues.image.lastIndexOf('/') + 1
    );

    // File 객체 생성
    const file = new File([blob], fileName, { type: blob.type });

    const jsonData = {
      charityName: null,
      title: writtenValues.title,
      challengeType: selectedValues.selectedType,
      challengeStartDate: selectedValues.formattedStartDate,
      challengeEndDate: selectedValues.formattedEndDate,
      minPeople: selectedValues.teamNumber,
      checkDay: selectedValues.selectedWeekday,
      paymentType: selectedValues.selectedPayment,
      content: writtenValues.content,
      coverImage: file,
      fine: selectedValues.candyNumber,
    };
    console.log('jasonData', jsonData);
    console.log(jsonData.coverImage);

    const formData = new FormData();

    formData.append('charityName', 'hello');
    formData.append('title', writtenValues.title);
    formData.append('challengeType', selectedValues.selectedType);
    formData.append('challengeStartDate', selectedValues.formattedStartDate);
    formData.append('challengeEndDate', selectedValues.formattedEndDate);
    formData.append('minPeople', selectedValues.teamNumber);
    formData.append('checkDay', selectedValues.selectedWeekday);
    formData.append('paymentType', selectedValues.selectedPayment);
    formData.append('content', writtenValues.content);
    formData.append('coverImage', jsonData.coverImage);
    formData.append('fine', selectedValues.candyNumber);

    console.log(formData);
    try {
      const response = await axios.post(`${PROXY}/recruit`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data;',
          Authorization: `Bearer ` + localStorage.getItem('login-token'),
        },
      });
      // API 응답에 따른 처리
      alert('챌린지가 생성되었습니다!');
      console.log('챌린지 만들기 정보 전달:', response);
    } catch (error) {
      console.error('챌린지 만들기 중 에러 발생', error);
      if (error.response) {
        if (error.response.code == 5003) {
          alert('챌린지 날짜가 유효하지 않습니다!');
        }
        console.error('서버 응답 데이터:', error.response.data);
        console.error('서버 응답 상태 코드:', error.response.status);
      }
    }
  };

  return (
    <chgmake.totalWrapper>
      <TopNav></TopNav>
      <Chgincruit onUpdateSelectedValues={updateSelectedValues}></Chgincruit>
      <ChgExplain onUpdateWrittenValues={updateWrittenValues}></ChgExplain>

      <chgmake.buttonWrapper>
        <chgmake.buttoncruiting onClick={handleMake}>
          챌린저 모집하기
        </chgmake.buttoncruiting>
      </chgmake.buttonWrapper>
    </chgmake.totalWrapper>
  );
}
export default ChallengeMake;
