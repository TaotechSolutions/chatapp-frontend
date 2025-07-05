import { createAsyncThunk } from '@reduxjs/toolkit';
import authApi from '../../api/authApi';
import { LOGIN, REGISTER, LOGOUT, SET_USER_FROM_COOKIE } from './authTypes';
import { clearInMemoryToken } from '../../utils/authToken';

export const loginUser = createAsyncThunk(
  LOGIN,
  async ({ email, password, rememberMe }, thunkAPI) => {
    try {
      const res = await authApi.post(LOGIN, { email, password, rememberMe });
      const user = res.data.data.user;

      localStorage.setItem('user', JSON.stringify(user));

      return user;
    } catch (err) {
      return thunkAPI.rejectWithValue(
        err.response?.data?.message || 'Login failed',
      );
    }
  },
);

export const registerUser = createAsyncThunk(
  REGISTER,
  async ({ name, email, password }, thunkAPI) => {
    try {
      const res = await authApi.post(REGISTER, { name, email, password });
      return res.data.user;
    } catch (err) {
      return thunkAPI.rejectWithValue(
        err.response?.data?.message || 'Registration failed',
      );
    }
  },
);

export const logoutUser = createAsyncThunk(LOGOUT, async (_, thunkAPI) => {
  try {
    await authApi.post(LOGOUT);
    localStorage.removeItem('user');
    clearInMemoryToken();
    return null;
  } catch (err) {
    return thunkAPI.rejectWithValue(
      err.response?.data?.message || 'Logout failed',
    );
  }
});

export const setUserFromCookie = createAsyncThunk(
  SET_USER_FROM_COOKIE,
  async (_, thunkAPI) => {
    try {
      const res = await authApi.get('/user');
      const user = res.data.data;

      localStorage.setItem('user', JSON.stringify(user));

      return user;
    } catch (err) {
      return thunkAPI.rejectWithValue(
        err.response?.data?.message || 'Fetching user from cookie failed',
      );
    }
  },
);
