import styled from 'styled-components';
import * as tokens from '../../tokens';

export const CategoryWrapper = styled.div`
  width: 100%;
  height: 2500px;
  padding-top: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  background-color: white;
`;

export const ContentWrapper = styled.div`
  padding-top: 100px;
  width: 1440px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const LinkWrapper = styled.div`
  position: absolute;
  display: flex;
  justify-content: space-between;
  margin-left: 1300px;
  width: 120px;
  ${(props) =>
    props.type === 'store'
      ? `
			top: 1600px;`
      : `
				top: 3929px;
				`}
`;

export const LinkSpan = styled.span`
  font-family: Pretendard;
  color: #666666;
  ${(props) =>
    props.type === 'more'
      ? `
				width: 90px;
				height: 24px;
				font-size: 16px;
				line-height: 24px;`
      : `
				width: 24px;
				height: 24px;
				`}
`;

export const Banner = styled.div`
  width: 905px;
  height: 318px;
  background-color: #eaeaea;
  margin-bottom: 64px;
`;
