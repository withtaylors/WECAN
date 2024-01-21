import React, { useEffect, useState, useRef } from 'react';
import * as infoch from './Styled/InfoChange.main';
import TopNav from '../../../Pages/TopNav/TopNav.main';
import profileimg from '../../../Assets/img/Group 36.png';
import settingicon from '../../../Assets/img/Vector.png';
import { useNavigate } from 'react-router-dom';

function InfoChange() {
  /////////////////////////////////////////////////
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
                  placeholder='000-0000-0000'
                  value={phonenum}
                  onChange={(e) => setPhonenum(e.target.value)}
                  maxLength={300}
                ></infoch.lineInput>
              </infoch.lineWrapper>
            </infoch.contentWrapper>
          </infoch.infocontentWrapper>
        </infoch.realWrapper>
        <infoch.buttonsWrapper>
          <infoch.buttonSave>적용</infoch.buttonSave>
          <infoch.buttonSave onClick={(e) => NavClick(e, '/mypage')}>
            취소
          </infoch.buttonSave>
        </infoch.buttonsWrapper>
      </infoch.TotalSubWrapper>
    </infoch.TotalWrapper>
  );
}

export default InfoChange;
