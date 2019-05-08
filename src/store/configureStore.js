import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { applyMiddleware, createStore } from 'redux';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import { composeWithDevTools } from 'redux-devtools-extension/logOnlyInProduction';
import rootReducer from '../reducers';

export default function configureStore(baseHistory, initialState) {
  connectRouter(baseHistory);

  const middleWares = [routerMiddleware(baseHistory), thunk];
  middleWares.push(createLogger());

  const middleware = composeWithDevTools(applyMiddleware(...middleWares));

  const store = createStore(rootReducer, initialState, middleware);

  if (module.hot) {
    module.hot.accept('../reducers', () => store.replaceReducer(rootReducer));
  }

  return store;
}
