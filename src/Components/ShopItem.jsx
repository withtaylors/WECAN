import { Link } from "react-router-dom";
import Card_Shop from "./Card_Shop";
import styles from "./Styled/ShopItem.module.css";

function ShopItem({ shop }) {
  return (
    <Card_Shop className={styles.shopItem}>
      <Link to={`/shop/${shop.slug}`}>
        <div className={styles.thumb}></div>
        <div className={styles.content}>
          <h2 className={styles.title}>{shop.title}</h2>
        </div>
      </Link>
    </Card_Shop>
  );
}

export default ShopItem;
