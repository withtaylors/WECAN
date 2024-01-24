import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as join from './Styled/Join.main';
import axios from 'axios';
import Logosrc from '../../Assets/img/Logo.png';

function Join() {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [verificationCode, setVerificationCode] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [name, setName] = useState('');
  const [nickname, setNickname] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [agreementChecked, setAgreementChecked] = useState(false);
  const [isValid, setIsValid] = useState('');
  const baseURL = 'http://3.35.3.205:8080';

  const handleSendingCertificate = async () => {
    try {
      const response = await axios.post(
        `${baseURL}/user/certification-mail`,
        email,
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ` + localStorage.getItem('login-token'),
          },
        }
      );
      alert('인증번호가 메일로 전달되었습니다!');
      console.log('인증메일 보내기 성공:', response.data);
    } catch (error) {
      // 회원가입 실패 시 에러 처리
      console.error('인증메일 실패:', error);
    }
  };
  const certificationNum = verificationCode;
  const handleCertificate = async () => {
    try {
      const response = await axios.post(
        `${baseURL}/user/certification-num`,
        {
          certificationNum: certificationNum,
          email: email,
        },

        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ` + localStorage.getItem('login-token'),
          },
        }
      );

      console.log('인증 성공:', response.data);
      setIsValid(response.data.success);
      console.log(isValid);
    } catch (error) {
      // 회원가입 실패 시 에러 처리
      console.error('인증 실패:', error);
    }
  };

  ////////////////////////////////////////////////////////////////
  const handleJoin = async () => {
    const jsonData = {
      email: email,
      password: password,
      name: name,
      nickName: nickname,
      phone: phoneNumber,
    };

    try {
      const response = await axios.post(`${baseURL}/user/sign-up`, jsonData);

      console.log('회원가입 성공:', response.data);
      navigate('/login');
    } catch (error) {
      // 회원가입 실패 시 에러 처리
      console.error('회원가입 실패:', error);
    }
  };

  return (
    <join.totalWrapper>
      <join.InnerWrapper>
        <join.logo src={Logosrc}></join.logo>
        <join.joinWrapper>
          <join.title>이메일</join.title>
          <join.inputWrapper>
            <join.realinputWrapper
              placeholder='email@gmail.com'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></join.realinputWrapper>
            <join.firstcheckButton onClick={handleSendingCertificate}>
              인증번호받기
            </join.firstcheckButton>
          </join.inputWrapper>
        </join.joinWrapper>
        <join.joinWrapper>
          <join.title>인증번호 입력</join.title>
          <join.inputWrapper>
            <join.realinputWrapper
              placeholder='메일로 온 인증번호를 입력해 주세요'
              value={verificationCode}
              onChange={(e) => setVerificationCode(e.target.value)}
            ></join.realinputWrapper>
            <join.firstcheckButton onClick={handleCertificate}>
              인증하기
            </join.firstcheckButton>
          </join.inputWrapper>
        </join.joinWrapper>

        <join.joinWrapper>
          <join.title>비밀번호</join.title>
          <join.inputWrapper>
            <join.realinputWrapper
              placeholder='영어 대소문자/숫자/특수문자 포함 8~20자'
              type='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            ></join.realinputWrapper>
          </join.inputWrapper>
        </join.joinWrapper>
        <join.joinWrapper>
          <join.title>비밀번호 확인</join.title>
          <join.inputWrapper>
            <join.realinputWrapper
              placeholder='비밀번호를 한번 더 입력해 주세요'
              type='password'
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            ></join.realinputWrapper>
          </join.inputWrapper>
        </join.joinWrapper>
        <join.joinWrapper>
          <join.title>이름</join.title>
          <join.inputWrapper>
            <join.realinputWrapper
              value={name}
              onChange={(e) => setName(e.target.value)}
            ></join.realinputWrapper>
          </join.inputWrapper>
        </join.joinWrapper>
        <join.joinWrapper>
          <join.title>닉네임</join.title>
          <join.inputWrapper>
            <join.realinputWrapper
              value={nickname}
              onChange={(e) => setNickname(e.target.value)}
            ></join.realinputWrapper>
            <join.thirdtcheckButton>중복확인</join.thirdtcheckButton>
          </join.inputWrapper>
        </join.joinWrapper>
        <join.joinWrapper>
          <join.title>전화번호</join.title>
          <join.inputWrapper>
            <join.realinputWrapper
              placeholder='- 제외 11자 입력'
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            ></join.realinputWrapper>
          </join.inputWrapper>
        </join.joinWrapper>
        <join.agreeWrapper>
          <join.agreement>
            <join.agreementcheck>!</join.agreementcheck>
            <join.agreementpink>
              위캔 가입 약관에 모두 동의합니다
            </join.agreementpink>
            <join.agreementmore>확인하기</join.agreementmore>
          </join.agreement>
          <join.agreeinfo>
            위캔 이용약관(필수), 개인정보취급방안(필수), 마케팅 정보
            수집동의(선택)
          </join.agreeinfo>
        </join.agreeWrapper>
        <join.joinButton onClick={handleJoin}>가입하기</join.joinButton>
      </join.InnerWrapper>
    </join.totalWrapper>
  );
}

export default Join;
