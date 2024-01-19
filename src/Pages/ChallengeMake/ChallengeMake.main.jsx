import React, { useEffect, useState, useRef } from 'react';
import { useParams } from 'react-router-dom';
import TopNav from '../TopNav/TopNav.main';
import * as chgmake from './Styled/ChallengeMake.main.js';
import Chgincruit from './ChallengeMake.incruitMake';
import ChgExplain from './ChallengeMake.Explain.jsx';

function ChallengeMake() {
  const [selectedValues, setSelectedValues] = useState([]);
  const updateSelectedValues = (values) => {
    setSelectedValues(values);
  };
  const [writtenValues, setWrittenValues] = useState([]);
  const updateWrittenValues = (textArray) => {
    setWrittenValues(textArray);
  };
  return (
    <chgmake.totalWrapper>
      <TopNav></TopNav>
      <Chgincruit onUpdateSelectedValues={updateSelectedValues}></Chgincruit>
      <ChgExplain onUpdateWrittenValues={updateWrittenValues}></ChgExplain>
      {selectedValues.map((value, index) => (
        <div key={index}>{value}</div>
      ))}
      {writtenValues.map((text, index) => (
        <div key={index}>{text}</div>
      ))}
      <chgmake.buttonWrapper>
        <chgmake.buttoncruiting>챌린저 모집하기</chgmake.buttoncruiting>
      </chgmake.buttonWrapper>
    </chgmake.totalWrapper>
  );
}
export default ChallengeMake;
