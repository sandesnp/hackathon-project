import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const productGetThunk = createAsyncThunk(
  'product/get',
  async (token = '', { rejectWithValue }) => {
    try {
      const response = await axios.get(
        'https://dtchackathon.herokuapp.com/api/v1/product/',
        { headers: { Authorization: `Bearer ${token}` } }
      );
      const allProduct = response.data;
      return allProduct;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
export const productRegisterThunk = createAsyncThunk(
  'product/register',
  async ({ token = '', product = {} }, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        'https://dtchackathon.herokuapp.com/api/v1/product/',
        product,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const registeredProduct = response.data;
      return registeredProduct;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
export const productGetSingleThunk = createAsyncThunk(
  'product/get',
  async (token = '', { rejectWithValue }) => {
    console.log(token);
    try {
      const response = await axios.get(
        'https://dtchackathon.herokuapp.com/api/v1/product/',
        { headers: { Authorization: `Bearer ${token}` } }
      );
      const allProduct = response.data;
      return allProduct;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const initialState = {
  data: {
    allProduct: [],
  },
  error: '',
};

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    PURGE: () => initialState,
  },
  extraReducers: (builders) => {
    builders.addCase(productGetThunk.fulfilled, (state, action) => {
      //gettting all products from api after request is fulfilled
      return { ...state, data: { ...state.data, allProduct: action.payload } };
    });
    builders.addCase(productGetThunk.rejected, (state, action) => {
      state.error = action.payload;
    });
    builders.addCase(productRegisterThunk.fulfilled, (state, action) => {
      //gettting all products from api after request is fulfilled
      return state;
    });
    builders.addCase(productRegisterThunk.rejected, (state, action) => {
      state.error = action.payload;
    });
  },
});

export const { PURGE } = productSlice.actions;

export default productSlice.reducer;
