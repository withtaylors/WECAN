import React from "react";
import * as recruittop from "./Styled/Recruit.total.cards";
import Questionmark from "../../Assets/img/SearchQuestion.png";
import TopNav from "../../Pages/TopNav/TopNav.main";

function RecruitTotalTop(props) {
  return (
    <>
      <div type={props.center}>
        <TopNav></TopNav>
      </div>
      <recruittop.TotalTopWrapper type={props.type}>
        <recruittop.Title>챌린저 찾기</recruittop.Title>
        <recruittop.SearchWrapper>
          <recruittop.SearchInputBox
            placeholder="게시글 검색하기"
            type={props.type}
            className={props.className}
          />
          <recruittop.SearchInputIcon
            type={props.type}
            className={props.className}
            src={Questionmark}
          />
        </recruittop.SearchWrapper>
      </recruittop.TotalTopWrapper>
    </>
  );
}

export default RecruitTotalTop;
