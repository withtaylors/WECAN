import classNames from 'classnames';
import styles from './Styled/ShopIcon.module.css';

import img1 from '../Assets/img/Shop/1.png';
import img2 from '../Assets/img/Shop/2.png';
import img3 from '../Assets/img/Shop/3.png';
import img4 from '../Assets/img/Shop/4.png';
import img5 from '../Assets/img/Shop/5.png';
import img6 from '../Assets/img/Shop/6.png';
import detail from '../Assets/img/Shop/detail.png';

const ICONS = {
  1: img1,
  2: img2,
  3: img3,
  4: img4,
  5: img5,
  6: img6,
  detail: detail,
};

function ShopIcon({ className, photoUrl = 'default' }) {
  return (
    <img
      className={classNames(styles.shopIcon, className)}
      src={ICONS[photoUrl]}
      alt={photoUrl}
    />
  );
}

export default ShopIcon;
