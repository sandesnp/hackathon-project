import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const loginThunk = createAsyncThunk(
  'auth/login',
  async (user = {}, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        'https://dtchackathon.herokuapp.com/api/v1/auth/login/',
        user
      );
      const loginToken = response.data;
      return loginToken;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const userRegisterThunk = createAsyncThunk(
  'user/register',
  async (user = {}, { rejectWithValue }) => {
    try {
      console.log(1, user);
      const response = await axios.post(
        'https://dtchackathon.herokuapp.com/api/v1/auth/register/',
        user
      );
      const userResponse = response.data;
      return userResponse;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const initialState = {
  data: {},
  error: '',
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    PURGE: () => initialState,
  },
  extraReducers: (builders) => {
    builders.addCase(loginThunk.fulfilled, (state, action) => {
      state.data = action.payload;
    });
    builders.addCase(loginThunk.rejected, (state, action) => {
      state.error = action.payload;
    });
    builders.addCase(userRegisterThunk.fulfilled, (state, action) => {
      state.data = action.payload;
    });
    builders.addCase(userRegisterThunk.rejected, (state, action) => {
      state.error = action.payload;
    });
  },
});

export const { PURGE } = authSlice.actions;

export default authSlice.reducer;
