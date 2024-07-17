import React, { useState, useEffect } from 'react';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import request from '../../Api/request'; // request 모듈을 가져온다고 가정
import { ACCESS_TOKEN } from '../../Api/request';
import { refreshToken } from '../../Api/request';
import axios from 'axios';

const LikeButton = ({ isLike, id }) => {
  const [initialLikeState, setInitialLikeState] = useState(isLike);
  const recruitId = id;

  const PROXY = 'https://wecanomg.shop';
    
  useEffect(() => {
    setInitialLikeState(isLike); // 초기 isLike 값을 설정
  }, [isLike]);

  const handleToggleLike = async () => {
    try {
      const response = await request.post(
        `${PROXY}/recruit/heart`,
        { recruitId },
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ` + localStorage.getItem('login-token'),
          },
        }
      );
      console.log(response.data.data);
      if (initialLikeState) {
        console.log(`${id}번 아이템이 찜 해제되었습니다.`);
      } else {
        console.log(`${id}번 아이템이 찜되었습니다.`);
      }

      setInitialLikeState((prevState) => !prevState);
      console.log('찜하기 완료');
    } catch (error) {
      console.error('찜하기 실패', error);
    }
  };

  const buttonStyle = {
    fontSize: '21px',
    cursor: 'pointer',
  };

  return (
    <div
      onClick={handleToggleLike}
      style={{
        marginRight: '3px',
      }}
    >
      {initialLikeState ? (
        <FaHeart color='#dd518c' style={buttonStyle} />
      ) : (
        <FaRegHeart color='#dd518c' style={buttonStyle} />
      )}
    </div>
  );
};

export default LikeButton;
