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
}) => {
  const [image, setImage] = useState(null); // State to hold the uploaded image

  if (!isOpen) return null;

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      let img = e.target.files[0];
      setImage(URL.createObjectURL(img)); // Set image URL for preview
      onUploadPhoto(img); // Call the upload photo function
    }
  };

  const formatDate = (date) => {
    // Format the date as '1월 27일'
    return `${date.getMonth() + 1}월 ${date.getDate()}일`;
  };

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modal}>
        <button className={styles.closeButton} onClick={onClose}>
          X
        </button>
        <div className={styles.modalContent}>
          <div className={styles.dateHeader}>{formatDate(date)}</div>
          <div className={styles.messageContent}>
            {couponUsed ? (
              <div className={styles.couponMessage}>쿠폰 사용완료!</div>
            ) : (
              <button className={styles.couponButton} onClick={onUseCoupon}>
                쿠폰 사용하기
              </button>
            )}
            <div className={styles.photoUploadSection}>
              <input type="file" onChange={handleImageChange} />
              {image && (
                <img
                  src={image}
                  alt="Uploaded"
                  className={styles.uploadedImage}
                />
              )}
            </div>
            <button className={styles.dislikeButton} onClick={onDislikePhoto}>
              싫어요
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth_Modal;
