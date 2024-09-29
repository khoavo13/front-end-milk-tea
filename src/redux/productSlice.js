// src/features/auth/authSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from '../utils/axiosInstance';
import axios from 'axios';

// Thay đổi URL và cấu hình phù hợp với API của bạn
const API_URL = "http://localhost:8080/api";

export const uploadImage= createAsyncThunk('pro/uploadImage', async ({id,formData},thunkAPI) => {
  const url= API_URL+`/products/uploads/${id}`;
  try {
    const response = await axiosInstance.post(url, formData,{
      headers: {
        'Content-Type': 'multipart/form-data' // Đặt Content-Type cho yêu cầu upload
      }
    });
    return response.data; // Trả về dữ liệu từ phản hồi
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data); // Trả về lỗi nếu có
  }
});

export const getAllProductDetail = createAsyncThunk('pro/getAllProductDetail', async (id,thunkAPI) => {
  const url= `/products/productDetail/${id}`;
  try {
    const response = await axiosInstance.get(url);
    return response.data; // Trả về dữ liệu từ phản hồi
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data); // Trả về lỗi nếu có
  }
});

export const getAllProducts= createAsyncThunk('product/getAllProducts', async (thunkAPI) => {
  const url= API_URL +`/products`;
  try {
    const response = await axios.get(url);
    return response.data; // Trả về dữ liệu từ phản hồi

  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data); // Trả về lỗi nếu có
  }
});
export const addNewProduct= createAsyncThunk('pro/addNewProduct', async (product,thunkAPI) => {
  const url= `/products`;
  try {
    const response = await axiosInstance.post(url,product);
    return response.data; // Trả về dữ liệu từ phản hồi
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data); // Trả về lỗi nếu có
  }
});

export const editProduct= createAsyncThunk('pro/editProduct', async ({id,product},thunkAPI) => {
  const url= `/products/${id}`;
  try {
    console.log(product)
    const response = await axiosInstance.put(url,product);
    return response.data; // Trả về dữ liệu từ phản hồi
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data); // Trả về lỗi nếu có
  }
});

export const deleteProduct= createAsyncThunk('pro/deleteProduct', async (id,thunkAPI) => {
  const url= `/products/${id}`;
  try {
    const response = await axiosInstance.delete(url);
    return response.data; // Trả về dữ liệu từ phản hồi
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data); // Trả về lỗi nếu có
  }
});


const getFromLocalStorage = (key, defaultValue) => {
  const value = localStorage.getItem(key);
  return value ? JSON.parse(value) : defaultValue;
};

const productSlice = createSlice({
  name: 'product',
  initialState: {
    status: 'idle',
    error: null,
    products:null,
    productImageList: null,
    totalPages:0,
    productDetails:null
  },
  reducers: {
   
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllProducts.fulfilled, (state, action) => {
        state.productImageList = action.payload.data
        state.message=action.payload.message
        state.status=action.payload.status
      })
      .addCase(getAllProducts.rejected, (state, action) => {
        state.status=action.payload.status
        state.message=action.payload.message
        state.error=action.payload.data
      })
  },
});

export default productSlice.reducer;