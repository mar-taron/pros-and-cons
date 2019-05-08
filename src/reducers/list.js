import { createReducer } from '../utils';
import { LIST_REQUEST, LIST_SUCCESS, LIST_FAILURE, LIST_SAVE_REQUEST, LIST_SAVE_SUCCESS, LIST_SAVE_FAILURE } from '../constants';

const initialState = {
  isListFetching: false,
  isListUpdating: false,
  data: {},
  errorMsg: null,
};

export default createReducer(initialState, {
  [LIST_REQUEST]: state => ({
    ...state,
    isListFetching: true,
    errorMsg: null,
  }),
  [LIST_SUCCESS]: (state, { data }) => ({
    ...state,
    isListFetching: false,
    data,
    errorMsg: null,
  }),
  [LIST_FAILURE]: (state, { message }) => ({
    ...state,
    isListFetching: false,
    errorMsg: message,
  }),  
  [LIST_SAVE_REQUEST]: state => ({
    ...state,
    isListUpdating: true,
    errorMsg: null,
  }),
  [LIST_SAVE_SUCCESS]: (state, { data }) => ({
    ...state,
    isListUpdating: false,
    data: data,
    errorMsg: null,
  }),
  [LIST_SAVE_FAILURE]: (state, { message }) => ({
    ...state,
    isListUpdating: false,
    errorMsg: message,
  }),
});
