import React, { useEffect, useState, useRef } from 'react';
import * as setting from './Styled/SettingImage';
import CategoryCard from '../Category/Category.card';

function SettingImage({ images, closeModal }) {
  const handleImageClick = (image, index) => {
    closeModal(image, index);
    console.log(image, index);
  };

  return (
    <setting.BackgroundOverlay>
      <setting.TotalModal>
        <setting.CloseButton onClick={closeModal}>x</setting.CloseButton>
        <setting.SecondWrapper>
          <setting.RealSettingWrapper>
            {images &&
              images.map((image, index) => (
                <setting.ImageClick
                  key={index}
                  onClick={() => handleImageClick(image, index)}
                >
                  <setting.Image src={image} alt={`Image ${index}`} />
                </setting.ImageClick>
              ))}
          </setting.RealSettingWrapper>
        </setting.SecondWrapper>
      </setting.TotalModal>
    </setting.BackgroundOverlay>
  );
}

export default SettingImage;
