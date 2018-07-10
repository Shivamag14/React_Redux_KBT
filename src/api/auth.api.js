import axios from 'axios';
import {
    UserResources
} from '../_resources/user.resources'

export const authApi = {
    loginRequest,
    registerRequest,
    logoutRequest
}

function loginRequest(request) {
    // console.log("request: ", request);
    let url = UserResources.getUserLoginUrl().url;
    return axios.post(url, request)
        .then((response) => {
            // console.log("response: ", response);
            return response
        })
        .catch((error) => {
            // console.log("error in catch", error);
            return error;
        });
}

function registerRequest(request) {
    let url = UserResources.getUserRegisterUrl().url;
    return axios.post(url, request)
        .then((response) => {
            return response;
        })
        .catch((error) => {
            console.log(error);
            return error;
        });
}

function logoutRequest() {
    let url = UserResources.getUserLoginUrl().url;
    return axios.get(url)
        .then((response) => {
            return response;
        })
        .catch((error) => {
            console.log(error);
            return error;
        });
}