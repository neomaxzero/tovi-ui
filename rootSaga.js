import { fork } from 'redux-saga/effects';
import { logoutSaga } from '~/components/Orphan/Login/sagas';
// import { activationSaga } from '~/components/Orphan/Global/sagas';

export default function * root() {
  yield fork(logoutSaga);
  // yield fork(activationSaga);
}