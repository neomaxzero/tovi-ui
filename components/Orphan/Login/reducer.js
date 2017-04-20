import { SET_LOGIN } from  '~/components/constants';
import { fromJS } from 'immutable';

const InitialState = fromJS({
  loginInfo: {},
});


const reducer = (state = InitialState, action) => {  
  switch(action.type) {
    case SET_LOGIN: {
      return state
        .set('loginInfo', fromJS(action.loginInfo))
        .set('provider', fromJS(action.provider))
    }
      break;
    default:
      return state;
  }
}

export default reducer;