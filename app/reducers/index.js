import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';
import * as types from '../actions/types';
import login from './login';
import user from './user';

const filter = (state = '', action) => {
    switch (action.type) {
        case types.FILTER:
            return action.filter;
        default:
            return state;
    }
};


const rootReducer = combineReducers({
    filter,
    routing,
    login,
    user
});

export default rootReducer;
