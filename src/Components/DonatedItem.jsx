import React, { useState } from "react";
import { Link } from "react-router-dom";
import Card3 from "./Card3";
import styles from "./Styled/DonatedItem.module.css";
import icoArrowDown from "../Assets/img/donated/arrow.png"; // Replace with the actual path to your arrow icon

function DonatedItem({ donate }) {
  // useState 로 스위치 역할을 할 상태값 변수를 선언해준다. 기본값은 false
  const [showCate, setShowCate] = useState(false);

  return (
    <Card3 className={styles.donateItem}>
      <div className={styles.thumb}></div>
      <div className={styles.content}>
        <div
          className={`select-box ${showCate ? "open" : ""}`}
          onClick={() => setShowCate(!showCate)}
        >
          <div className={styles.titleWrapper}>
            {" "}
            챌린지명 : 한달 6시 미라클모닝
            <h2 className={styles.title}></h2>
            <img
              src={icoArrowDown}
              alt="Arrow Down"
              className={showCate ? styles.rotateArrow : ""}
            />
          </div>
        </div>
      </div>
    </Card3>
  );
}

export default DonatedItem;
