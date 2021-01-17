import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { Post } from "../../../../shared/types";
import * as api from "api";

interface PostsState {
  data: Post[];
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
    const response = await api.createPost(post);
    return response.data;
  }
);

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchPosts.rejected, (state, action) => {
      state.error = "Error while fetching posts";
    });
    builder.addCase(fetchPosts.pending, (state, action) => {
      state.loading = "pending";
    });
    builder.addCase(fetchPosts.fulfilled, (state, action) => {
      state.data = action.payload;
      state.loading = "succeeded";
    });
    builder.addCase(createPost.fulfilled, (state, action) => {
      state.data.push(action.payload);
    });
  },
});

export default postsSlice.reducer;
