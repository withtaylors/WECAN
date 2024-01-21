import classNames from "classnames";
import styles from "./Styled/CharityIcon.module.css";

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

const ICONS = {
  img1: img1,
  img2: img2,
  img3: img3,
  img4: img4,
  img5: img5,
  img6: img6,
  img7: img7,
  img8: img8,
  img9: img9,
  img10: img10,
  img11: img11,
  img12: img12,
  img13: img13,
  img14: img14,
  img15: img15,
  img16: img16,
  img17: img17,
  img18: img18,
};

function CharityIcon({ className, photoUrl = "default" }) {
  return (
    <img
      className={classNames(styles.charityIcon, className)}
      src={ICONS[photoUrl]}
      alt={photoUrl}
    />
  );
}

export default CharityIcon;
