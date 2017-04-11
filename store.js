import { createStore, applyMiddleware, compose, combineReducers } from 'redux';

//Reducers
import NavigatorReducer from './components/Navigator/reducer';

const reducer = combineReducers({
    Navigator: NavigatorReducer,
});

//const composeEnhancers = typeof window !== undefined && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// function enhancer () { return typeof window !== 'undefined' && (window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())};

export const initStore = (initialState) => (createStore(reducer, initialState));
