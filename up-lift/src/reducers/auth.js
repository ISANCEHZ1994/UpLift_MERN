import {
    REGISTER_FAIL,
    REGISTER_SUCCESS
} from '../actions/types';

const initalState = {
     token: localStorage.getItem('token'),
     isAuthenticated: null,
     loading: true,
     user: null
};

export default function( state = initalState, action ){
    const { payload, type } = action;
    
}