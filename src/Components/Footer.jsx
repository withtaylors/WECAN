import styles from "./Styled/Footer.module.css";
import Container from "./Container";

function Footer() {
  return (
    <div className={styles.footer}>
      <Container>
        <ul className={styles.links}>
          <h3 className={styles.WECAN}>WECAN</h3>
          <li>공지사항</li>
          <span>|</span> {/* 구분 기호 추가 */}
          <li>Q&A</li>
        </ul>
      </Container>
    </div>
  );
}

export default Footer;
