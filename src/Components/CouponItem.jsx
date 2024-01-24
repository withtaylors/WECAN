import { Link } from 'react-router-dom';
import Card_Shop from './Card_Shop';
import styles from './Styled/ShopItem.module.css';
import CouponIcon from '../Components/CouponIcon';
import candyicon from '../Assets/img/candy.png';

function CouponItem({ coupon }) {
  return (
    <Card_Shop className={styles.shopItem}>
      <Link to={`/coupon/${coupon.slug}`}>
        <div className={styles.thumb}>
          <CouponIcon
            photoUrl={coupon.photoUrl}
            className={styles.charityIcon}
          />
        </div>
        <div className={styles.content}>
          <h2 className={styles.title}>{coupon.title}</h2>
          <div className={styles.detialwrapper}>
            <div className={styles.details}>
              {coupon.topics.map(({ topic }) => (
                <div className={styles.cost} key={topic.cost}>
                  {topic.cost}
                </div>
              ))}
              <img src={candyicon} alt="candyicon" />
            </div>
          </div>
        </div>
      </Link>
    </Card_Shop>
  );
}

export default CouponItem;
