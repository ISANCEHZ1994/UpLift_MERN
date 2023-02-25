import axios from 'axios';
import {
    LOGIN_SUCCESS,
    LOGIN_FAIL
} from './types';
import setAuthToken from '../utils/setAuthToken';

export const loadUser = () => async dispatch => {
    if( localStorage.token ){
        try{

        } catch {

        };
    };
};

// combining thunk, async and dispatch
export const login = (email, password) => async dispatch => {

    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };

    const body = JSON.stringify({ email, password });

    try{
        const res = await axios.post( '/api/auth', body, config );
        dispatch({
            type: LOGIN_SUCCESS,
            payload: res.data
        })
    } catch {

    };
};