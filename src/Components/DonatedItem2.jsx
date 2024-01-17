import { Link } from "react-router-dom";
import Card3 from "./Card3";
import styles from "./Styled/DonatedItem.module.css";

function DonatedItem2({ donate }) {
  return (
    <Card3 className={styles.donateItem}>
      <div className={styles.thumb}></div>
      <div className={styles.content}>
        <h2 className={styles.title}></h2>
      </div>
    </Card3>
  );
}

export default DonatedItem2;
