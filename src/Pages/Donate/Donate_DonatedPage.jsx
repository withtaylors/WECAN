import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import ListPage from "../../Components/ListPage";
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

// function Donate_DonatedPage() {
//   const [searchParam, setSearchParam] = useSearchParams();
//   const initKeyword = searchParam.get("keyword");
//   const [keyword, setKeyword] = useState(initKeyword || "");
//   const [donated, setDonated] = useState([]); // 상태를 배열로 초기화
//   const [loading, setLoading] = useState(true); // 로딩 상태 관리
//   const [error, setError] = useState(null); // 에러 상태 관리
//   // Collapse 상태 관리를 위한 state 추가
//   const [open, setOpen] = useState(false);

// useEffect(() => {
//   // 백엔드에서 기부 데이터 가져오기
//   const fetchDonated = async () => {
//     try {
//       const response = await axios.get(`/api/donated?keyword=${keyword}`);
//       setDonated(response.data); // 가져온 데이터로 상태 업데이트
//       setLoading(false); // 로딩 상태를 false로 설정
//     } catch (err) {
//       setError(err); // 에러 발생 시 에러 상태 업데이트
//       setLoading(false); // 로딩 상태를 false로 설정
//     }
//   };
//   fetchDonated();
// }, [keyword]); // keyword가 변경될 때마다 API 호출

// if (loading) {
//   return <div>Loading...</div>; // 로딩 중일 때 표시될 요소
// }

// if (error) {
//   return <div>Error: {error.message}</div>; // 에러가 발생했을 때 표시될 요소
// }

//   return (
//     <>
//       <div className={styles.center}>
//         <TopNav></TopNav>
//       </div>
//       <ListPage variant="catalog" title="기부했어요">
//         <div className={styles.infoBar}>
//           <p>최신순</p>
//         </div>

//         <div className={styles.donateList}>
//           {donated.map((item) => (
//             <div key={item.id}>
//               <Button
//                 onClick={() => setOpen(!open)}
//                 aria-controls="example-collapse-text"
//                 aria-expanded={open}
//               >
//                 {open ? "숨기기 ^" : "자세히 보기 v"}
//               </Button>
//               <Collapse in={open}>
//                 <div id="example-collapse-text">
//                   <DonatedItem donate={item} />
//                 </div>
//               </Collapse>
//             </div>
//           ))}
//         </div>
//       </ListPage>
//     </>
//   );
// }

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

      <ListPage variant="catalog" title="기부했어요">
        <div className={styles.infoBar}>
          <p>최신순</p>
        </div>
        <div className={styles.charityList}>
          {charitys.map((charity) => {
            return <DonatedItem key={charity.id} charity={charity} />;
          })}
        </div>
      </ListPage>
    </>
  );
}

export default Donate_DonatedPage;
