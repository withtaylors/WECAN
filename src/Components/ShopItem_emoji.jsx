import { Link } from "react-router-dom";
import Card from "./Card";
import styles from "./Styled/ShopItem_emoji.module.css";

function ShopItem_emoji({ shop_e }) {
  return (
    <Card className={styles.shop_eItem}>
      <Link to={`/shop/${shop_e.slug}`}>
        <div className={styles.thumb}></div>
        <div className={styles.content}>
          <h2 className={styles.title}>{shop_e.title}</h2>
        </div>
      </Link>
    </Card>
  );
}

export default ShopItem_emoji;
