import { Link } from "react-router-dom";
import Card from "./Card";
import CharityIcon from "./CharityIcon";
import styles from "./Styled/CharityItem.module.css";

const TYPE_IMAGES = [
  "국경없는의사회",
  "국제구조위원회",
  "그린피스",
  "꽃밭정이노인복지관",
  "노인지원재단",
  "(사)다문화종합복지센터",
  "독거노인종합지원센터",
  "동물권행동 카라",
  "동물자유연대",
  "사랑의 달팽이",
  "세이브더칠드런",
  "유엔난민기구",
  "장애인먼저실천운동본부",
  "푸른나무재단",
  "푸른아시아",
  "한국장애인재단",
  "한국청소년쉼터협의회",
  "환경재단",
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
