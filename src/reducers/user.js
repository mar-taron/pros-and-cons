import { createReducer } from '../utils';
import { USER_REQUEST, USER_SUCCESS, USER_FAILURE } from '../constants';

const initialState = {
  isUserFetching: false,
  userId: null,
  errorMsg: null,
};

export default createReducer(initialState, {
  [USER_REQUEST]: state => ({
    ...state,
    isUserFetching: true,
    errorMsg: null,
  }),
  [USER_SUCCESS]: (state, { userId }) => ({
    ...state,
    isUserFetching: false,
    userId,
    errorMsg: null,
  }),
  [USER_FAILURE]: (state, { message }) => ({
    ...state,
    isUserFetching: false,
    errorMsg: message,
  }),
});
