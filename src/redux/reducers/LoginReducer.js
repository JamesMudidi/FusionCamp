import {
    AUTHENTICATE,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
  } from '../../actions/types';
  
  const initialState = {
    isLoading: false,
    isLoggedin: false,
    data: '',
    loginErrors: {},
  };
  
  const loginReducer = (state = initialState, action) => {
    switch (action.type) {
      case AUTHENTICATE:
        return {
          ...state,
          isLoading: true,
        };
      case LOGIN_SUCCESS:
        return {
          ...state,
          isLoading: false,
          isLoggedin: true,
          data: action.payload,
        };
      case LOGIN_FAIL:
        return {
          ...state,
          isLoading: false,
          isLoggedin: false,
          loginErrors: action.payload,
        };
      default:
        return { state };
    }
  };
  
  export default loginReducer;
