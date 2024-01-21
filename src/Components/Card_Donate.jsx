import classNames from "classnames";
import styles from "./Styled/Card_Donate.module.css";

function Card_Donate({ className, children }) {
  return <div className={classNames(styles.card, className)}>{children}</div>;
}

export default Card_Donate;
