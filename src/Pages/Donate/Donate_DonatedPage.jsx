import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import ListPage from "../../Components/ListPage";
import styles from "./Styled/Donate_CharityListPage.module.css";
import Warn from "../../Components/Warn";
import CharityItem from "../../Components/CharityItem";
import { getCharitys } from "../../Api/getter";
import searchBarStyles from "../../Components/Styled/SearchBar.module.css";
import searchIcon from "../../Assets/search.png";
import TabButton from "../../Components/TabButton";

function Donate_DonatedPage() {
  return <ListPage variant="catalog" title="기부 단체 찾기"></ListPage>;
}

export default Donate_DonatedPage;
