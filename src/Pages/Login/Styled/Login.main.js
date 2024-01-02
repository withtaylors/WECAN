import styled from 'styled-components';
import * as tokens from '../../tokens';

export const MainWrapper = styled.div`
  width: 100%;
  height: 1000px;
  padding-top: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  background-color: white;
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
  border: 2px solid gray;

  margin-top: 20px;
`;

export const InputBox = styled.input`
  font-family: Pretendard;
  width: 400px;
  height: 27px;
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
  border: 1px solid gray;
  background-color: white;
  border-radius: 50px;
  padding: 5px;
  margin-left: 5px;
  margin-right: 10px;
`;
export const LoginButton = styled.div`
  width: 425px;
  height: 49px;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  background-color: #dd518c;
  margin-top: 30px;
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
