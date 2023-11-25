import classNames from "classnames";
import Container from "./Container";
import styles from "./Styled/ListPage.module.css";

function ListPage({
  variant = "catalog",
  title = "",
  description = "",
  children,
}) {
  return (
    <>
      <div className={classNames(styles.bg, styles[variant])}>
        <div className={styles.texts}>
          <h1 className={styles.heading}>{title}</h1>
          <p className={styles.description}>{description}</p>
        </div>
      </div>
      <Container className={styles.container}>{children}</Container>
    </>
  );
}

export default ListPage;
