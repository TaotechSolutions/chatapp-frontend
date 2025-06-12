import { createSlice } from "@reduxjs/toolkit";
import {
  loginUser,
  registerUser,
  logoutUser,
  setUserFromCookie,
} from "./authActions";

const userFromStorage = localStorage.getItem("rememberMe") === "true"
  ? JSON.parse(localStorage.getItem("user"))
  : null;

const initialState = {
  user: userFromStorage,
  loading: false,
  error: null,
  isAuthenticated: !!userFromStorage,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // LOGIN
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
        state.isAuthenticated = true;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // REGISTER
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
        state.isAuthenticated = true;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // LOGOUT
      .addCase(logoutUser.fulfilled, (state) => {
        state.user = null;
        state.isAuthenticated = false;
        state.loading = false;
        state.error = null;
      })
      .addCase(logoutUser.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      })

      // SET USER FROM COOKIE
      .addCase(setUserFromCookie.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(setUserFromCookie.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
        state.isAuthenticated = true;
      })
      .addCase(setUserFromCookie.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.isAuthenticated = false;
      });
  },
});

export default authSlice.reducer;
