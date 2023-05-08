import { createSlice } from "@reduxjs/toolkit";
import httpClient from "@shared/api/config";

const initialState = {
  loading: false,
  items: [],
  error: null,
};

const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setPosts: (state, action) => {
      state.loading = false;
      state.items = action.payload;
    },
    setError: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { setPosts, setLoading } = postSlice.actions;
export default postSlice.reducer;

// selectors
export const selectPosts = (state) => {
  console.log({ post: state.posts });
  return state.posts.items;
};
export const selectPostLoading = (state) => state.posts.loading;

// thunk action

export const fetchPosts = () => async (dispatch) => {
  try {
    dispatch(postSlice.actions.setLoading(true));
    const posts = await httpClient.get("posts");
    dispatch(postSlice.actions.setPosts(posts));
  } catch (error) {
    dispatch(postSlice.actions.setError(error));
  }
};
