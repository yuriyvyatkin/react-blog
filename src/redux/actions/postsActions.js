import { Posts } from 'redux/constants/postsConstant';

export const getPosts = () => {
  return {
    type: Posts.getPosts
  };
};

export const getPostsSuccess = (data) => {
  return {
    type: Posts.getPostsSuccess,
    payload: data,
  };
};

export const getPostsError = (data) => {
  return {
    type: Posts.getPostsError,
    payload: data,
  };
};

export const setPostsChunk = (data) => {
  return {
    type: Posts.setPostsChunk,
    payload: data,
  };
};
