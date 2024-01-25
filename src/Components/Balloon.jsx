import React from 'react';
import styled from 'styled-components';
import leftB from '../Assets/img/leftBalloon.png';
import rightB from '../Assets/img/rightBalloon.png';

const Balloon = ({ challengeName, content, isTailRight }) => {
  return (
    <BalloonWrapper>
      <BalloonImg
        src={isTailRight ? leftB : rightB}
        $isTailRight={isTailRight}
      />
      <Desc>
        <span>{challengeName}</span>
        <p>{content}</p>
      </Desc>
    </BalloonWrapper>
  );
};

const BalloonWrapper = styled.div`
  position: relative;
  display: inline-block;
  padding: 18px 24px;
  border-radius: 28px;
  width: 350px;
`;

const BalloonImg = styled.img`
  width: 450px;
`;

const Desc = styled.div`
  color: black;
  position: absolute;

  top: 50px;
  left: 80px;

  > span {
    font-weight: bold;
    font-size: 16.5px;
  }
`;

export default Balloon;
