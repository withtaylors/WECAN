import styled from 'styled-components';
import * as tokens from '../../tokens';

export const totalWrapper = styled.div`
  width: 810px;
  height: 800px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin-top: 30px;
  display: flex;
  align-items: flex-start;
`;
export const title = styled.div`
  width: 221px;
  height: 43px;
  font-size: 30px;
  font-weight: bold;
`;
export const realWrapper = styled.div`
  width: 100%;
  height: 651px;
  border-radius: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border: 2px solid gray;
  margin-top: 35px;
`;
export const contentlineWrapper = styled.div`
  width: 740px;
  height: 66px;
  border-bottom: 2px solid gray;
  background-color: white;
  display: flex;
  align-items: center;
`;
export const contentlineWrapper2 = styled.div`
  width: 740px;
  height: 100px;
  border-bottom: 2px solid gray;
  display: flex;
  align-items: center;
`;
export const subtitle = styled.div`
  width: 200px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  border-right: 2px solid gray;
`;
export const subcontent = styled.div``;
export const subsubcontent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
export const teamNumberWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 130px;
  font-size: 15px;
`;
export const teamNumber = styled.input`
  width: 77px;
  height: 34px;
  border-radius: 10px;
  border: 1px solid gray;
  margin: 10px;
  font-size: 15px;
`;
export const teamNumberNotify = styled.div`
  width: 60px;
  height: 10px;
  color: #979797;
  font-size: 9px;
  margin-top: 15px;
  margin-left: 15px;
`;
