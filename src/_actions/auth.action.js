import {
    authConstants
} from '../_constants/index';

export const authActions = {
    login,
    logout,
    register
};

function login(username, password) {
    return {
        type: authConstants.LOGIN_REQUEST,
        payload: {
            username,
            password
        }
    }
}

function logout() {
    return {
        type: authConstants.LOGOUT
    }
}

function register(userData) {
    console.log("userAction register: ", userData);
    return {
        type: authConstants.REGISTER_REQUEST,
        payload: userData
    }

}