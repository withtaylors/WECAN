import React from 'react';
import * as recruittop from './Styled/Recruit.total.cards';

function RecruitTotalTop(props) {
  return (
    <recruittop.TotalTopWrapper type={props.type}>
      <recruittop.Title>챌린저 찾기</recruittop.Title>
      <recruittop.SearchWrapper>
        <recruittop.SearchInputBox
          placeholder='게시글 검색하기'
          type={props.type}
          className={props.className}
        />
        <recruittop.SearchInputIcon
          type={props.type}
          className={props.className}
          src='/img/SearchQuestion.png'
        />
      </recruittop.SearchWrapper>
    </recruittop.TotalTopWrapper>
  );
}

export default RecruitTotalTop;
