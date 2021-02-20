import { action } from 'typesafe-actions';

import { AuthUserTypes, AuthUserData, RequestAuthUser } from './types';

export const loadRequest = (data: RequestAuthUser) =>
  action(AuthUserTypes.LOAD_REQUEST, { data });

export const loadSuccess = (data: AuthUserData) =>
  action(AuthUserTypes.LOAD_SUCCESS, { data });

export const loadFailure = () => action(AuthUserTypes.LOAD_FAILURE);

export const exit = () => action(AuthUserTypes.LOGOUT);
