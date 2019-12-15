import {
    AUTHENTICATE,
    SIGNUP_SUCCESS,
    SIGNUP_FAIL,
  } from '../../actions/types';
  
  const initialState = {
    isLoading: false,
    isLoggedin: false,
    data: '',
    loginErrors: {},
  };
  
  const signupReducer = (state = initialState, action) => {
    switch (action.type) {
      case AUTHENTICATE:
        return {
          ...state,
          isLoading: true,
        };
      case SIGNUP_SUCCESS:
        return {
          ...state,
          isLoading: false,
          isLoggedin: true,
          data: action.payload,
        };
      case SIGNUP_FAIL:
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
  
  export default signupReducer;
