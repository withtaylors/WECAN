import { atom } from 'recoil';

export const loggedInUserState = atom({
  key: 'loggedInUserState',
  default: null,
});
