import styled from 'styled-components';
import * as tokens from '../../tokens';

export const totalWrapper = styled.div`
  width: 550px;
  height: 850px;
  border-radius: 15px;
  background-color: #e6e6e6;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 3px;
`;
export const messagesWrapper = styled.div`
  width: 100%;
  height: 650px;
  overflow-y: auto;
  flex-grow: 1;
`;
export const inputWrapper = styled.div`
  width: 476px;
  height: 55px;
  border-radius: 25px;
  background-color: #c6c6c6;
  margin-top: 10px;
  margin-bottom: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
export const smileImg = styled.img`
  cursor: pointer;
`;
export const realInputWrapper = styled.input`
  width: 350px;
  height: 80%;
  background-color: #c6c6c6;
  margin-left: 8px;
  margin-right: 8px;
  border: none;
  &:focus {
    border: none;
    outline: none;
    color: black;
    font-family: 'Pretendard';
  }
`;
export const sendButtonWrapper = styled.div``;
export const sendButoon = styled.img``;
///////////////////////////////////////////////////
export const lineTotalWrapper = styled.div`
  height: auto;

  display: flex;
  flex-direction: row;
  margin-top: 3px;
`;
export const lineTotalWrapper2 = styled.div`
  height: auto;

  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  margin-top: 3px;
`;
export const profileWrapper = styled.div`
  width: 45px;
`;
export const profileWrapper2 = styled.div`
  width: 45px;

  transform: scaleX(-1);
`;
export const profileImg = styled.img`
  width: 45px;
  height: 45px;
  border-radius: 50px;
`;
export const innerWrapper = styled.div`
  height: auto;
`;
export const userName = styled.div`
  height: 25px;

  display: flex;
  align-items: center;
  margin-left: 10px;
`;
export const userName2 = styled.div`
  height: 25px;

  display: flex;
  align-items: center;
  margin-left: 10px;
  justify-content: flex-end;
`;
export const TextWrapper = styled.div`
  height: 45px;
  border-radius: 20px;
  background-color: white;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;
export const Text = styled.div`
  flex: 0;
  border-radius: 15px;
  width: 90%;
  display: flex;
  align-items: center;
  font-size: 13px;

  margin-left: 5px;
`;
export const TimeWrapper = styled.div`
  height: 10px;

  display: flex;
  justify-content: flex-end;
  margin-left: 10px;
  font-size: 10px;
  color: gray;
`;
