import React, { useState } from "react";
import styles from "./Styled/TabButton.module.css";

import earthImage from "../Assets/img/donation/earth.png";
import oldImage from "../Assets/img/donation/old.png";
import dsImage from "../Assets/img/donation/ds.png";
import pplImage from "../Assets/img/donation/ppl.png";
import babyImage from "../Assets/img/donation/baby.png";
import greenImage from "../Assets/img/donation/green.png";
import animalImage from "../Assets/img/donation/animal.png";

const TabButton = ({ activeTab, onTabChange }) => {
  const tabs = [
    { id: "tab1", name: "전체", image: "" },
    { id: "tab2", name: "지구촌", image: earthImage },
    { id: "tab3", name: "어르신", image: oldImage },
    { id: "tab4", name: "장애인", image: dsImage },
    { id: "tab5", name: "다문화", image: pplImage },
    { id: "tab6", name: "아동/청소년", image: babyImage },
    { id: "tab7", name: "환경", image: greenImage },
    { id: "tab8", name: "동물", image: animalImage },
    { id: "tab9", name: "기타", image: "" },
  ];

  return (
    <div className={styles.tabContainer}>
      {tabs.map((tab) => (
        <button
          key={tab.id}
          className={`${styles.tabButton} ${
            activeTab === tab.id ? styles.active : ""
          }`}
          onClick={() => onTabChange(tab.id)}
        >
          {tab.image && <img src={tab.image} className={styles.icon} />}
          {tab.name}
        </button>
      ))}
    </div>
  );
};

export default TabButton;
