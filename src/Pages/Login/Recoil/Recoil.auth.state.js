import { atom } from 'recoil';

export const userState = atom({
  key: 'userState', // 고유한 키 값
  default: {
    // 기본 상태
    isLoggedIn: false, // 로그인 여부
    token: null, // 토큰
    userId: null, // 사용자 ID
    nickName: null, // 사용자 닉네임
  },
});
