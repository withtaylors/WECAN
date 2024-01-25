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
  const writtenValues = { title, content, image };
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
    setImage(image);
    console.log(image);
  };
  useEffect(() => {
    onUpdateWrittenValues(writtenValues);
  }, [writtenValues, onUpdateWrittenValues]);
  return (
    <chgincruit.totalWrapper>
      <chgincruit.topWrapper>
        <chgincruit.title>글 작성하기</chgincruit.title>
      </chgincruit.topWrapper>
      <chgincruit.bodyWrapper>
        <chgincruit.settingImgWrapper>
          {image && (
            <chgincruit.settingImg src={image} alt='Uploaded Preview' />
          )}

          <chgincruit.uploadPicture>
            <input
              type='file'
              accept='image/*'
              style={{ display: 'none' }}
              onChange={handleImageChange}
              id='imageInput'
            />
            <chgincruit.imglabel
              htmlFor='imageInput'
              onClick={handleImageChange}
            >
              대표 이미지 설정하기
            </chgincruit.imglabel>
          </chgincruit.uploadPicture>
        </chgincruit.settingImgWrapper>

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
          <chgincruit.setButtonWrapper>
            <chgincruit.setButton onClick={handleSave}>
              저장
            </chgincruit.setButton>
          </chgincruit.setButtonWrapper>
        </chgincruit.realWrapper2>
      </chgincruit.bodyWrapper>
    </chgincruit.totalWrapper>
  );
}
export default ChallengeIncruitExplain;
