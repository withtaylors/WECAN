import React, { useEffect, useState, useRef } from 'react';
import * as challengereview from './Styled/Challenger.main.reviewWritten';
function ChallengeReviewWritten({ name, date, text }) {
  return (
    <challengereview.totalWrapper>
      <challengereview.profileWrapper>
        <challengereview.photo></challengereview.photo>
        <challengereview.profileReal>
          <challengereview.name>{name}</challengereview.name>
          <challengereview.date>{date}</challengereview.date>
        </challengereview.profileReal>
      </challengereview.profileWrapper>
      <challengereview.reviewText>{text}</challengereview.reviewText>
      <challengereview.replyText>답글달기</challengereview.replyText>
    </challengereview.totalWrapper>
  );
}

export default ChallengeReviewWritten;
