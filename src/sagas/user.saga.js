import {
    call,
    put,
    takeLatest
} from 'redux-saga/effects'
import {
    authConstants,
    userConstants
} from '../_constants/index';

import {
    authApi,
    userApi
} from '../api/index';

import {
    request
} from '../_helpers/request';
import {
    history
} from '../_helpers/index';
import {
    toast
} from "react-toastify";
import {
    toaster
} from '../common/toaster/index';

/*
  Alternatively you may use takeLatest.

  Does not allow concurrent fetches of user.If "LOGIN_REQUEST" gets
  dispatched while a fetch is already pending, that pending fetch is cancelled
  and only the latest one will be run.
*/
function* userSaga() {
    yield takeLatest(authConstants.LOGIN_REQUEST, loginUser);
    yield takeLatest(userConstants.GET_ALL_CLIENTS, getClientList);
    yield takeLatest(userConstants.GET_ALL_LOCATIONS, getLocationList);
    yield takeLatest(userConstants.GET_ALL_DEVICES, getDeviceList);
    yield takeLatest(userConstants.GET_ALL_TONER_WASTAGE, getTonerWastageData);
    yield takeLatest(userConstants.GET_TONER_WASTAGE_FILTERED_DATA, getTonerWastageFilteredData);
}

// worker Saga: will be fired on LOGIN_REQUEST actions
function* loginUser(action) {
    yield put(request.isFetching(authConstants.REQUEST));
    try {
        const {
            data,
            error
        } = yield call(authApi.loginRequest, action.payload);
        if (data) {
            if (data.code === "0") {
                let msg = data.message;
                toaster.notifyError(msg);
                yield put(request.failure(authConstants.LOGIN_FAILURE, msg));
            } else if (data.code === "1") {
                localStorage.setItem('role', data.role);
                localStorage.setItem('loggedInUser', data.username);
                yield put(request.success(authConstants.LOGIN_SUCCESS, data));
                history.push('/');
            }
        } else {
            yield put(request.failure(authConstants.LOGIN_FAILURE, error));
        }
    } catch (error) {
        yield put(request.failure(authConstants.LOGIN_FAILURE, error.toString()));
    }
}

// worker Saga: will be fired on GET_ALL_CLIENTS actions
function* getClientList(action) {
    yield put(request.isFetching(userConstants.REQUEST));
    try {
        const {
            data
        } = yield call(userApi.getClientList);
        if (data) {
            if (data.code === "0") {
                let msg = data.message;
                toaster.notifyError(msg);
                yield put(request.failure(userConstants.GET_ALL_CLIENTS_FAILURE, msg));
            } else if (data.code === "1") {
                yield put(request.success(userConstants.GET_ALL_CLIENTS_SUCCESS, data.clientList));
            }
        }
    } catch (error) {
        // console.log("test: ", error);
        yield put(request.failure(userConstants.GET_ALL_CLIENTS_FAILURE, error.toString()));
    }
}

// worker Saga: will be fired on GET_ALL_Locations actions
function* getLocationList(action) {

    yield put(request.isFetching(userConstants.REQUEST));
    try {
        const {
            data
        } = yield call(userApi.getLocationList, action.payload);
        if (data) {
            if (data.code === "0") {
                let msg = data.message;
                toaster.notifyError(msg);
                yield put(request.failure(userConstants.GET_ALL_LOCATIONS_FAILURE, msg));
            } else if (data.code === "1") {
                yield put(request.success(userConstants.GET_ALL_LOCATIONS_SUCCESS, data.locationList));
            }
        }
    } catch (error) {
        // console.log("test: ", error);
        yield put(request.failure(userConstants.GET_ALL_LOCATIONS_FAILURE, error.toString()));
    }
}

// worker Saga: will be fired on GET_ALL_Devices actions
function* getDeviceList(action) {

    yield put(request.isFetching(userConstants.REQUEST));
    try {
        const {
            data
        } = yield call(userApi.getDeviceList, action.payload);
        if (data) {
            if (data.code === "0") {
                let msg = data.message;
                toaster.notifyError(msg);
                yield put(request.failure(userConstants.GET_ALL_DEVICES_FAILURE, msg));
            } else if (data.code === "1") {
                yield put(request.success(userConstants.GET_ALL_DEVICES_SUCCESS, data.deviceList));
            }
        }
    } catch (error) {
        // console.log("test: ", error);
        yield put(request.failure(userConstants.GET_ALL_DEVICES_FAILURE, error.toString()));
    }
}

// worker Saga: will be fired on GET_ALL_Toner_Wastage actions
function* getTonerWastageData(action) {
    yield put(request.isFetching(userConstants.REQUEST));
    try {
        const {
            data
        } = yield call(userApi.getTonerWastageData);
        if (data) {
            if (data.code === "0") {
                let msg = data.message;
                toaster.notifyError(msg);
                yield put(request.failure(userConstants.GET_ALL_TONNER_WASTAGE_FAILURE, msg));
            } else if (data.code === "1") {
                yield put(request.success(userConstants.GET_ALL_TONNER_WASTAGE_SUCCESS, data.tonerData));
            }
        }
    } catch (error) {
        // console.log("test: ", error);
        yield put(request.failure(userConstants.GET_ALL_TONNER_WASTAGE_FAILURE, error.toString()));
    }
}

// worker Saga: will be fired on GET_ALL_Toner_Wastage actions
function* getTonerWastageFilteredData(action) {
    yield put(request.isFetching(userConstants.REQUEST));
    try {
        const {
            data
        } = yield call(userApi.getTonerWastageFilterData, action.payload);
        if (data) {
            if (data.code === "0") {
                let msg = data.message;
                toaster.notifyError(msg);
                yield put(request.failure(userConstants.GET_TONER_WASTAGE_FILTERED_DATA_FAILURE, msg));
            } else if (data.code === "1") {
                yield put(request.success(userConstants.GET_TONER_WASTAGE_FILTERED_DATA_SUCCESS, data.tonerData));
            }
        }
    } catch (error) {
        // console.log("test: ", error);
        yield put(request.failure(userConstants.GET_TONER_WASTAGE_FILTERED_DATA_FAILURE, error.toString()));
    }
}

// function* delayFnc() {
//     let secs = 10;
//     while (secs > 0) {
//         yield call(delay, 1000);
//         console.log(secs);
//         secs--;
//         if (secs == 1) {
//             return true;
//         }
//     }
// }

export default userSaga