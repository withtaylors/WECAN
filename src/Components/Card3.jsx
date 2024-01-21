import classNames from 'classnames';
import styles from './Styled/Card3.module.css';
import icoArrowDown from '../Assets/img/donated/arrow.png';

function Card3({ title, content, imageSrc, isOpen, onToggle }) {
  const contentLines = content.split('\n');

  return (
    <div className={classNames(styles.card, { [styles.cardNoMargin]: isOpen })}>
      <div className={styles.cardHeader}>
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
            onClick={onToggle}
          />
        </div>
      </div>
      <div
        className={classNames(styles.cardContent, {
          [styles.cardContentOpen]: isOpen, // isOpen이 true일 때 cardContentOpen 클래스 적용
          [styles.cardContentClosed]: !isOpen, // isOpen이 false일 때 cardContentClosed 클래스 적용
        })}
      >
        {isOpen && contentLines.map((line, index) => <p key={index}>{line}</p>)}
      </div>
    </div>
  );
}

export default Card3;
