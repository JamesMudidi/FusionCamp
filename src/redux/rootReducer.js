import { combineReducers } from 'redux'
import loginReducer from '../redux/reducers/LoginReducer';
import signupReducer from '../redux/reducers/SignupReducer';

export default combineReducers({
    auth: loginReducer, signupReducer,
});
