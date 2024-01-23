import { atom } from 'recoil';

export const isSuccessState = atom({
  key: 'isSuccessState',
  default: {
    default: false,
  },
});
