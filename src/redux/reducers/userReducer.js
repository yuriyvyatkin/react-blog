import { User } from 'redux/constants/userConstant';

const initialState = {
  loading: false,
  error: null,
  data: null,
};

export const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case User.getUser:
      return { ...state, loading: true, error: null };
    case User.getUserSuccess:
      return { ...state, loading: false, data: payload };
    case User.getUserError:
      return { ...state, loading: false, error: payload };
    case User.deleteUserData:
      return { ...state, data: null };
    default:
      return state;
  }
};
