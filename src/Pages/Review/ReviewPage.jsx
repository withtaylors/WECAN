import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useRecoilState } from 'recoil';
import { userState } from '../Login/Recoil/Recoil.auth.state';

function ReviewPage() {
  const [challenges, setChallenges] = useState([]);
  const [selectedChallenge, setSelectedChallenge] = useState(null);
  const [review, setReview] = useState('');
  const [user] = useRecoilState(userState); // 로그인한 사용자 상태
  const [isLoading, setIsLoading] = useState(false);
  const baseURL = 'http://3.35.3.205:8080';

  useEffect(() => {
    if (user.isLoggedIn) {
      setIsLoading(true);
      axios
        .get(`${baseURL}/challenges`, {
          headers: { Authorization: `Bearer ${userState.token}` },
        })
        .then((response) => {
          setChallenges(response.data);
        })
        .catch((error) => {
          console.error('Failed to fetch challenges:', error.message);
          console.log(error.config); // 요청 구성 정보를 확인
          if (error.response) {
            // 요청은 이루어졌으나, 서버가 2xx 범위가 아닌 상태 코드로 응답
            console.log(error.response.status);
            console.log(error.response.data);
          } else if (error.request) {
            // 요청이 이루어 졌으나 응답을 받지 못함
            console.log(error.request);
          } else {
            // 요청을 설정하는 중에 문제가 발생
            console.log('Error', error.message);
          }
        })
        .finally(() => setIsLoading(false));
    }
  }, [user, baseURL]); // 의존성 배열에 user 추가

  const handleSubmitReview = async () => {
    if (!user.isLoggedIn) {
      // user 객체에서 로그인 상태 확인
      alert('로그인이 필요합니다.');
      return;
    }

    if (!selectedChallenge) {
      alert('챌린지를 선택해주세요.');
      return;
    }

    setIsLoading(true);
    try {
      const response = await axios.post(
        `${baseURL}/reviews`,
        {
          challengeId: selectedChallenge.id,
          content: review,
        },
        {
          headers: { Authorization: `Bearer ${user.token}` }, // user 객체에서 token 사용
        }
      );
      console.log(response.data);
      alert('후기가 등록되었습니다.');
      setReview('');
      setSelectedChallenge(null);
    } catch (error) {
      console.error('Failed to submit review:', error);
      alert('후기 등록에 실패했습니다.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      {challenges.map((challenge) => (
        <div key={challenge.id} onClick={() => setSelectedChallenge(challenge)}>
          {challenge.name}
        </div>
      ))}
      <textarea
        value={review}
        onChange={(e) => setReview(e.target.value)}
        placeholder="후기를 작성해주세요"
        disabled={!user.isLoggedIn || !selectedChallenge} // user 객체에서 로그인 상태 확인
      />
      <button
        onClick={handleSubmitReview}
        disabled={!user.isLoggedIn || isLoading} // user 객체에서 로그인 상태 확인
      >
        등록
      </button>
      {!user.isLoggedIn && <div>챌린지 참여 후 후기 작성이 가능합니다.</div>}
    </div>
  );
}

export default ReviewPage;
