import { all, takeLatest } from 'redux-saga/effects';

import { signIn, logout } from './auth/sagas';

import { AuthUserTypes } from './auth/types';

export default function* rootSaga() {
  return yield all([
    takeLatest(AuthUserTypes.LOAD_REQUEST, signIn),
    takeLatest(AuthUserTypes.LOAD_FAILURE, logout),
  ]);
}
