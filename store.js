import { createStore, combineReducers } from 'redux';

//Reducers
import NavigatorReducer from './components/Navigator/reducer';

const reducer = combineReducers({
    Navigator: NavigatorReducer,
});

const store = createStore(reducer);
const devTools = typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION__();
console.log(typeof devTools);
export const initStore = (initialState) => (createStore(reducer, initialState, devTools));
