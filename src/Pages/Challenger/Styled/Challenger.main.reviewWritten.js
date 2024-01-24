import styled from 'styled-components';
import * as tokens from '../../tokens';

export const totalWrapper = styled.div`
  width: 803px;
  height: 213px;
  border-top: 2px solid #eaeaea;
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
export const profileWrapper = styled.div`
  height: 46px;
  display: flex;
  flex-direction: row;
`;

export const photo = styled.div`
  width: 40px;
  height: 40px;
  background-color: gray;
  border-radius: 50px;
`;

export const profileReal = styled.div`
  height: 100%;
  margin-left: 5px;
`;

export const name = styled.div`
  font-weight: bold;
  font-size: 20px;
`;

export const date = styled.div`
  width: 100px;
  height: 14px;
  display: flex;
  flex-direction: flex-start;
`;

export const reviewText = styled.div`
  width: 725px;
  height: 80px;
  margin-left: 44px;
  display: flex;
  flex-direction: flex-start;
  align-items: center;
  border-top: 1px dotted gray;
  border-bottom: 1px dotted gray;
`;

export const replyText = styled.div`
  width: 50px;
  height: 22px;
  color: gray;
  margin-left: 44px;
  margin-top: 5px;
  cursor: pointer;
`;
