import axios from 'axios';
import {
    UserResources
} from '../_resources/user.resources'

export const userApi = {
    getClientList,
    getLocationList,
    getDeviceList,
    getTonerWastageData,
    getTonerWastageFilterData
}

function getClientList() {
    let url = UserResources.getClientListUrl().url;
    return axios.get(url)
        .then((response) => {
            return response
        })
        .catch((error) => {
            return error;
        });
}

function getLocationList(request) {
    let url = UserResources.getLocationListUrl().url;
    return axios.post(url, request)
        .then((response) => {
            return response
        })
        .catch((error) => {
            return error;
        });
}

function getDeviceList(request) {

    let url = UserResources.getDevicesListUrl().url;
    return axios.post(url, request)
        .then((response) => {
            return response
        })
        .catch((error) => {
            return error;
        });
}

function getTonerWastageData() {
    let url = UserResources.getTonerWastageDataUrl().url;
    return axios.get(url)
        .then((response) => {
            return response
        })
        .catch((error) => {
            return error;
        });
}

function getTonerWastageFilterData(request) {
    let url = UserResources.getTonerWastageDataPostUrl().url;
    // return axios.post(url, request)
    return axios.post(url, request)
        .then((response) => {
            // console.log("filter data: ", response);
            return response
        })
        .catch((error) => {
            return error;
        });
}