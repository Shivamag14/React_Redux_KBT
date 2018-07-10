export const request = {
    isFetching,
    success,
    failure
}

function isFetching(type) {
    return {
        type: type
    }
}

function success(type, payload) {
    // console.log(" success payload: ", payload);
    return {
        type: type,
        payload: payload
    }
}

function failure(type, error) {
    // console.log("failure: ", error);
    return {
        type: type,
        error
    }
}