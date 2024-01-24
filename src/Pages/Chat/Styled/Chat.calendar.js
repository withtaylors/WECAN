import styled from 'styled-components';
import * as tokens from '../../tokens';

export const TotalWrapper = styled.div`
  display: flex;
  justify-content: left;
  align-items: left;
  flex-direction: column;
  margin-top: 50px;
`;

export const InfoWrapper = styled.div`
  width: 766px;
  height: 111px;
  display: flex;
  flex-direction: row;
`;

export const challengeInfoWrapper = styled.div`
  align-items: flex-start;
  width: 766px;
  height: 111px;
`;

export const challengename = styled.div`
  width: 464px;
  height: 42px;
  font-size: 35px;
  font-weight: bold;
`;

export const date = styled.div`
  width: 258px;
  height: 24px;
  font-size: 19px;
  font-color: #303030;
  margin-top: 10px;
`;

export const successrate = styled.div`
  background-color: #f0f0f0;
  width: 226px;
  height: 72px;
  font-size: 26px;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
`;

export const calendar = styled.div`
  width: 766px;
  height: 620px;
  margin-top: 50px;
  margin-bottom: 80px;
`;
