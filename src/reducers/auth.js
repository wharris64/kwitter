import { LOGIN, LOGIN_SUCCESS, LOGIN_FAIL, REGISTER, REGISTER_FAIL, REGISTER_SUCCESS, LOGOUT_USER, UPLOAD_IMAGE_FAILURE, UPLOAD_IMAGE_SUCCESS, UPLOAD_IMAGE } from "../actions";

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
    case UPLOAD_IMAGE:
      return {
        ...state,
        imageLoading: true,
        imageError: null
        
      }
    case UPLOAD_IMAGE_FAILURE:
      return { ...state, uploadImageError:action.payload,uploadImageLoading:false}
    case UPLOAD_IMAGE_SUCCESS:
      return{ ...state, uploadImage:action.payload, uploadImageLoading:false
    }
    default:
      return state;
  }
}