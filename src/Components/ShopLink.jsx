import React from 'react';
import styles from './Styled/ShopLink.module.css';

const ShopLink = ({ onClick }) => {
  return (
    <button className={styles.mainButton} onClick={onClick}>
      구매하기
    </button>
  );
};

export default ShopLink;
