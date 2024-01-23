import styled from 'styled-components';
import * as tokens from '../../tokens';

export const totalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 328px;
  width: 890px;
  gap: 10px;
  margin-bottom: 65px;
  margin-top: 65px;
`;
export const title = styled.div`
  font-size: 24px;
  font-weight: bold;
  color: black;
  width: 450px;
  display: flex;
  align-context: start;
`;
export const mainCardWrapper = styled.div`
  width: 100%;
  height: 260px;
  border-radius: 25px;
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 20px;
  box-shadow: 6px 6px 8px 7px rgba(0, 0, 0, 0.1);
`;
export const mainCardWrapper2 = styled.img`
  border-radius: 25px;
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;
export const moveButton = styled.div`
  height: 40px;
  width: 25px;
  color: #dd518c;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 35px;
`;
export const subCardWrapper = styled.div`
  width: 785px;
  height: 230px;

  display: flex;
  flex-direction: row;
`;
export const mainImg = styled.img`
  width: 290px;
  height: 230px;
  border-radius: 25px;
  background-color: #d2d2d2;
`;
export const mainInfo = styled.div`
  width: 460px;
  height: 100%;
  background-color: white;
  margin-left: 28px;
  display: flex;
  flex-direction: column;
  align-items: start;
`;

export const challengeTitle = styled.div`
  width: 368px;
  height: 45px;
  font-size: 26px;
  display: flex;
  justify-content: flex-start;
  margin-top: 10px;
  font-weight: bold;
`;
export const challengeDate = styled.div`
  width: 368px;
  height: 29px;
  display: flex;
  justify-content: flex-start;
  margin-top: 5px;
`;
export const challengeDateImg = styled.img``;
export const challengeLeftDate = styled.div`
  width: 82px;
  height: 50px;
  font-size: 41px;
  margin-top: 30px;
`;
export const challengeButtonWrapper = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: end;
`;
export const challengeAdmitButton = styled.div`
  width: 226px;
  height: 100%;
  background-color: #dd518c;
  border-radius: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 22px;
  font-weight: bold;
  color: white;
  cursor: pointer;
  &:hover {
    background-color: white;
    color: #dd518c;
    border: 2px solid #dd518c;
  }
`;
export const rightimg = styled.img`
  margin-left: 5px;
`;
