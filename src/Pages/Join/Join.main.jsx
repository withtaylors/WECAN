import React, { useEffect, useState, useRef } from 'react';
import * as join from './Styled/Join.main';
import axios from 'axios';
import Logosrc from '../../Assets/img/Logo.png';

function Join(props) {
  return (
    <join.totalWrapper>
      <join.InnerWrapper>
        <join.logo src={Logosrc}></join.logo>
        <join.joinWrapper>
          <join.title>이메일</join.title>
          <join.inputWrapper>
            <join.realinputWrapper placeholder='email@gmail.com'></join.realinputWrapper>
            <join.firstcheckButton>인증하기</join.firstcheckButton>
          </join.inputWrapper>
        </join.joinWrapper>
        <join.joinWrapper>
          <join.title>인증번호 입력</join.title>
          <join.inputWrapper>
            <join.realinputWrapper></join.realinputWrapper>
          </join.inputWrapper>
        </join.joinWrapper>
        <join.joinWrapper>
          <join.title>비밀번호</join.title>
          <join.inputWrapper>
            <join.realinputWrapper placeholder='영어 대소문자/숫자/특수문자 포함 8~20자'></join.realinputWrapper>
          </join.inputWrapper>
        </join.joinWrapper>
        <join.joinWrapper>
          <join.title>비밀번호 확인</join.title>
          <join.inputWrapper>
            <join.realinputWrapper placeholder='비밀번호를 한번 더 입력해 주세요'></join.realinputWrapper>
          </join.inputWrapper>
        </join.joinWrapper>
        <join.joinWrapper>
          <join.title>이름</join.title>
          <join.inputWrapper>
            <join.realinputWrapper></join.realinputWrapper>
          </join.inputWrapper>
        </join.joinWrapper>
        <join.joinWrapper>
          <join.title>닉네임</join.title>
          <join.inputWrapper>
            <join.realinputWrapper></join.realinputWrapper>
            <join.thirdtcheckButton>중복확인</join.thirdtcheckButton>
          </join.inputWrapper>
        </join.joinWrapper>
        <join.joinWrapper>
          <join.title>전화번호</join.title>
          <join.inputWrapper>
            <join.realinputWrapper placeholder='- 제외 11자 입력'></join.realinputWrapper>
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
        <join.joinButton>가입하기</join.joinButton>
      </join.InnerWrapper>
    </join.totalWrapper>
  );
}

export default Join;
