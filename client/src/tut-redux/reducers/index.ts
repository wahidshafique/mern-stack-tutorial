import { combineReducers } from "redux";
import postsReducer from "../slices/postsSlice";

export const rootReducer = combineReducers({
  posts: postsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
