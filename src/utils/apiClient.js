import axios from 'axios';
import config from '../conf';

export const apiClient = () => {
  let client = null;
  try {
      client = axios.create({
        baseURL: config.xhr.baseURL,
        headers: {
          ...config.xhr.headers
        },
      });
  } catch (err) {
    console.error(err);
  }
  return client;
};
