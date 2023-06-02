import { User } from 'redux/constants/userConstant';

export const getUser = (data) => {
  return {
    type: User.getUser,
    payload: data,
  };
};

export const getUserSuccess = (data) => {
  return {
    type: User.getUserSuccess,
    payload: data,
  };
};

export const getUserError = (data) => {
  return {
    type: User.getUserError,
    payload: data,
  };
};

export const deleteUserData = () => {
  return {
    type: User.deleteUserData,
  };
};
