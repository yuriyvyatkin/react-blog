import { call, put, takeLatest } from 'redux-saga/effects';
import { userActions } from 'redux/actions';
import { User } from 'redux/constants/userConstant';
import API from './API';
const { getUserSuccess, getUserError } = userActions;

function* getUserDataSaga(action) {
  try {
    const userId = action.payload;
    const query = userId ? '?id=' + userId : '';

    const userResponse = yield call(() => API.get('/users' + query), action.payload);

    if (userResponse.status !== 200) {
      throw userResponse.data;
    }

    yield put(getUserSuccess(userResponse.data));
  } catch (e) {
    yield put(getUserError(e));
  }
}

export function* getUserData() {
  yield takeLatest(User.getUser, getUserDataSaga);
}
