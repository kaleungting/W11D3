import {login,signup,logout} from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS'

export const receiveCurrentUser = currentUser => ({
    type: RECEIVE_CURRENT_USER,
    currentUser
});

export const logoutCurrentUser = () => ({
    type: LOGOUT_CURRENT_USER,
});

export const receiveErrors = errors => ({
    type: RECEIVE_ERRORS,
    errors 
});

export const loginUser = formUser => dispatch => (
    login(formUser).then(user => 
        dispatch(receiveCurrentUser(user)))    
);

export const signupUser = formUser => dispatch => (
    signup(formUser).then(user => 
        dispatch(receiveCurrentUser(user)))    
);

export const logoutUser = () => dispatch => (
    logout().then(() => 
        dispatch(logoutCurrentUser()))    
);