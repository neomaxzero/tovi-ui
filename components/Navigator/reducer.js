import { TOGGLE_LOGIN } from  '~/components/constants';
import { fromJS } from 'immutable';

const InitialState = fromJS({
  showLogin: true,
  login: {
    email: '',   
    password: '',
    remember: false,
  },
});


const reducer = (state = InitialState, action) => {  
  switch(action.type) {
    case TOGGLE_LOGIN: {
      return state.set('showLogin', !state.get('showLogin'));
    }
      break;
    default:
      return state;
  }
}

export default reducer;