import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './rootSaga';
import withRedux from 'next-redux-wrapper';
import nextReduxSaga from 'next-redux-saga';

//Reducers
import NavigatorReducer from './components/Navigator/reducer';
import LoginReducer from './components/Orphan/Login/reducer';
import GlobalReducer from './components/Orphan/Global/reducer';
import { saveState, loadState } from './utils/localStorage';

const reducer = combineReducers({
  Navigator: NavigatorReducer,
  Login: LoginReducer,
  Global: GlobalReducer,
});

const sagaMiddleware = createSagaMiddleware();

const composeEnhancers =
  (typeof window !== 'undefined' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

//Restoring if there is something in localStorage
const persistedState = loadState();

const store = () => {
  const store = createStore(
    reducer,
    persistedState,
    composeEnhancers(applyMiddleware(sagaMiddleware)),
  );
  sagaMiddleware.run(rootSaga);

  //Suscribing the store to save the state in localStorage
  store.subscribe(() => {
    saveState(store.getState());
  });

  return store;
};

export { store };
