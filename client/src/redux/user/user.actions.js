import { UserActionTypes } from './user.types';

export const setCurrentUser = user => ({
  type: UserActionTypes.SET_CURRENT_USER,
  payload: user
});

export const setUserToken = token => ({
  type: UserActionTypes.SET_USER_TOKEN,
  payload: token
});