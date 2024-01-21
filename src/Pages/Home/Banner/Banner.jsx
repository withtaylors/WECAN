import React from 'react';
import Slider from 'react-slick';
import * as Bannerst from './Styled/Banner';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import imgsrc from '../../../Assets/img/Banners/Banner1.png';
const Banners = [
  {
    num: 0,
    class: 0,
    img: require('../../../Assets/img/Banners/Banner1.png'),
  },
  /* {
    num: 1,
    class: 0,
    img: require('../../../Assets/img/Banners/Banner2.png'),
  },*/
  {
    num: 1,
    class: 0,
    img: require('../../../Assets/img/Banners/Banner3.png'),
  },
  {
    num: 2,
    class: 0,
    img: require('../../../Assets/img/Banners/Banner4.png'),
  },
];

const BannerSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 10,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 5000,
  };

  const navigate = useNavigate();
  const handleNavigateLifetip = () => {
    navigate('/lifetip');
  };
  return (
    <Bannerst.TotalWrapper>
      <Slider {...settings}>
        {Banners.map((card) => (
          <Bannerst.BannerWrap key={card.num}>
            <Bannerst.MainImg src={card.img} alt={card.title} />
          </Bannerst.BannerWrap>
        ))}
      </Slider>
    </Bannerst.TotalWrapper>
  );
};

export default BannerSlider;
