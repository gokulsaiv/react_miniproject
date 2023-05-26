import { configureStore } from "@reduxjs/toolkit";
import { PostSlice } from "../Reducers/reducers";
export const PostStore = configureStore({
  reducer: {
    posts: PostSlice.reducer,
  },
});
