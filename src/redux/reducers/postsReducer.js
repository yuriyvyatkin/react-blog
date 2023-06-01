import { Posts } from 'redux/constants/postsConstant';

const initialState = {
  loading: false,
  error: null,
  data: null,
  filteredData: null,
  sortedData: null,
  dataChunk: null,
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
    case Posts.filterPostsByTitle:
      if (!payload) {
        return { ...state, filteredData: null };
      }

      const filteredPosts = state.data.filter((item) => item.title.includes(payload));
      return { ...state, filteredData: filteredPosts };
    case Posts.sortPosts:
      let actualData = state.filteredData || state.data;
      actualData = actualData.slice();
      let sortedData;

      if (payload === 'a-z') {
        sortedData = actualData.sort((a, b) => a.title.toUpperCase() > b.title.toUpperCase());
      } else if (payload === 'z-a') {
        sortedData = actualData.sort((a, b) => a.title.toUpperCase() < b.title.toUpperCase());
      } else {
        sortedData = null;
      }

      return { ...state, sortedData: sortedData };
    default:
      return state;
  }
};
