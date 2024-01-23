import styled from 'styled-components';
import * as tokens from '../../tokens';

export const challengeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 890px;
`;
export const firstblock = styled.div`
  display: flex;
  flex-direction: column;
  height: 450px;
`;
export const top = styled.div`
  display: flex;
  flex-direction: row;
  height: 53px;
  width: 100%;
  z-index: 1;
  align-items: center;
  margin-bottom: 10px;
`;
export const title = styled.div`
  font-size: 24px;
  font-weight: 600;
  color: black;
  width: 450px;
  display: flex;
  align-context: start;
  margin-left: 10px;
`;
export const buttoncruiting = styled.div`
  height: 28px;
  width: 180px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #dd518c;
  font-size: 21px;
  font-weight: 1000;
  margin-left: 210px;
  padding: 10px;
  border-style: solid;
  border-color: #dd518c;
  border-width: 2px;
  border-radius: 30px;
  box-shadow: 0px 2px 1px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  &:hover {
    background-color: #dd518c;
    color: white;
    border-color: #dd518c;
  }
`;
export const secondblock = styled.div`
  display: flex;
  width: 100%;
`;

export const thirdblock = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  margin-top: 32px;
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
