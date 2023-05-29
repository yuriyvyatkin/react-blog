import { Comments } from 'redux/constants/commentsConstant';

const initialState = {
  loading: false,
  data: null,
  error: null,
  postId: null,
};

export const commentsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case Comments.getComments:
      return { ...state, loading: true, error: null, postId: payload };
    case Comments.getCommentsSuccess:
      return { ...state, loading: false, data: payload };
    case Comments.getCommentsError:
      return { ...state, loading: false, error: payload };
    default:
      return state;
  }
};
