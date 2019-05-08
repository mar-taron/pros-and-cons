import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/containers/Root';

/**
 * Bootstraps the app for a dev environment
 * @param store Redux store
 * @param history Browser history
 * @param target Dom node to mount the app
 */
export const bootstrap = ({ store, history, target }) => {
  ReactDOM.render(<Root history={history} store={store} />, target);
};
