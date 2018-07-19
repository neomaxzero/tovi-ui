import { SET_LOGIN, LOGOUT } from '~/components/constants';
import { fromJS } from 'immutable';

const InitialState = fromJS({
  loginInfo: {},
});

const reducer = (state = InitialState, action) => {
  switch (action.type) {
    case SET_LOGIN: {
      return state.set('loginInfo', fromJS(action.loginInfo)).set('provider', fromJS(action.provider));
    }
    case LOGOUT:
      return InitialState;
    default:
      return state;
  }
};

export default reducer;
