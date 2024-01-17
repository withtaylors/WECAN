import { Link } from "react-router-dom";
import Card_Donate from "./Card_Donate";
import styles from "./Styled/CharityItem.module.css";
import CharityIcon from "../Components/CharityIcon";

function CharityItem({ charity }) {

  return (
    <Card_Donate className={styles.charityItem}>
      <Link to={`/donate/${charity.slug}`}>
        <div className={styles.thumb}>
          <CharityIcon
              photoUrl={charity.photoUrl}
              className={styles.charityIcon}
            />
        </div>
        <div className={styles.content}>
          <h2 className={styles.title}>{charity.title}</h2>
        </div>
      </Link>
    </Card_Donate>
  );
}

export default CharityItem;