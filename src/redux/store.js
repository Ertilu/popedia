/**
 * Create the store with dynamic reducers
 */

import { createStore, applyMiddleware, compose } from 'redux';

// import AsyncStorage from '@react-native-community/async-storage';

import createReducer from './reducers';
import createMiddlewares from './middlewares';

function configureStore(initialState = {}) {
  // Create the store with two middlewares
  // 2. routerMiddleware: Syncs the location/URL path to the state
  const middlewares = [...createMiddlewares];

  const enhancers = [applyMiddleware(...middlewares)];

  // If Redux DevTools Extension is installed use it, otherwise use Redux compose
  /* eslint-disable no-underscore-dangle, indent */
  const composeEnhancers =
    process.env.NODE_ENV !== 'production' &&
      typeof window === 'object' &&
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
      : compose;
  /* eslint-enable */


  const store = createStore(
    composeEnhancers(...enhancers),
  );


  return {
    store
  };

}

// Create redux store with history
const initialState = {};
const { store } = configureStore(initialState);

export { store }
