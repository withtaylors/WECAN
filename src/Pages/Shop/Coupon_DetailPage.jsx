import { Navigate, useParams } from 'react-router-dom';
import styles from './Styled/Shop_DetailPage.module.css';

import { getCouponBySlug } from '../../Api/getter';

import TopNav from '../TopNav/TopNav.main';
import Container from '../../Components/Container';
import Card_Shop from '../../Components/Card_Shop';
import CouponIcon from '../../Components/CouponIcon';
import ShopLink from '../../Components/ShopLink';

function Coupon_DetailPage() {
  const { couponSlug } = useParams();
  const coupon = getCouponBySlug(couponSlug);

  if (!coupon) {
    return <Navigate to="shop/coupon" />;
  }

  const goToCouponLink = () => {
    window.location.href = coupon.link;
  };

  return (
    <>
      <div className={styles.center}>
        <TopNav></TopNav>
      </div>
      <div className={styles.header}>
        <Container className={styles.content}>
          <div className={styles.shopHeader}>
            <CouponIcon
              photoUrl={coupon.photoUrl}
              className={styles.shopIcon}
            />
            <div className={styles.bottom}>
              <div className={styles.challengename}>
                <h1 className={styles.title}>{coupon.title}</h1> <p>by.figma</p>
              </div>
              <div className={styles.temp}>
                {coupon.topics.map(({ topic }) => (
                  <h3>
                    <div className={styles.cost}>{topic.cost}</div> CANDY
                  </h3>
                ))}
                <ShopLink
                  onClick={goToCouponLink}
                  className={styles.linkButton}
                />
              </div>
            </div>
          </div>
        </Container>
      </div>
      <Container className={styles.topics}>
        {coupon.topics.map(({ topic }) => (
          <Card_Shop className={styles.topic} key={topic.slug}>
            <h3 className={styles.detail}>아이템 소개 및 설명</h3>
            <h3 className={styles.title}>{topic.title}</h3>
          </Card_Shop>
        ))}
      </Container>
    </>
  );
}

export default Coupon_DetailPage;
