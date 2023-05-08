import { combineReducers } from "@reduxjs/toolkit";

import todoReducer from "@features/todo/todoSlice";
import postSlice from "@features/posts/postSlice";

const rootReducer = combineReducers({
  todo: todoReducer,
  posts: postSlice,
});

export { rootReducer };
