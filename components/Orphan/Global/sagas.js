import {take, call, put, fork, race, select} from 'redux-saga/effects';
import { ACTIVATE_REQUEST, ACTIVATE_SUCCESS, ACTIVATE_FAIL } from '~/components/constants';
import { user } from '~/services/user';

function * logoutAct(provider) {

  //LOGOUT with facebook: http://stackoverflow.com/questions/10807122/how-can-i-force-a-facebook-access-token-to-expire
  
  // if (provider === PROVIDERS.FACEBOOK)  FB.logout(() => {
  //   console.info('User logout succesfully');
  // }); 
  Cookies.remove('token');

}

export function * activationSaga() {
  while(true) {
    const { code } = yield take(ACTIVATE_REQUEST);
    try {
      yield call(user.activate, code)
      yield put({ type: ACTIVATE_SUCCESS });
    } catch (e) {
      yield put({ type: ACTIVATE_FAIL });
      
    }
  }
}