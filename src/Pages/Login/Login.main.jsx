import React, { useEffect, useState, useRef } from 'react';
import * as login from './Styled/Login.main.js';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Logosrc from '../../Assets/img/Logo.png';

function Login(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  ////API////
  const handleLogin = async () => {
    try {
      const response = await axios.post('3.37.87.249:8080' + '/user/sign-in', {
        email: email,
        password: password,
        // 추가로 보낼 필요가 있는 다른 데이터가 있다면 추가할 수 있습니다.
      });
    } catch (error) {
      // 로그인이 실패하면 처리
      console.error('정보 넘어가지 않음', error);
      // 실패에 대한 사용자 피드백 등을 처리할 수 있습니다.
    }
  };
  const navigate = useNavigate();
  const NavClick = (e, type) => {
    e.preventDefault();
    navigate(`${type}`);
  };

  return (
    <login.MainWrapper>
      <login.Logo src={Logosrc}></login.Logo>
      <login.InputWrapper>
        <login.InputBox
          placeholder='ID'
          type='id'
          className={props.className}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        ></login.InputBox>
      </login.InputWrapper>
      <login.InputWrapper>
        <login.InputBox
          placeholder='PW'
          type={props.type}
          className={props.className}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></login.InputBox>
      </login.InputWrapper>
      <login.IdMemmory>
        <login.IdMemmoryButton>!</login.IdMemmoryButton>
        아이디 기억하기
      </login.IdMemmory>
      <login.LoginButton onClick={handleLogin}>로그인</login.LoginButton>
      <login.PasswordWrapper>
        <login.PwInfo>비밀번호를 잊으셨나요?</login.PwInfo>
        <login.PwInfo>|</login.PwInfo>
        <login.PwInfo
          onClick={(e) => {
            NavClick(e, '/join');
          }}
        >
          회원가입
        </login.PwInfo>
      </login.PasswordWrapper>
      <login.Lines>
        <login.Line1></login.Line1>
        <login.Line1></login.Line1>
      </login.Lines>
      <login.kakaoButton>카카오로 로그인하기</login.kakaoButton>
    </login.MainWrapper>
  );
}

export default Login;
