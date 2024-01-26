import styled from 'styled-components';
import * as tokens from '../../tokens';

export const BackgroundOverlay = styled.div`
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
export const TotalModal = styled.div`
  background: white;
  padding: 20px;
  border-radius: 30px;
  z-index: 1001;
  max-width: 500px;
  width: 350px;
  height: 500px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;

  justify-content: space-between; /* 내용물을 상, 중, 하로 분리 */
  position: relative; /* buttonGroup의 절대 위치 기준점을 제공 */
  min-height: 500px;
`;

export const CloseButton = styled.div`
  display: flex;
  justify-content: flex-end;
  font-size: 25px;
`;
export const SecondWrapper = styled.div`
  width: 100%;
  height: 90%;
  overflow-y: auto;
  flex-grow: 1;
`;
export const RealSettingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  gap: 10px;
`;
export const ImageClick = styled.div``;
export const Image = styled.img`
  width: 200px;
  height: 100px;
`;
