import {
    GlobalVariable
} from "../_constants/url.constant";

const baseUrl = GlobalVariable.baseUrl;
const projectName = GlobalVariable.projectName;
const ssl = GlobalVariable.ssl;

export const UserResources = {
    getUserLoginUrl,
    getUserRegisterUrl,
    getClientListUrl,
    getLocationListUrl,
    getDevicesListUrl,
    getTonerWastageDataUrl,
    getTonerWastageDataPostUrl
}

function getUserLoginUrl() {
    return {
        url: ssl +
            "://" +
            baseUrl + "/" +
            projectName +
            "/kbt/api/v1/login"
    }
}

function getUserRegisterUrl() {
    return {
        url: ssl +
            "://" +
            baseUrl + "/" +
            projectName +
            "/kbt/api/v1/register"
    }
}

function getClientListUrl() {
    return {
        url: ssl +
            "://" +
            baseUrl + "/" +
            projectName +
            "/kbt/api/v1/clients"
    }
}

function getLocationListUrl() {
    return {
        url: ssl +
            "://" +
            baseUrl + "/" +
            projectName +
            "/kbt/api/v1/locations"
    }
}

function getDevicesListUrl() {
    return {
        url: ssl +
            "://" +
            baseUrl + "/" +
            projectName +
            "/kbt/api/v1/devices"
            // url: "http://192.168.1.33:8080/kbt/api/v1/devices"
    }
}

function getTonerWastageDataUrl() {
    return {
        url: ssl +
            "://" +
            baseUrl + "/" +
            projectName +
            "/kbt/api/v1/toner/wastage"
            // url: "http://www.mocky.io/v2/5b3b7398330000d008599c84"
    }
}

function getTonerWastageDataPostUrl() {
    return {
        url: ssl +
            "://" +
            baseUrl + "/" +
            projectName +
            "/kbt/api/v1/toner/wastage"
            // url: "http://www.mocky.io/v2/5b3baf4a3300006100599da7"
    }
}