import classNames from "classnames";
import styles from "./Styled/CharityIcon.module.css";

const ICONS = {};

function ShopIcon({ className, photoUrl = "default" }) {
  return (
    <img
      className={classNames(styles.shopIcon, className)}
      src={ICONS[photoUrl]}
      alt={photoUrl}
    />
  );
}

export default ShopIcon;
