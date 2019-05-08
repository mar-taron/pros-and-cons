import { createReducer } from '../utils';
import { GROUP_REQUEST, GROUP_SUCCESS, GROUP_FAILURE } from '../constants';

const initialState = {
  isGroupFetching: false,
  groupId: null,
  errorMsg: null,
};

export default createReducer(initialState, {
  [GROUP_REQUEST]: state => ({
    ...state,
    isGroupFetching: true,
    errorMsg: null,
  }),
  [GROUP_SUCCESS]: (state, { groupId }) => ({
    ...state,
    isGroupFetching: false,
    groupId,
    errorMsg: null,
  }),
  [GROUP_FAILURE]: (state, { message }) => ({
    ...state,
    isGroupFetching: false,
    errorMsg: message,
  }),
});
