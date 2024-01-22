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
      // 카카오로부터 받아온 code를 서버에 전달하여 카카오로 회원가입 & 로그인한다
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
    } catch (error) {
      console.error("로그인 실패:", error);
      setIsSuccess(false);
      alert("등록되지 않은 회원이거나 비밀번호가 틀렸습니다.");
    }
  };

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const code = searchParams.get("code"); // 카카오는 Redirect 시키면서 code를 쿼리 스트링으로 준다.
    if (code) {
      handleOAuthKakao(code);
    }
  }, [location]);
};

export default KakaoRedirect;
