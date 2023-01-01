import { all, fork } from 'redux-saga/effects';
import catalogSaga from './catalog/sagas';

export default function* rootSaga() {
  yield all([fork(catalogSaga)]);
}
