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

const initialState = {
  data: {},
  error: '',
};

const authSlice = createSlice({
  name: 'login',
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
  },
});

export const { PURGE } = authSlice.actions;

export default authSlice.reducer;
