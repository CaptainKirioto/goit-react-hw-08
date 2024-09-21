import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://connections-api.goit.global";

const setAuthHeader = (token) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const register = createAsyncThunk(
  "auth/register",
  async (credentials, thunkAPI) => {
    try {
      const response = await axios.post("/users/signup", credentials);
      const { token, user } = response.data;

      if (!token || !user) {
        return thunkAPI.rejectWithValue("Missing token or user data");
      }

      setAuthHeader(token);

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message || "Registration failed");
    }
  }
);
