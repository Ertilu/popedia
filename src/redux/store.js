import { createStore, applyMiddleware, compose } from 'redux';

import createMiddlewares from './middlewares';

function configureStore(initialState = {}) {

  const middlewares = [...createMiddlewares];

  const enhancers = [applyMiddleware(...middlewares)];

  const composeEnhancers =
    process.env.NODE_ENV !== 'production' &&
      typeof window === 'object' &&
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
      : compose;

  const store = createStore(
    composeEnhancers(...enhancers),
  );


  return {
    store
  };

}

const initialState = {};
const { store } = configureStore(initialState);

export { store }
