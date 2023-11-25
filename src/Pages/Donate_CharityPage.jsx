import { Navigate, useParams } from "react-router-dom";
import styles from "./Styled/Donate_CharityPage.module.css";
import { useNavigate } from "react-router-dom";
import Button from "../Components/Button";
import { addWishlist, getCharityBySlug } from "../Api/getter";
import Container from "../Components/Container";
import Card from "../Components/Card";
import CharityIcon from "../Components/CharityIcon";

function Donate_Charity() {
  const navigate = useNavigate();
  const { charitySlug } = useParams();
  const charity = getCharityBySlug(charitySlug);

  if (!charity) {
    return <Navigate to="/charitys" />;
  }

  const handleAddWishlistClick = () => {
    addWishlist(charity?.slug);
    navigate("/wishlist");
  };

  return (
    <>
      <div className={styles.header}>
        <Container className={styles.content}>
          <CharityIcon photoUrl={charity.photoUrl} />
          <h1 className={styles.title}>{charity.title}</h1>
          <Button variant="round" onClick={handleAddWishlistClick}>
            + 코스 담기
          </Button>
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

export default Donate_Charity;
