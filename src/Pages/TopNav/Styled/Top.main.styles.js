import styled from 'styled-components';
import * as tokens from '../../tokens';

export const TopWrapper = styled.div`
  width: 100vw;
  height: 274px;

  position: absolute;
  top: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  z-index: 100;
`;

export const TopContentWrapper = styled.div`
  width: 100%;
  height: 98px;
  display: flex;
  align-items: end;
  justify-content: space-between;
`;
export const TopLogo = styled.img`
  width: 207px;
  height: 27px;
  margin-left: 10vw;
  text-align: left;
  cursor: pointer;
  color: #dd518c;

  ${tokens.typography.display_1};
`;

export const TopInfoWrapper = styled.span`
  width: 350px;
  height: fit-content;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-right: 10vw;

  ${tokens.typography.s_title};
`;

export const LogInOut = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 170px;
  height: 45px;
  font-size: 18px;
  color: #dd518c;
  border-radius: 25px;
  border: 2px solid #dd518c;
  cursor: pointer;
`;
export const User = styled.div`
  width: 164px;
  height: 25px;
  display: flex;
  flex-direction: row;
`;

export const RealName = styled.div`
  font-weight: bold;
`;
