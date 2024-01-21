import styled from 'styled-components';
import * as tokens from '../../tokens';

export const TotalWrapper = styled.div`
  width: 890px;
  height: 245px;
  background-color: #f6f6f6;
  border-radius: 25px;
  margin-top: 100px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const ProfileWrapper = styled.div`
  width: 650px;
  height: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;
export const ProfileRealWrapper = styled.div`
  width: 390px;
  height: 190px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 30px;
`;
export const ProfilefixingWrapper = styled.div`
  width: 95%;
  height: 24px;
  display: flex;
  justify-content: flex-end;
  cursor: pointer;
`;
export const ProfilefixingButton = styled.img`
  width: 24px;
  height: 24px;
`;
export const ProfileImg = styled.img`
  width: 157px;
  height: 157px;
`;
export const ProfileTextWrapper = styled.div`
  width: 194px;
  height: 90px;

  margin-left: 26px;
`;
export const userNameWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;
export const userName = styled.div`
  width: 95%;
  height: 47px;
  font-size: 38px;

  margin-bottom: 10px;
`;
export const userName2 = styled.div`
  width: 95%;
  height: 47px;
  font-size: 38px;
  font-weight: bold;
  margin-bottom: 10px;
`;
export const candyNumberWrapper = styled.div`
  width: 85%;
  height: 36px;
  display: flex;
  flex-direction: row;
  gap: 10px;
`;
export const candyNumber = styled.div`
  font-size: 26px;
  font-weight: bold;
`;
export const candy = styled.div`
  font-size: 26px;
  font-weight: bold;
  color: #dd518c;
`;
export const rightWrapper = styled.div`
  width: 250px;
  height: 170px;
  border-left: 1px solid gray;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;
export const candyButton = styled.div`
  width: 195px;
  height: 42px;
  border-radius: 15px;
  background-color: #e6e6e6;
  font-size: 15px;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  &:hover {
    background-color: #dd518c;
    color: white;
  }
`;
export const myItemButton = styled.div`
  width: 195px;
  height: 42px;
  border-radius: 15px;
  background-color: #e6e6e6;
  font-size: 15px;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  &:hover {
    background-color: #dd518c;
    color: white;
  }
`;
