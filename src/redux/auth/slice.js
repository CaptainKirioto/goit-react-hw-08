import { createSlice } from "@reduxjs/toolkit";
import { login, logout, refreshUser, register } from "./operations";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: {
      name: null,
      email: null,
    },
    token: null,
    isLoggedIn: false,
    isRefreshing: false,
  },
  extraReducers: (builder) => {
    builder
      .addCase(register.pending, () => console.log("Registration is pending!"))
      .addCase(register.fulfilled, (state, action) => {
        state.isLoggedIn = true;
        state.user = action.payload.user;
        state.token = action.payload.token;
        console.log("Registration is successful!");
      })
      .addCase(register.rejected, (state, action) => {
        console.error("Error:", action.payload);
      })
      .addCase(login.pending, () => {
        console.log("Login is pending!");
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoggedIn = true;
        state.user = action.payload.user;
        state.token = action.payload.token;
        console.log("Login is successful!");
      })
      .addCase(login.rejected, (state, action) => {
        console.error("Error:", action.payload);
      })
      .addCase(logout.pending, () => {
        console.log("Logout is successful!");
      })
      .addCase(logout.fulfilled, (state) => {
        state.isLoggedIn = false;
        state.user = {
          name: null,
          email: null,
        };
        state.token = null;
      })
      .addCase(logout.rejected, (state, action) => {
        console.error("Error:", action.payload);
      })
      .addCase(refreshUser.pending, (state) => {
        state.isRefreshing = true;
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      });
  },
});

export const authReducer = authSlice.reducer;
