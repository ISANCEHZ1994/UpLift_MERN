import axios from 'axios';
import {
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    USER_LOADED
} from './types';
import setAuthToken from '../utils/setAuthToken';

export const loadUser = () => async dispatch => {
    if( localStorage.token ){
        try{
            setAuthToken(localStorage.token);
            const res = await axios.aget('/api/auth');
            dispatch({
                type: USER_LOADED,
                payload: res.data
            });
        } catch (err) {
            dispatch({
                type: AUTH_ERROR
            });
        };
    } else {
        dispatch({
            type: AUTH_ERROR
        });
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
        });
        dispatch( loadUser() );
    } catch (err) {
        const errors = err.response.data.errors;
        if( errors ){
            errors.forEach(
                error => dispatch( alert(error.msg))
            );
        };
        dispatch({
            type: LOGIN_FAIL
        });
    };
};