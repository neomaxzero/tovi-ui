import { createStore, combineReducers } from 'redux';

//Reducers
import NavigatorReducer from './components/Navigator/reducer';


const reducer = combineReducers({
    Navigator: NavigatorReducer,
});

const store = createStore(reducer);

export const initStore = (initialState) => 
    (createStore(reducer, initialState));

// export default {
//     store,
// };