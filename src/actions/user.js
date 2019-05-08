import config from '../conf';
import { apiClient } from '../utils/apiClient';
import { USER_REQUEST, USER_SUCCESS, USER_FAILURE } from '../constants';

const fetchUserRequest = () => ({
  type: USER_REQUEST,
});

const fetchUserSuccess = userId => ({
  type: USER_SUCCESS,
  payload: {
    userId,
  },
});

const fetchUserFailure = message => ({
  type: USER_FAILURE,
  payload: {
    message,
  },
  error: true,
});

/* eslint-disable import/prefer-default-export */
export const fetchUser = () => dispatch => {
  dispatch(fetchUserRequest());
  apiClient()
    .get(config.api.user)
    .then(({ data }) => {
      const { userId } = data;
      dispatch(fetchUserSuccess(userId));
    })
    .catch(err => {
      const msg = err.message ? err.message : 'Unknown Server Error';
      dispatch(fetchUserFailure(msg));
    });
};
/* eslint-enable */
