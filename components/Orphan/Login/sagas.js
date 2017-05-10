import {take, call, put, fork, race, select} from 'redux-saga/effects';
import { LOGOUT } from '~/components/constants';
import { PROVIDERS } from './constants';
import { getProvider } from './selector';
import Cookies from 'js-cookie';

function * logoutAct(provider) {

  //LOGOUT with facebook: http://stackoverflow.com/questions/10807122/how-can-i-force-a-facebook-access-token-to-expire
  
  // if (provider === PROVIDERS.FACEBOOK)  FB.logout(() => {
  //   console.info('User logout succesfully');
  // }); 
  Cookies.remove('token');

}

export function * logoutSaga() {
  while(true) {
    const logout = yield take(LOGOUT);
    yield call(logoutAct, logout.provider);
  }
}