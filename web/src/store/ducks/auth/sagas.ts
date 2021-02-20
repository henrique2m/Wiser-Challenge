import { call, put } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '../../../services/api';

import { loadSuccess, loadFailure, loadRequest, exit } from './actions';

export function* signIn({ payload }: ReturnType<typeof loadRequest>) {
  const { email, password } = payload.data;

  const response = yield call(
    api.get,
    `users?email=${email}&password=${password}`,
  );

  const userData = response.data;

  if (userData.length === 1) {
    delete userData[0].password;

    toast.success(`Seja bem-vindo ${userData[0].name}!!!`);
    yield put(loadSuccess(userData[0]));
    return;
  }

  toast.error('Verifique suas credenciais e tente novamente.');

  yield put(loadFailure());
}

export function* logout() {
  yield put(exit());
}
