import { apiClient } from '../utils/apiClient';
import { LIST_REQUEST, LIST_SUCCESS, LIST_FAILURE, LIST_SAVE_REQUEST, LIST_SAVE_SUCCESS, LIST_SAVE_FAILURE } from '../constants';
import { ADD_KEY, UPDATE_KEY, REMOVE_KEY } from '../constants/keys';

const fetchListRequest = () => ({
  type: LIST_REQUEST,
});

const fetchListSuccess = data => ({
  type: LIST_SUCCESS,
  payload: {
    data,
  },
});

const fetchListFailure = message => ({
  type: LIST_FAILURE,
  payload: {
    message,
  },
  error: true,
});

const saveListRequest = () => ({
  type: LIST_SAVE_REQUEST,
});

const saveListSuccess = data => ({
  type: LIST_SAVE_SUCCESS,
  payload: {
    data,
  },
});

const saveListFailure = message => ({
  type: LIST_SAVE_FAILURE,
  payload: {
    message,
  },
  error: true,
});

const getRequestData = (data, listKey, value, actionType, index) => {
  const updateList = data[listKey];
  if (!data[listKey]) data[listKey] = []; 
  if (actionType === ADD_KEY) {
    updateList.push(value);
  } else if (actionType === UPDATE_KEY) {   
    updateList[index] = value;
  } else if (actionType === REMOVE_KEY) {
    updateList.splice(index, 1);
  }
  return data;
}

export const fetchList = (userId, groupId) => dispatch => {
  dispatch(fetchListRequest());
  const url = `/proscons/group/${groupId}/user/${userId}`;
  apiClient()
    .get(url)
    .then(({ data }) => {
      dispatch(fetchListSuccess(data));
    })
    .catch(err => {
      const msg = err.message ? err.message : 'Unknown Server Error';
      dispatch(fetchListFailure(msg));
    });
};

export const submitList = (listKey, value, actionType, index) => (dispatch, getState) => {
  dispatch(saveListRequest());
  const {user, group, list } = getState();
  const { userId } = user;
  const { groupId } = group;
  const { data } = list;
  const reqData = getRequestData(data, listKey, value, actionType, index);
  const url = `/proscons/group/${groupId}/user/${userId}`;
  apiClient()
    .put(url, reqData)
    .then(({ data }) => {
      dispatch(saveListSuccess(data));
    })
    .catch(err => {
      const msg = err.message ? err.message : 'Unknown Server Error';
      dispatch(saveListFailure(msg));
    });
};
