import {
    all
} from 'redux-saga/effects'
import userSaga from './user.saga';



// single entry point to start all Sagas at once
export function* rootSaga() {
    yield all([
        userSaga()
    ])
}