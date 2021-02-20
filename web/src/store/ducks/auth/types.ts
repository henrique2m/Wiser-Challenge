export enum AuthUserTypes {
  LOAD_REQUEST = '@auth/LOAD_REQUEST',
  LOAD_SUCCESS = '@auth/LOAD_SUCCESS',
  LOAD_FAILURE = '@auth/LOAD_FAILURE',
  LOGOUT = '@auth/LOGOUT',
}

export interface RequestAuthUser {
  email: string;
  password: string;
}

export interface AuthUserData {
  id: string;
  name: string;
  email: string;
  token: string;
}

export interface AuthUserState {
  readonly data: AuthUserData | null;
  readonly loading: boolean;
  readonly error: boolean;
}
