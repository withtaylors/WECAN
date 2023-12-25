import React from "react";
import styles from "./Styled/CharityLink.module.css";

const CharityLink = ({ onClick }) => {
  return (
    <button className={styles.mainButton} onClick={onClick}>
      홈페이지 바로가기
    </button>
  );
};

export default CharityLink;
