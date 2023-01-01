import { applyMiddleware, combineReducers, createStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import catalogReducer from './catalog/reducer';

import rootSaga from './sagas';
import errorReducer from './ui/error.ts/reducer';
import isLoadingReducer from './ui/loading/reducer';

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
  catalog: catalogReducer,
  isLoading: isLoadingReducer,
  error: errorReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

const configureStore = () => {
  const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
  sagaMiddleware.run(rootSaga);
  return store;
};

export default configureStore;
