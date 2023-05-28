import { all } from 'redux-saga/effects';
import { getPostsData } from './getPostsDataSaga';

export default function* rootSaga() {
  yield all([getPostsData()]);
}
