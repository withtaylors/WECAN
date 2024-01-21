import styled from 'styled-components';
import * as tokens from '../../tokens';

export const challengeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 770px;
  width: 890px;
  gap: 10px;
`;
export const firstblock = styled.div`
  display: flex;
  flex-direction: column;
  height: 490px;
`;
export const top = styled.div`
  display: flex;
  flex-direction: row;
  height: 53px;
  width: 100%;
  z-index: 1;
`;
export const title = styled.div`
  font-size: 24px;
  font-weight: 600;
  color: black;
  width: 450px;
  display: flex;
  align-context: start;
`;
export const buttoncruiting = styled.div`
  height: 30px;
  width: 173px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #dd518c;
  font-size: 21px;
  font-weight: bold;
  margin-left: 350px;
  padding: 10px;
  border-style: solid;
  border-color: #dd518c;
  border-width: 2px;
  border-radius: 30px;
  box-shadow: 0px 2px 1px rgba(0, 0, 0, 0.2);
  cursor: pointer;
`;
export const secondblock = styled.div`
  display: flex;
  height: 280px;
`;

export const thirdblock = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  margin-top: 32px;
`;
export const buttoninfo = styled.div`
  height: 20px;
  width: 100px;
  height: 41px;
  background-color: white;
  color: #dd518c;
  font-size: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 30px;
  border: 0.5px solid gray;
`;
