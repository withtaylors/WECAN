import classNames from 'classnames';
import styles from './Styled/ShopIcon.module.css';

import img1 from '../Assets/img/Shop/11.png';
import img2 from '../Assets/img/Shop/22.png';
import img3 from '../Assets/img/Shop/33.png';

const ICONS = {
  11: img1,
  22: img2,
  33: img3,
};

function CoupoonIcon({ className, photoUrl = 'default' }) {
  return (
    <img
      className={classNames(styles.shopIcon, className)}
      src={ICONS[photoUrl]}
      alt={photoUrl}
    />
  );
}

export default CoupoonIcon;
