import { fromJS } from 'immutable';

const InitialState = fromJS({
  user: '',
});

const reducer = (state = InitialState, action) => {
  switch (action) {
    case 'TEST':
      return state.set('user', 'maxi');
      break;
    default:
      return state;
  }
}

export default reducer;