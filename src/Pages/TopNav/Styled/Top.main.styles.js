import styled from "styled-components";
import * as tokens from "../../tokens";

export const TopWrapper = styled.div`
  width: 100%;
  height: auto;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 19px;
`;

export const TopContentWrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  align-items: end;
  justify-content: space-between;
  padding-top: 20px;
`;
export const TopLogo = styled.img`
  width: 207px;
  margin-left: 10vw;
  text-align: left;
  cursor: pointer;
  color: #dd518c;

  ${tokens.typography.display_1};
`;

export const TopInfoWrapper = styled.span`
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
  padding: 10px 15px;
  font-size: 16px;
  color: #dd518c;
  border-radius: 25px;
  border: 1.5px solid #dd518c;
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
