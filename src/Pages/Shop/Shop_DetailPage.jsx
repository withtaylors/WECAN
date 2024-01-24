import React from 'react';
import { Navigate, useParams } from 'react-router-dom';
import styles from './Styled/Shop_DetailPage.module.css';

import { getShopBySlug, getCouponBySlug } from '../../Api/getter';

import TopNav from '../TopNav/TopNav.main';
import Container from '../../Components/Container';
import Card_Shop from '../../Components/Card_Shop';
import ShopIcon from '../../Components/ShopIcon';
import ShopLink from '../../Components/ShopLink';

function Shop_DetailPage() {
  const { shopSlug } = useParams();
  const shop = getShopBySlug(shopSlug);

  if (!shop) {
    return <Navigate to="/shop" />;
  }

  const goToShopLink = () => {
    window.location.href = shop.link;
  };

  return (
    <>
      <div className={styles.center}>
        <TopNav></TopNav>
      </div>
      <div className={styles.header}>
        <Container className={styles.content}>
          <div className={styles.shopHeader}>
            <ShopIcon photoUrl={shop.photoUrl} className={styles.shopIcon} />
            <div className={styles.bottom}>
              <div className={styles.challengename}>
                <h1 className={styles.title}>{shop.title}</h1> <p>by.figma</p>
              </div>
              <div className={styles.temp}>
                {shop.topics.map(({ topic }) => (
                  <div key={topic.slug}>
                    <h3>
                      <div className={styles.cost}>{topic.cost}</div> CANDY
                    </h3>
                  </div>
                ))}
                <ShopLink
                  onClick={goToShopLink}
                  className={styles.linkButton}
                />
              </div>
            </div>
          </div>
        </Container>
      </div>
      <Container className={styles.topics}>
        {shop.topics.map(({ topic }) => (
          <div>
            <div className={styles.centerdetail}>
              {topic.photoUrl && (
                <ShopIcon
                  photoUrl={topic.photoUrl}
                  className={styles.charityIcon}
                />
              )}
            </div>
            <Card_Shop className={styles.topic}>
              <h3 className={styles.detail}>아이템 소개 및 설명</h3>
              <h3 className={styles.title}>{topic.title}</h3>
            </Card_Shop>
          </div>
        ))}
      </Container>
    </>
  );
}

export default Shop_DetailPage;
