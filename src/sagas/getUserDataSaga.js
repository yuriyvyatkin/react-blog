import { call, put, takeLatest } from 'redux-saga/effects';
import { userActions } from 'redux/actions';
import { User } from 'redux/constants/userConstant';
import JSONAPI from './JSONAPI';
const { getUserSuccess, getUserError } = userActions;

function* getUserDataSaga(action) {
  try {
    const userId = action.payload;
    const query = userId ? '?id=' + userId : '';

    let userResponse = yield call(() => JSONAPI.get('users' + query), action.payload);

    if (userResponse.status !== 200) {
      throw userResponse.data;
    } else {
      userResponse = userResponse.data.map((item) => {
        return {
          ...item,
          email: item.email.toLowerCase(),
          phone: item.phone.replace(/ .*/, ''),
        }
      })
    }

    yield put(getUserSuccess(userResponse));
  } catch (e) {
    yield put(getUserError(e));
  }
}

export function* getUserData() {
  yield takeLatest(User.getUser, getUserDataSaga);
}
