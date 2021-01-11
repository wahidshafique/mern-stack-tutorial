import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { Post } from "../../../../shared/types";
import * as api from "api";

interface PostsState {
  data: string[];
  loading: "idle" | "pending" | "succeeded" | "failed";
  error: string;
}
const initialState: PostsState = {
  data: [],
  loading: "idle",
  error: "",
};

export const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
  const response = await api.fetchPosts();
  return response.data;
});

export const createPost = createAsyncThunk(
  "posts/createPost",
  async (post: Post) => {
    console.log("thunk create post data", post);
    const response = await api.createPost(post);
    console.log("response", response);
    return response.data;
  }
);

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchPosts.rejected, (state, action) => {
      console.log("STOP", state, action);
      state.error = "ahh";
    });
    builder.addCase(fetchPosts.fulfilled, (state, action) => {
      console.log("yay ", action.payload);
      state.data = action.payload;
    });
    builder.addCase(createPost.fulfilled, (state, action) => {
      state.data.push(action.payload);
    });
  },
});

export default postsSlice.reducer;
