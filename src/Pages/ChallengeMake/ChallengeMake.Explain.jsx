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
  const [image, setImage] = useState(null);
  const writtenValues = { title, content };
  ///////////////////////////////////////////////////////
  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      let img = e.target.files[0];
      setImage(URL.createObjectURL(img));
    }
  };
  const handleSave = () => {
    setTitle(tempTitle);
    setContent(tempContent);
  };
  useEffect(() => {
    onUpdateWrittenValues(writtenValues);
  }, [writtenValues, onUpdateWrittenValues]);
  return (
    <chgincruit.totalWrapper>
      <chgincruit.topWrapper>
        <chgincruit.title>글 작성하기</chgincruit.title>
        <chgincruit.uploadPicture onClick={handleImageChange}>
          <input
            type='file'
            accept='image/*'
            style={{ display: 'none' }}
            onChange={handleImageChange}
            id='imageInput'
          />
          <label htmlFor='imageInput'>대표 이미지 설정하기</label>
        </chgincruit.uploadPicture>
      </chgincruit.topWrapper>
      {image && <img src={image} alt='Uploaded Preview' />}
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
