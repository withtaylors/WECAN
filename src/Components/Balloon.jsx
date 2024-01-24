import React from 'react';
import styled from 'styled-components';

const Balloon = ({ challengeName, content, isTailRight }) => {
  return (
    <BalloonWrapper>
      <span>{challengeName}</span>
      <p>{content}</p>
      <BalloonTail $isTailRight={isTailRight} />
    </BalloonWrapper>
  );
};

const BalloonWrapper = styled.div`
  position: relative;
  display: inline-block;
  padding: 18px 24px;
  border-radius: 28px;
  background-color: #f6f6f6;
  border-color: #ddd;
  width: 350px;

  > span {
    font-weight: bold;
    font-size: 15px;
  }

  > p {
  }
`;

const BalloonTail = styled.div`
  content: '';
  position: absolute;
  top: 50%;
  ${({ $isTailRight }) => ($isTailRight ? 'right: 100%' : 'left: 100%')};
  margin-top: -20px; /* 말풍선의 높이의 절반으로 설정 */
  border-width: 10px;
  border-style: solid;

  border-color: ${({ $isTailRight }) =>
    $isTailRight
      ? 'transparent #F6F6F6 transparent transparent'
      : 'transparent transparent transparent #F6F6F6'};
`;

export default Balloon;
