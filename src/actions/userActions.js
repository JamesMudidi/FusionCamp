import axios from 'axios';
import { toast } from 'react-toastify';
import {
  AUTHENTICATE,
  SIGNUP_SUCCESS,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  SIGNUP_FAIL,
} from './types';

const baseURL = 'https://fusion-v1.herokuapp.com/';

const authenticate = () => ({
  type: AUTHENTICATE,
});

const signupSuccess = response => ({
  type: SIGNUP_SUCCESS,
  payload: response.data.data[0],
});

const loginSuccess = response => ({
  type: LOGIN_SUCCESS,
  payload: response.data.data[0],
});


export const signupAction = (userInfo) => async dispatch => {

  toast.dismiss();
  dispatch(authenticate);
  try {
    const response = await axios.post(
      `${baseURL}api/auth/register/`,
      userInfo
    );
    dispatch(signupSuccess(response));
    sessionStorage.setItem("token", response.data.token);
    toast.success(`${response.data.message}`, {
      position: toast.POSITION.TOP_RIGHT,
      autoClose: 3000,
      hideProgressBar: false,
      onClose: window.location.replace('/')
    });
  }
  catch (error) {
    dispatch({
      type: SIGNUP_FAIL,
      payload: error.data,
    });
    if (error.response.data) {
      Object.keys(error.response.data).forEach(function (key) {
        toast.error(`:( ${key}: ${error.response.data[key][0]}`, {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 5000,
        });
      });
    }
    if (error.response) {
      const lastnameError = error.response.data.last_name;
      toast.error(`:( ${lastnameError}`, {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 5000,
      });
    }
    if (error.response) {
      const usernameError = error.response.data.username;
      toast.error(`:( ${usernameError}`, {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 5000,
      });
    }
    if (error.response) {
      const emailError = error.response.data.email;
      toast.error(`:( ${emailError}`, {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 5000,
      });
    }
    if (error.response) {
      const passwordError = error.response.data.password;
      toast.error(`:( ${passwordError}`, {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 5000,
      });
    }
    if (error.response) {
      const passwordError = error.response;
      toast.error(`:( ${passwordError}`, {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 5000,
      });
    }
  }
};

export const loginAction = (email, password) => async dispatch => {
  toast.dismiss();
  dispatch(authenticate);
  try {
    const response = await axios.post(
      `${baseURL}api/auth/login/`,
      { email, password }
    );
    dispatch(loginSuccess(response));
    sessionStorage.setItem("token", response.data.token);
    toast.success(`${response.data.message}`, {
      position: toast.POSITION.TOP_RIGHT,
      autoClose: 3000,
      hideProgressBar: false,
      onClose: window.location.replace('/')
    });
  } catch (error) {
    dispatch({
      type: LOGIN_FAIL
    });
    Object.keys(error.response.data).forEach(function (key) {
      toast.error(`:( ${key}: ${error.response.data[key][0]}`, {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 5000,

      });
    });

  }
};
