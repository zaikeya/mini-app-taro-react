import { SET_TOKEN, SET_USER } from "../constants/LoginInfo";

const INITIAL_STATE = {
  user: null,
  token: null
};

function LoginInfo(state = INITIAL_STATE, action) {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        user: action.user
      };
    case SET_TOKEN:
      return {
        ...state,
        token: action.token
      };

    default:
      return state;
  }
}

export default LoginInfo;
