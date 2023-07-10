import { call, put, takeLatest } from 'redux-saga/effects';
import { postsActions } from 'redux/actions';
import { Posts } from 'redux/constants/postsConstant';
import capitalizeString from 'utils/functions/capitalizeString';
import JSONAPI from './JSONAPI';
import NFTAPI from './NFTAPI';
const { getPostsSuccess, getPostsError } = postsActions;

function* getPostsDataSaga(action) {
  try {
    const userId = action.payload;
    let query = userId ? '?userId=' + userId : '';

    let postsResponse = yield call(
      () => JSONAPI.get('posts' + query),
      action.payload,
    );

    if (postsResponse.status !== 200) {
      throw postsResponse.data;
    } else {
      postsResponse = postsResponse.data;
    }

    query = `?limit=${postsResponse.length}`;

    let imagesResponse = yield call(() => NFTAPI.get(query), action.payload);

    if (imagesResponse.status !== 200) {
      throw imagesResponse.data;
    } else {
      imagesResponse = imagesResponse.data.assets.sort(
        () => 0.5 - Math.random(),
      );
    }

    const posts = userId
      ? {
          userPosts: postsResponse.map((item) => {
            return {
              ...item,
              title: capitalizeString(item.title),
              body: capitalizeString(item.body),
            };
          }),
        }
      : {
          posts: postsResponse.map((item, index) => {
            let imageUrl =
              imagesResponse[index]?.image_url ||
              imagesResponse[index]?.collection?.image_url ||
              '';
            imageUrl = imageUrl.replace(/\?.*/, '');
            return {
              ...item,
              title: capitalizeString(item.title),
              body: capitalizeString(item.body),
              avatar: imageUrl,
            };
          }),
        };

    yield put(getPostsSuccess(posts));
  } catch (e) {
    yield put(getPostsError(e));
  }
}

export function* getPostsData() {
  yield takeLatest(Posts.getPosts, getPostsDataSaga);
}
