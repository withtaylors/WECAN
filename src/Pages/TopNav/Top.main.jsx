import React, { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import * as TopS from './Styled/Top.main.styles';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import TopNav from './TopNav.main';
import Logosrc from '../../Assets/img/Logo.png';

function Top() {
  const navigate = useNavigate();
  const NavClick = (e, type) => {
    e.preventDefault();
    navigate(`${type}`);
  };
  const userName = localStorage.getItem('user-name');
  const token = localStorage.getItem('login-token');
  const [isTokenValid, setIsTokenValid] = useState(true);

  useEffect(() => {
    if (!token) {
      setIsTokenValid(false);
    }
  }, [token]);

  return (
    <TopS.TopWrapper>
      <TopS.TopContentWrapper type='main'>
        <TopS.TopLogo
          src={Logosrc}
          onClick={(e) => {
            NavClick(e, '/');
          }}
        ></TopS.TopLogo>
        <TopS.TopInfoWrapper>
          {isTokenValid ? (
            <>
              <TopS.User>
                <TopS.RealName>{userName}</TopS.RealName>님 환영합니다
              </TopS.User>
              <TopS.LogInOut
                onClick={(e) => {
                  NavClick(e, '/login');
                }}
              >
                로그인/회원가입
              </TopS.LogInOut>
            </>
          ) : (
            <div>토큰 만료</div>
          )}
        </TopS.TopInfoWrapper>
      </TopS.TopContentWrapper>
    </TopS.TopWrapper>
  );
}

export default Top;
