import { Posts } from 'redux/constants/postsConstant';

const initialState = {
  loading: false,
  data: null,
  dataChunk: null,
  error: null,
};

export const postsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case Posts.getPosts:
      return { ...state, loading: true, error: null };
    case Posts.getPostsSuccess:
      const posts = payload.posts.map((item) => {
        const randomUser =
          payload.users[Math.floor(Math.random() * payload.users.length)];
        return { ...item, user: randomUser };
      });
      return { ...state, loading: false, data: posts };
    case Posts.getPostsError:
      return { ...state, loading: false, error: payload };
    case Posts.setPostsChunk:
      return { ...state, dataChunk: payload };
    default:
      return state;
  }
};
