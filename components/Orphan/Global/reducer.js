import { ACTIVATE_REQUEST, ACTIVATE_SUCCESS, ACTIVATE_CLOSE,
SIGNUP_SUCCEED_OPEN, SIGNUP_SUCCEED_CLOSE, REQUEST_RESET_PASSWORD_OPEN,
REQUEST_RESET_PASSWORD_CLOSE, FORM_RESET_PASSWORD_CLOSE, FORM_RESET_PASSWORD_OPEN } from  '~/components/constants';
import { fromJS } from 'immutable';

const InitialState = fromJS({
  activating: false,
  popups: { 
    showSignUpSucceed: false,
    showRequestResetPassword: false,
    formResetPassword: false,
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
    case REQUEST_RESET_PASSWORD_OPEN: {
      return state
        .setIn(['popups', 'showRequestResetPassword'], true)                         
    }
    case REQUEST_RESET_PASSWORD_CLOSE: {
      return state
        .setIn(['popups', 'showRequestResetPassword'], false)                         
    }
    case FORM_RESET_PASSWORD_OPEN: {
      return state
        .setIn(['popups', 'formResetPassword'], true)                         
    }
    case FORM_RESET_PASSWORD_CLOSE: {
      return state
        .setIn(['popups', 'formResetPassword'], false)                         
    }
    default:
      return state;
  }
}

export default reducer;