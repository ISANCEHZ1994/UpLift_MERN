import axios from 'axios';
import {
    LOGIN_SUCCESS,
    LOGIN_FAIL
} from './types';

// combining thunk, async and dispatch
export const login = (email, password) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };
    const body = JSON.stringify({ email, password });

};