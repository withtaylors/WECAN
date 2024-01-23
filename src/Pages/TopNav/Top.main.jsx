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

  //////////// 토큰 만료 여부 판단///////////////////////////
  function isTokenExpired(token) {
    if (!token) {
      return true; // 토큰이 없으면 만료된 것으로 간주
    }

    // 토큰의 payload 파싱
    const payload = JSON.parse(atob(token.split('.')[1]));

    // payload에 exp 필드가 존재하고, exp가 현재 시간보다 이전이면 토큰이 만료되었다고 판단
    return payload.exp && payload.exp * 1000 < Date.now();
  }
  const accessToken = localStorage.getItem('login-token');
  const isExpired = isTokenExpired(accessToken);

  if (isExpired) {
    console.log('AccessToken이 만료되었습니다.');
  } else {
    console.log('AccessToken이 유효합니다.');
  }
  /////////////////////////////////////////////////////////
  const handleLogout = () => {
    const confirmLogout = window.confirm('정말 로그아웃을 하십니까');
    if (confirmLogout) {
      window.localStorage.clear();
      alert('로그아웃 완료');
      navigate('/');
    }
  };
  /////////////////////////////////////////////////////////
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
          {!isExpired ? (
            <>
              <TopS.User>
                <TopS.RealName>{userName}</TopS.RealName>님 환영합니다
              </TopS.User>
              {/* isTokenValid가 true일 때 로그아웃 버튼을 표시 */}
              <TopS.LogInOut onClick={handleLogout}>로그아웃</TopS.LogInOut>
            </>
          ) : (
            // isTokenValid가 false일 때 로그인/회원가입 버튼을 표시
            <>
              <TopS.User>로그인 회원가입 해 주세요!</TopS.User>
              <TopS.LogInOut
                onClick={(e) => {
                  NavClick(e, '/login');
                }}
              >
                로그인/회원가입
              </TopS.LogInOut>
            </>
          )}
        </TopS.TopInfoWrapper>
      </TopS.TopContentWrapper>
    </TopS.TopWrapper>
  );
}

export default Top;
