import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';

//Reducers
import NavigatorReducer from './components/Navigator/reducer';

const reducer = combineReducers({
    Navigator: NavigatorReducer,
});
const sagaMiddleware = createSagaMiddleware();

const composeEnhancers = typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

//THIS IS IMPORTANT: sagaMiddleware.run(rootSaga);
export const initStore = (initialState) => (createStore(reducer, initialState,composeEnhancers(applyMiddleware(sagaMiddleware))));
 