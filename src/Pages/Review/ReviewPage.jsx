import { useState, useEffect } from 'react';
import TopNav from '../../Pages/TopNav/TopNav.main';
import personImg from '../../Assets/person.png';
import styled from 'styled-components';
import { getChallengesList, getReviews, postReview } from '../../Api/reviewApi';
import Balloon from '../../Components/Balloon';
import Pagination from './pagination';
const initReview = {
  challengeId: -1,
  title: '',
  content: '',
};

function ReviewPage() {
  const [challenges, setChallenges] = useState([]);
  const [reviewList, setReviewList] = useState([]);
  const [writeReview, setWriteReview] = useState(initReview);
  const [curPage, setCurPage] = useState(1);
  const articlePerPage = 4; // 화면에 리뷰 표시 할 갯수

  const getToken = localStorage.getItem('login-token');
  useEffect(() => {
    if (getToken) {
      getChallengesList(getToken).then((res) => {
        if (res) {
          setChallenges(res);
        }
      });
    }
    getReviews().then((res) => setReviewList(res));
  }, [getToken]); // 의존성 배열에 user 추가
  const handleRefreshReview = () => {
    getReviews().then((res) => setReviewList(res));
  };

  const handleClickEnteredBtn = async () => {
    if (writeReview.challengeId === -1) {
      alert('챌린지를 선택해주세요.');
      return;
    }
    if (writeReview.content.length <= 9) {
      alert('10글자 이상의 후기만 등록이 가능합니다.');
      return;
    }
    const findTitle =
      challenges.find((el) => el.id === writeReview.challengeId).title || '';

    setWriteReview((prev) => ({
      ...prev,
      title: findTitle,
    }));

    const res = await postReview(getToken, writeReview);
    if (res) {
      alert('후기가 작성되었습니다.');
      await handleRefreshReview();
      setWriteReview(initReview);
    }
  };

  const textareaPlaceholder = getToken
    ? '후기를 작성해주세요'
    : '챌린지 참여 후 후기 작성이 가능합니다.';

  const filteredReviewList = reviewList.slice(
    (curPage - 1) * articlePerPage,
    articlePerPage * curPage
  );

  return (
    <Wrap>
      <TopNavWrap>
        <TopNav />
      </TopNavWrap>
      <HeaderWrap>
        <span>후기</span>
      </HeaderWrap>

      <EnteredChallengeWrap>
        <EnteredSelect
          onChange={(e) =>
            setWriteReview((prev) => ({
              ...prev,
              challengeId: Number(e.target.value),
            }))
          }
        >
          <optgroup label="내가 참여한 챌린지" style={{ display: 'none' }}>
            <option value={-1}>내가 참여한 챌린지</option>
          </optgroup>
          {challenges.map((item) => (
            <option key={item.id} value={item.id}>
              {item.title}
            </option>
          ))}
        </EnteredSelect>
        <EnteredTextArea
          placeholder={textareaPlaceholder}
          disabled={!getToken}
          value={writeReview.content}
          onChange={(e) =>
            setWriteReview((prev) => ({
              ...prev,
              content: e.target.value,
            }))
          }
        />
        <EnteredBtn disabled={!getToken} onClick={handleClickEnteredBtn}>
          등록
        </EnteredBtn>
      </EnteredChallengeWrap>
      <ReviewWrap>
        {filteredReviewList.map((item, idx) => {
          if (idx % 2 === 0) {
            return (
              <Review>
                <PersonImgWrap>
                  <img src={personImg} alt="person" />
                  <span>{item.nickName}</span>
                </PersonImgWrap>
                <Balloon
                  challengeName={item.challengeName}
                  content={item.content}
                  isTailRight={true}
                />
              </Review>
            );
          }
          return (
            <Review>
              <Balloon
                challengeName={item.challengeName}
                content={item.content}
                isTailRight={false}
              />
              <PersonImgWrap>
                <img src={personImg} alt="person" />
                <span>{item.nickName}</span>
              </PersonImgWrap>
            </Review>
          );
        })}
      </ReviewWrap>

      <Pagination
        curPage={curPage}
        data={reviewList}
        articlePerPage={articlePerPage}
        setCurPage={setCurPage}
      />
    </Wrap>
  );
}

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TopNavWrap = styled.div`
  display: flex;
  justify-content: center;
`;

const HeaderWrap = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 60px;

  > span {
    font-size: 30px;
  }
`;

const EnteredChallengeWrap = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const EnteredSelect = styled.select`
  width: 700px;
  height: 50px;
  background-color: black;
  color: #ffffff;
  padding: 0 20px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  margin-top: 30px;
  font-size: 16px;
  font-family: Pretendard-Regular;
  > option {
    background-color: #ffffff;
    color: black;
    font-size: 15px;
  }
`;

const EnteredTextArea = styled.textarea`
  width: calc(694px - 28px);
  height: 90px;
  resize: none;
  padding: 16px 16px 32px 16px;
  font-size: 14.5px;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  outline: none;
  font-family: Pretendard-Regular;

  &:disabled {
    background-color: initial;
    color: initial;
  }
`;

const EnteredBtn = styled.button`
  position: absolute;
  bottom: 10px;
  margin-left: 610px;
  border-radius: 24px;
  border: 1px solid black;
  background-color: transparent;
  padding: 2px 11px;
  z-index: 999;
  cursor: pointer;

  &:disabled {
    background-color: initial;
    color: initial;
  }

  &:hover {
    background-color: black;
    color: white;
  }
`;

const ReviewWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
  width: 750px;
  padding: 60px 0 30px 0;
  min-height: 520px;

  > div:nth-child(2n - 1) {
    align-self: flex-start;
  }

  > div:nth-child(2n) {
    gap: 120px;
    align-self: flex-end;
  }
`;

const PersonImgWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 15px;
  font-weight: 500;
  gap: 6px;
`;

const Review = styled.div`
  display: flex;
  gap: 16px;
`;

export default ReviewPage;
