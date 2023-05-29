import { all } from 'redux-saga/effects';
import { getPostsData } from './getPostsDataSaga';
import { watchToggleComments } from './toggleCommentsSaga';

export default function* rootSaga() {
  yield all([getPostsData(), watchToggleComments()]);
}
