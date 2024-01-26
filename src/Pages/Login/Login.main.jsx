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
import { initializeApp } from 'firebase/app';
import { getMessaging, getToken } from 'firebase/messaging';

function Login(props) {
  const NavClick = (e, type) => {
    e.preventDefault();
    navigate(`${type}`);
  };
  const baseURL = 'https://wecan-challenge.netlify.app';
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
    // Your web app's Firebase configuration
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
    const firebaseConfig = {
      apiKey: 'AIzaSyBqlJafy3TZ_S2W9uHqGO5warC8ZbDfewg',
      authDomain: 'wecan-6752c.firebaseapp.com',
      projectId: 'wecan-6752c',
      storageBucket: 'wecan-6752c.appspot.com',
      messagingSenderId: '358108176427',
      appId: '1:358108176427:web:f1f476df99158cfc29ca6e',
      measurementId: 'G-XCBNQLE1VV',
    };

    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    // Get registration token. Initially this makes a network call, once retrieved
    // subsequent calls to getToken will return from cache.
    const messaging = getMessaging(app);

    const fcmToken = await getToken(messaging, {
      vapidKey:
        'BPpWppf9pzrB-RB5QQJG3srwzNLsMWswruVXBZpkN2_hsFYXi-JfnEEn9FfYKlpH1Wnn4q7M2cNQyoHjyLSIPYU',
    }).catch((err) => {
      console.log('An error occurred while retrieving token. ', err);
    });
    const requestData = {
      email: email,
      password: password,
      fcmToken: fcmToken,
    };

    try {
      const response = await axios.post(`${baseURL}/user/sign-in`, requestData);
      setIsSuccess(true);
      alert('로그인에 성공했습니다.');
      navigate('/');
      console.log('로그인 처리 내용:', response);
      console.log('유저이름:', response.data.data.nickName);
      console.log('캔디', response.data.data.candy);
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
      const candy = response.data.data.candy;
      console.log('테스트', candy);
      if (candy) {
        localStorage.setItem('candy!', parseInt(candy));
      }
      const email = response.data.email;
      if (email) {
        localStorage.setItem('user-email', email);
      }
      const phone = response.data.phone;
      if (phone) {
        localStorage.setItem('user-phone', phone);
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
          type="password"
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
