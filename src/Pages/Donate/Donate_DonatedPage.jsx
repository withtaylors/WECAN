import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import ListPage from "../../Components/ListPage";
import styles from "./Styled/Donate_DonatedPage.module.css";
import Warn from "../../Components/Warn";
import DonatedItem from "../../Components/DonatedItem";
import { getDonated } from "../../Api/getter";
import TopNav from "../../Pages/TopNav/TopNav.main";

function Donate_DonatedPage() {
  const [searchParam, setSearchParam] = useSearchParams();
  const initKeyword = searchParam.get("keyword");
  const [keyword, setKeyword] = useState(initKeyword || "");
  const donated = getDonated(initKeyword); // mock.json에서 가져온 데이터

  return (
    <>
      <div className={styles.center}>
        <TopNav></TopNav>
      </div>
      <ListPage variant="catalog" title="기부했어요">
        <div className={styles.infoBar}>
          <p>가나다순</p>
        </div>

        <div className={styles.donateList}>
          {donated.map((donate) => (
            <DonatedItem key={donated.id} />
          ))}
        </div>
      </ListPage>
    </>
  );
}

export default Donate_DonatedPage;
