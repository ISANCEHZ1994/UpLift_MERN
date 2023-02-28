import {
    REGISTER_FAIL,
    REGISTER_SUCCESS,
    USER_LOADED,
    AUTH_ERROR
} from '../actions/types';

const initalState = {
     token: localStorage.getItem('token'),
     isAuthenticated: null,
     loading: true,
     user: null
};

export default function( state = initalState, action ){
    const { payload, type } = action;
    
    switch( type ){
        case USER_LOADED:
            return {
                ...state,
                isAuthenticated: true,
                loading: false,
                user: payload
            };
        case REGISTER_SUCCESS:
            localStorage.setItem('token', payload.token);
            return{
                ...state,
                ...payload,
                isAuthenticated: true,
                loading: false
            };
    };
}