import { Link } from "react-router-dom";
import Card from "./Card";
import CharityIcon from "./CharityIcon";
import styles from "./Styled/CharityItem.module.css";

const TYPE = [
  "전체",
  "지구촌",
  "어르신",
  "장애인",
  "다문화",
  "아동/청소년",
  "환경",
  "동물",
  "기타",
];

function CharityItem({ charity }) {
  return (
    <Card className={styles.charityItem}>
      <Link to={`/donate/${charity.slug}`}>
        <div className={styles.thumb}></div>
        <div className={styles.content}>
          <h2 className={styles.title}>{charity.title}</h2>
        </div>
      </Link>
    </Card>
  );
}

export default CharityItem;
