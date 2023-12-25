import { Navigate, useParams } from "react-router-dom";
import { getCharityBySlug } from "../../Api/getter";
import styles from "./Styled/Donate_CharityPage.module.css";
import Container from "../../Components/Container";
import Card from "../../Components/Card";
import CharityIcon from "../../Components/CharityIcon";

function Donate_CharityPage() {
  const { charitySlug } = useParams();
  const charity = getCharityBySlug(charitySlug);

  if (!charity) {
    return <Navigate to="/charitys" />;
  }

  return (
    <>
      <div className={styles.header}>
        <Container className={styles.content}>
          <CharityIcon photoUrl={charity.photoUrl} />
          <h1 className={styles.title}>{charity.title}</h1>
          <p className={styles.summary}>{charity.summary}</p>
        </Container>
      </div>
      <Container className={styles.topics}>
        {charity.topics.map(({ topic }) => (
          <Card className={styles.topic} key={topic.slug}>
            <h3 className={styles.title}>{topic.title}</h3>
            <p className={styles.summary}>{topic.summary}</p>
          </Card>
        ))}
      </Container>
    </>
  );
}

export default Donate_CharityPage;
