import React, { useEffect, useState, useRef } from 'react';
import { useParams } from 'react-router-dom';
import TopNav from '../TopNav/TopNav.main';
import * as chgmake from './Styled/ChallengeMake.main.js';
import Chgincruit from './ChallengeMake.incruitMake';
import Dropdown from './DropdownChallengeType.jsx';

function ChallengeMake() {
  return (
    <chgmake.totalWrapper>
      <Chgincruit></Chgincruit>
      <Dropdown></Dropdown>
    </chgmake.totalWrapper>
  );
}
export default ChallengeMake;
