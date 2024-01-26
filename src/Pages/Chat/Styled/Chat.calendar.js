import styled from 'styled-components';
import * as tokens from '../../tokens';

export const TotalWrapper = styled.div`
  display: flex;
  justify-content: left;
  align-items: left;
  flex-direction: column;
  margin-top: 50px;
  margin-left: 200px;
  margin-right: 50px;
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
  height: 42px;
  font-size: 32px;
  font-weight: bold;
  color: #303030;
`;

export const date = styled.div`
  height: 24px;
  font-size: 19px;
  color: #303030;
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
  margin-bottom: 80px;
`;
