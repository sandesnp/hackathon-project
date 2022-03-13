import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import axios from 'axios';

export const userGetThunk = createAsyncThunk(
  'user/get',
  async (token = '', { rejectWithValue }) => {
    try {
      const response = await axios.get(
        'https://dtchackathon.herokuapp.com/api/v1/user/detail/',
        { headers: { Authorization: `Bearer ${token}` } }
      );
      const user = response.data;
      return user;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const initialState = {
  data: {},
  error: '',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    PURGE: () => initialState,
  },
  extraReducers: (builders) => {
    builders.addCase(userGetThunk.fulfilled, (state, action) => {
      //since api returns required object reponse inside an array.
      state.data = action.payload;
    });
    builders.addCase(userGetThunk.rejected, (state, action) => {
      state.data = {};
      state.error = action.payload;
    });
  },
});

export const { PURGE } = userSlice.actions;

export default userSlice.reducer;
