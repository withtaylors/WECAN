import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import styles from "./Styled/ShopPage.module.css";
import CarouselStyles from "./Styled/carousel.min.css";

import ShopPage_emoji from "../../Components/ShopPage_emoji";
import TopNav from "../../Pages/TopNav/TopNav.main";
import { Carousel } from "react-responsive-carousel";
import imageData from "../../Api/data";
import ShopItem_emoji from "../../Components/ShopItem_emoji";
import { getShop_es } from "../../Api/getter";

const renderSlides = imageData.map((image) => (
  <div key={image.alt}>
    <img src={image.url} alt={image.alt} />
  </div>
));

const ReviewPage = () => {
  const [searchParam, setSearchParam] = useSearchParams();
  const initKeyword = searchParam.get("keyword");
  const [keyword, setKeyword] = useState(initKeyword || "");
  // useState를 사용하여 charitys 상태와 그 상태를 업데이트하는 함수를 정의
  const shop_es = getShop_es(initKeyword); // mock.json에서 가져온 데이터

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
          <ShopPage_emoji variant="catalog" title="이모티콘">
            <div className={styles.charityList}>
              {shop_es.map((shop_e) => {
                return <ShopItem_emoji key={shop_e.id} shop_e={shop_e} />;
              })}
            </div>
          </ShopPage_emoji>
        </div>

        <div>
          <ShopPage_emoji variant="catalog" title="아이템">
            <div className={styles.charityList}>
              {shop_es.map((shop_e) => {
                return <ShopItem_emoji key={shop_e.id} shop_e={shop_e} />;
              })}
            </div>
          </ShopPage_emoji>
        </div>
      </div>
    </>
  );
};

export default ReviewPage;
