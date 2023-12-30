import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import * as TopS from "./Styled/Top.main.styles";
import { useRecoilValue, useSetRecoilState } from "recoil";
import TopNav from "./TopNav.main";
import Nav from "./NavigationBar";
import Logosrc from "../../Assets/img/Logo.png";

function Top() {
  const navigate = useNavigate();
  const NavClick = (e, type) => {
    e.preventDefault();
    navigate(`${type}`);
  };
  const userInfo = [{ name: "위캔두" }];
  return (
    <TopS.TopWrapper>
      <TopS.TopContentWrapper type="main">
        <TopS.TopLogo
          src={Logosrc}
          onClick={(e) => {
            NavClick(e, "/");
          }}
        ></TopS.TopLogo>
        <TopS.TopInfoWrapper>
          <TopS.User>
            <TopS.RealName>위캔두</TopS.RealName>님 환영합니다
          </TopS.User>
          <TopS.LogInOut
            onClick={(e) => {
              NavClick(e, "/login");
            }}
          >
            로그인/회원가입
          </TopS.LogInOut>
        </TopS.TopInfoWrapper>
      </TopS.TopContentWrapper>
    </TopS.TopWrapper>
  );
}

export default Top;
