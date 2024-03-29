import styles from "./Styled/ProfilePhoto.module.css";

function ProfilePhoto({ photo, name }) {
  return <img className={styles.profilePhoto} src={photo} alt={name} />;
}

export default ProfilePhoto;
