import * as types from './types';
// import axios from 'axios';
import {loginFunc, fetchUser} from '../services/api';
import { browserHistory } from 'react-router';

export function filterTable(filter) {
    return {
        type: types.FILTER,
        filter
    };
}
export function login(data) {
    /* return (dispatch) => {
        dispatch({
            type: types.LOG_IN,
            payload: loginFunc(data)
        });
    };*/
    return () => {
        window.isLoggedIn = true;
        localStorage.setItem('isLoggedIn', true);
        loginFunc(data)
        .then((res) => {
            console.log('res---->', res);
            window.isLoading = false;
            browserHistory.push('/userdata');
        }, (err) => {
            window.isLoading = false;
            console.error('err---->', err);
        });
    };
}

export function getUserData() {
    return (dispatch) => {
        dispatch({
            type: types.FETCH_USER,
            payload: fetchUser()
        });
    };
}

//
/* export function getDataFromDB() {
	return (dispatch) => {
		fetch('http://asdad.com')
		.then((res) => {
			dispatch({
				type: 'DB_RESPONSE',
				data: res
			});
		});
	}
}*/
