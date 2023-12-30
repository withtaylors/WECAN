import { Link } from "react-router-dom";
import Card from "./Card";
import styles from "./Styled/DonatedItem.module.css";

function DonatedItem({ donate }) {
  return (
    <Card className={styles.donateItem}>
      <div className={styles.thumb}></div>
      <div className={styles.content}>
        <h2 className={styles.title}></h2>
      </div>
    </Card>
  );
}

export default DonatedItem;
