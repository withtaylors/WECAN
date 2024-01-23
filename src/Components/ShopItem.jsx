import { Link } from 'react-router-dom';
import Card_Shop from './Card_Shop';
import styles from './Styled/ShopItem.module.css';
import ShopIcon from '../Components/ShopIcon';
import candyicon from '../Assets/img/candy.png';

function ShopItem({ shop }) {
  return (
    <Card_Shop className={styles.shopItem}>
      <Link to={`/shop/${shop.slug}`}>
        <div className={styles.thumb}>
          <ShopIcon photoUrl={shop.photoUrl} className={styles.charityIcon} />
        </div>
        <div className={styles.content}>
          <h2 className={styles.title}>{shop.title}</h2>
          <div className={styles.details}>
            {shop.topics.map(({ topic }) => (
              <div className={styles.cost} key={topic.cost}>
                {topic.cost}
              </div>
            ))}
            <img src={candyicon} alt="candyicon" />
          </div>
        </div>
      </Link>
    </Card_Shop>
  );
}

export default ShopItem;
