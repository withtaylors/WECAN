import { Link } from "react-router-dom";
import Card from "./Card";
import styles from "./Styled/ShopItem.module.css";

function ShopItem({ shop }) {
  return (
    <Card className={styles.shopItem}>
      <Link to={`/shop/${shop.slug}`}>
        <div className={styles.thumb}></div>
        <div className={styles.content}>
          <h2 className={styles.title}>{shop.title}</h2>
        </div>
      </Link>
    </Card>
  );
}

export default ShopItem;
