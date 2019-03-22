import { LOGIN, LOGIN_SUCCESS, LOGIN_FAIL } from "../actions";

const initialState = {
  loginLoading: false,
  login: null,
  loginError: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        loginLoading: true,
        loginError: null
      };
    case LOGIN_SUCCESS:
      return { ...state, login: action.payload, loginLoading: false };
    case LOGIN_FAIL:
      return { ...state, loginError: action.payload, loginLoading: false };

    default:
      return state;
  }
};