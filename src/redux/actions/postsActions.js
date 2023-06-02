import { Posts } from 'redux/constants/postsConstant';

export const getPosts = (data) => {
  return {
    type: Posts.getPosts,
    payload: data,
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

export const deletePostsChunk = () => {
  return {
    type: Posts.deletePostsChunk,
  };
};

export const filterPostsByTitle = (data) => {
  return {
    type: Posts.filterPostsByTitle,
    payload: data,
  };
};

export const sortPosts = (data) => {
  return {
    type: Posts.sortPosts,
    payload: data,
  };
};
