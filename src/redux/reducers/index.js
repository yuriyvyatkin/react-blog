import { combineReducers } from 'redux';
import { postsReducer } from './postsReducer';
import { commentsReducer } from './commentsReducer';
import { userReducer } from './userReducer';

const rootReducer = combineReducers({
  posts: postsReducer,
  comments: commentsReducer,
  user: userReducer,
});

export default rootReducer;
