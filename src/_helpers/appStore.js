import {
    createStore,
    applyMiddleware
} from 'redux';
import createSagaMiddleware from 'redux-saga'

import thunkMiddleware from 'redux-thunk';

import rootReducer from '../_reducers';
import {
    createLogger
} from 'redux-logger';
import {
    rootSaga
} from '../sagas/index';

const logger = createLogger();

const sagaMiddleware = createSagaMiddleware();

// const confirmationMiddleware = store => next => action => {
//     // console.log("action, next, store: ", action, next, store);
//     if (
//         action.type === ""
//     ) {
//         let user_input = window.confirm("are you sure?");
//         if (user_input === true) {
//             next(action);
//         }
//     } else {
//         next(action);
//     }
// }

const middleware = applyMiddleware(thunkMiddleware, sagaMiddleware, logger);

export const store = createStore(rootReducer, middleware);

sagaMiddleware.run(rootSaga);