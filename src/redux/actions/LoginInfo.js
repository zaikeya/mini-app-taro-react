import { SET_TOKEN, SET_USER } from "../constants/loginInfo";

export const setUser = user => {
  return {
    type: SET_USER,
    user: user
  };
};

export const setToken = token => {
  return {
    type: SET_TOKEN,
    token: token
  };
};
