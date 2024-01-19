import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";
import DonateListPage from "../../Components/DonateListPage";
import styles from "./Styled/Donate_CharityListPage.module.css";
import Warn from "../../Components/Warn";
import CharityItem from "../../Components/CharityItem";
import { getCharitys } from "../../Api/getter";
import searchBarStyles from "../../Components/Styled/SearchBar.module.css";
import searchIcon from "../../Assets/search.png";
import TabButton from "../../Components/TabButton";
import Pagination from "react-js-pagination";
import TopNav from "../../Pages/TopNav/TopNav.main";

function Donate_CharityListPage() {
  const [searchParam, setSearchParam] = useSearchParams();
  const initKeyword = searchParam.get("keyword");
  const [keyword, setKeyword] = useState(initKeyword || "");
  // useState를 사용하여 charitys 상태와 그 상태를 업데이트하는 함수를 정의
  const charitys = getCharitys(initKeyword); // mock.json에서 가져온 데이터
  //test
  const handleKeywordChange = (e) => setKeyword(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchParam(keyword ? { keyword } : {});
  };

  const [activeTab, setActiveTab] = useState("tab1");

  const tabTypes = {
    tab1: null,
    tab2: 1,
    tab3: 2,
    tab4: 3,
    tab5: 4,
    tab6: 5,
    tab7: 6,
    tab8: 7,
    tab9: 8,
  };

  const filteredCharitys = charitys.filter(
    (charity) => activeTab === "tab1" || charity.type === tabTypes[activeTab]
  );

  // 페이지네이션을 위한 상태
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentCharitys = filteredCharitys.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      <div className={styles.center}>
        <TopNav></TopNav>
      </div>

      <DonateListPage variant="catalog" title="기부 단체 찾기">
        <form className={searchBarStyles.form} onSubmit={handleSubmit}>
          <input
            name="keyword"
            value={keyword}
            onChange={handleKeywordChange}
            placeholder="검색으로 단체 찾기"
          ></input>
          <button type="submit">
            <img src={searchIcon} alt="검색" />
          </button>
        </form>

        <TabButton activeTab={activeTab} onTabChange={setActiveTab} />

        <div className={styles.infoBar}>
          <p className={styles.count}>총 {filteredCharitys.length}개</p>
          <p>가나다순</p>
        </div>

        {initKeyword && charitys.length === 0 ? (
          <Warn
            className={styles.emptyList}
            title="조건에 맞는 단체가 없어요."
            description="올바른 검색어가 맞는지 다시 한 번 확인해 주세요."
          />
        ) : (
          <div className={styles.charityList}>
            {charitys.map((charity) => {
              if (
                activeTab === "tab1" ||
                charity.type === tabTypes[activeTab]
              ) {
                return <CharityItem key={charity.id} charity={charity} />;
              }
              return null;
            })}
          </div>
        )}
      </DonateListPage>
    </>
  );
}

export default Donate_CharityListPage;
