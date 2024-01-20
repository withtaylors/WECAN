import React, { useEffect, useState, useRef } from 'react';
import { useParams } from 'react-router-dom';

import TopNav from '../TopNav/TopNav.main.jsx';
import * as chgincruit from './Styled/ChallengeMake.incruitMake.js';

function ChallengeIncruitExplain({ onUpdateWrittenValues }) {
  const [tempTitle, setTempTitle] = useState('');
  const [tempContent, setTempContent] = useState('');
  const [title, setTitle] = useState('');
  const [file, setFile] = useState('');
  const [content, setContent] = useState('');
  const writtenValues1 = [title, content];

  const handleSave = () => {
    setTitle(tempTitle);
    setContent(tempContent);
  };
  useEffect(() => {
    onUpdateWrittenValues(writtenValues1);
  }, [writtenValues1, onUpdateWrittenValues]);
  return (
    <chgincruit.totalWrapper>
      <chgincruit.title>글 작성하기</chgincruit.title>
      <chgincruit.realWrapper2>
        <chgincruit.explainTitleWrapper>
          <chgincruit.explainTitle
            type='text'
            placeholder='제목'
            value={tempTitle}
            onChange={(e) => setTempTitle(e.target.value)}
            maxLength={100}
          ></chgincruit.explainTitle>
        </chgincruit.explainTitleWrapper>
        <chgincruit.explainTextWrapper>
          <chgincruit.realExplain
            placeholder='본문'
            value={tempContent}
            onChange={(e) => setTempContent(e.target.value)}
            maxLength={600}
          ></chgincruit.realExplain>
        </chgincruit.explainTextWrapper>
      </chgincruit.realWrapper2>
      {title}
      {content}
      <button onClick={handleSave}>저장</button>
    </chgincruit.totalWrapper>
  );
}
export default ChallengeIncruitExplain;
