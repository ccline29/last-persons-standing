// Importing the createSlice function from the "@reduxjs/toolkit" package
import { createSlice } from '@reduxjs/toolkit';

// Defining the initial state of the auth slice of the Redux store
const initialState = {
  mode: 'light',
  user: null,
  token: null,
  posts: [],
};

// Creating the auth slice using createSlice
export const authSlice = createSlice({
  name: 'auth',
  initialState, 
  reducers: {
    // Defining reducer functions to update the state
    setMode: (state) => {
      state.mode = state.mode === 'light' ? 'dark' : 'light'; 
    },
    setLogin: (state, action) => {
      state.user = action.payload.user; 
      state.token = action.payload.token; 
    },
    setLogout: (state) => {
      state.user = null; 
      state.token = null; 
    },
    setFriends: (state, action) => {
      if (state.user) {
        state.user.friends = action.payload.friends; 
      } else {
        console.error('user friends does not exists'); 
      }
    },
    setPosts: (state, action) => {
      state.posts = action.payload.posts; 
    },
    setPost: (state, action) => {
      const updatedPosts = state.posts.map((post) => {
        if (post._id === action.payload.post._id) return action.payload.post; 
        return post;
      });
      state.posts = updatedPosts; 
    },
  },
});

// Exporting the reducer functions as actions
export const { setMode, setLogin, setLogout, setFriends, setPosts, setPost } =
  authSlice.actions;

// Exporting the auth reducer function to use in the Redux store
export default authSlice.reducer;
