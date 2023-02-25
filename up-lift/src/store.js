import { applyMiddleware, configureStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from './Reducers';

const initalState = {};
const middleware = [thunk];
const store = configureStore(
    rootReducer,
    initalState,
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;