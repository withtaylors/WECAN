import styled from "styled-components";
import * as tokens from "../../tokens";

export const MainWrapper = styled.div`
  width: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  min-height: 100vh; /* 전체 뷰포트 높이 */
  overflow: hidden;
`;

export const Logo = styled.img`
  width: 364px;
  height: 50px;
  margin-bottom: 30px;
`;
export const InputWrapper = styled.div`
  width: 425px;
  height: 49px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 25px;
  border: 1px solid #999999;

  margin-top: 20px;
`;

export const InputBox = styled.input`
  font-family: Pretendard;
  width: 400px;
  height: 33px;
  margin-top: 13px;
  margin-left: 10px;
  margin-bottom: 10px;
  margin-right: 4px;
  border: none;
  outline: none;
`;

export const IdMemmory = styled.div`
  width: 425px;
  height: 28px;
  display: flex;
  justify-content: start;
  align-items: center;
  margin-top: 10px;
  margin-left: 10px;
  font-size: 12px;
`;
export const IdMemmoryButton = styled.button`
  width: 26px;
  height: 26px;
  font-size: 15px;
  border: none;
  background-color: gray;
  border-radius: 50px;
  padding: 5px;
  margin-left: 5px;
  margin-right: 10px;
  cursor: pointer;
  &:focus {
    background-color: #dd518c;
  }
`;
export const LoginButton = styled.div`
  width: 425px;
  height: 49px;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  font-weight: bold;
  color: black;
  background-color: #dd518c;
  margin-top: 30px;
  &:hover {
    color: white;
  }
  cursor: pointer;
`;

export const PasswordWrapper = styled.div`
  width: 425px;
  height: 30px;
  margin-top: 18px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
export const PwInfo = styled.div`
  font-size: 13px;
  padding: 5px;
  cursor: pointer;
`;
export const Lines = styled.div`
  width: 425px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
export const Line1 = styled.div`
  width: 210px;
  height: 0.5px;
  background-color: black;
  margin-top: 42px;
`;

export const kakaoButton = styled.div`
  width: 425px;
  height: 49px;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  background-color: #fee402;
  margin-top: 30px;
`;
