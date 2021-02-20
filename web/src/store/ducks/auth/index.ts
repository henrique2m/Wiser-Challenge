import { Reducer } from 'redux';

import { AuthUserState, AuthUserTypes } from './types';

const INITIAL_STATE: AuthUserState = {
  data: null,
  error: false,
  loading: false,
};

const reducer: Reducer<AuthUserState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case AuthUserTypes.LOAD_REQUEST:
      return { ...state, loading: true };
    case AuthUserTypes.LOAD_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        data: action.payload.data,
      };
    case AuthUserTypes.LOAD_FAILURE:
      return {
        ...state,
        loading: false,
        error: true,
        data: null,
      };

    case AuthUserTypes.LOGOUT:
      return {
        loading: false,
        error: false,
        data: null,
      };

    default:
      return state;
  }
};

export default reducer;
