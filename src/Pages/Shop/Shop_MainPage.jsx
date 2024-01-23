import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import styles from './Styled/Shop_MainPage.module.css';
import CarouselStyles from './Styled/carousel.min.css';

import imageData from '../../Api/shop_banner';
import { getShops, getCoupons } from '../../Api/getter';

import TopNav from '../TopNav/TopNav.main';
import ShopListPage from './ShopListPage';
import ShopItem from '../../Components/ShopItem';
import CouponItem from '../../Components/CouponItem';

const renderSlides = imageData.map((image) => (
  <div key={image.alt}>
    <img src={image.url} alt={image.alt} />
  </div>
));

const Shop_MainPage = () => {
  const handleKeywordChange = (e) => setKeyword(e.target.value);
  const [searchParam, setSearchParam] = useSearchParams();
  const initKeyword = searchParam.get('keyword');
  const [keyword, setKeyword] = useState(initKeyword || '');
  // useState를 사용하여 shop상태와 그 상태를 업데이트하는 함수를 정의
  const shops = getShops(initKeyword); // mock.json에서 가져온 데이터
  const coupons = getCoupons(initKeyword); // mock.json에서 가져온 데이터

  const [currentIndex, setCurrentIndex] = useState();
  function handleChange(index) {
    setCurrentIndex(index);
  }

  return (
    <>
      <div className={styles.center}>
        <TopNav></TopNav>
      </div>
      <div className="flex justify-center items-center py-5 px-3">
        <Carousel
          showArrows={false}
          autoPlay={true}
          infiniteLoop={true}
          showThumbs={false}
          selectedItem={imageData[currentIndex]}
          onChange={handleChange}
          className="carouselsy"
        >
          {renderSlides}
        </Carousel>
      </div>
      <div>
        <div>
          <ShopListPage variant="catalog" title="이모티콘">
            <div className={styles.shopList}>
              {shops.map((shop) => {
                return <ShopItem key={shop.id} shop={shop} />;
              })}
            </div>
          </ShopListPage>
          <ShopListPage variant="catalog" title="쿠폰">
            <div className={styles.shopList}>
              {coupons.map((coupon) => {
                return <CouponItem key={coupon.id} coupon={coupon} />;
              })}
            </div>
          </ShopListPage>
        </div>
      </div>
    </>
  );
};

export default Shop_MainPage;
