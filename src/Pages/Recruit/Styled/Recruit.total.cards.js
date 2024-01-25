import styled from 'styled-components';
import * as tokens from '../../tokens';

export const TotalWrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  margin-bottom: 150px;
`;
export const TotalCardsWrapper = styled.div`

  width: 1100px;
  height: auto;
  margin-top: 80px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: row;
  flex-wrap: wrap;

  gap: 20px;


  /* 모든 하이퍼링크에 대한 스타일 정의 */
  a {
    text-decoration: none;
    color: inherit;

    &:hover, &:active, &:visited {
      text-decoration: none;
      color: inherit; /* 마우스 오버시 및 기타 상태에서도 스타일 유지 */
    }
`;
export const SortContainer = styled.div`
  width: 915px;

  height: 50px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  text-decoration: none;
`;

export const SortText = styled.div`
  font-size: 16px;
  color: ${(props) => (props.selected ? '#DD518C' : 'black')};

  padding: 5px;
  cursor: pointer;
`;
export const TotalTopWrapper = styled.div`
  width: 100%;
  height: 150px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 100px;
`;
export const Title = styled.div`
  font-size: 35px;
`;
export const SearchWrapper = styled.div`
  width: 910px;
  height: 49px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 25px;
  border: 1px solid gray;

  margin-top: 20px;
`;

export const SearchInputBox = styled.input`
  font-family: Pretendard;
  width: 800px;
  height: 35px;
  margin-top: 13px;
  margin-left: 10px;
  margin-bottom: 10px;
  margin-right: 4px;
  border: none;
  outline: none;
`;

export const SearchInputIcon = styled.img`
  width: 30px;
  height: 30px;
  cursor: pointer;
`;

export const PaginationNumber = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50px;
  border: 0.5px solid #9d9d9d;
  background-color: white;
  ${(props) =>
    props.active &&
    `
      /* 선택된 페이지 번호의 스타일 */
      background-color:#DD518C ;
      color: white;
    `};
`;
export const CategoryCardcontainer = styled.div``;

export const ChallengeMakeButton = styled.img`
  width: 95px;
  height: 95px;
  border-radius: 50%;
  position: fixed;
  top: 600px;
  right: 200px;
`;

export const center = styled.div`
  display: flex;
  justify-content: center;
`;

export const PaginationWrapper = styled.div`
  width: 200px;
  height: 100px;

  display: flex;
  flex-direction: row;
  top: 0;
  justify-content: center;
  margin-top: 40px;
  gap: 5px;
`;
export const PaginationButton = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50px;
  border: 0.5px solid #9d9d9d;
  background-color: white;
  ${(props) =>
    props.selected
      ? 'background-color: #dd518c; color: white; border-color: #dd518c'
      : ''}
`;
