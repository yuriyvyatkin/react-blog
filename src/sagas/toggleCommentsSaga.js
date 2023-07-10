import { call, put, takeLatest, select } from 'redux-saga/effects';
import { commentsActions } from 'redux/actions';
import { Comments } from 'redux/constants/commentsConstant';
import JSONAPI from './JSONAPI';

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

    let commentsResponse = yield call(() =>
      JSONAPI.get(`/comments?postId=${action.payload}`),
    );

    if (commentsResponse.status !== 200) {
      throw commentsResponse.data;
    } else {
      commentsResponse = commentsResponse.data.map((item) => {
        return {
          ...item,
          email: item.email.toLowerCase(),
        }
      })
    }

    yield put(getCommentsSuccess(commentsResponse));
  } catch (e) {
    yield put(getCommentsError(e));
  }
}

export function* watchToggleComments() {
  yield takeLatest(Comments.getComments, toggleCommentsSaga);
}
