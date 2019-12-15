import axios from 'axios';
import { toast } from 'react-toastify';
import {
  AUTHENTICATE,
  SIGNUP_SUCCESS,
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

// const signupFail = error => ({
//   type: REGISTER_FAIL,
//   payload: error.response.data.message,
// });


export const signupAction = (first_name, last_name, role, email, username, password, confirmed_password) => (dispatch) => {
  dispatch(authenticate());
  axios
    .post(`${baseURL}api/auth/register/`, {first_name, last_name, role, email, username, password, confirmed_password})
    .then((response) => {
      dispatch(signupSuccess(response));
      sessionStorage.setItem('token', response.data.token);
      sessionStorage.setItem('username', response.data.user.username);
      window.location.replace('/login');
      if (response.data.message) {
        const successMessage = response.data.message;
        toast.success(`:( ${successMessage}`, {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 5000,
        });
      }
    })
    .catch((error) => {
      dispatch({
        type: SIGNUP_FAIL,
        payload: error.data,
      });
      if (error.response.data.response) {
        const firstnameError = error.response.error.data.first_name;
        toast.error(`:( ${firstnameError}`, {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 5000,
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
    });
};

export const loginAction = (email, password) => (dispatch) => {
  dispatch({
    type: AUTHENTICATE,
    loginAction: loginAction()
  });
  axios
    .post(`${baseURL}api/auth/login/`, { email, password })
    .then((response) => {
      dispatch(signupSuccess(response));
      sessionStorage.setItem('token', response.data.token);
      sessionStorage.setItem('username', response.data.user.username);
      window.location.replace('/');
      if (response.data.message) {
        const successMessage = response.data.message;
        toast.success(`:( ${successMessage}`, {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 5000,
        });
      }
    })
    .catch((error) => {
      dispatch({
        type: LOGIN_FAIL,
        payload: error.response.data,
      });
      if (error.response) {
        const emailError = error.response;
        toast.error(`:( ${emailError}`, {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 3000,
        });
      }
      if (error.response) {
        const passwordError = error.response;
        toast.error(`:( ${passwordError}`, {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 3000,
        });
      }
    });
};