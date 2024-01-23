import React, { useEffect, useState, useRef } from 'react';
import * as Category from './Styled/Category.cards';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import scheduleimg from '../../Assets/img/schedule.png';

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

  const title =
    (props.data && props.data.title) || (props.data && props.data.name);
  const date = props.data && props.data.challengePeriod;
  const id = props.data && props.data.id;
  const imgsrc =
    (props.data && props.data.coverImage) || (props.data && props.data.img);
  return (
    <Category.CardWrapper>
      <Link to={`/challenge/${id}`}>
        <Category.ImageWrapper src={imgsrc}></Category.ImageWrapper>
      </Link>
      <Category.ContentWrapper>
        <Category.ContentInfo>
          <Category.Title>{title}</Category.Title>
        </Category.ContentInfo>
      </Category.ContentWrapper>
    </Category.CardWrapper>
  );
}

export default CategoryCard;
