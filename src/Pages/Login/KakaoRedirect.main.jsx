import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { useRecoilState } from "recoil";
import { isSuccessState } from "./Recoil/Recoil.auth.state";

const KakaoRedirect = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isSuccess, setIsSuccess] = useRecoilState(isSuccessState);
  const handleOAuthKakao = async (code) => {
    try {
      const response = await axios.get(
        `http://3.35.3.205:8080/oauth/login/kakao?code=${code}`
      );
      setIsSuccess(true);
      alert("로그인에 성공했습니다.");
      navigate("/");
      console.log("로그인 처리 내용:", response);
      console.log("유저이름:", response.data.nickName);
      const nickName = response.data.nickName;
      if (nickName) {
        localStorage.setItem("user-name", nickName);
      }
      const userId = response.data.userId;
      console.log("유저아이디:", userId);
      if (userId) {
        localStorage.setItem("user-id", userId);
      }
      const accessToken = response.data.authToken.accessToken;
      if (accessToken) {
        localStorage.setItem("login-token", accessToken);
      }
      const candy = response.data.candy;
      if (candy) {
        localStorage.setItem("user-candy", candy);
      }
      const email = response.data.email;
      if (email) {
        localStorage.setItem("user-email", email);
      }
      const phone = response.data.phone;
      if (phone) {
        localStorage.setItem("user-phone", phone);
      }
    } catch (error) {
      console.error("로그인 실패:", error);
      setIsSuccess(false);
      alert("등록되지 않은 회원이거나 비밀번호가 틀렸습니다.");
    }
  };
  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const code = searchParams.get("code");
    if (code) {
      handleOAuthKakao(code);
    }
  }, [location]);
};

export default KakaoRedirect;
