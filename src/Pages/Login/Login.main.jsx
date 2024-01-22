import React, { useEffect, useState, useRef, useId } from 'react';
import * as login from './Styled/Login.main.js';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Logosrc from '../../Assets/img/Logo.png';
import checkimg from '../../Assets/img/check.png';
import request from './../../Api/request';
import { ACCESS_TOKEN, REFRESH_TOKEN } from './../../Api/request.js';
import { useRecoilState } from 'recoil';
import { userState } from './Recoil/Recoil.auth.state';

function Login(props) {
  const NavClick = (e, type) => {
    e.preventDefault();
    navigate(`${type}`);
  };
  const baseURL = 'http://3.35.3.205:8080';
  const [user, setUser] = useRecoilState(userState);
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
      // 로그인 상태 업데이트
      setUser({
        isLoggedIn: true,
        token: response.data.data.authToken.accessToken,
        userId: response.data.data.userId,
        nickName: response.data.data.nickName,
      });
      // 성공 알림 및 홈 페이지로 이동
      alert('로그인에 성공했습니다.');
      navigate('/');
    } catch (error) {
      // 실패 알림
      console.error('로그인 실패:', error);
      alert('등록되지 않은 회원이거나 비밀번호가 틀렸습니다.');
      // 실패 상태 업데이트
      setUser((prevState) => ({ ...prevState, isLoggedIn: false }));
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
