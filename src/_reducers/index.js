import {
    combineReducers
} from 'redux';
import {
    authentication
} from './auth.reducer';
import {
    userReducer
} from './user.reducer';

const rootReducer = combineReducers({
    auth: authentication,
    user: userReducer
});

export default rootReducer;