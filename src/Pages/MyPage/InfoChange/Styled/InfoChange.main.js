import styled from 'styled-components';

export const TotalWrapper = styled.div`
  width: 100%;
  height: 2000px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
`;
export const TotalSubWrapper = styled.div`
  width: 896px;
  height: 630px;
  margin-top: 100px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
`;
export const TitleWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: flex-start;
`;
export const Title = styled.div`
  width: 247px;
  height: 43px;
  font-size: 30px;
  font-weight: bold;
`;
export const realWrapper = styled.div`
  width: 728px;
  height: 290px;
  display: flex;
  flex-direction: row;
  margin-top: 92px;
`;
export const profileWrapper = styled.div`
  width: 245px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
export const profileImgWrapper = styled.div`
  width: 181px;
  height: 181px;
  background-color: white;
`;
export const profileImg = styled.img`
  width: 181px;
  height: 181px;
`;
export const nickNameWrapper = styled.div`
  width: 100%;
  height: 50px;
  border-radius: 25px;
  border: 1px solid gray;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
`;
export const nickNameInput = styled.input`
  width: 85%;
  height: 80%;
  background-color: white;
  border: none;
  &:focus {
    border: none;
    outline: none;
  }
`;
export const infocontentWrapper = styled.div`
  width: 342px;
  height: 100%;
  margin-left: 120px;
`;
export const contentWrapper = styled.div`
  width: 342px;
  height: 67px;
  margin-top: 20px;
`;
export const title = styled.div`
  width: 70px;
  height: 20px;
  font-weight: bold;
  margin-bottom: 3px;
`;
export const lineWrapper = styled.div`
  width: 100%;
  height: 46px;
  border-radius: 25px;
  border: 1px solid gray;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const lineInput = styled.input`
  width: 88%;
  height: 85%;

  border: none;
  &:focus {
    border: none;
    outline: none;
  }
`;

export const buttonsWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 40px;
  margin-top: 150px;
`;
export const buttonSave = styled.div`
  width: 72px;
  height: 50px;
  border-radius: 10px;
  color: white;
  background-color: #dd518c;
  font-size: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;
