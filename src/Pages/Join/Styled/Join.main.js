import styled from 'styled-components';
import * as tokens from '../../tokens';

export const totalWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
export const InnerWrapper = styled.div`
  width: 805px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 100px;
  margin-bottom: 100px;
`;

export const logo = styled.img`
  width: 209px;
  height: 28px;
  margin-bottom: 15px;
  margin-top: 47px;
`;
export const joinWrapper = styled.div`
  width: 451px;

  display: flex;
  flex-direction: column;
  margin-top: 17px;
  background-color: beige;
`;
export const title = styled.div`
  width: 120px;
  height: 18px;
  display: flex;
  justify-content: start;
  color: #dd518c;
  font-weight: 600;
`;
export const inputWrapper = styled.div`
  width: 451px;
  height: 58px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  border-radius: 25px;
  border: 1px solid gray;
  margin-top: 11px;
`;
export const inputWrapper2 = styled.div`
  width: 451px;
  height: 58px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  border-radius: 25px;
  border: 1px solid #dd518c;
  margin-top: 11px;
`;
export const realinputWrapper = styled.input`
  font-family: Pretendard;
  width: 250px;
  height: 27px;
  margin-top: 13px;
  margin-left: 20px;
  margin-bottom: 10px;
  margin-right: 4px;
  border: none;
  outline: none;
`;
export const agreeWrapper = styled.div`
  width: 458px;
  height: 46px;
  margin-top: 26px;
`;
export const agreement = styled.div`
  width: 100%;
  height: 24px;
  display: flex;
  flex-direction: row;
`;
export const agreementpink = styled.div`
  width: 206px;
  color: #dd518c;
  font-size: 13px;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: start;
  margin-left: 9px;
`;
export const agreementcheck = styled.div`
  width: 22px;
  height: 22px;
  border-radius: 50px;
  background-color: wite;
  color: #dd518c;
  border: 2px solid #dd518c;
  font-weight: bold;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    background-color: #dd518c;
    color: white;
  }
`;
export const agreementmore = styled.div`
  width: 44px;
  height: 22px;
  font-size: 11px;
  display: flex;
  align-items: flex-end;
  border-bottom: 0.5px solid gray;
  margin-left: 150px;
  cursor: pointer;
`;

export const agreeinfo = styled.div`
  width: 100%;
  height: 16px;
  font-size: 10px;
  color: #616161;
  display: flex;
`;
export const joinButton = styled.div`
  width: 175px;
  height: 42px;
  border-radius: 25px;
  background-color: #dd518c;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 42px;
  cursor: pointer;
`;

export const firstcheckButton = styled.div`
  width: 115px;
  height: 28px;
  font-size: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #dd518c;
  color: white;
  border-radius: 25px;
  margin-left: 45px;
  cursor: pointer;
`;
export const secondcheckButton = styled.div`
  width: 125px;
  height: 28px;
  background-color: #dd518c;
  border-radius: 25px;
`;
export const thirdtcheckButton = styled.div`
  width: 87px;
  height: 28px;
  font-size: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #dd518c;
  color: white;
  border-radius: 25px;
  margin-left: 75px;
  cursor: pointer;
`;
export const passwordEqual = styled.div`
  width: 100%;
  height: 20px;
  font-size: 13px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  color: gray;
`;
export const passwordEqual2 = styled.div`
  width: 100%;
  height: 20px;
  font-size: 13px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  color: #dd518c;
`;
