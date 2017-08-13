import { fork } from 'redux-saga/effects';
import { logoutSaga } from '~/components/Orphan/Login/sagas';

export default function * root() {
  yield fork(logoutSaga);
}