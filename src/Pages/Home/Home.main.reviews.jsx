import React from 'react';
import * as reviews from './Styled/Home.main.reviews';
import bubbleCommentImage from '../../Assets/img/bubbleComment.png';
function HomeReviews() {
  const review = [
    { name: '챌린저11', content: '너무너무 만족합니다' },
    { name: '챌린저22', content: '팀원들이 모두 잘해줬습니다' },
    { name: '챌린저33', content: '안녕하세요' },
  ];
  return (
    <reviews.mainWrapper>
      <reviews.title>챌린저들의 후기</reviews.title>
      <reviews.reviewWrapper>
        {review.map((reviewer, index) => (
          <reviews.reviewblock>
            <reviews.profil>
              <reviews.photo></reviews.photo>
              <reviews.name>{reviewer.name}</reviews.name>
            </reviews.profil>
            <reviews.comment>
              <reviews.img src={bubbleCommentImage}></reviews.img>
              <reviews.content>{reviewer.content}</reviews.content>
            </reviews.comment>
          </reviews.reviewblock>
        ))}
      </reviews.reviewWrapper>
      <reviews.thirdblock>
        <reviews.buttoninfo>더보기 {'->'}</reviews.buttoninfo>
      </reviews.thirdblock>
    </reviews.mainWrapper>
  );
}
export default HomeReviews;
