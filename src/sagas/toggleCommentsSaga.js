import { call, put, takeLatest, select } from 'redux-saga/effects';
import { commentsActions } from 'redux/actions';
import { Comments } from 'redux/constants/commentsConstant';
import API from './API';

const { getCommentsSuccess, getCommentsError } = commentsActions;

function* toggleCommentsSaga(action) {
  try {
    const data = yield select((state) => state.comments.data);

    const samePost = data && action.payload === data[0].postId;

    if (data) {
      yield put(getCommentsSuccess(null));

      if (samePost) {
        return;
      }
    }

    const commentsResponse = yield call(() =>
      API.get(`/comments?postId=${action.payload}`),
    );

    if (commentsResponse.status !== 200) {
      throw commentsResponse.data;
    }

    yield put(getCommentsSuccess(commentsResponse.data));
  } catch (e) {
    yield put(getCommentsError(e));
  }
}

export function* watchToggleComments() {
  yield takeLatest(Comments.getComments, toggleCommentsSaga);
}
