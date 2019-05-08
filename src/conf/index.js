/* eslint-env browser, node */

const {
  REACT_APP_URL_BASE_API,
} = process.env;

const config = {
  api: {
    group: '/group/applicant',
    user: '/user/applicant',
  },
  xhr: {
    baseURL: REACT_APP_URL_BASE_API,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json; charset=UTF-8',
    },
  },
};

export default config;
