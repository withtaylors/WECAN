import styled from 'styled-components';
import * as tokens from '../../tokens';

export const totalWrapper = styled.div`
  width: 900px;
  height: 800px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin-top: 30px;
  display: flex;
  align-items: flex-start;
  margin-top: 100px;
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
export const subcontent = styled.div`
  display: flex;
  flex-direction: row;
`;
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
export const setButton = styled.button`
  margin-left: 10px;

  border-radius: 5px;
  border: 1px solid gray;
  &:hover {
    background-color: #f9dee9;
    border: 1px solid #e06398;
  }
`;
export const setButtonWrapper = styled.div`
  width: 580px;
  margin-top: 10px;
  display: flex;
  justify-content: flex-end;
`;

export const teamNumberNotify = styled.div`
  width: 60px;
  height: 10px;
  color: #979797;
  font-size: 9px;
  margin-top: 15px;
  margin-left: 15px;
`;
export const teamNumberNotify2 = styled.div`
  width: 60px;
  height: 10px;
  color: #979797;
  font-size: 9px;
  margin-top: 25px;
  margin-left: 8px;
`;
export const weekdaysWrapper = styled.div`
  width: 300px;
  height: 40px;
  display:flex;
  flex-direction column;
  gap: 3px;
  margin-left: 130px;
`;
export const weekdayButton = styled.div`
  width: 37px;
  height: 40px;
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid gray;
  cursor: pointer;
  &:focus {
    background-color: #f9dee9;
    border: 1px solid #e06398;
  }
`;
export const bodyWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 20px;
  gap: 35px;
`;
export const realWrapper2 = styled.div`
  width: 580px;
  height: 651px;
  border-radius: 25px;
  flex-direction: column;
  border: 2px solid gray;
`;
export const explainTitle = styled.input`
  width: 90%;
  height: 50px;
  margin-top: 10px;
  font-size: 30px;
  border: none;
  outline: none;
  font-family: 'Pretendard';

  &:focus {
    border: none;
    outline: none;
    font-family: 'Pretendard';
  }
`;
export const explainTitleWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 2px solid gray;
`;

export const realExplain = styled.textarea`
  width: 90%;
  height: 95%;
  border: none;
  outline: none;
  font-size: 20px;
  margin-top: 10px;
  color: gray;
  font-family: 'Pretendard';

  &:focus {
    border: none;
    outline: none;
    color: black;
    font-family: 'Pretendard';
  }
`;

export const explainTextWrapper = styled.div`
  width: 100%;
  height: 90%;
  display: flex;

  align-item: center;
  justify-content: center;
`;

export const topWrapper = styled.div`
  width: 100%;

  display: flex;
  flex-direction: row;
`;
export const uploadPicture = styled.div`
  border-top: 1px solid white;

  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  width: 295px;
  margin-left: 380px;
  &:hover {
    color: #dd518c;
    border-top: 1px solid #dd518c;
  }
  cursor: pointer;
  position: absolute;
  margin-left: 2px;
  margin-top: 190px;
`;
export const settingImgWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px;
  height: 220px;
  background-color: gray;
  border-radius: 15px;
`;
export const settingImg = styled.img`
  width: 300px;
  height: 220px;
  border-radius: 15px;
  position: absolute;
`;
export const imglabel = styled.label`
  font-size: 15px;
  font-weight: bold;
  margin-top: 3px;
`;
