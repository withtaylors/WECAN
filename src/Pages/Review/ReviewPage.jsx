import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import ListPage from "../../Components/ListPage";
import styles from "./Styled/ReviewPage.module.css";
import Warn from "../../Components/Warn";
import DonatedItem from "../../Components/DonatedItem";
import { getDonated } from "../../Api/getter";
import TopNav from "../../Pages/TopNav/TopNav.main";

function ReviewPage() {
  return (
    <>
      <div className={styles.center}>
        <TopNav></TopNav>
      </div>
    </>
  );
}

export default ReviewPage;
