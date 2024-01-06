import classNames from "classnames";
import styles from "./Styled/Card.module.css";

function Card_Shop({ className, children }) {
  return <div className={classNames(styles.card, className)}>{children}</div>;
}

export default Card_Shop;
