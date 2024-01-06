import React, { useEffect, useState, useRef } from 'react';
import { useParams } from 'react-router-dom';
import TopNav from '../TopNav/TopNav.main';
import * as chgmake from './Styled/ChallengeMake.main.js';
import Chgincruit from './ChallengeMake.incruitMake';

function ChallengeMake() {
  return (
    <chgmake.totalWrapper>
      <Chgincruit></Chgincruit>
    </chgmake.totalWrapper>
  );
}
export default ChallengeMake;
