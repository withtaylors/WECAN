import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import ListPage from "../../Components/ListPage";
import Warn from "../../Components/Warn";
import TopNav from "../TopNav/TopNav.main";
import { getDonated } from "../../Api/getter";
import DateText from "../../Components/DateText";
import Card from "../../Components/Card";
import Avatar from "../../Components/Avatar";
import styles from "./Styled/Donate_DonatedPage2.module.css";

function DonatedItem2({ donate }) {
  return (
    <div className={styles.cardlist}>
      <Card className={styles.donateItem} key={donate.title}>
        <div className={styles.info}>
          <p className={styles.title}>
            {donate.answers.length > 0 && (
              <span className={styles.count}>[{donate.answers.length}]</span>
            )}
          </p>
          <p className={styles.date}>
            <DateText value={donate.createdAt} />
          </p>
        </div>
        <div className={styles.writer}>
          <Avatar
            photo={donate.writer.profile.photo}
            name={donate.writer.name}
          />
        </div>
      </Card>
    </div>
  );
}

function Donate_DonatedPage2() {
  const [searchParams, setSearchParams] = useSearchParams();
  const initKeyword = searchParams.get("keyword");
  const [keyword, setKeyword] = useState(initKeyword || "");
  const donates = getDonated(initKeyword);

  return (
    <>
      <TopNav />

      <div className={styles.cardlist}>
        <ListPage variant="community" title="기부했어요">
          <p className={styles.count}>총 {donates.length}개 질문</p>

          {initKeyword && donates.length === 0 ? (
            <Warn
              className={styles.emptyList}
              title="조건에 맞는 질문이 없어요."
              description="올바른 검색어가 맞는지 다시 한 번 확인해 주세요."
            />
          ) : (
            <div className={styles.donateList}>
              {donates.map((donate) => (
                <DonatedItem2 key={donate.id} donate={donate} />
              ))}
            </div>
          )}
        </ListPage>
      </div>
    </>
  );
}

export default Donate_DonatedPage2;
