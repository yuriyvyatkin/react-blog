import { call, put, takeLatest } from 'redux-saga/effects';
import { postsActions } from 'redux/actions';
import { Posts } from 'redux/constants/postsConstant';
import API from './API';
const { getPostsSuccess, getPostsError } = postsActions;

function* getPostsDataSaga(action) {
  try {
    const userId = action.payload;
    let query = userId ? '?userId=' + userId : '';

    const postsResponse = yield call(
      () => API.get('posts' + query),
      action.payload,
    );

    console.log(postsResponse);

    if (postsResponse.status !== 200) {
      throw postsResponse.data;
    }

    const posts = userId
      ? { userPosts: postsResponse.data }
      : { posts: postsResponse.data };

    yield put(getPostsSuccess(posts));
  } catch (e) {
    yield put(getPostsError(e));
  }
}

export function* getPostsData() {
  yield takeLatest(Posts.getPosts, getPostsDataSaga);
}
