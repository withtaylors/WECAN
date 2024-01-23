import React, { useEffect, useState, useRef, useId } from 'react';
import * as login from './Styled/Login.main.js';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Logosrc from '../../Assets/img/Logo.png';
import checkimg from '../../Assets/img/check.png';
import request from './../../Api/request';
import { ACCESS_TOKEN, REFRESH_TOKEN } from './../../Api/request.js';
import { useRecoilState } from 'recoil';
import { isSuccessState } from './Recoil/Recoil.auth.state';

function Login(props) {
  const NavClick = (e, type) => {
    e.preventDefault();
    navigate(`${type}`);
  };
  const baseURL = 'http://3.35.3.205:8080';
  const [isSuccess, setIsSuccess] = useRecoilState(isSuccessState);
  const [type, setType] = useState('login');
  const [name, setName] = useState('로그인');
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const Change = () => {
    setType('find');
    setName('비밀번호 찾기');
  };

  const handleLogin = async () => {
    const requestData = {
      email: email,
      password: password,
    };

    try {
      const response = await axios.post(`${baseURL}/user/sign-in`, requestData);
      setIsSuccess(true);
      alert('로그인에 성공했습니다.');
      navigate('/');
      console.log('로그인 처리 내용:', response);
      console.log('유저이름:', response.data.data.nickName);
      const nickName = response.data.data.nickName;
      if (nickName) {
        localStorage.setItem('user-name', nickName);
      }
      const userId = response.data.data.userId;
      console.log('유저아이디:', userId);
      if (userId) {
        localStorage.setItem('user-id', userId);
      }
      const accessToken = response.data.data.authToken.accessToken;
      if (accessToken) {
        localStorage.setItem('login-token', accessToken);
      }
    } catch (error) {
      console.error('로그인 실패:', error);
      setIsSuccess(false);
      alert('등록되지 않은 회원이거나 비밀번호가 틀렸습니다.');
    }
  };
  const handleKakaoLogin = async () => {
    window.location.href = 'http://3.35.3.205:8080/oauth/kakao';
  };
  const handleSignup = () => {
    navigate('/agree', {
      state: {
        email: '',
        type: 'general',
      },
    });
  };

  return (
    <login.MainWrapper>
      <login.Logo src={Logosrc}></login.Logo>
      <login.InputWrapper>
        <login.InputBox
          placeholder="ID"
          type="id"
          className={props.className}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        ></login.InputBox>
      </login.InputWrapper>
      <login.InputWrapper>
        <login.InputBox
          placeholder="PW"
          type={props.type}
          className={props.className}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></login.InputBox>
      </login.InputWrapper>
      <login.IdMemmory>
        <login.IdMemmoryButton>
          <img src={checkimg}></img>
        </login.IdMemmoryButton>
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
      <login.kakaoButton onClick={handleKakaoLogin}>
        카카오로 로그인하기
      </login.kakaoButton>
    </login.MainWrapper>
  );
}

export default Login;
