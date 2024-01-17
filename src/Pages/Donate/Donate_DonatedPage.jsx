import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import DonateListPage from "./DonateListPage";
import styles from "./Styled/Donate_DonatedPage.module.css";
import Warn from "../../Components/Warn";
import DonatedItem from "../../Components/DonatedItem";
import { getDonated } from "../../Api/getter";
import TopNav from "../../Pages/TopNav/TopNav.main";
import Collapse from "react-bootstrap/Collapse";
import Button from "react-bootstrap/Button";
import CharityItem from "../../Components/CharityItem";
import { getCharitys } from "../../Api/getter";
import axios from "axios";

function Donate_DonatedPage() {
  const [searchParam, setSearchParam] = useSearchParams();
  const initKeyword = searchParam.get("keyword");
  const [keyword, setKeyword] = useState(initKeyword || "");
  // useState를 사용하여 charitys 상태와 그 상태를 업데이트하는 함수를 정의
  const charitys = getCharitys(initKeyword); // mock.json에서 가져온 데이터

  return (
    <>
      <div className={styles.center}>
        <TopNav></TopNav>
      </div>

 <DonateListPage variant="catalog" title="기부했어요">
        <div className={styles.infoBar}>
          <p>최신순</p>
        </div>
        <div className={styles.charityList}>
          {charitys.map((charity) => {
            return (
              <DonatedItem
                key={charity.id}
                challengeName={charity.challengeName} // Pass challengeName as prop
                explanation={charity.explanation} // Pass explanation as prop
              />
            );
          })}
        </div>
      </DonateListPage>
    </>
  );
}

export default Donate_DonatedPage;
