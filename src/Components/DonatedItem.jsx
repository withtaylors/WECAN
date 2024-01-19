import React, { useState, useEffect } from "react";
import Card3 from "./Card3";
import styles from "./Styled/DonatedItem.module.css";
import icoArrowDown from "../Assets/img/donated/arrow.png";
import donated from "../Api/donated.json";

function DonatedItem({ donate }) {
  const [showCate, setShowCate] = useState(false);
  const [imageSrc, setImageSrc] = useState([]);

  useEffect(() => {
    const loadImage = async (item) => {
      try {
        const module = await import(`../Assets/img/donated/${item.imageSrc}`);
        setImageSrc((prevImages) => [...prevImages, module.default]);
      } catch (error) {
        console.error("Error loading image:", error);
      }
    };

    donated.forEach((item) => loadImage(item));

    // Clean up to avoid memory leaks if the component unmounts
    return () => {
      setImageSrc([]);
    };
  }, []);

  return (
    <>
      {donated.map((item, index) => (
        <Card3 key={item.id} className={styles.donateItem}>
          <img
            className={styles.thumb}
            src={imageSrc[index]}
            alt={`Challenge ${item.id}`}
          />
          <div className={styles.content}>
            <div
              className={`select-box ${showCate ? "open" : ""}`}
              onClick={() => setShowCate(!showCate)}
            >
              <div className={styles.titleWrapper}>
                챌린지명 : {item.challengeName}
                <h2 className={styles.title}></h2>
                <img
                  src={icoArrowDown}
                  alt="Arrow Down"
                  className={showCate ? styles.rotateArrow : ""}
                />
              </div>
            </div>
          </div>
        </Card3>
      ))}
    </>
  );
}

export default DonatedItem;
