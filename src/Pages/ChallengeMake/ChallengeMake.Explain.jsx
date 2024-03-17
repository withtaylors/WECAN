import React, { useEffect, useState, useRef } from 'react';
import { useParams } from 'react-router-dom';

import TopNav from '../TopNav/TopNav.main.jsx';
import * as chgincruit from './Styled/ChallengeMake.incruitMake.js';
import SettingImage from './SettingImage.jsx';

function ChallengeIncruitExplain({ onUpdateWrittenValues, imageSrc }) {
  const [tempTitle, setTempTitle] = useState('');
  const [tempContent, setTempContent] = useState('');
  const [title, setTitle] = useState('');
  const [file, setFile] = useState('');
  const [content, setContent] = useState(imageSrc);
  const [image, setImage] = useState(null);
  const [imageIndex, setImageIndex] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const writtenValues = { title, content, image };
  ///////////////////////////////////////////////////////
  const images = [
    require('../../Assets/img/SettingImage/1.png'),
    require('../../Assets/img/SettingImage/2.png'),
    require('../../Assets/img/SettingImage/3.png'),
    require('../../Assets/img/SettingImage/4.png'),
    require('../../Assets/img/SettingImage/5.png'),
    require('../../Assets/img/SettingImage/6.png'),
    require('../../Assets/img/SettingImage/7.png'),
    require('../../Assets/img/SettingImage/8.png'),
    require('../../Assets/img/SettingImage/9.png'),
    require('../../Assets/img/SettingImage/10.png'),
    require('../../Assets/img/SettingImage/11.png'),
    require('../../Assets/img/SettingImage/12.png'),
    require('../../Assets/img/SettingImage/13.png'),
    require('../../Assets/img/SettingImage/14.png'),
    require('../../Assets/img/SettingImage/15.png'),
  ];
  ////////////////////////////////////////////////////////

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
    setImage(images[imageIndex]);
  };
  const openModal = () => setShowModal(true);
  const closeModal = (image, index) => {
    setImageIndex(index);
    console.log('가져온 이미지 인덱스', index);
    console.log('가져온 이미지', image);
    setShowModal(false);
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
          <chgincruit.settingImg
            src={images[imageIndex]}
            alt='Uploaded Preview'
          />

          <chgincruit.uploadPicture>
            <chgincruit.imglabel onClick={openModal}>
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
      {showModal && <SettingImage images={images} closeModal={closeModal} />}
    </chgincruit.totalWrapper>
  );
}
export default ChallengeIncruitExplain;
