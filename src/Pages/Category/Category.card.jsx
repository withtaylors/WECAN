import React, { useEffect, useState, useRef } from 'react';
import * as Category from './Styled/Category.cards';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

function CategoryCard(props) {
  const navigate = useNavigate(); // useNavigate를 직접 여기서 사용

  const handleCardClick = () => {
    // 클릭 이벤트가 발생하면 ChallengeInfo로 데이터를 전달
    navigate(`/challenge/${props.index}`, {
      state: {
        categoryData: props.data,
      },
    });
  };
  const title = props.data && props.data.title;
  const date = props.data && props.data.date;
  const id = props.data && props.data.id;
  return (
    <Category.CardWrapper>
      <Link to={`/challenge/${id}`}>
        <Category.ImageWrapper></Category.ImageWrapper>
        <Category.ContentWrapper>
          <Category.ContentInfo>
            <Category.Title>{title}</Category.Title>
            <Category.Date>{date}</Category.Date>
          </Category.ContentInfo>
        </Category.ContentWrapper>
      </Link>
    </Category.CardWrapper>
  );
}

export default CategoryCard;
