import { applyMiddleware  } from 'redux';
import { configureStore } from '@reduxjs/toolkit'
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const initalState = {};
const middleware = [thunk];
// https://www.appsloveworld.com/reactjs/200/171/uncaught-error-reducer-is-a-required-argument-and-must-be-a-function-or-an-ob
const store = configureStore(
    { reducer: rootReducer },
    initalState,
    composeWithDevTools(
        applyMiddleware(...middleware)
    )
);

export default store;