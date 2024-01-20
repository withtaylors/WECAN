import styled from 'styled-components';
import * as tokens from '../../tokens';

export const TotalWrapper = styled.div`
  width: 810px;
  height: 720px;
`;
export const Top = styled.div`
  width: 100%;
  height: 135px;
`;
export const Info = styled.div`
  width: 100%;
  height: 85px;

  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 595px;
`;
export const Likes = styled.div`
  width: 105px;
  height: 45px;
  border-radius: 25px;
  border: 1px solid gray;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  font-size: 16px;
`;
export const photo0 = styled.img`
  margin-right: 15px;
  width: 25px;
  height: 25px;
`;
export const reviewNumber1 = styled.div`
  width: 105px;
  height: 45px;
  border-radius: 25px;
  border: 1px solid gray;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;
export const photo1 = styled.img`
  margin-right: 7px;
`;
export const reviewNumber2 = styled.div`
  width: 60px;
  height: 29px;
`;
export const textWriting = styled.div`
  width: 802px;
  height: 243px;
  border-radius: 25px;
  border: 1px solid gray;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const textWritingReal = styled.textarea`
  width: 95%;
  height: 90px;
  margin-top: 10px;
  font-size: 20px;
  border: none;
  outline: none;
  font-family: 'Pretendard';

  &:focus {
    border: none;
    outline: none;
    font-family: 'Pretendard';
  }
`;

export const textUpdateWrapper = styled.div`
  width: 100%;
  height: 50px;
  border-top: 1px solid gray;
  margin-top: 30px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const textUpdateButton = styled.div`
  width: 63px;
  height: 30px;
  border-radius: 20px;
  border: 1px solid gray;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  color: gray;
  margin-right: 20px;
  cursor: pointer;
`;

export const myprofileWrapper = styled.div`
  width: 95%;
  display: flex;
  justify-content: flex-start;
`;
