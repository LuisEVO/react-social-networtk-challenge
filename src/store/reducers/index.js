import { combineReducers } from "redux";
import commentsReducer from "./comments.reducer";
import postsReducer from "./posts.reducer";

const reducers = combineReducers({
  posts: postsReducer,
  comments: commentsReducer
})

export default reducers;