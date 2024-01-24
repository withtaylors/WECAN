import React from 'react';
import styled from 'styled-components';
import rightBalloonImage from '../Assets/img/leftmsg.png';
import leftBalloonImage from '../Assets/img/leftmsg.png';

const Balloon = ({ challengeName, content, isTailRight }) => {
  return (
    <BalloonWrapper isTailRight={isTailRight}>
      <span>{challengeName}</span>
      <p>{content}</p>
    </BalloonWrapper>
  );
};

const BalloonWrapper = styled.div`
  position: relative;
  display: inline-block;
  padding: 45px 40px;
  border-color: #ddd;
  width: 350px;
  background-image: url(${(props) =>
    props.isTailRight ? rightBalloonImage : leftBalloonImage});
  background-size: cover;
  background-repeat: no-repeat;

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
