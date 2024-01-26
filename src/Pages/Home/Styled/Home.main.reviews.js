import styled from 'styled-components';
import * as tokens from '../../tokens';

export const mainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: auto;
  width: 890px;
  gap: 10px;
  margin-top: px;
  margin-bottom: 150px;
`;
export const reviewWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  margin-left: 61px;
  margin-top: 50px;
`;

export const title = styled.div`
  font-size: 24px;
  font-weight: bold;
  width: 200px;
`;

export const reviewblock = styled.div`
  display: flex;
  flex-direction: row;
  height: 98px;
  width: 813px;
`;
export const reviewblock2 = styled.div`
  display: flex;
  flex-direction: row;
  height: 98px;
  width: 813px;
  transform: scaleX(-1);
`;

export const profil = styled.div`
  display: flex;
  flex-direction: column;
  height: 110px;
  width: 83px;
`;
export const profil2 = styled.div`
  display: flex;
  flex-direction: column;
  height: 110px;
  width: 83px;
  transform: scaleX(-1);
`;
export const name = styled.div`
  font-size: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const photo = styled.img`
  height: 84px;
  width: 83px;
  border-radius: 50%;
`;

export const comment = styled.div`
  position: relative;
`;
export const comment2 = styled.div`
  position: relative;
  transform: scaleX(-1);
`;
export const img = styled.img``;
export const img2 = styled.img`
  transform: scaleX(-1);
`;
export const content = styled.div`
  position: absolute;
  top: 35%;
  left: 51%;
  transform: translate(-50%, -50%);
  font-size: 18px;
  width: 90%;
`;
export const thirdblock = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;

  margin-top: 20px;
`;
export const buttoninfo = styled.div`
  height: 10px;
  width: 100px;
  height: 41px;
  background-color: white;
  color: #dd518c;
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 30px;
  border: 1px solid #cacbd3;
  cursor: pointer;
`;
