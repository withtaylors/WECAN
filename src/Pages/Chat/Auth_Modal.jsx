import React, { useState } from 'react';
import styles from './Styled/Auth_Modal.module.css';

const Auth_Modal = ({
  isOpen,
  onClose,
  date,
  couponUsed,
  onUseCoupon,
  onUploadPhoto,
  onDislikePhoto,
  messages = [],
}) => {
  const [image, setImage] = useState(null);
  if (!isOpen) return null;

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      let img = e.target.files[0];
      setImage(URL.createObjectURL(img));
      onUploadPhoto(img);
    }
  };

  const formatDate = (date) => {
    if (!date) return '';
    return `${date.getMonth() + 1}월 ${date.getDate()}일`;
  };

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modal}>
        <button className={styles.closeButton} onClick={onClose}>
          X
        </button>
        <div className={styles.dateHeader}>{formatDate(date)}</div>
        <div className={styles.photoUploadSection}>
          {image && (
            <img src={image} alt="Uploaded" className={styles.uploadedImage} />
          )}
          <input type="file" onChange={handleImageChange} />
        </div>
        <div className={styles.messagesList}>
          {messages.map((message, index) => (
            <div key={index} className={styles.messageItem}>
              <span>{message.text}</span>
              <button
                className={styles.dislikeButton}
                onClick={() => onDislikePhoto(message.id)}
              >
                싫어요
              </button>
            </div>
          ))}
        </div>
        <div className={styles.buttonGroup}>
          {couponUsed ? (
            <div className={styles.couponMessage}>쿠폰 사용완료!</div>
          ) : (
            <button className={styles.couponButton} onClick={onUseCoupon}>
              쿠폰 사용하기
            </button>
          )}
          <label htmlFor="upload" className={styles.uploadLabel}>
            사진 업로드하기
          </label>
          <input type="file" id="upload" hidden onChange={handleImageChange} />
        </div>
      </div>
    </div>
  );
};
export default Auth_Modal;
