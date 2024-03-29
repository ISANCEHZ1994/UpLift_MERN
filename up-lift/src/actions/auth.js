import axios from 'axios';
import {
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT,
    USER_LOADED,
    AUTH_ERROR,
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    CLEAR_PROFILE
} from './types';
import setAuthToken from '../utils/setAuthToken';

export const loadUser = () => async dispatch => {
    if( localStorage.token ){
        try{
            setAuthToken(localStorage.token);
            const res = await axios.get('/auth');
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
        const res = await axios.post( '/auth', body, config );
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

export const register = ({ name, email, password }) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };

    const body = JSON.stringify({ name, email, password });
    
    try {
        const res = await axios.post('/users', body, config);
        dispatch({
            type: REGISTER_SUCCESS,
            payload: res.data
        });
        dispatch(loadUser())
    } catch (err) {
        const errors = err.response.data.errros;
        if( errors ){
            errors.forEach(
                error => dispatch( alert( error.msg, 'danger' ) )
            );
        }
        dispatch({
            type: REGISTER_FAIL
        });
    };
};

export const logout = () => dispatch => {
    dispatch({ type: CLEAR_PROFILE })
    dispatch({ type: LOGOUT })
}