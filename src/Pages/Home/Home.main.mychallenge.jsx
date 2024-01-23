import React, { useEffect, useState } from 'react';
import * as myjoin from './Styled/Home.main.mychallenge';
import axios from 'axios';
import logoutimg from '../../Assets/img/Banners/logoutbanner.png';
import righticon from '../../Assets/img/righticon.png';
function HomeMyChallenge() {
  const baseURL = 'http://3.35.3.205:8080';
  const [myChallenge, setMyChallenge] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchChallengeArray = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`${baseURL}/challenge/active`, {
          headers: {
            Authorization: 'Bearer ' + localStorage.getItem('login-token'),
          },
        });
        console.log('참여중 챌린지:', response);
        setMyChallenge(response.data.data);
      } catch (error) {
        console.error('참여중 챌린지 불러오기 실패', error);
      } finally {
        setLoading(false);
      }
    };

    fetchChallengeArray();
  }, []);
  ///////////////// 토큰 만료 여부 판단/////////////////
  function isTokenExpired(token) {
    if (!token) {
      return true; // 토큰이 없으면 만료된 것으로 간주
    }
    // 토큰의 payload 파싱
    const payload = JSON.parse(atob(token.split('.')[1]));
    // payload에 exp 필드가 존재하고, exp가 현재 시간보다 이전이면 토큰이 만료되었다고 판단
    return payload.exp && payload.exp * 1000 < Date.now();
  }

  const accessToken = localStorage.getItem('login-token');
  const isExpired = isTokenExpired(accessToken);

  if (isExpired) {
    console.log('AccessToken이 만료되었습니다.');
  } else {
    console.log('AccessToken이 유효합니다.');
  }
  /////////////////////////////////////////////////////
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleMoveButtonClick = (direction) => {
    if (direction === 'prev' && currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - 1);
    } else if (direction === 'next' && currentIndex < myChallenge.length - 1) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };
  const currentChallenge = myChallenge[currentIndex];

  // 렌더링
  return (
    <myjoin.totalWrapper>
      <myjoin.title>내가 참여중인 챌린지</myjoin.title>
      {!isExpired ? (
        <myjoin.mainCardWrapper>
          <myjoin.moveButton onClick={() => handleMoveButtonClick('prev')}>
            {'<'}
          </myjoin.moveButton>

          <myjoin.subCardWrapper key={currentIndex}>
            <myjoin.mainImg
              src={currentChallenge && currentChallenge.coverImage}
            ></myjoin.mainImg>
            <myjoin.mainInfo>
              <myjoin.challengeTitle>
                {currentChallenge && currentChallenge.title}
              </myjoin.challengeTitle>
              <myjoin.challengeDate>
                <myjoin.challengeDateImg></myjoin.challengeDateImg>
              </myjoin.challengeDate>
              {currentChallenge && currentChallenge.challengePeriod}
              <myjoin.challengeLeftDate>D-{4}</myjoin.challengeLeftDate>
              <myjoin.challengeButtonWrapper>
                <myjoin.challengeAdmitButton>
                  인증하러 가기{' '}
                  <myjoin.rightimg src={righticon}></myjoin.rightimg>
                </myjoin.challengeAdmitButton>
              </myjoin.challengeButtonWrapper>
            </myjoin.mainInfo>
          </myjoin.subCardWrapper>
          <myjoin.moveButton onClick={() => handleMoveButtonClick('next')}>
            {'>'}
          </myjoin.moveButton>
        </myjoin.mainCardWrapper>
      ) : (
        <myjoin.mainCardWrapper2 src={logoutimg}></myjoin.mainCardWrapper2>
      )}
    </myjoin.totalWrapper>
  );
}

export default HomeMyChallenge;
