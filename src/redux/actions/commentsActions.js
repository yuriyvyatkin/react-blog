import { Comments } from 'redux/constants/commentsConstant';

export const getComments = (postId) => {
  return {
    type: Comments.getComments,
    payload: postId,
  };
};

export const getCommentsSuccess = (data) => {
  return {
    type: Comments.getCommentsSuccess,
    payload: data,
  };
};

export const getCommentsError = (data) => {
  return {
    type: Comments.getCommentsError,
    payload: data,
  };
};
