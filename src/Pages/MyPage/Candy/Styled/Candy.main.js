import styled from 'styled-components';
import pinkbox from '../../../../Assets/img/mypage/pinkbox.png';

export const TotalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin: 0 auto;
`;

export const ContentWrapper = styled.div`
  width: 80%;
  max-width: 1200px;
  margin: 20px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const TitleWrapper = styled.div`
  margin-bottom: 2rem;
`;

export const Title = styled.h1`
  margin-top: 50px;
  font-size: 32px;
  font-weight: bold;
  text-align: center;
`;

export const PurchaseWrapper = styled.div`
  background-image: url(${pinkbox});
  background-repeat: no-repeat;
  background-size: contain;
  border-radius: 10px;
  padding: 40px;
  width: 30%;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  justify-content: center;

  @media (max-width: 1500px) {
    width: 50%;
  }
`;

export const ProfileWrapper = styled.div`
  font-size: 32px;
  text-align: center;
  align-items: center;
  justify-content: center;
`;

export const UserNameContainer = styled.div`
  display: flex;
  align-items: center;
  margin-right: 10px;
  font-size: 16px;
  justify-content: center;
`;

export const UserName = styled.h2`
  font-size: 16px;
  font-weight: bold;
`;

export const UserNameKeyWord = styled.div`
  display: flex;
  flex-direction: row;
`;

export const UserCandyCount = styled.p`
  font-size: 1.25rem;
`;

export const CandyKeyword = styled.span`
  color: #dd518c;
  font-weight: bold;
`;
export const CandyOptionList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding-top: 20px;
`;
export const CandyPrice = styled.span`
  font-weight: bold;
  margin-left: 130px;
  text-align: right;
`;

export const CandyOption = styled.button`
  border: 1px solid #dd518c;
  background-color: #ffffff;
  border-radius: 20px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  margin: 0.5rem 0;
  width: 90%;
  box-shadow: 0px 3px 6px #00000029;
  img {
    margin-right: 1rem; /* Ensure the icon has some space from the text */
  }

  & > span:first-of-type {
    flex-grow: 1;
    text-align: left; /* Aligns the candy amount text to the left */
  }

  ${CandyPrice} {
  }
`;

export const CandyIcon = styled.span`
  margin-right: 1rem;
`;

export const CandyTextGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  img {
    margin-right: 10px; /* 이미지와 텍스트 사이의 간격 조정 */
  }
`;
