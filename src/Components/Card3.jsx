// Card3.jsx
import classNames from 'classnames';
import { useState } from 'react';
import styles from './Styled/Card3.module.css'; // 경로가 올바른지 확인
import icoArrowDown from '../Assets/img/donated/arrow.png';

function Card3({ title, content, imageSrc }) {
  const [isOpen, setIsOpen] = useState(false);
  const contentLines = content.split('\n'); // \n을 기준으로 문자열을 분리합니다.

  return (
    <div className={styles.card}>
      <div className={styles.cardHeader} onClick={() => setIsOpen(!isOpen)}>
        <img
          className={classNames(styles.thumb, styles.center)}
          src={imageSrc}
          alt={title}
        />
        <div className={styles.titleArrowWrapper}>
          <h2 className={styles.title}>{title}</h2>
          <img
            className={classNames(styles.arrow, {
              [styles.rotateArrow]: isOpen,
            })}
            src={icoArrowDown}
            alt="상세 정보 토글"
          />
        </div>
      </div>
      <div
        className={classNames(styles.cardContent, {
          [styles.cardContentOpen]: isOpen,
        })}
      >
        {isOpen &&
          contentLines.map((line, index) => (
            <p key={index}>{line}</p> // 각 줄을 <p> 태그로 감쌉니다.
          ))}
      </div>{' '}
    </div>
  );
}

export default Card3;
