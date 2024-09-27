import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  number: "",
};

const slice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    changeNameFilter(state, action) {
      state.name = action.payload;
    },
    changeNumberFilter(state, action) {
      state.number = action.payload;
    },
  },
});

export const filterReducer = slice.reducer;

export const { changeNameFilter, changeNumberFilter } = slice.actions;
