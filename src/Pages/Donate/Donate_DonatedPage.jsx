import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import DonateListPage from './DonateListPage';
import styles from './Styled/Donate_DonatedPage.module.css';
import Warn from '../../Components/Warn';
import DonatedItem from '../../Components/DonatedItem';
import { getDonated } from '../../Api/getter';
import TopNav from '../../Pages/TopNav/TopNav.main';
import Collapse from 'react-bootstrap/Collapse';
import Button from 'react-bootstrap/Button';
import CharityItem from '../../Components/CharityItem';
import { getCharitys } from '../../Api/getter';
import axios from 'axios';
import donated from '../../Api/donated.json';

function Donate_DonatedPage() {
  const [searchParam, setSearchParam] = useSearchParams();
  const initKeyword = searchParam.get('keyword');
  const [keyword, setKeyword] = useState(initKeyword || '');
  const charitys = getCharitys(initKeyword); // mock.json에서 가져온 데이터
  const [images, setImages] = useState({});

  useEffect(() => {
    // 이미지를 동적으로 불러오는 로직
    donated.forEach((item) => {
      import(`../../Assets/img/donated/${item.imageSrc}`)
        .then((image) => {
          setImages((prevImages) => ({
            ...prevImages,
            [item.id]: image.default,
          }));
        })
        .catch((error) => {
          console.error('이미지 로딩 오류:', error);
        });
    });
  }, []);

  return (
    <>
      <div className={styles.center}>
        <TopNav></TopNav>
      </div>
      <DonateListPage variant="catalog" title="기부했어요">
        <div className={styles.infoBar}>
          <p>최신순</p>
        </div>
        <div className={styles.charityList}>
          {donated.map((charity) => (
            <DonatedItem
              key={charity.id}
              id={charity.id}
              challengeName={charity.challengeName}
              explanation={charity.explanation}
              imageSrc={images[charity.id]}
            />
          ))}
        </div>
      </DonateListPage>
    </>
  );
}

export default Donate_DonatedPage;
