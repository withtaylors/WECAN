import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import ListPage from "../../Components/ListPage";
import styles from "./Styled/Donate_DonatedPage.module.css";
import Warn from "../../Components/Warn";
import CharityItem from "../../Components/CharityItem";
import { getCharitys } from "../../Api/getter";

function Donate_DonatedPage() {
  // const [searchParam, setSearchParam] = useSearchParams();
  // const initKeyword = searchParam.get("keyword");
  // const [keyword, setKeyword] = useState(initKeyword || "");
  // // useState를 사용하여 charitys 상태와 그 상태를 업데이트하는 함수를 정의
  // const donated = getCharitys(initKeyword); // mock.json에서 가져온 데이터

  return;
  // <ListPage variant="catalog" title="기부했어요">
  //   <div className={styles.infoBar}>
  //     <p>가나다순</p>
  //   </div>

  //   <div className={styles.donateList}>
  //     {donated.map((charity) => (
  //       <CharityItem key={charity.id} donate={donate} />
  //     ))}
  //   </div>
  // </ListPage>
}

export default Donate_DonatedPage;
