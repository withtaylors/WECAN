import React, { useEffect, useState, useRef } from 'react';
import { useParams } from 'react-router-dom';
import * as challenger from './Styled/Challenger.main';
import TopNav from '../TopNav/TopNav.main';
import chgincruit from './Styled/ChallengeMake.main';

function ChallengeIncruitMake() {
  return (
    <chgincruit.totalWrapper>
      <chgincruit.title></chgincruit.title>
      <chgincruit.realWrapper>
        <chgincruit.contentlineWrapper></chgincruit.contentlineWrapper>
      </chgincruit.realWrapper>
    </chgincruit.totalWrapper>
  );
}
