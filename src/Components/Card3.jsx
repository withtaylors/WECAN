import classNames from "classnames";
import styles from "./Styled/Card.module.css";

function Card3({ className, children }) {
  return <div className={classNames(styles.card, className)}>{children}</div>;
}

export default Card3;
