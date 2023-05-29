import { call, put, takeLatest } from 'redux-saga/effects';
import { postsActions } from 'redux/actions';
import { Posts } from 'redux/constants/postsConstant';
import API from './API';
const { getPostsSuccess, getPostsError } = postsActions;

function* getPostsDataSaga(action) {
  try {
    const postsResponse = yield call(() => API.get('/posts'), action.payload);

    if (postsResponse.status !== 200) {
      throw postsResponse.data;
    }

    const usersResponse = yield call(() => API.get('/users'), action.payload);

    if (usersResponse.status !== 200) {
      throw usersResponse.data;
    }

    yield put(getPostsSuccess({ posts: postsResponse.data, users: usersResponse.data }));
  } catch (e) {
    yield put(getPostsError(e));
  }
}

export function* getPostsData() {
  yield takeLatest(Posts.getPosts, getPostsDataSaga);
}