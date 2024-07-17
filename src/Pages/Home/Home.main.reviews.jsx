import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import * as reviews from './Styled/Home.main.reviews';
import bubbleCommentImage from '../../Assets/img/textbubble.png';
import profileimg from '../../Assets/img/Group 36.png';
function HomeReviews() {
  const review = [
    { name: '챌린저11', content: '너무너무 만족합니다' },
    { name: '챌린저22', content: '팀원들이 모두 잘해줬습니다' },
    { name: '챌린저33', content: '안녕하세요' },
  ];

  /////////////////////////////////////////////////////////////////////
  const baseURL = 'http://wecanomg.shop';
  const PROXY ='https://wecanomg.shop';
  ////////////////////////////////////////////////////
  const [loading, setLoading] = useState(false);
  const [challengeThree, setChallengeThree] = useState([]);
  useEffect(() => {
    const fetchChallengeThree = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`${PROXY}/reviews/latest`);
        console.log('홈 후기 3개 불러오기:', response);
        setChallengeThree(response.data.data);
        console.log(challengeThree);
      } catch (error) {
        console.error('홈 후기 3개 불러오기 실패', error);
      } finally {
        setLoading(false);
      }
    };

    fetchChallengeThree();
  }, []);

  return (
    <reviews.mainWrapper>
      <reviews.title>챌린저들의 후기</reviews.title>
      <reviews.reviewWrapper>
        <reviews.reviewblock>
          <reviews.profil>
            <reviews.photo src={profileimg}></reviews.photo>
            <reviews.name>
              {challengeThree && challengeThree[0]?.nickName}
            </reviews.name>
          </reviews.profil>
          <reviews.comment>
            <reviews.img src={bubbleCommentImage}></reviews.img>
            <reviews.content>
              {challengeThree && challengeThree[0]?.content}
            </reviews.content>
          </reviews.comment>
        </reviews.reviewblock>
        <reviews.reviewblock2>
          <reviews.profil2>
            <reviews.photo src={profileimg}></reviews.photo>
            <reviews.name>
              {challengeThree && challengeThree[1]?.nickName}
            </reviews.name>
          </reviews.profil2>
          <reviews.comment2>
            <reviews.img2 src={bubbleCommentImage}></reviews.img2>
            <reviews.content>
              {challengeThree && challengeThree[1]?.content}
            </reviews.content>
          </reviews.comment2>
        </reviews.reviewblock2>
        <reviews.reviewblock>
          <reviews.profil>
            <reviews.photo src={profileimg}></reviews.photo>
            <reviews.name>
              {challengeThree && challengeThree[2]?.nickName}
            </reviews.name>
          </reviews.profil>
          <reviews.comment>
            <reviews.img src={bubbleCommentImage}></reviews.img>
            <reviews.content>
              {challengeThree && challengeThree[2]?.content}
            </reviews.content>
          </reviews.comment>
        </reviews.reviewblock>
      </reviews.reviewWrapper>
      <reviews.thirdblock>
        <reviews.buttoninfo>더보기 {'→'}</reviews.buttoninfo>
      </reviews.thirdblock>
    </reviews.mainWrapper>
  );
}
export default HomeReviews;
