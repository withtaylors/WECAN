import { Navigate, useParams } from "react-router-dom";
import styles from "./Styled/Shop_DetailPage.module.css";

import { getCharityBySlug } from "../../Api/getter";

import Container from "../../Components/Container";
import Card_Shop from "../../Components/Card_Shop";
import ShopIcon from "../../Components/ShopIcon";
import ShopLink from "../../Components/ShopLink";

function Shop_DetailPage() {
  const { charitySlug } = useParams();
  const charity = getCharityBySlug(charitySlug);

  if (!charity) {
    return <Navigate to="/shop" />;
  }

  const goToCharityLink = () => {
    window.location.href = charity.link;
  };

  return (
    <>
      <div className={styles.header}>
        <Container className={styles.content}>
          <h1 className={styles.title}>{charity.title}</h1>
          <div className={styles.charityHeader}>
            <ShopIcon
              photoUrl={charity.photoUrl}
              className={styles.charityIcon}
            />
            <ShopLink onClick={goToCharityLink} className={styles.linkButton} />
          </div>
        </Container>
      </div>
      <Container className={styles.topics}>
        {charity.topics.map(({ topic }) => (
          <Card_Shop className={styles.topic} key={topic.slug}>
            <h3 className={styles.title}>{topic.title}</h3>
          </Card_Shop>
        ))}
      </Container>
    </>
  );
}

export default Shop_DetailPage;
