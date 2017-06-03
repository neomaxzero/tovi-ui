import { ACTIVATE_REQUEST, ACTIVATE_SUCCESS, ACTIVATE_CLOSE,
SIGNUP_SUCCEED_OPEN, SIGNUP_SUCCEED_CLOSE } from  '~/components/constants';
import { fromJS } from 'immutable';

const InitialState = fromJS({
  activating: false,
  popups: { 
    showSignUpSucceed: false,
  },
});


const reducer = (state = InitialState, action) => {  
  switch(action.type) {
    case ACTIVATE_REQUEST: {
      return state
        .set('activating', true)
    }  
    case ACTIVATE_CLOSE: {
      return state
        .set('activating', false)
    }
    case SIGNUP_SUCCEED_OPEN: {
      return state
        .setIn(['popups', 'showSignUpSucceed'], true)                         
    }
    case SIGNUP_SUCCEED_CLOSE: {
      return state
        .setIn(['popups', 'showSignUpSucceed'], false)                         
    }
    default:
      return state;
  }
}

export default reducer;