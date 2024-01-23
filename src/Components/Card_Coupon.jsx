import classNames from 'classnames';
import styles from './Styled/Card_Shop.module.css';

function Card_Coupon({ className, children }) {
  return <div className={classNames(styles.card, className)}>{children}</div>;
}

export default Card_Coupon;
