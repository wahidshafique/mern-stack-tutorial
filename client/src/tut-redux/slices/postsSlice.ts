import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "api";

interface PostsState {
  data: string[];
  loading: "idle" | "pending" | "succeeded" | "failed";
  error: string;
}
const initialState = {
  data: [],
  loading: "idle",
  error: "",
} as PostsState;

export const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
  const response = await api.fetchPosts();
  return response.data;
});

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
  },
});

export default postsSlice.reducer;
