import { createSlice } from "@reduxjs/toolkit";
import { getPosts, seachPost } from "../Services/PostService";
export const PostSlice = createSlice({
  name: "posts",
  initialState: {
    count: 10,
    posts: [],
  },
  reducers: {
    increment(state, action) {
      state.count++;
    },
    decrement(state, action) {
      state.count++;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getPosts.fulfilled, (state, action) => {
      state.posts = [...action.payload];
    });
  },
});
export const postActions = PostSlice.actions;
