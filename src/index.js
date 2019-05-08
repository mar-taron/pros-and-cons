import { createBrowserHistory } from 'history';
import configureStore from './store/configureStore';
import { bootstrap } from './bootstrap';
import './__assets/css/styles.css';

/* eslint-disable import/prefer-default-export */
export const history = createBrowserHistory();
/* eslint-enable */
const target = document.getElementById('root');

/* eslint-disable no-underscore-dangle */
export const store = configureStore(history, window.__INITIAL_STATE__);
/* eslint-enable */

bootstrap({ store, history, target });
