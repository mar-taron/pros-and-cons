import config from '../conf';
import { apiClient } from '../utils/apiClient';
import { GROUP_REQUEST, GROUP_SUCCESS, GROUP_FAILURE } from '../constants';

const fetchGroupRequest = () => ({
  type: GROUP_REQUEST,
});

const fetchGroupSuccess = groupId => ({
  type: GROUP_SUCCESS,
  payload: {
    groupId,
  },
});

const fetchGroupFailure = message => ({
  type: GROUP_FAILURE,
  payload: {
    message,
  },
  error: true,
});

/* eslint-disable import/prefer-default-export */
export const fetchGroup = () => dispatch => {
  dispatch(fetchGroupRequest());
  apiClient()
    .get(config.api.group)
    .then(({ data }) => {
      const { groupId } = data;
      dispatch(fetchGroupSuccess(groupId));
    })
    .catch(err => {
      const msg = err.message ? err.message : 'Unknown Server Error';
      dispatch(fetchGroupFailure(msg));
    });
};
/* eslint-enable */
