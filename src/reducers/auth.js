import { LOGIN, LOGIN_SUCCESS, LOGIN_FAIL, REGISTER, REGISTER_FAIL, REGISTER_SUCCESS, LOGOUT_USER } from "../actions";

const initialState = {
  loginLoading: false,
  login: null,
  loginError: null, 
  registerLoading: false,
  register: null,
  registerError: null
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
      
    case LOGOUT_USER:
      return {
        ...initialState
      };
    case REGISTER:
      return {
        ...state,
        registerLoading: true,
        registerError: null
      };
    case REGISTER_SUCCESS:
      return { ...state, register: action.payload, registerLoading: false };
    case REGISTER_FAIL:
      return { ...state, registerError: action.payload, registerLoading: false };

    default:
      return state;
  }
}