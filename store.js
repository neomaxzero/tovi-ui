import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './rootSaga';

//Reducers
import NavigatorReducer from './components/Navigator/reducer';
import LoginReducer from './components/Orphan/Login/reducer';

const reducer = combineReducers({
    Navigator: NavigatorReducer,
    Login: LoginReducer,
});
const sagaMiddleware = createSagaMiddleware();

const composeEnhancers = typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = (initialState) => { 
    const store = createStore(reducer, initialState,composeEnhancers(applyMiddleware(sagaMiddleware)));
    sagaMiddleware.run(rootSaga);    
    return store;
};

export const initStore = store;

 