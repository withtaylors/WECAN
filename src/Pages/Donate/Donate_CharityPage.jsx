import { Navigate, useParams } from "react-router-dom";
import { getCharityBySlug } from "../../Api/getter";
import styles from "./Styled/Donate_CharityPage.module.css";
import Container from "../../Components/Container";
import Card2 from "../../Components/Card2";
import CharityIcon from "../../Components/CharityIcon";
import CharityLink from "../../Components/CharityLink";

function Donate_CharityPage() {
  const { charitySlug } = useParams();
  const charity = getCharityBySlug(charitySlug);

  if (!charity) {
    return <Navigate to="/donate" />;
  }

  const goToCharityLink = () => {
    window.location.href = charity.link; // or navigate(charity.link) if it's an internal link
  };

  return (
    <>
      <div className={styles.header}>
        <Container className={styles.content}>
          <h1 className={styles.title}>{charity.title}</h1>
          <div className={styles.charityHeader}>
            <CharityIcon
              photoUrl={charity.photoUrl}
              className={styles.charityIcon}
            />
            <CharityLink
              onClick={goToCharityLink}
              className={styles.linkButton}
            />
          </div>
        </Container>
      </div>
      <Container className={styles.topics}>
        {charity.topics.map(({ topic }) => (
          <Card2 className={styles.topic} key={topic.slug}>
            <h3 className={styles.title}>{topic.title}</h3>
          </Card2>
        ))}
      </Container>
    </>
  );
}

export default Donate_CharityPage;
