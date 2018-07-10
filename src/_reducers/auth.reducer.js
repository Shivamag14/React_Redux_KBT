import {
    authConstants
} from '../_constants/index';

let user = {
    loggedInUser: localStorage.getItem('loggedInUser'),
    role: localStorage.getItem('role')
}
const initialState = user ? {
    loggedIn: true,
    user
} : {};

export function authentication(state = initialState, action) {
    // console.log("state & action: ", state, action);
    switch (action.type) {
        case authConstants.REQUEST:
            return {
                ...state,
                loading: true
            };
        case authConstants.LOGIN_SUCCESS:
            return {
                ...state,
                loggedIn: true,
                user: action.payload
            };
        case authConstants.LOGIN_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.error
            };
        case authConstants.LOGOUT:
            return {};
        default:
            return state
    }
}