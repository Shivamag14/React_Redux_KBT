import {
    userConstants
} from '../_constants/index';

export const userActions = {
    getClientList,
    getLocationList,
    getDeviceList,
    getTonerWastageData,
    getTonerWastageFilteredData
};

function getClientList() {
    return {
        type: userConstants.GET_ALL_CLIENTS
    }
}

function getLocationList(data) {
    console.log("req data: ", data);
    return {
        type: userConstants.GET_ALL_LOCATIONS,
        payload: data
    }
}

function getDeviceList(data) {
    console.log("req data: ", data);

    return {
        type: userConstants.GET_ALL_DEVICES,
        payload: data
    }
}

function getTonerWastageData() {
    return {
        type: userConstants.GET_ALL_TONER_WASTAGE
    }
}

function getTonerWastageFilteredData(data) {
    return {
        type: userConstants.GET_TONER_WASTAGE_FILTERED_DATA,
        payload: data
    }
}