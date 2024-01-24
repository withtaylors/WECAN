import styled from 'styled-components';
import * as tokens from '../../tokens';

export const totalWrapper = styled.div`
  width: 100%;
  height: 2500px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;
export const InfoWrapper = styled.div`
  width: 810px;
  height: 570px;
  display: flex;
  flex-direction: column;
  margin-top: 120px;
`;
export const topInfoWrapper = styled.div`
  width: 100%;
  height: 300px;
  display: flex;
  flex-direction: row;
`;

export const firstPicture = styled.img`
  width: 390px;
  height: 287px;
  border-radius: 25px;
  background-color: #eaeaea;
`;
export const realInfoWrapper = styled.div`
  width: 371px;
  height: 295px;
  display: flex;
  flex-direction: column;
  margin-left: 45px;
`;
export const infoType = styled.div`
  font-size: 27px;
  font-weight: bold;
  height: 35px;
  display: flex;
  flex-direction: flex-start;
`;
export const infoTitle = styled.div`
  width: 100%;
  height: 43px;
  font-size: 33px;
  font-weight: regular;
  margin-top: 12px;
  display: flex;
  flex-direction: flex-start;
`;
export const infoJoinRate = styled.div`
  width: 100%;
  height: 50px;
  margin-top: 55px;
`;
export const infoJoinRateNumber = styled.div`
  width: 115px;
  height: 27px;
  color: black;
`;
export const infoJoinRateBar = styled.div`
  width: 100%;
  height: 19px;
  background-color: #eaeaea;
  border-radius: 30px;
`;

export const joinButton = styled.div`
  width: 100%;
  height: 60px;
  border-radius: 36px;
  border: 3px solid;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 28px;
  font-weight: bold;
  margin-top: 36px;
  color: #dd518c;
  cursor: pointer;
`;
export const joinButton2 = styled.div`
  width: 100%;
  height: 60px;
  border-radius: 36px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 28px;
  font-weight: bold;
  margin-top: 36px;
  color: white;
  background-color: #dd518c;
  cursor: pointer;
`;
export const infoExplain = styled.div`
  width: 100%;
  height: 220px;
  border: 1px solid gray;
  border-radius: 25px;
  margin-top: 40px;
`;

export const infoExplainContext = styled.div`
  display: flex;
  flex-direction: flex-start;
  margin: 20px;
  font-size: 15px;
`;
