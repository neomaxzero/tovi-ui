import { ACTIVATE_REQUEST, ACTIVATE_SUCCESS, ACTIVATE_CLOSE } from  '~/components/constants';
import { fromJS } from 'immutable';

const InitialState = fromJS({
  activation: { },
});


const reducer = (state = InitialState, action) => {  
  switch(action.type) {
    case ACTIVATE_REQUEST: {
      return state
        .setIn(['activation', 'activating'], true)
    }
    case ACTIVATE_SUCCESS: {
      return state
        .setIn(['activation', 'activating'], false)        
        .setIn(['activation', 'activated'], true)                   
    }      
    case ACTIVATE_CLOSE: {
      return state
        .setIn(['activation', 'activated'], false)                   
      
    }
    default:
      return state;
  }
}

export default reducer;