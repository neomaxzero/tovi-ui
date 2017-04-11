import { TOGGLE_LOGIN } from  '~/components/constants';
import { fromJS } from 'immutable';

const InitialState = fromJS({
  showLogin: false,
});


const reducer = (state = InitialState, action) => {
  switch (action) {
    case TOGGLE_LOGIN: {
      console.log('KIASDKIQWEKIKEIWQIE');
      console.log(state.get('showLogin'))
      return state.set('showLogin', !state.get('showLogin'));
    }
      break;
    default:
      return state;
  }
}

export default reducer;