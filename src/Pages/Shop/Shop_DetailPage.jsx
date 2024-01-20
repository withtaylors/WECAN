import { Navigate, useParams } from "react-router-dom";
import styles from "./Styled/Shop_DetailPage.module.css";

import { getShopBySlug } from "../../Api/getter";

import TopNav from "../TopNav/TopNav.main";
import Container from "../../Components/Container";
import Card_Shop from "../../Components/Card_Shop";
import ShopIcon from "../../Components/ShopIcon";
import ShopLink from "../../Components/ShopLink";

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
            <div>
              <h1 className={styles.title}>{shop.title}</h1> <p>by.</p>
              <ShopLink onClick={goToShopLink} className={styles.linkButton} />
            </div>
          </div>
          <ShopIcon photoUrl={shop.photoUrl} className={styles.shopDetailImg} />
        </Container>
      </div>
      <Container className={styles.topics}>
        {shop.topics.map(({ topic }) => (
          <Card_Shop className={styles.topic} key={topic.slug}>
            <h3 className={styles.title}>{topic.title}</h3>
          </Card_Shop>
        ))}
      </Container>
    </>
  );
}

export default Shop_DetailPage;
