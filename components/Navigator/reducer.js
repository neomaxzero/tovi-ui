import { TOGGLE_LOGIN, TOGGLE_SINGUP, SET_LOGIN } from '~/components/constants';
import { fromJS } from 'immutable';

const InitialState = fromJS({
  showLogin: false,
  showSignUp: false,
  login: {
    email: '',
    password: '',
    remember: false,
  },
});

const toggler = (state, field) => state.set(field, !state.get(field));

const reducer = (state = InitialState, action) => {
  switch (action.type) {
    case TOGGLE_LOGIN: {
      return toggler(state, 'showLogin').set('redirectKey', action.red);
    }
    case TOGGLE_SINGUP: {
      return toggler(state, 'showSignUp');
    }
    default:
      return state;
  }
};

export default reducer;
