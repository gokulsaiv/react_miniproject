import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
export const getPosts = createAsyncThunk("", async (query) => {
  let Url;
  if (query.length > 0) {
    Url = `https://jsonplaceholder.typicode.com/posts?q=${query}`;
  } else {
    Url = "https://jsonplaceholder.typicode.com/posts";
  }
  try {
    const ReadData = await axios.get(Url);

    return ReadData.data;
  } catch (e) {
    console.error(e);
  }
});
