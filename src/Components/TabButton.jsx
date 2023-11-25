import React, { useState } from "react";
import styles from "./Styled/TabButton.module.css"; // CSS 모듈 import

const TabButton = ({ activeTab, onTabChange }) => {
  const tabs = [
    { id: "tab1", name: "전체" },
    { id: "tab2", name: "지구촌" },
    { id: "tab3", name: "어르신" },
    { id: "tab4", name: "장애인" },
    { id: "tab5", name: "다문화" },
    { id: "tab6", name: "아동/청소년" },
    { id: "tab7", name: "환경" },
    { id: "tab8", name: "동물" },
    { id: "tab9", name: "기타" },
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
          <span className={styles.circleIcon}></span> {tab.name}
        </button>
      ))}
    </div>
  );
};

export default TabButton;
