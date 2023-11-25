import { Link } from "react-router-dom";
import logoImg from "../Assets/logo.png";
import styles from "./Styled/Header.module.css";
import Container from "./Container";

function Header() {
  return (
    <div className={styles.nav}>
      <Container className={styles.container}>
        <Link to="/">
          <img src={logoImg} alt="WECAN Logo" className={styles.logoImage} />
        </Link>
      </Container>
    </div>
  );
}

export default Header;
