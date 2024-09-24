import { createSlice } from "@reduxjs/toolkit";
import { login, logOut, register } from "./operations";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: {
      name: null,
      email: null,
    },
    token: null,
    isLoggedIn: false,
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
        // state.token = action.payload.token;
        console.log("Login is successful!");
      })
      .addCase(login.rejected, (state, action) => {
        console.error("Error:", action.payload);
      })
      .addCase(logOut.pending, () => {
        console.log("Logout is successful!");
      })
      .addCase(logOut.fulfilled, (state) => {
        state.isLoggedIn = false;
        state.user = {
          name: null,
          email: null,
        };
        state.token = null;
      })
      .addCase(logOut.rejected, (state, action) => {
        console.error("Error:", action.payload);
      });
  },
});

export const authReducer = authSlice.reducer;
