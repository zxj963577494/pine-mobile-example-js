import { applyMiddleware, compose, createStore, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import * as reducers from '@/models';

const composedEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware));

const createRootReducer = () =>
  combineReducers({
    ...reducers,
  });

export default function configureStore(preloadedState) {
  const store = createStore(createRootReducer(), preloadedState, compose(composedEnhancer));

  return store;
}
