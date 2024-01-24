import React, { useEffect, useState, useRef } from 'react';
import * as infoch from './Styled/InfoChange.main';
import TopNav from '../../../Pages/TopNav/TopNav.main';
import profileimg from '../../../Assets/img/Group 36.png';
import settingicon from '../../../Assets/img/Vector.png';
import { useNavigate } from 'react-router-dom';
import profilechangeimg from '../../../Assets/img/profile.png';
import axios from 'axios';
function InfoChange() {
  /////////////////////////////////////////////////
  const baseURL = 'http://3.35.3.205:8080';
  const userId = localStorage.getItem('user-id');
  const userName = localStorage.getItem('user-name');
  const [nickName, setNickName] = useState();
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [phonenum, setPhonenum] = useState();
  const navigate = useNavigate();
  const NavClick = (e, type) => {
    e.preventDefault();
    navigate(`${type}`);
  };
  //////////////////////////////////////////////////////

  const handleInfoChange = async () => {
    const formData = new FormData();

    const response = await fetch(profilechangeimg);
    const blob = await response.blob();
    const coverImage = new File([blob], profilechangeimg, {
      type: 'image/png',
    });

    formData.append('userId', userId);
    formData.append('name', userName);
    formData.append('nickName', nickName);
    formData.append('imgEndPoint', coverImage);
    formData.append('email', email);
    formData.append('phone', phonenum);

    console.log(formData);
    try {
      const response = await axios.put(`${baseURL}/user/profile`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data;',
          Authorization: `Bearer ` + localStorage.getItem('login-token'),
        },
      });
      // API 응답에 따른 처리
      console.log('프로필 수정 정보 전달:', response);
    } catch (error) {
      console.error('챌린지 수정 중 에러 발생', error);
      if (error.response) {
        console.error('서버 응답 데이터:', error.response.data);
        console.error('서버 응답 상태 코드:', error.response.status);
      }
    }
  };
  return (
    <infoch.TotalWrapper>
      <TopNav></TopNav>
      <infoch.TotalSubWrapper>
        <infoch.TitleWrapper>
          <infoch.Title>회원 정보 수정하기</infoch.Title>
        </infoch.TitleWrapper>
        <infoch.realWrapper>
          <infoch.profileWrapper>
            <infoch.profileImgWrapper>
              <infoch.profileImg src={profileimg}></infoch.profileImg>
            </infoch.profileImgWrapper>
            <infoch.nickNameWrapper>
              <infoch.nickNameInput
                placeholder='닉네임(30자)'
                value={nickName}
                onChange={(e) => setNickName(e.target.value)}
                maxLength={30}
              ></infoch.nickNameInput>
            </infoch.nickNameWrapper>
          </infoch.profileWrapper>
          <infoch.infocontentWrapper>
            <infoch.contentWrapper>
              <infoch.title>이름</infoch.title>
              <infoch.lineWrapper>
                <infoch.lineInput
                  placeholder='사용자 이름'
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  maxLength={10}
                ></infoch.lineInput>
              </infoch.lineWrapper>
            </infoch.contentWrapper>
            <infoch.contentWrapper>
              <infoch.title>이메일 주소</infoch.title>
              <infoch.lineWrapper>
                <infoch.lineInput
                  placeholder='123@naver.com'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  maxLength={100}
                ></infoch.lineInput>
              </infoch.lineWrapper>
            </infoch.contentWrapper>
            <infoch.contentWrapper>
              <infoch.title>휴대폰 번호</infoch.title>
              <infoch.lineWrapper>
                <infoch.lineInput
                  placeholder='00000000000(-없이)'
                  value={phonenum}
                  onChange={(e) => setPhonenum(e.target.value)}
                  maxLength={300}
                ></infoch.lineInput>
              </infoch.lineWrapper>
            </infoch.contentWrapper>
          </infoch.infocontentWrapper>
        </infoch.realWrapper>
        <infoch.buttonsWrapper>
          <infoch.buttonSave onClick={handleInfoChange}>적용</infoch.buttonSave>
          <infoch.buttonSave onClick={(e) => NavClick(e, '/mypage')}>
            취소
          </infoch.buttonSave>
        </infoch.buttonsWrapper>
      </infoch.TotalSubWrapper>
    </infoch.TotalWrapper>
  );
}

export default InfoChange;
