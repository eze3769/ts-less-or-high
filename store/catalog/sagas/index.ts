import { all, call, fork, put, takeEvery } from 'redux-saga/effects';
import { getProductsList } from '../../../sdk/catalog';

import * as actionCreators from '../action-creators';
import * as actionTypes from '../action-types';

function* onLoadCatalog() {
  try {
    yield put(actionCreators.getCatalogRequest());
    const response = yield call(getProductsList);
    yield put(actionCreators.getCatalogSuccess(response.results));
  } catch (error: any) {
    yield put(actionCreators.getCatalogFailure(error));
  }
}

function* watchOnLoadCatalog() {
  yield takeEvery(actionTypes.GET_CATALOG, onLoadCatalog);
}

export default function* catalogSaga() {
  yield all([fork(watchOnLoadCatalog)]);
}
