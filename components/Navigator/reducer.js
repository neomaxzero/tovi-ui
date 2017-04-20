import { TOGGLE_LOGIN, SET_LOGIN } from  '~/components/constants';
import { fromJS } from 'immutable';

const InitialState = fromJS({
  showLogin: true,
  login: {
    email: '',   
    password: '',
    remember: false,
  },
});

const toggler = (state) => (state.set('showLogin', !state.get('showLogin')))

const reducer = (state = InitialState, action) => {  
  switch(action.type) {
    case TOGGLE_LOGIN: {
      return toggler(state);
    }
    case SET_LOGIN: {
      return toggler(state);
    }
      break;
    default:
      return state;
  }
}

export default reducer;