import React, { useState } from 'react';
import * as myjoin from './Styled/Home.main.mychallenge';

function HomeMyChallenge() {
  const mychallenges = [
    { title: '챌린지 1', date: '2023-11-01', leftdays: 4 },
    { title: '챌린지 2', date: '2023-12-02', leftdays: 1 },
    { title: '챌린지 3', date: '2023-10-11', leftdays: 3 },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleMoveButtonClick = (direction) => {
    if (direction === 'prev' && currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - 1);
    } else if (direction === 'next' && currentIndex < mychallenges.length - 1) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };

  // 현재 인덱스에 해당하는 도전 과제를 가져옴
  const currentChallenge = mychallenges[currentIndex];

  // 렌더링
  return (
    <myjoin.totalWrapper>
      <myjoin.title>내가 참여중인 챌린지</myjoin.title>
      <myjoin.mainCardWrapper>
        <myjoin.moveButton onClick={() => handleMoveButtonClick('prev')}>
          {'<'}
        </myjoin.moveButton>

        <myjoin.subCardWrapper key={currentIndex}>
          <myjoin.mainImg></myjoin.mainImg>
          <myjoin.mainInfo>
            <myjoin.challengeTitle>
              {currentChallenge.title}
            </myjoin.challengeTitle>
            <myjoin.challengeDate>
              <myjoin.challengeDateImg></myjoin.challengeDateImg>
              {currentChallenge.date}
            </myjoin.challengeDate>
            <myjoin.challengeLeftDate>
              D-{currentChallenge.leftdays}
            </myjoin.challengeLeftDate>
            <myjoin.challengeButtonWrapper>
              <myjoin.challengeAdmitButton>
                인증하러 가기{'->'}
              </myjoin.challengeAdmitButton>
            </myjoin.challengeButtonWrapper>
          </myjoin.mainInfo>
        </myjoin.subCardWrapper>
        <myjoin.moveButton onClick={() => handleMoveButtonClick('next')}>
          {'>'}
        </myjoin.moveButton>
      </myjoin.mainCardWrapper>
    </myjoin.totalWrapper>
  );
}

export default HomeMyChallenge;
