import styled from 'styled-components';

export const TotalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  backdrop-filter: blur(5px);
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const GoBackButton = styled.button`
  position: absolute; // 위치 조정을 위해 absolute 사용
  top: 10px; // 상단에서부터의 거리
  right: 10px; // 오른쪽에서부터의 거리
  background: transparent; // 배경을 투명하게 설정
  border: none; // 테두리 없애기
  color: white; // 글자색을 하양색으로 설정
  cursor: pointer; // 마우스 오버시 커서 변경
  font-size: 1.2em; // 폰트 사이즈 조정

  &:hover {
    color: black; // 마우스 오버시 글자색을 회색으로 변경
    background: transparent; // 배경을 투명하게 설정
  }
`;

export const modal = styled.div`
  width: 522px;
  height: 823px;
  background-color: white;
  border-radius: 30px;
  z-index: 1001;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
`;

export const TopWrapper = styled.div`
  width: 520px;
  height: 178px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const checkdate = styled.div`
  background-color: #d9d9d9;
  width: auto;
  height: 25px;
  margin-top: 30px;
  padding: 5px 15px;
  border-radius: 20px;
  font-size: 19px;
  justify-content: center;
  align-items: center;
  text-align: center;
`;
export const dateleft = styled.div`
  width: auto;
  height: 26px;
  font-size: 19px;
  margin-top: 23px;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-weight: bold;
`;
export const HighlightedText = styled.span`
  color: #dd518c;
`;

export const ProgressBar = styled.div`
  width: 161px;
  height: 12px;
  margin-top: 20px;
  background-color: #eee;
  border-radius: 10px; // 둥근 모서리 추가
  overflow: hidden; // 내부 바가 경계를 넘지 않도록
`;

export const ProgressBarValue = styled.div`
  height: 100%;
  background-color: #dd518c;
  transition: width 0.5s ease;
`;

export const scrollView = styled.div`
  display: flex;
  flex-direction: column; // 새 메시지를 아래에 추가
  overflow-y: auto; // 스크롤 가능하게 설정
  min-height: 530px; // 최소 높이 설정
  width: 100%; // 너비는 부모 컨테이너에 맞춤
  margin: 25px 0px;
`;

export const message = styled.div`
  max-width: 290px; // 최대 너비 설정
  width: 100%; // 너비는 내용물에 따라 조정
  display: flex;
  margin: 20px 30px;
`;

export const profile = styled.img`
  width: 46px;
  height: 46px;
`;

export const sendWrapper = styled.div`
  width: 189px;
  height: 202px;
  display: flex;
  flex-direction: column;
  margin-left: 10px;
  margin-top: 5px;
`;
export const nickname = styled.div`
  width: 58px;
  height: 18px;
  margin-bottom: 10px;
  margin-left: 7px;
`;
export const sendimage = styled.div`
  width: 189px;
  height: 178px;
  border-radius: 20px;

  img {
    width: 189px; // 이미지의 너비를 sendWrapper의 너비에 맞춤
    height: 178px; // 이미지의 높이를 자동으로 조정하여 비율 유지
    border-radius: 10px; // 필요한 경우 이미지에 둥근 모서리 추가
    margin-top: 5px;
  }
`;
export const dislikewrapper = styled.div`
  background-color: #f4f4f4;
  width: 50px;
  height: 20px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 10px;
  border-radius: 20px;
  margin-left: 10px;
  margin-top: 165px;
`;

export const DislikeButton = styled.button`
  background-color: #f4f4f4;
  width: 50px;
  height: 20px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 10px;
  border-radius: 20px;
  margin-left: 10px;
  margin-top: 165px;
  border-color: transparent;
  padding: 15px;
  background-color: ${(props) => (props.isDisliked ? '#dd518c' : '#f4f4f4')};
`;

export const dislikeimg = styled.img`
  background-color: #bdbdbd;
  width: 18px;
  height: 18px;
  display: flex;
  border-radius: 50px;
  padding: 4px;
  cursor: pointer;

  &:active {
    background-color: #dd518c;
  }
  &:hover {
    background-color: #dd518c;
  }
`;
export const dislikenum = styled.div`
  width: 13px;
  height: 34px;
  display: flex;
  align-items: center;
  text-alighn: center;
  margin-left: 5px;
`;
export const BottomWrapper = styled.div`
  width: 522px;
  height: 65px;
  display: flex;
  flex-direction: row;
  border-top: 1px solid #ccc; /* 상단에 구분선 추가, 필요에 따라 변경 가능 */
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 17px;
`;
export const coupon = styled.div`
  width: 265px;
  height: 65px;
  border-bottom-left-radius: 30px;
  cursor: pointer;

  &:hover {
    background-color: #f4f4f4;
  }
`;
export const upload = styled.div`
  width: 265px;
  height: 65px;
  border-bottom-right-radius: 30px;
  cursor: pointer;

  &:hover {
    background-color: #f4f4f4;
  }
`;

export const closeButton = styled.div`
  position: absolute;
  top: 15px;
  right: 15px;
  border: none;
  background: none;
  font-size: 1.5rem;
  cursor: pointer;
`;
