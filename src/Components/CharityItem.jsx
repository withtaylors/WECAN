import { Link } from "react-router-dom";
import Card from "./Card";
import styles from "./Styled/CharityItem.module.css";

import img1 from "../Assets/img/donation/1.png";
import img2 from "../Assets/img/donation/2.png";
import img3 from "../Assets/img/donation/3.png";
import img4 from "../Assets/img/donation/4.png";
import img5 from "../Assets/img/donation/5.png";
import img6 from "../Assets/img/donation/6.png";
import img7 from "../Assets/img/donation/7.png";
import img8 from "../Assets/img/donation/8.png";
import img9 from "../Assets/img/donation/9.png";
import img10 from "../Assets/img/donation/10.png";
import img11 from "../Assets/img/donation/11.png";
import img12 from "../Assets/img/donation/12.png";
import img13 from "../Assets/img/donation/13.png";
import img14 from "../Assets/img/donation/14.png";
import img15 from "../Assets/img/donation/15.png";
import img16 from "../Assets/img/donation/16.png";
import img17 from "../Assets/img/donation/17.png";
import img18 from "../Assets/img/donation/18.png";

const TYPE_IMAGES = {
  '국경없는의사회': img1,
  '국제구조위원회': img2,
  '그린피스': img3,
  '꽃밭정이노인복지관': img4,
  '노인지원재단': img5,
  '(사)다문화종합복지센터': img6,
  '독거노인종합지원센터': img7,
  '동물권행동 카라': img8,
  '동물자유연대': img9,
  '사랑의 달팽이': img10,
  '세이브더칠드런': img11,
  '유엔난민기구': img12,
  '장애인먼저실천운동본부': img13,
  '푸른나무재단': img14,
  '푸른아시아': img15,
  '한국장애인재단': img16,
  '한국청소년쉼터협의회': img17,
  '환경재단': img18,
};


function CharityItem({ charity }) {
  // Use default image (img1) if key not found
  const charityImage = TYPE_IMAGES[charity.iconKey] || img1;

  return (
    <Card className={styles.charityItem}>
      <Link to={`/donate/${charity.slug}`}>
        <div className={styles.thumb}>
          <img src={charityImage} alt={charity.title} />
        </div>
        <div className={styles.content}>
          <h2 className={styles.title}>{charity.title}</h2>
        </div>
      </Link>
    </Card>
  );
}

export default CharityItem;