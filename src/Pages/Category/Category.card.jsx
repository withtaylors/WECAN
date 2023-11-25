import React, { useEffect, useState } from 'react';
import * as Category from './Styled/Category.cards';
function CategoryCard(props) {
  return (
    <Category.CardWrapper>
      <Category.ImageWrapper></Category.ImageWrapper>
      <Category.ContentWrapper>
        <Category.ContentInfo>
          <Category.Title>{props.title}</Category.Title>
          <Category.Date>{props.date}</Category.Date>
        </Category.ContentInfo>
      </Category.ContentWrapper>
    </Category.CardWrapper>
  );
}
export default CategoryCard;
